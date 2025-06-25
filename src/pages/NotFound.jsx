import React from "react";
import { Link } from "react-router";

const Not_found = () => {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 flex items-center justify-center text-center px-4 transition-all duration-500">
      <style>
        {`
          @keyframes float {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-15px); }
          }

          .float {
            animation: float 3s ease-in-out infinite;
          }

          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          .fade-in-up {
            animation: fadeInUp 1s ease-out forwards;
          }
        `}
      </style>

      <div className="max-w-md">
        <h1 className="text-8xl font-extrabold text-indigo-600 dark:text-indigo-400 float">404</h1>
        <p className="text-2xl font-semibold text-gray-800 dark:text-white mt-4 fade-in-up">
          Page Not Found
        </p>
        <p className="text-gray-600 dark:text-gray-300 mt-2 mb-6 fade-in-up">
          It seems you're lost in the void.
        </p>
        <Link
          to={"/"}
          className="inline-block px-6 py-3 bg-indigo-600 text-white rounded-lg text-lg font-medium hover:bg-indigo-700 dark:hover:bg-indigo-500 transition fade-in-up"
          style={{ animationDelay: "0.3s" }}
        >
          Go Back Home
        </Link>
      </div>
    </div>
  );
};

export default Not_found;
