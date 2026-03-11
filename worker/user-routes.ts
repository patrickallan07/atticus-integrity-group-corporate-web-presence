import { Hono } from "hono";
import type { Env } from './core-utils';
import { ContactInquiryEntity } from "./entities";
import { ok, bad } from './core-utils';
import type { ContactInquiry, ApiResponse } from "@shared/types";
export function userRoutes(app: Hono<{ Bindings: Env }>) {
  /**
   * Health Check / Metadata
   */
  app.get('/api/info', (c) => {
    return ok(c, {
      name: 'Atticus Integrity API',
      status: 'operational',
      environment: 'production',
      version: '1.0.1'
    });
  });
  /**
   * CONTACT INQUIRIES
   * Securely process and persist inquiries from the web presence.
   */
  app.post('/api/contact', async (c) => {
    try {
      const body = await c.req.json() as Partial<ContactInquiry>;
      // Mandatory field verification
      if (!body.name?.trim() || !body.email?.trim() || !body.message?.trim()) {
        console.warn('[CONTACT-API] Validation failed: Missing mandatory fields.');
        return bad(c, 'Required fields missing: name, email, and message are mandatory for professional review.');
      }
      // Payload sanitization and construction
      const inquiry: ContactInquiry = {
        id: crypto.randomUUID(),
        name: body.name.trim(),
        email: body.email.trim().toLowerCase(),
        phone: body.phone?.trim() ?? '',
        service: body.service ?? 'general',
        message: body.message.trim(),
        ts: Date.now()
      };
      // Persistent storage in Durable Object via IndexedEntity helper
      await ContactInquiryEntity.create(c.env, inquiry);
      console.log(`[CONTACT-API] Success: New inquiry from ${inquiry.name} (${inquiry.service})`);
      return ok(c, { 
        id: inquiry.id, 
        received: true, 
        timestamp: inquiry.ts 
      });
    } catch (error) {
      console.error('[CONTACT-API] Critical error:', error);
      return bad(c, 'The inquiry could not be securely processed at this time.');
    }
  });
  /**
   * INQUIRY RETRIEVAL (Internal/Admin)
   * Fetch paginated list of professional inquiries.
   * Note: In a dedicated admin environment, this route would be protected by JWT/Auth headers.
   */
  app.get('/api/contacts', async (c) => {
    try {
      const cursor = c.req.query('cursor') || null;
      const limitRaw = c.req.query('limit');
      const limit = limitRaw ? Math.min(100, Math.max(1, Number(limitRaw))) : 20;
      const page = await ContactInquiryEntity.list(
        c.env,
        cursor,
        limit
      );
      return ok(c, page);
    } catch (error) {
      console.error('[CONTACT-API] List retrieval error:', error);
      return bad(c, 'Inquiry records could not be retrieved.');
    }
  });
  /**
   * INQUIRY PURGE (Internal/Admin)
   */
  app.delete('/api/contacts/:id', async (c) => {
    try {
      const id = c.req.param('id');
      if (!id) return bad(c, 'Record ID required.');
      const deleted = await ContactInquiryEntity.delete(c.env, id);
      if (!deleted) {
        return c.json({ success: false, error: 'Record not found' } as ApiResponse, 404);
      }
      console.log(`[CONTACT-API] Record purged: ${id}`);
      return ok(c, { id, status: 'purged' });
    } catch (error) {
      console.error('[CONTACT-API] Delete error:', error);
      return bad(c, 'Record could not be removed.');
    }
  });
}