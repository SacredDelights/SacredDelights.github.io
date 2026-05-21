import React from "react";

interface ButtonProps {
  children: string;
  onClick?: () => void;
  isActive: boolean;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ children, isActive, ...props }) => {
  return (
    <button
      className={`${isActive ? " border-primary text-primary" : ""} text-[20px] leading-[30px] px-8 py-3 border rounded my-4 hover:border-primary hover:text-primary transition-all min-w-[155px]`}
      {...props}
    >
      {children}
    </button>
  );
};
export default Button;
