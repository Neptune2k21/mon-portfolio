// components/Footer.jsx
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-t from-gray-900 via-gray-800 to-gray-900 text-gray-300 p-8">
      {/* Texture ou animation */}
      <div className="absolute inset-0 bg-noise opacity-20"></div>

      <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center space-y-6 lg:space-y-0">
        <div>
          <h2 className="text-xl font-bold text-white tracking-wider">MonPortfolio</h2>
          <p className="text-sm mt-2">&copy; 2024 Tous droits réservés.</p>
        </div>
        <div className="flex space-x-8">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl hover:text-cyan-400 transition-transform transform hover:scale-110"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl hover:text-cyan-400 transition-transform transform hover:scale-110"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl hover:text-cyan-400 transition-transform transform hover:scale-110"
          >
            <FaTwitter />
          </a>
        </div>
      </div>
    </footer>
  );
}
