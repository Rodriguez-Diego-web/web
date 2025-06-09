import React from 'react';
import Link from 'next/link';

type CardProps = {
  title: string;
  description?: string;
  imageSrc: string;
  href?: string;
  tags?: string[];
  className?: string;
};

const Card = ({
  title,
  description,
  imageSrc,
  href,
  tags = [],
  className = '',
}: CardProps) => {
  const card = (
    <div className={`glass-card bg-dark/50 overflow-hidden transition-all duration-300 hover:shadow-xl ${className} border border-gray-800 hover:border-primary/50`}>
      <div className="relative h-56 w-full overflow-hidden">
        {/* Reguläres img-Tag statt Next.js Image-Komponente */}
        <img
          src={imageSrc}
          alt={title}
          style={{
            position: 'absolute',
            height: '100%',
            width: '100%',
            objectFit: 'contain',
            top: 0,
            left: 0,
            transition: 'transform 500ms',
          }}
          className="hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark to-transparent opacity-60"></div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 text-gradient">{title}</h3>
        {description && (
          <p className="text-gray-300 mb-4">{description}</p>
        )}
        {tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-3">
            {tags.map((tag) => (
              <span
                key={tag}
                className="bg-primary/20 text-primary text-xs px-2 py-1 rounded-full border border-primary/30"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );

  if (href) {
    return <Link href={href} className="block h-full">{card}</Link>;
  }

  return card;
};

export default Card;
