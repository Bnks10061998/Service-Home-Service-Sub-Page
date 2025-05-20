import React, { useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { FaFacebookF, FaGoogle, FaApple } from "react-icons/fa";
import { RiAppleLine } from "react-icons/ri";
import { FcGoogle } from "react-icons/fc";
import loginImg from "../assets/webp/loginImg.webp";
import { useFormik } from "formik";
import { loginSchema } from "../Pages/loginSchema/Schema";
import { userServices } from "../Instance/userServices.js";
import { toast } from "react-toastify";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { app } from "../Common/FireBase.js";
import { Link } from "react-router-dom";
import BackgroundDecor from "./BackgroundDecor.jsx";
import { useDispatch, useSelector } from "react-redux";
import {
  loginStart,
  loginSuccess,
  loginFailure,
  logout,
} from "../Redux/authReducer.js";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const dispatch = useDispatch();

  const onSubmit = (values, actions) => {
    dispatch(loginStart());

    userServices
      .signin(values)
      .then((res) => {
        const userData = res.data;

        dispatch(loginSuccess(userData)); // ✅ only dispatch serializable payload

        // Store only what's needed
        localStorage.setItem("user", JSON.stringify(userData)); // ✅ no headers or non-serializable data

        console.log(res);
        toast.success("Signin successfully");
        actions.resetForm();
        // navigate("/login");
      })
      .catch((err) => {
        dispatch(loginFailure(err.response?.data?.message || "Login failed")); // include fallback
        console.error(err);
        toast.error(err.response?.data?.message || "Login failed");
      });
  };

  const handleGoogle_signin = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const auth = getAuth(app);
      const result = await signInWithPopup(auth, provider);
      console.log(result);
    } catch (error) {
      console.log("could not sign in with google", error);
    }
  };

  const { values, handleBlur, handleChange, touched, errors, handleSubmit } =
    useFormik({
      initialValues: {
        email: "",
        password: "",
      },
      validationSchema: loginSchema,
      onSubmit,
    });

  return (
    <div className="flex flex-col md:flex-row px-6 md:px-0 items-center justify-center md:items-start md:justify-normal relative">
      <BackgroundDecor />
      {/* Left Image */}
      <div className="hidden md:flex w-full md:w-1/2 items-center justify-center md:ml-32 md:mt-28 ">
        <img src={loginImg} alt="Illustration" className="w-3/4 max-w-md" />
      </div>

      {/* Right Form */}
      <form
        className="md:w-1/2 w-full md:mr-52 px-6 md:px-12 mt-[60px] md:mt-28 md:pl-24"
        onSubmit={handleSubmit}
      >
        <h2 className="mb-1 text-2xl md:text-[33px] font-semibold">Login</h2>
        {/* <div>{user ? `Hello ${user.data.user.firstName}` : 'Please login'}</div> */}
        <p className="mb-6 text-xs md:text-lg">
          Login to access your travelwise account
        </p>
        {/* Email */}
        <div className="relative mb-6">
          <label
            htmlFor="email"
            className="absolute -top-3 left-3 bg-white px-1 text-sm md:text-base text-black"
          >
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="john.doe@gmail.com"
            className="input-style"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.email && touched.email && (
            <p className="text-red-500 text-sm">{errors.email}</p>
          )}
        </div>

        {/* Password */}
        <div className="relative mb-4">
          <label
            htmlFor="password"
            className="absolute -top-3 left-3 bg-white px-1 text-sm md:text-base text-black"
          >
            Password
          </label>
          <input
            type={showPassword ? "text" : "password"}
            id="password"
            name="password"
            className="input-style"
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <span
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-3.5 text-black cursor-pointer"
          >
            {showPassword ? <FiEye /> : <FiEyeOff />}
          </span>
          {errors.password && touched.password && (
            <p className="text-red-500 text-sm">{errors.password}</p>
          )}
        </div>

        {/* Remember me & Forgot Password */}
        <div className="flex justify-between items-center mb-8 text-sm">
          <label className="flex items-center">
            <input type="checkbox" className="mr-2" />
            Remember me
          </label>
          <Link to="/forgot-password" className="text-red-400 hover:underline">
            Forgot Password
          </Link>
        </div>

        {/* Login Button */}
        <button
          type="submit"
          className="w-full py-2 bg-[#515def] text-white rounded-md hover:bg-[#013686] transition"
        >
          Login
        </button>

        {/* Sign Up */}
        <p className="text-center text-sm mt-4">
          Don’t have an account?{" "}
          <Link to="/signup" className="text-red-400 hover:underline">
            Sign up
          </Link>
        </p>

        {/* Divider */}
        <div className="flex items-center my-5">
          <hr className="flex-grow border-gray-300" />
          <span className="mx-2 text-sm text-gray-500">Or login with</span>
          <hr className="flex-grow border-gray-300" />
        </div>

        {/* Social Login Buttons */}
        <div className="flex justify-between gap-2">
          <div className="relative group w-full border border-[#515def] rounded py-2 flex justify-center items-center overflow-hidden">
            <div className="absolute bottom-0 left-0 w-full transition-all duration-500 group-hover:h-full z-0 " />
            <FaFacebookF className="h-5 w-5 text-gray-800 fa-icon group-hover:text-blue-500 group-hover:rotate-y-360 transition-all duration-500 relative z-10" />
          </div>

          {/* <div className="relative group w-full border border-[#515def] rounded py-2 flex justify-center items-center overflow-hidden">
                            <div className="absolute bottom-0 left-0 w-full h-0 transition-all duration-500 group-hover:h-full z-0" onClick={handleGoogle_signin} />
                            <FcGoogle className="h-5 w-5 text-gray-800 fa-icon group-hover:text-white group-hover:rotate-y-360 transition-all duration-500 relative z-10" />
                          </div> */}

          <div
            className="relative group w-full border border-[#515def] rounded py-2 flex justify-center items-center overflow-hidden cursor-pointer"
            onClick={handleGoogle_signin}
          >
            <FaGoogle className="h-4 w-4 text-gray-800 transition-all duration-500 ease-in-out relative z-10 group-hover:opacity-0 group-hover:rotate-180" />

            {/* Colored icon: hidden by default, rotates in and becomes visible on hover */}
            <FcGoogle className="h-5 w-5 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 rotate-[-360deg] group-hover:opacity-100 group-hover:rotate-0 transition-all duration-500 ease-in-out z-10" />
          </div>

  <div
            className="relative group w-full border border-[#515def] rounded py-2 flex justify-center items-center overflow-hidden cursor-pointer"
            onClick={handleGoogle_signin}
          >
            <RiAppleLine className="h-5 w-5 text-gray-800 transition-all duration-500 ease-in-out relative z-10 group-hover:opacity-0 group-hover:rotate-180" />

            {/* Colored icon: hidden by default, rotates in and becomes visible on hover */}
            <FaApple className="h-5 w-5 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 rotate-[-360deg] group-hover:opacity-100 group-hover:rotate-0 transition-all duration-500 ease-in-out z-10" />
          </div>

          {/* <div className="relative group w-full border border-[#515def] rounded py-2 flex justify-center items-center overflow-hidden">
            <div className="absolute bottom-0 left-0 w-full h-0 transition-all duration-500 group-hover:h-full z-0" />
            <RiAppleLine  className="h-5 w-5 text-gray-800 fa-icon  group-hover:rotate-y-360 transition-all duration-500 relative z-10" />
          </div> */}

        </div>
      </form>
    </div>
  );
};

export default Login;
