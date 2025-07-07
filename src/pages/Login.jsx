import React, { useState } from "react";
import { Link, useNavigate } from "react-router";
import { signInWithEmailAndPassword } from "firebase/auth";
import toast, { Toaster } from "react-hot-toast";
import { auth } from "../firebase.config";
const Login = () => {
  const [userInfo, setUserInfo] = useState({
    email: "",
    password: "",
  });


const navigate = useNavigate();



  const handlEmail = (e) => {
    setUserInfo((prev) => {
      return { ...prev, email: e.target.value };
    });
  };
  const handlrpassword = (e) => {
    setUserInfo((prev) => {
      return { ...prev, password: e.target.value };
    });
  };

  const handleLogin = (e) => {
    e.preventDefault();
   if (userInfo.email && userInfo.password){
    signInWithEmailAndPassword(auth, userInfo.email,userInfo .password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user)
    toast.success("Account login successfully!");
    navigate('/home')
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorCode)
    console.log(errorMessage)
    if (errorCode.includes("auth/invalid-credential")) {
      toast.error("invalid email or password");
      setUserInfo({
        email:"",
        password:"",

      })
    }
    console.log(errorCode)
  });

   }else {
 toast.error("email and password are required");
   }
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 font-poppins">
      <Toaster />
      <div className="animate-fade-in-up bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-2xl w-full max-w-md transition-all duration-700 ease-in-out">
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-800 dark:text-white animate-fade-in">
          Welcome Back 👋
        </h2>
        <form onSubmit={handleLogin} className="space-y-5">
          <div className="animate-slide-in">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Email Address
            </label>
            <input
              onChange={handlEmail}
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
              onChange={handlrpassword}
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
            <a
              href="#"
              className="text-indigo-600 dark:text-indigo-400 hover:underline"
            >
              Forgot Password?
            </a>
          </div>
          <button
            type="submit"
            className="w-full py-2 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-lg transition duration-300 animate-pop-in"
          >
            <h1>Login</h1>
          </button>
        </form>
        <p className="mt-6 text-center text-sm text-gray-600 dark:text-gray-400 animate-fade-in delay-500">
          Don’t have an account?{" "}
          <Link
            to={"/Signup"}
            className="text-indigo-600 dark:text-indigo-400 hover:underline"
          >
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
