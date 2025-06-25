import React from "react";

const Login = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="animate-fade-in-up bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-2xl w-full max-w-md transition-all duration-700 ease-in-out">
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-800 dark:text-white animate-fade-in">
          Welcome Back 👋
        </h2>
        <form className="space-y-5">
          <div className="animate-slide-in">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Email Address
            </label>
            <input
              type="email"
              className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-300"
              placeholder="you@example.com"
            />
          </div>
          <div className="animate-slide-in delay-150">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Password
            </label>
            <input
              type="password"
              className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-300"
              placeholder="••••••••"
            />
          </div>
          <div className="flex justify-between items-center text-sm text-gray-600 dark:text-gray-400 animate-fade-in delay-300">
            <label className="flex items-center">
              <input type="checkbox" className="mr-2" />
              Remember me
            </label>
            <a href="#" className="text-indigo-600 dark:text-indigo-400 hover:underline">
              Forgot Password?
            </a>
          </div>
          <button
            type="submit"
            className="w-full py-2 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-lg transition duration-300 animate-pop-in"
          >
            Sign In
          </button>
        </form>
        <p className="mt-6 text-center text-sm text-gray-600 dark:text-gray-400 animate-fade-in delay-500">
          Don’t have an account?{" "}
          <a href="#" className="text-indigo-600 dark:text-indigo-400 hover:underline">
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
