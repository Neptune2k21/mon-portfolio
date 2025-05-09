import { metadata as layoutMetadata } from "../layout";
import { Metadata } from 'next';

export const metadata: Metadata = {
  ...layoutMetadata,
  title: "À propos - Cisse Mamadou",
  alternates: {
    canonical: "https://cisse-mamadou.me/about",
  },
}