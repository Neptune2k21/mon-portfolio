import React from 'react';
import { motion } from 'framer-motion';

interface Education {
  institution: string;
  degree: string;
  period: string;
}

interface EducationSectionProps {
  education: Education[];
}

const EducationSection: React.FC<EducationSectionProps> = ({ education }) => {
  if (!education || !Array.isArray(education)) {
    return <p className="text-gray-500">Aucune donnée déducation disponible.</p>;
  }

  return (
    <div className="grid md:grid-cols-2 gap-6">
      {education.map((edu, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: index * 0.3,
            type: "spring",
            stiffness: 300
          }}
          className="bg-white rounded-lg shadow-lg p-6 hover:shadow-2xl transform transition duration-500 ease-in-out cursor-pointer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <h4 className="text-2xl font-semibold text-gray-800 mb-2">{edu.degree}</h4>
          <h5 className="text-lg text-blue-600 mb-2">{edu.institution}</h5>
          <p className="text-gray-500">{edu.period}</p>
        </motion.div>
      ))}
    </div>
  );
};

export default EducationSection;
