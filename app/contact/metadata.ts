import { Metadata } from 'next';
import { metadata as layoutMetadata } from "../layout";

export const metadata: Metadata = {
  ...layoutMetadata,
  title: "Contact - Cisse Mamadou",
  alternates: {
    canonical: "https://cisse-mamadou.me/contact",
  },
};