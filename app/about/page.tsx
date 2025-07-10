import { metadata as pageMetadata } from './metadata';
import AboutPageClient from './about-client';

export const metadata = pageMetadata;

export default function AboutPage() {
  return <AboutPageClient />;
}