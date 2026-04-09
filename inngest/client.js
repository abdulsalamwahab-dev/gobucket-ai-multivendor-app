import { Inngest } from "inngest";

export const inngest = new Inngest({
  id: "goBucket-ecommerce",                 // REQUIRED
  apiKey: process.env.INNGEST_EVENT_KEY,   // Optional for server usage
});