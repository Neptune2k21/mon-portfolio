import { metadata as layoutMetadata } from "../layout";
import { Metadata } from 'next';

export const metadata: Metadata = {
  ...layoutMetadata,
  title: "Competences - Cisse Mamadou",
  alternates: {
    canonical: "https://cisse-mamadou.me/competences",
  },
}