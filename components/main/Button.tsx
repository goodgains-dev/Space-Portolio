import React from "react";

const Button = ({ className, href, onClick, px, white, children }) => {
  return (
    <a
      href={href}
      onClick={onClick}
      className={`py-2 px-4 border-2 rounded-lg text-center text-white bg-gradient-to-r from-orange-500 to-orange-500 hover:from-orange-400 hover:via-red-600 hover:to-orange-400 ${className}`}
      style={{ padding: `${px}px` }}
    >
      {children}
    </a>
  );
};

export default Button;
