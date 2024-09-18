// src/components/ProductSkeleton.js
import React from "react";

const ProductSkeleton = () => {
  return (
    <li className="bg-gray-800 rounded-lg shadow-lg overflow-hidden flex flex-col animate-pulse">
      <div className="bg-gray-700 h-48"></div>
      <div className="p-4 flex-grow">
        <div className="bg-gray-700 h-6 mb-2 rounded"></div>
        <div className="bg-gray-700 h-4 mb-2 rounded w-3/4"></div>
        <div className="bg-gray-700 h-6 mb-4 rounded w-1/2"></div>
      </div>
    </li>
  );
};

export default ProductSkeleton;
