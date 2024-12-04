import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';

interface Experience {
  company: string;
  position: string;
  period: string;
  description: string;
}

interface ExperienceTimelineProps {
  experiences: Experience[];
}

const ExperienceTimeline: React.FC<ExperienceTimelineProps> = ({ experiences }) => {
  return (
    <div className="relative">
      {experiences.map((exp, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ 
            delay: index * 0.3,
            type: "spring",
            stiffness: 300
          }}
          className="mb-10 pl-12 relative"
        >
          {/* Point de chronologie */}
          <div className="absolute left-0 top-0 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center shadow-lg">
            <Briefcase className="text-white w-4 h-4" />
          </div>

          {/* Ligne de chronologie */}
          {index < experiences.length - 1 && (
            <div className="absolute left-4 top-8 bottom-0 w-0.5 bg-blue-300"></div>
          )}

          <motion.div
            className="bg-white rounded-lg shadow-lg hover:shadow-2xl transform transition duration-500 ease-in-out p-6 cursor-pointer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <h4 className="text-2xl font-semibold text-gray-800 mb-2">{exp.position}</h4>
            <h5 className="text-xl text-blue-700 mb-2">{exp.company}</h5>
            <p className="text-sm text-gray-500 mb-3">{exp.period}</p>
            <p className="text-gray-600">{exp.description}</p>
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
};

export default ExperienceTimeline;
