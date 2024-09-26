// src/components/.jsx
import React from "react";

const LoginSkeleton = () => {
  return (
    <div className="animate-pulse">
      <div className="h-8 bg-gray-200 rounded w-3/4 mb-4"></div>
      <div className="h-10 bg-gray-200 rounded w-full mb-4"></div>
      <div className="h-10 bg-gray-200 rounded w-full mb-6"></div>
      <div className="h-12 bg-indigo-600 rounded w-full"></div>
    </div>
  );
};

export default LoginSkeleton;
