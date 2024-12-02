// components/Apropos.tsx
import { motion } from 'framer-motion';
import { FaReact, FaHtml5, FaCss3Alt, FaNodeJs } from 'react-icons/fa';

export default function Apropos() {
  return (
    <section id="à propos" className="py-20 bg-gray-800 text-white">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between gap-16 px-6">
        {/* Section image */}
        <motion.div
          className="lg:w-1/3 w-full rounded-full overflow-hidden"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
            <img
                src="/images/profile.jpg"
                alt="Photo de profil"
                className="w-full h-full object-cover"
            />
        </motion.div>

        {/* Section texte */}
        <motion.div
          className="lg:w-2/3 w-full text-center lg:text-left"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-extrabold text-cyan-400 mb-6">À propos de moi</h2>
          <p className="text-lg text-gray-300 mb-6">
            Développeur web passionné, créatif, et orienté résultats. J'aime créer des expériences utilisateurs
            modernes et performantes. Mon objectif est de construire des solutions innovantes qui allient technologie
            et design.
          </p>
          <p className="text-lg text-gray-300 mb-8">
            Mon expertise repose sur une connaissance approfondie des technologies front-end et back-end, combinée à
            une expérience pratique dans des projets complexes et divers.
          </p>

          {/* Section compétences */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-8">
            {/* Compétence React */}
            <motion.div
              className="flex flex-col items-center"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
            >
              <div className="text-4xl text-cyan-400 mb-3">
                <FaReact />
              </div>
              <h3 className="font-bold text-xl text-white">React</h3>
              <motion.div
                className="w-24 h-1 bg-cyan-400 mt-2"
                initial={{ width: 0 }}
                animate={{ width: '90%' }}
                transition={{ duration: 1.2 }}
              ></motion.div>
            </motion.div>

            {/* Compétence HTML */}
            <motion.div
              className="flex flex-col items-center"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
            >
              <div className="text-4xl text-orange-500 mb-3">
                <FaHtml5 />
              </div>
              <h3 className="font-bold text-xl text-white">HTML5</h3>
              <motion.div
                className="w-24 h-1 bg-orange-500 mt-2"
                initial={{ width: 0 }}
                animate={{ width: '100%' }}
                transition={{ duration: 1.2 }}
              ></motion.div>
            </motion.div>

            {/* Compétence CSS */}
            <motion.div
              className="flex flex-col items-center"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
            >
              <div className="text-4xl text-blue-500 mb-3">
                <FaCss3Alt />
              </div>
              <h3 className="font-bold text-xl text-white">CSS3</h3>
              <motion.div
                className="w-24 h-1 bg-blue-500 mt-2"
                initial={{ width: 0 }}
                animate={{ width: '85%' }}
                transition={{ duration: 1.2 }}
              ></motion.div>
            </motion.div>

            {/* Compétence Node.js */}
            <motion.div
              className="flex flex-col items-center"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
            >
              <div className="text-4xl text-green-500 mb-3">
                <FaNodeJs />
              </div>
              <h3 className="font-bold text-xl text-white">Node.js</h3>
              <motion.div
                className="w-24 h-1 bg-green-500 mt-2"
                initial={{ width: 0 }}
                animate={{ width: '80%' }}
                transition={{ duration: 1.2 }}
              ></motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
