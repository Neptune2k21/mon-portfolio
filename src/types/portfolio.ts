// types/portfolio.ts
export interface Language {
    name: string;
    level: 'Débutant' | 'Intermédiaire' | 'Courant';
  }
  
  export interface Experience {
    company: string;
    position: string;
    period: string;
    description: string;
  }
  
  export interface Education {
    institution: string;
    degree: string;
    period: string;
  }
  
  export interface ProfileData {
    name: string;
    country: string;
    title: string;
    about: string;
    languages: Language[];
    experiences: Experience[];
    education: Education[];
  }