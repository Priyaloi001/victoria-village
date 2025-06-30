import React from "react";
import clsx from "clsx";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: "primary" | "secondary";
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  variant = "primary",
  className = "",
}) => {
  const baseStyles =
    "font-cabrito text-base py-3 px-8 rounded-full transition-all duration-300";
  const variants = {
    primary:
      "bg-[#946847] text-white hover:bg-[#7a5138] hover:shadow-lg transform hover:-translate-y-1",
    secondary:
      "bg-transparent border border-[#946847] text-[#946847] hover:bg-[#f7e7cd]/60",
  };

  return (
    <button
      onClick={onClick}
      className={clsx(baseStyles, variants[variant], className)}
    >
      {children}
    </button>
  );
};

export default Button;
