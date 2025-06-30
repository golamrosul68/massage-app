import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router";
import toast, { Toaster } from "react-hot-toast";
import { createUserWithEmailAndPassword } from "firebase/auth";

const Signup = () => {
  const [userInfo, setUserInfo] = useState({
    name: "",
    email: "",
    password: "",
  });
  let handleEmail = (e) => {
    setUserInfo((prev) => {
      return { ...prev, email: e.target.value };
    });
  };

  const handleName = (e) => {
    setUserInfo((prev) => {
      return { ...prev, name: e.target.value };
    });
  };
  const handlePassword = (e) => {
    setUserInfo((prev) => {
      return { ...prev, password: e.target.value };
    });
  };

  const handleSignup = (e) => {
    e.preventDefault();
    if (!userInfo.name || !userInfo.email || !userInfo.password) {
      toast.error("all fileds are required");
    }
  };

  return (
    <div className=" font-poppins min-h-screen flex items-center justify-center bg-[url('https://source.unsplash.com/featured/?technology,abstract')] bg-cover bg-center dark:bg-gray-900">
      <div className="backdrop-blur-md bg-white/20 dark:bg-gray-900/30 p-8 rounded-2xl shadow-2xl w-full max-w-md animate-fade-in-up">
        <Toaster />
        {/* Logo */}
        <div className="flex justify-center mb-6">
          <img
            src="https://cdn-icons-png.flaticon.com/512/1077/1077114.png"
            alt="Signup"
            className="w-16 h-16 animate-pop-in"
          />
        </div>

        {/* Title */}
        <button
          type="submit"
          className="text-3xl font-bold mb-4 text-center text-white dark:text-white animate-fade-in"
        >
          Create Account ✨
        </button>

        {/* Google Sign Up */}
        <button className="w-full mb-4 flex items-center justify-center py-2 bg-white hover:bg-gray-200 text-gray-700 rounded-lg shadow transition duration-300 animate-slide-in">
          <FcGoogle className="text-xl mr-2" />
          Sign up with Google
        </button>

        <div className="text-white text-sm text-center mb-4">
          or sign up with email
        </div>

        {/* Form */}
        <form onSubmit={handleSignup} className="space-y-6">
          <div className="animate-slide-in">
            <input
              onChange={handleName}
              type="text"
              placeholder="Full Name"
              className="w-full px-4 py-2 rounded-lg border border-white/30 bg-white/20 text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-pink-500"
            />
          </div>
          <div className="animate-slide-in delay-100">
            <input
              onChange={handleEmail}
              type="email"
              placeholder="Email Address"
              className="w-full px-4 py-2 rounded-lg border border-white/30 bg-white/20 text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-pink-500"
            />
          </div>
          <div className="animate-slide-in delay-200">
            <input
              onChange={handlePassword}
              type="password"
              placeholder="Password"
              className="w-full px-4 py-2 rounded-lg border border-white/30 bg-white/20 text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-pink-500"
            />
          </div>

          <button
            type="submit"
            className="w-full py-2 bg-pink-600 hover:bg-pink-700 text-white font-semibold rounded-lg transition duration-300 animate-pop-in"
          >
            Create Account
          </button>
        </form>

        {/* Footer */}
        <p className="mt-4 text-sm text-white text-center animate-fade-in delay-300">
          Already have an account?{" "}
          <Link
            to={"/Login"}
            className="text-yellow-300 underline hover:text-black"
          >
            log in
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
