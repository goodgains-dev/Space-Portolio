"use client";

import React from "react";
import PropTypes from "prop-types";

/**
 * @typedef {Object} ButtonProps
 * @property {string} [className]
 * @property {string} [href]
 * @property {function} [onClick]
 * @property {number} [px]
 * @property {boolean} [white]
 * @property {React.ReactNode} [children]
 */

/**
 * @param {ButtonProps} props
 */
const Button = ({ className = '', href = '', onClick = () => {}, px = 16, white = false, children }: { className?: string, href?: string, onClick?: () => void, px?: number, white?: boolean, children: React.ReactNode }) => {
  return (
    <a
      href={href}
      onClick={onClick}
      className={`py-2 px-4 border-2 rounded-lg text-center text-white bg-gradient-to-r from-orange-500 to-orange-500 hover:from-orange-400 hover:via-red-600 hover:to-orange-400 ${className}`}
      style={{ paddingLeft: `${px}px`, paddingRight: `${px}px` }}
    >
      {children}
    </a>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  href: PropTypes.string,
  onClick: PropTypes.func,
  px: PropTypes.number,
  white: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

export default Button;
