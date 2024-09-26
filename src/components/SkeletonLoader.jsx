// src/components/SkeletonLoader.jsx
import React from "react";

const SkeletonLoader = () => {
  return (
    <div className="animate-pulse">
      <div className="mb-4 h-8 bg-gray-200 rounded w-3/4"></div>
      <div className="mb-2 h-10 bg-gray-200 rounded w-full"></div>
      <div className="mb-2 h-10 bg-gray-200 rounded w-full"></div>
      <div className="mb-2 h-10 bg-gray-200 rounded w-full"></div>
      <div className="mb-2 h-10 bg-gray-200 rounded w-full"></div>
      <div className="h-10 bg-gray-200 rounded w-full"></div>
    </div>
  );
};

export default SkeletonLoader;
