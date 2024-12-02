// pages/index.js
import Head from 'next/head';
import Header from '@/components/layouts/header';
import Footer from '@/components/layouts/footer';
import Apropos from '@/components/sections/APropos';

export default function Home() {
  return (
    <>
      <Head>
        <title>Mon Portfolio</title>
        <meta name="description" content="Portfolio moderne et avancé" />
      </Head>

      <Header />

      <main className="bg-gray-900 text-white">
        {/* Accueil */}
        <section
          id="accueil"
          className="h-screen flex items-center justify-center bg-gradient-to-br from-indigo-800 via-purple-700 to-gray-900"
        >
          <div className="text-center animate-fade-in">
            <h1 className="text-5xl lg:text-7xl font-extrabold tracking-wide mb-4">
              Bienvenue sur <span className="text-cyan-400">MonPortfolio</span>
            </h1>
            <p className="text-xl lg:text-2xl text-gray-300 max-w-2xl mx-auto">
              Découvrez mes projets, compétences, et contactez-moi pour collaborer.
            </p>
          </div>
        </section>

        {/* À propos */}
        
        

        {/* Projets */}
        <section
          id="projets"
          className="py-20 bg-gradient-to-br from-gray-900 via-indigo-900 to-black"
        >
          <div className="container mx-auto text-center animate-fade-in-up">
            <h2 className="text-4xl font-bold text-cyan-400 mb-10">Mes Projets</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Exemple de projet */}
              <div className="bg-gray-800 p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
                <h3 className="text-2xl font-bold text-white">Projet 1</h3>
                <p className="text-gray-400 mt-2">Description brève du projet.</p>
              </div>
              <div className="bg-gray-800 p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
                <h3 className="text-2xl font-bold text-white">Projet 2</h3>
                <p className="text-gray-400 mt-2">Description brève du projet.</p>
              </div>
              <div className="bg-gray-800 p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
                <h3 className="text-2xl font-bold text-white">Projet 3</h3>
                <p className="text-gray-400 mt-2">Description brève du projet.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section
          id="contact"
          className="py-20 bg-gray-800"
        >
          <div className="container mx-auto text-center animate-fade-in-up">
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
