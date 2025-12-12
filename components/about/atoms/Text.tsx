import React from "react";

interface HeadingProps {
  children: React.ReactNode;
  level?: 1 | 2 | 3;
  className?: string;
}

export const Heading: React.FC<HeadingProps> = ({ children, level = 1, className = "" }) => {
  const baseClass = "font-bold";
  const sizeClass = {
    1: "text-3xl md:text-4xl",
    2: "text-2xl md:text-3xl",
    3: "text-xl md:text-2xl",
  }[level];

  const tagName = `h${level}`;

  return React.createElement(
    tagName,
    { className: `${baseClass} ${sizeClass} ${className}` },
    children
  );
};

interface BodyProps {
  children: React.ReactNode;
  className?: string;
}

export const Body: React.FC<BodyProps> = ({ children, className = "" }) => {
  return <p className={`text-slate-300 ${className}`}>{children}</p>;
};

interface LabelProps {
  children: React.ReactNode;
  className?: string;
}

export const Label: React.FC<LabelProps> = ({ children, className = "" }) => {
  return <span className={`text-sm text-slate-400 ${className}`}>{children}</span>;
};
