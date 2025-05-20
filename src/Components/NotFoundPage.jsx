import React from "react";
import { useNavigate } from "react-router-dom";
import { FaHome } from "react-icons/fa";
// import "bootstrap/dist/css/bootstrap.min.css";
import "./NotFoundPage.css";

const NotFoundPage = () => {
  const navigate = useNavigate();

  const handleBackToHome = () => {
    navigate("/");
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light text-center not-found-container">
      <div>
        <h1 className="display-1 text-danger fw-bold">404</h1>
        <h2 className="fw-semibold">Oops! Page Not Found</h2>
        <p className="custom-404-text">
          It seems like you've wandered off the path. The page you're
          <br />
          <span className="indent-line">
            looking for doesn't exist or has been moved.
          </span>
        </p>
          <div className="flex items-center justify-center ">
        <button
          className=" btn btn-primary flex items-center justify-center  px-8 text-lg space-x-4"
          onClick={handleBackToHome}
        >
          <FaHome className="me-5 " />
          Back to Home
        </button>
      </div></div>
    </div>
  );
};

export default NotFoundPage;
