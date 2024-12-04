import React from 'react';
import { motion } from 'framer-motion';

interface LanguageSkillsProps {
  languages: Array<{name: string; level: string}>;
}

const LanguageSkills: React.FC<LanguageSkillsProps> = ({ languages }) => {
  const getLevelColor = (level: string) => {
    switch(level.toLowerCase()) {
      case 'courant': return 'bg-green-500';
      case 'intermédiaire': return 'bg-blue-500';
      case 'débutant': return 'bg-yellow-500';
      default: return 'bg-gray-500';
    }
  };

  return (
    <div className="grid md:grid-cols-3 gap-6">
      {languages.map((lang, index) => (
        <motion.div
          key={lang.name}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            delay: index * 0.2,
            type: "spring",
            stiffness: 300
          }}
          className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center transition-transform transform hover:scale-105 cursor-pointer"
        >
          {/* Icône ou Nom de la langue */}
          <h4 className="text-xl font-semibold text-gray-800 mb-2">{lang.name}</h4>

          {/* Barre de niveau */}
          <div className="w-full bg-gray-200 rounded-full h-2.5 mb-2">
            <div 
              className={`h-2.5 rounded-full ${getLevelColor(lang.level)}`}
              style={{
                width: lang.level === 'Courant' ? '100%' : lang.level === 'Intermédiaire' ? '75%' : '50%'
              }}
            ></div>
          </div>

          {/* Niveau de la langue */}
          <span className="text-sm text-gray-600">{lang.level}</span>
        </motion.div>
      ))}
    </div>
  );
};

export default LanguageSkills;
