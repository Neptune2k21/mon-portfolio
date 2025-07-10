import { metadata as pageMetadata } from './metadata';
import ContactPageClient from './contact-client';

export const metadata = pageMetadata;

export default function ContactPage() {
  return <ContactPageClient />;
}