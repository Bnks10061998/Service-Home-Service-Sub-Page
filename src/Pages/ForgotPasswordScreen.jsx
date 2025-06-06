import React, { useState } from "react";
import { FiChevronLeft } from "react-icons/fi";
import fypImg from "../assets/webp/fypImg.webp";
import { useFormik } from "formik";
import { forgot_password } from "../Pages/loginSchema/Schema";
import { toast } from 'react-toastify';
import { userServices } from "../Instance/userServices.js";
import { Link } from "react-router-dom";
import BackgroundDecor from "./BackgroundDecor.jsx";

const ForgotPasswordScreen = () => {
  const [showCodeField, setShowCodeField] = useState(false);
  const [loading, setLoading] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  const onSubmit = (values, actions) => {
    if (!showCodeField) {
      setLoading(true);
      userServices.forgot_password(values)
        .then((res) => {
          toast.success(res?.data?.message || "Email sent!");
          setShowCodeField(true);
        })
        .catch((err) => {
          toast.error(err?.response?.data?.message || "Something went wrong");
        })
        .finally(() => setLoading(false));
    } else {
      toast.success("Code verified successfully!");
    }
  };

  const {
    values,
    handleBlur,
    handleChange,
    touched,
    errors,
    handleSubmit,
  } = useFormik({
    initialValues: {
      email: "",
      code: "",
    },
    validationSchema: forgot_password,
    onSubmit,
  });

  const handleClick = async (e) => {
    e.preventDefault();
    if (isClicked) return;
    setIsClicked(true);
    setTimeout(() => {
      handleSubmit();
    }, 900);
  };

  return (
    <div className="flex flex-col md:flex-row px-6 md:px-0 items-center justify-center md:items-start md:justify-normal relative">
    <BackgroundDecor/>
      <div
        className={`w-full md:w-1/2 flex justify-center items-center  ${
          showCodeField ? 'md:mt-24 mt-[80px]' : 'md:mt-40 mt-[120px]' 
        } md:ml-20`}
      >
        <form className="w-full max-w-lg px-4 md:px-0" onSubmit={handleSubmit}>
        <Link
  to="/login"
  className="flex items-center gap-2 font-light text-sm mb-4"
>
  <FiChevronLeft className="text-lg" />
  Back to login
</Link>

          <h2 className="mb-1 text-[26px] md:text-[33px] font-semibold">
            Forgot your password?
          </h2>
          <p className="mb-8 text-xs md:text-base">
            Don’t worry, happens to all of us. Enter your email below to recover your password
          </p>

          <div className="relative mb-8">
            <label htmlFor="email" className="absolute -top-3 left-3 bg-white bg-opacity-30 px-1 text-sm md:text-base text-black">
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
              disabled={showCodeField}
            />
            {errors.email && touched.email && (
              <p className="text-red-500 text-sm">{errors.email}</p>
            )}
          </div>

          {showCodeField && (
            <>
              <div className="relative mb-6">
                <label htmlFor="code" className="absolute -top-3 left-3 bg-white bg-opacity-30 px-1 text-sm md:text-base text-black">
                  Enter Code
                </label>
                <input
                  id="code"
                  name="code"
                  type="text"
                  className="input-style"
                  value={values.code}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-12">
                <span>
                  Didn’t receive a code?{" "}
                  <span className="text-red-400 font-medium cursor-pointer">Resend</span>
                </span>
              </div>
            </>
          )}

          {showCodeField ? (
            <div className="vButton">
              <button
                type="button"
                onClick={handleClick}
                className={`myButton w-full h-10 rounded-full transition overflow-hidden relative ${
                  isClicked
                    ? "circle border-2 border-[#515def] bg-white text-[#515def]"
                    : "bg-[#515def] text-white hover:bg-[#013686]"
                }`}
              >
                <span className={isClicked ? "click" : ""}>Verify</span>
              </button>
            </div>
          ) : (
            <button
              type="submit"
              className="w-full py-2 bg-[#515def] text-white rounded-md hover:bg-[#013686] transition"
              disabled={loading}
            >
              {loading ? "Loading..." : "Submit"}
            </button>
          )}
        </form>
      </div>

      <div className="hidden md:flex w-1/2 items-center justify-center pr-28 mt-20">
        <img src={fypImg} alt="Illustration" className="object-contain" />
      </div>
    </div>
  );
};

export default ForgotPasswordScreen;
