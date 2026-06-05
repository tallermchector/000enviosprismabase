'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

interface SocialLink {
  icon: string;
  href: string;
  label: string;
}

interface FooterSocialLinksProps {
  links: SocialLink[];
}

export const FooterSocialLinks = ({ links }: FooterSocialLinksProps) => {
  return (
    <div className="flex gap-5">
      {links.map((social, i) => (
        <motion.a
          key={i}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Visitar nuestro ${social.label}`}
          whileHover={{ y: -3, scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="w-12 h-12 rounded-md bg-white/10 border border-white/20 flex items-center justify-center hover:bg-white/20 hover:border-white/35 transition-all text-white group/social"
        >
          <div className="relative w-5 h-5 opacity-70 group-hover/social:opacity-100 transition-opacity">
            <Image src={social.icon} alt={social.label} fill className="object-contain" />
          </div>
        </motion.a>
      ))}
    </div>
  );
};
