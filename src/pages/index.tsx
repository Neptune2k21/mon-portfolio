import Head from 'next/head';
import Header from '@/components/layouts/header';
import Footer from '@/components/layouts/footer';

export default function Home() {
  return (
    <>
      <Head>
        <title>Mon Portfolio</title>
        <meta name="description" content="Portfolio moderne et avancé" />
      </Head>

      <Header />

      <main className="bg-noise text-white">
        {/* Accueil */}
        <section
          id="accueil"
          className="h-screen flex items-center justify-center bg-gradient-to-br from-indigo-800 via-purple-700 to-gray-900 animate-fade-in"
        >
          <div className="text-center">
            <h1 className="text-5xl lg:text-7xl font-extrabold tracking-wide mb-4">
              Bienvenue sur <span className="text-cyan-400">MonPortfolio</span>
            </h1>
            <p className="text-xl lg:text-2xl text-gray-300 max-w-2xl mx-auto">
              Découvrez mes projets, compétences, et contactez-moi pour collaborer.
            </p>
          </div>
        </section>

        {/* À propos */}
        <section
          id="a-propos"
          className="py-20 bg-gray-800 animate-fade-in-up"
        >
          <div className="container mx-auto text-center">
            <h2 className="text-4xl font-bold text-cyan-400 mb-6">À propos de moi</h2>
            <p className="text-lg text-gray-300 mb-8">
              Je suis développeur web passionné, spécialisé dans la création de sites web modernes et interactifs.
            </p>
          </div>
        </section>

        {/* Projets */}
        <section
          id="projets"
          className="py-20 bg-gray-900 animate-fade-in-up"
        >
          <div className="container mx-auto text-center">
            <h2 className="text-4xl font-bold text-cyan-400 mb-6">Mes Projets</h2>
            <p className="text-lg text-gray-300 mb-8">
              Découvrez mes réalisations les plus récentes.
            </p>
            {/* Exemple de projet */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="card hover:shadow-xl transition-all">
                <h3 className="text-xl font-semibold text-gray-200 mb-4">Projet 1</h3>
                <p className="text-gray-300">Description du projet ici.</p>
              </div>
              {/* Ajoute d'autres cartes de projets ici */}
            </div>
          </div>
        </section>

        {/* Contact */}
        <section
          id="contact"
          className="py-20 bg-gray-800 animate-fade-in-up"
        >
          <div className="container mx-auto text-center">
            <h2 className="text-4xl font-bold text-cyan-400 mb-6">Contactez-moi</h2>
            <p className="text-lg text-gray-300 mb-8">
              Vous souhaitez collaborer sur un projet ? Envoyez-moi un message.
            </p>
            <a
              href="mailto:example@portfolio.com"
              className="px-6 py-3 text-lg font-bold bg-cyan-400 text-gray-900 rounded-full hover:bg-cyan-500 transition-colors"
            >
              Envoyer un Email
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
