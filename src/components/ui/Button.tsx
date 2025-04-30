import React from 'react';
import Link from 'next/link';

type ButtonProps = {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
  fullWidth?: boolean;
  target?: string;
  rel?: string;
};

const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  href,
  type = 'button',
  className = '',
  onClick,
  disabled = false,
  fullWidth = false,
  target,
  rel,
}: ButtonProps) => {
  // Base styles
  const baseStyles = 'font-medium rounded-lg transition-all duration-300 inline-flex justify-center items-center';
  
  // Variant styles
  const variantStyles = {
    primary: 'bg-primary hover:bg-primary/90 text-dark font-bold',
    secondary: 'bg-secondary hover:bg-secondary/90 text-light',
    outline: 'bg-transparent border-2 border-primary text-primary hover:bg-primary/10',
  };
  
  // Size styles
  const sizeStyles = {
    sm: 'text-sm py-1.5 px-4',
    md: 'text-base py-2.5 px-6',
    lg: 'text-lg py-3 px-8',
  };
  
  // Width style
  const widthStyle = fullWidth ? 'w-full' : '';
  
  // Disabled style
  const disabledStyle = disabled ? 'opacity-60 cursor-not-allowed' : '';
  
  // Combine all styles
  const buttonStyles = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${widthStyle} ${disabledStyle} ${className}`;
  
  // Return link if href is provided, otherwise return button
  if (href) {
    return (
      <Link href={href} className={buttonStyles} onClick={onClick} target={target} rel={rel}>
        {children}
      </Link>
    );
  }
  
  return (
    <button
      type={type}
      className={buttonStyles}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
