// pages/[slug].tsx
import { useRouter } from 'next/router';
import Layout from "@/components/layouts/layout";
import Apropos from "@/components/sections/APropos";
import Projets from "@/components/sections/Projets"; // Assurez-vous que ce composant existe
import Contact from "@/components/sections/Contact"; // Assurez-vous que ce composant existe

const SlugPage = () => {
  const router = useRouter();
  const { slug } = router.query; // Récupère le "slug" de l'URL dynamique

  if (slug === 'a-propos') {
    return (
      <Layout>
        <Apropos />
      </Layout>
    );
  }

  if (slug === 'projets') {
    return (
      <Layout>
        <Projets />
      </Layout>
    );
  }

  if (slug === 'contact') {
    return (
      <Layout>
        <Contact />
      </Layout>
    );
  }

  // Si le slug ne correspond à aucun cas, afficher une page 404 personnalisée
  return (
    <Layout>
      <div className="text-center text-white">
        <h1 className="text-4xl">Page non trouvée</h1>
        <p>Le slug "{slug}" n'existe pas.</p>
      </div>
    </Layout>
  );
};

export default SlugPage;
