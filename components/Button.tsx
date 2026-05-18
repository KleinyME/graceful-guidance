import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  fullWidth?: boolean;
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  fullWidth = false,
  className = '',
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center px-8 py-3 rounded-full transition-all duration-300 font-medium text-lg focus:outline-none focus:ring-2 focus:ring-offset-2";
  
  const variants = {
    primary: "bg-angelic-gold text-white shadow-lg shadow-orange-100 hover:bg-[#C5A028] hover:shadow-xl hover:-translate-y-0.5 focus:ring-angelic-gold",
    secondary: "bg-angelic-taupe text-gray-800 shadow-md hover:bg-[#D9CEC5] hover:shadow-lg focus:ring-angelic-taupe",
    outline: "border-2 border-angelic-gold text-angelic-gold hover:bg-angelic-gold hover:text-white transition-colors"
  };

  const widthStyles = fullWidth ? "w-full" : "";

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${widthStyles} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;