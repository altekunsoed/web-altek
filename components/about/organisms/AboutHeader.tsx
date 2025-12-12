import React from "react";
import { Heading, Body } from "../atoms/Text";

interface AboutHeaderProps {
  title: string;
  description: string;
}

export const AboutHeader: React.FC<AboutHeaderProps> = ({ title, description }) => {
  return (
    <section className="px-6 py-12 max-w-6xl mx-auto">
      <Heading level={1} className="mb-4 text-white">
        {title}
      </Heading>
      <Body className="text-base leading-relaxed">{description}</Body>
    </section>
  );
};
