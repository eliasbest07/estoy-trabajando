import React, { FC, ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  size?: 'sm' | 'md' | 'lg';
  variant?: 'primary' | 'secondary';
}

const Button: FC<ButtonProps> = ({ className = '', size = 'md', variant = 'primary', children, ...props }) => {
  let sizeClass = '';
  let variantClass = '';

  switch(size) {
    case 'lg':
      sizeClass = 'py-2 px-4 text-lg';
      break;
    case 'sm':
      sizeClass = 'py-1 px-2 text-sm';
      break;
    default:
      sizeClass = 'py-1 px-3 text-md';
  }

  switch(variant) {
    case 'primary':
      variantClass = 'bg-blue-500 text-white';
      break;
    case 'secondary':
      variantClass = 'bg-gray-200 text-black';
      break;
    default:
      variantClass = 'bg-gray-200 text-black';
  }

  return (
    <button className={`${className} ${sizeClass} ${variantClass}`} {...props}>
      {children}
    </button>
  );
};

export default Button;