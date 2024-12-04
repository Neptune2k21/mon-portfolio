import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

interface ProfileImageProps {
  imagePath?: string;
  alt?: string;
}

const ProfileImage: React.FC<ProfileImageProps> = ({ 
  imagePath = "/default-profile.jpg", 
  alt = "Photo de profil" 
}) => {
  return (
    <motion.div
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ 
        type: "spring", 
        stiffness: 260, 
        damping: 20 
      }}
      className="w-64 h-64 rounded-full overflow-hidden shadow-2xl border-4 border-blue-500 transition-transform duration-300 ease-in-out hover:scale-110 hover:shadow-2xl cursor-pointer"
    >
      <Image 
        src={imagePath} 
        alt={alt}
        layout="fill"
        objectFit="cover"
        quality={90}
        priority
      />
    </motion.div>
  );
};

export default ProfileImage;
