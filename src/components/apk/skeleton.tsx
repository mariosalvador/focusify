import React from "react";

interface SkeletonProps {
  width?: string;
  height?: string;
  className?: string;
  rounded?: string; // Para controle de bordas arredondadas
}

export const Skeleton: React.FC<SkeletonProps> = ({
  width = "100%",
  height = "16px",
  className = "",
  rounded = "md", // Por padrão, arredondado médio
}) => {
  return (
    <div
      className={`bg-gray-300 animate-pulse ${className} rounded-${rounded}`}
      style={{ width, height }}
    ></div>
  );
};
