import { metadata as pageMetadata } from './metadata';
import ExperiencesPageClient from './experiences-client';

export const metadata = pageMetadata;

export default function ExperiencesPage() {
  return <ExperiencesPageClient />;
}