import React from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'light' | 'dark' | 'color';
  showText?: boolean;
}

const Logo: React.FC<LogoProps> = ({ 
  className, 
  size = 'md', 
  variant = 'color',
  showText = true 
}) => {
  const sizeClasses = {
    sm: 'h-6 w-6',
    md: 'h-8 w-8', 
    lg: 'h-12 w-12'
  };

  const textSizeClasses = {
    sm: 'text-lg',
    md: 'text-2xl',
    lg: 'text-3xl'
  };

  const textColorClasses = {
    light: 'text-white',
    dark: 'text-foreground',
    color: 'bg-gradient-to-r from-agrinvest-green-600 to-agrinvest-blue-600 bg-clip-text text-transparent'
  };

  return (
    <div className={cn('flex items-center gap-3', className)}>
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-brand rounded-full opacity-10 group-hover:opacity-20 transition-opacity duration-300"></div>
        <Image 
          src="/agrinvest_favicon.png" 
          alt="Agrinvest Logo" 
          width={size === 'sm' ? 24 : size === 'md' ? 32 : 48}
          height={size === 'sm' ? 24 : size === 'md' ? 32 : 48}
          className={cn(
            sizeClasses[size], 
            'transition-transform group-hover:rotate-[-12deg] duration-300 ease-out relative z-10'
          )} 
        />
      </div>
      {showText && (
        <span className={cn(
          textSizeClasses[size],
          'font-bold font-heading transition-all duration-300',
          textColorClasses[variant]
        )}>
          Agrinvest
        </span>
      )}
    </div>
  );
};

export default Logo;