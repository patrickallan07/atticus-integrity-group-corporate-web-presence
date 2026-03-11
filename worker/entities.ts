import { IndexedEntity } from "./core-utils";
import type { ContactInquiry } from "@shared/types";
/**
 * CONTACT INQUIRY ENTITY
 * Stores inquiries submitted via the contact form in the Global Durable Object.
 */
export class ContactInquiryEntity extends IndexedEntity<ContactInquiry> {
  static readonly entityName = "contact";
  static readonly indexName = "contacts";
  static readonly initialState: ContactInquiry = {
    id: "",
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
    ts: 0
  };
}