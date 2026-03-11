import { Hono } from "hono";
import type { Env } from './core-utils';
import { ContactInquiryEntity } from "./entities";
import { ok, bad } from './core-utils';
import type { ContactInquiry } from "@shared/types";
export function userRoutes(app: Hono<{ Bindings: Env }>) {
  /**
   * Health Check / Test Endpoint
   */
  app.get('/api/test', (c) => c.json({ success: true, data: { name: 'Atticus Integrity API' }}));
  /**
   * CONTACT INQUIRIES
   * Handle form submissions from the Contact Page.
   */
  app.post('/api/contact', async (c) => {
    try {
      const body = await c.req.json() as Partial<ContactInquiry>;
      if (!body.name?.trim() || !body.email?.trim() || !body.message?.trim()) {
        return bad(c, 'Required fields missing: name, email, and message are mandatory.');
      }
      const inquiry: ContactInquiry = {
        id: crypto.randomUUID(),
        name: body.name.trim(),
        email: body.email.trim(),
        phone: body.phone?.trim() ?? '',
        service: body.service ?? 'general',
        message: body.message.trim(),
        ts: Date.now()
      };
      const created = await ContactInquiryEntity.create(c.env, inquiry);
      return ok(c, created);
    } catch (error) {
      console.error('API Contact Error:', error);
      return bad(c, 'The inquiry could not be processed at this time.');
    }
  });
  /**
   * ADMIN: LIST INQUIRIES
   * Retrieve submitted inquiries for professional review.
   */
  app.get('/api/contacts', async (c) => {
    try {
      const cursor = c.req.query('cursor');
      const limit = c.req.query('limit');
      const page = await ContactInquiryEntity.list(
        c.env,
        cursor ?? null,
        limit ? Math.max(1, Number(limit)) : 50
      );
      return ok(c, page);
    } catch (error) {
      console.error('API List Contacts Error:', error);
      return bad(c, 'Could not retrieve inquiries.');
    }
  });
}