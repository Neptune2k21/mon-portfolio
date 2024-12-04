import React from 'react';
import { ProfileData } from '@/types/portfolio';
import ProfileSection from './Profilesection';

const Apropos: React.FC = () => {
  // Exemple de données de profil
  const profileData: ProfileData = {
    name: "Jean Dupont",
    country: "Nevers, France",
    title: "Développeur Web Full-Stack",
    about: "Passionné par le développement web et les nouvelles technologies, je combine créativité et expertise technique pour créer des solutions digitales innovantes. Mon objectif est de développer des applications web performantes et intuitives qui répondent aux besoins concrets des utilisateurs.",
    
    // Données des langues parlées
    languages: [
      { name: "Français", level: "Courant" },
      { name: "Anglais", level: "Intermédiaire" },
      { name: "Espagnol", level: "Débutant" }
    ],
    
    // Expériences professionnelles
    experiences: [
      {
        company: "TechInnovate Solutions",
        position: "Développeur Web Senior",
        period: "Janvier 2022 - Présent",
        description: "Développement d'applications web full-stack, architecture de solutions cloud, mise en place de microservices et optimisation des performances."
      },
      {
        company: "WebCréa Agency",
        position: "Développeur Front-end",
        period: "Juin 2019 - Décembre 2021",
        description: "Création d'interfaces utilisateur réactives, intégration de designs complexes, travail sur des projets variés pour différents clients."
      },
      {
        company: "StartUp Digital",
        position: "Développeur Junior",
        period: "Septembre 2017 - Mai 2019",
        description: "Première expérience professionnelle, apprentissage des meilleures pratiques de développement web, contribution à des projets innovants."
      }
    ],
    
    // Formations
    education: [
      {
        institution: "École Supérieure d'Informatique",
        degree: "Master en Développement Web",
        period: "2015 - 2017"
      },
      {
        institution: "Université de Technologie",
        degree: "Licence en Informatique",
        period: "2012 - 2015"
      },
      {
        institution: "Lycée Technique",
        degree: "Baccalauréat Scientifique",
        period: "2009 - 2012"
      }
    ]
  };

  return (
    <div className="bg-gray-50 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <ProfileSection 
        name={profileData.name}
        country={profileData.country}
        title={profileData.title}
        about={profileData.about}
        languages={profileData.languages}
        experiences={profileData.experiences}
        education={profileData.education}
      />
    </div>
  );
};

export default Apropos;
