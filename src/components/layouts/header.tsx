// components/Header.tsx
import { useState } from 'react';
import Link from 'next/link';
import { FaHome, FaUser, FaProjectDiagram, FaEnvelope } from 'react-icons/fa';

export default function Header() {
  const [active, setActive] = useState('accueil');

  const menuItems = [
    { id: 'accueil', label: 'Accueil', icon: <FaHome />, href: '/' },
    { id: 'à propos', label: 'À propos', icon: <FaUser />, href: '/a-propos' },
    { id: 'projets', label: 'Projets', icon: <FaProjectDiagram />, href: '/projets' },
    { id: 'contact', label: 'Contact', icon: <FaEnvelope />, href: '/contact' },
  ];

  return (
    <header className="fixed w-full top-0 z-50 bg-gray-900 shadow-lg">
      <nav className="container mx-auto flex justify-center space-x-6 py-4">
        {menuItems.map((item) => (
          <Link key={item.id} href={item.href}>
            <button
              onClick={() => setActive(item.id)}
              className={`flex flex-col items-center px-4 py-2 text-white ${
                active === item.id
                  ? 'text-cyan-400 border-b-2 border-cyan-400'
                  : 'text-gray-400 hover:text-cyan-300'
              }`}
            >
              <span className="text-2xl mb-1">{item.icon}</span>
              <span className="text-sm">{item.label}</span>
            </button>
          </Link>
        ))}
      </nav>
    </header>
  );
}
