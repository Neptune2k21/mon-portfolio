import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Globe, Briefcase, GraduationCap, Languages } from 'lucide-react';
import ProfileImage from '../ui/Profile';
import LanguageSkills from '../ui/Langues';
import ExperienceTimeline from '../ui/Experience';
import EducationSection from '../ui/Formation';

interface ProfileProps {
  name: string;
  country: string;
  title: string;
  about: string;
  languages: Array<{ name: string; level: string }>;
  experiences: Array<{
    company: string;
    position: string;
    period: string;
    description: string;
  }>;
  education: Array<{
    institution: string;
    degree: string;
    period: string;
  }>;
}

const ProfileSection: React.FC<ProfileProps> = ({
  name,
  country,
  title,
  about,
  languages,
  experiences,
  education
}) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 py-12 px-4 sm:px-6 lg:px-8">
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-6xl mx-auto bg-white shadow-xl rounded-2xl overflow-hidden"
      >
        {/* Section Profil Principal */}
        <div className="grid md:grid-cols-3 gap-8 p-8">
          {/* Photo de Profil */}
          <div className="md:col-span-1 flex justify-center items-center">
            <ProfileImage />
          </div>

          {/* Informations Personnelles */}
          <div className="md:col-span-2 space-y-4">
            <motion.h1 
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-4xl font-bold text-gray-800 mb-4"
            >
              {name}
            </motion.h1>
            <motion.h2
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-2xl text-blue-600 mb-4"
            >
              {title}
            </motion.h2>

            <div className="space-y-3">
              <motion.div 
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="flex items-center"
              >
                <MapPin className="mr-2 text-blue-500" />
                <span>{country}</span>
              </motion.div>

              <motion.p
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="text-gray-600"
              >
                {about}
              </motion.p>
            </div>
          </div>
        </div>

        {/* Section Compétences Linguistiques */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="bg-gray-50 p-8"
        >
          <div className="flex items-center mb-6">
            <Languages className="mr-2 text-blue-500" />
            <h3 className="text-2xl font-semibold text-gray-800">Compétences Linguistiques</h3>
          </div>
          <LanguageSkills languages={languages} />
        </motion.div>

        {/* Section Expériences */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="p-8"
        >
          <div className="flex items-center mb-6">
            <Briefcase className="mr-2 text-blue-500" />
            <h3 className="text-2xl font-semibold text-gray-800">Expériences Professionnelles</h3>
          </div>
          <ExperienceTimeline experiences={experiences} />
        </motion.div>

        {/* Section Études */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="bg-gray-50 p-8"
        >
          <div className="flex items-center mb-6">
            <GraduationCap className="mr-2 text-blue-500" />
            <h3 className="text-2xl font-semibold text-gray-800">Formation</h3>
          </div>
          <EducationSection education={education} />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ProfileSection;
