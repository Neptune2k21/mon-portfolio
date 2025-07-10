import { metadata as pageMetadata } from './metadata';
import CompetencePageClient from './competences-client';

export const metadata = pageMetadata;

export default function CompetencesPage() {
  return <CompetencePageClient />;
}