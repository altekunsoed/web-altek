import React from "react";

type CardProps = {
  title: string;
  description: string;
};

const Card: React.FC<CardProps> = ({ title, description }) => {
  return (
    <div className="border rounded-xl shadow-md p-6 bg-black hover:shadow-lg transition h-35">
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default Card;
