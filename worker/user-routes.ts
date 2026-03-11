import { Hono } from "hono";
import type { Env } from './core-utils';
import { ContactInquiryEntity } from "./entities";
import { ok, bad } from './core-utils';
import type { ContactInquiry } from "@shared/types";
export function userRoutes(app: Hono<{ Bindings: Env }>) {
  /**
   * Health Check / Test Endpoint
   */
  app.get('/api/test', (c) => c.json({
    success: true,
    data: {
      name: 'Atticus Integrity API',
      status: 'operational',
      version: '1.0.0'
    }
  }));
  /**
   * CONTACT INQUIRIES
   * Handle form submissions from the Contact Page.
   */
  app.post('/api/contact', async (c) => {
    try {
      const body = await c.req.json() as Partial<ContactInquiry>;
      // Strict validation for mandatory fields
      if (!body.name?.trim() || !body.email?.trim() || !body.message?.trim()) {
        return bad(c, 'Required fields missing: name, email, and message are mandatory.');
      }
      // Construct a validated inquiry object
      const inquiry: ContactInquiry = {
        id: crypto.randomUUID(),
        name: body.name.trim(),
        email: body.email.trim(),
        phone: body.phone?.trim() ?? '',
        service: body.service ?? 'general',
        message: body.message.trim(),
        ts: Date.now()
      };
      // Persist via IndexedEntity wrapper
      const created = await ContactInquiryEntity.create(c.env, inquiry);
      console.log(`[CONTACT] New inquiry received from ${inquiry.name} (${inquiry.service})`);
      return ok(c, created);
    } catch (error) {
      console.error('API Contact Error:', error);
      return bad(c, 'The inquiry could not be processed at this time.');
    }
  });
  /**
   * ADMIN: LIST INQUIRIES
   * Retrieve submitted inquiries for professional review.
   * Note: In a production app, this would be protected by auth middleware.
   */
  app.get('/api/contacts', async (c) => {
    try {
      const cursor = c.req.query('cursor');
      const limitRaw = c.req.query('limit');
      const limit = limitRaw ? Math.min(100, Math.max(1, Number(limitRaw))) : 50;
      const page = await ContactInquiryEntity.list(
        c.env,
        cursor ?? null,
        limit
      );
      return ok(c, page);
    } catch (error) {
      console.error('API List Contacts Error:', error);
      return bad(c, 'Could not retrieve inquiries.');
    }
  });
  /**
   * ADMIN: DELETE INQUIRY
   */
  app.delete('/api/contacts/:id', async (c) => {
    try {
      const id = c.req.param('id');
      const deleted = await ContactInquiryEntity.delete(c.env, id);
      if (!deleted) return bad(c, 'Inquiry not found.');
      return ok(c, { id, status: 'deleted' });
    } catch (error) {
      console.error('API Delete Contact Error:', error);
      return bad(c, 'Could not delete inquiry.');
    }
  });
}