'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

type NavigationProps = {
  className?: string;
  onClick?: () => void;
};

const Navigation = ({ className = '', onClick }: NavigationProps) => {
  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'Portfolio', href: '/portfolio' },
    { label: 'Leistungen', href: '/services' },
    { label: 'Über Uns', href: '/about' },
    { label: 'Kontakt', href: '/contact' },
  ];

  // Animation variants for staggered animations
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 5 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <motion.nav 
      className={className}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {navItems.map((item) => (
        <motion.div key={item.href} variants={itemVariants}>
          <Link
            href={item.href}
            className="px-4 py-2 text-light hover:text-primary transition-colors"
            onClick={onClick}
          >
            {item.label}
          </Link>
        </motion.div>
      ))}
      <motion.div variants={itemVariants}>
        <Link
          href="/contact"
          className="ml-4 px-6 py-2 bg-primary text-dark font-bold rounded-lg hover:bg-primary/90 transition-colors hover:glow"
          onClick={onClick}
        >
          Jetzt anfragen
        </Link>
      </motion.div>
    </motion.nav>
  );
};

export default Navigation;
