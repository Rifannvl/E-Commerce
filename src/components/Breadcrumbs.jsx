import React from "react";
import { Link } from "react-router-dom"; // Pastikan Anda menggunakan react-router-dom

const Breadcrumbs = ({ items }) => {
  if (!items || items.length === 0) {
    return null;
  }
  return (
    <div className="container">
      <nav aria-label="Breadcrumb" className=" pb-5 pt-28">
        <ol className="flex items-start space-x-2 w-full">
          {items.map((item, index) => (
            <li key={index} className="flex items-center">
              {index < items.length - 1 ? (
                <>
                  <Link
                    to={item.path}
                    className="text-yellow-400 hover:text-yellow-500"
                  >
                    {item.label}
                  </Link>
                  <span className="mx-2 text-gray-400"> &gt; </span>
                </>
              ) : (
                <span className="font-bold text-yellow-400">{item.label}</span>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </div>
  );
};

export default Breadcrumbs;
