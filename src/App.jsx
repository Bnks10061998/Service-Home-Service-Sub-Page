import { React, useState } from "react";
import { Routes, Route,useLocation  } from "react-router-dom";
import Navbar from "./Components/Navbar";
import HeroSection from "./Pages/HeroSection";
import Footer from "./Components/Footer";
import ScrollToTopButton from "./Components/ScrollToTopButton";
// import ServiceCard from './Components/ServiceCard';
// import ValuesSection from "./Components/ValuesSection";
import ServicePage from "./Components/Services/ServicePage";
import Login from "./Pages/Login";
import SignUpPage from "./Pages/SignUpPage";
import ForgotPasswordScreen from "./Pages/ForgotPasswordScreen";
import SetPasswordScreen from "./Pages/SetPasswordScreen";
import MyOrders from "./Components/MyOrder/MyOrders";
import FeedbackForm from "./Components/MyOrder/FeedbackModal";
import BookingConfirmation from "./Pages/BookingConfimation";

import ServiceList from "./Components/Services/ServiceList";
import LaundryServiceDetail from "./Components/Services/LaundryServiceDetail";
import Addcard from "./Components/Add card/Addcard"
import NotFoundPage from "./Components/NotFoundPage"

const App = () => {
  const [filters, setFilters] = useState({
    sortOrder: "",
    selectedCategory: "all",
    selectedRatings: [],
  });

  const handleFilterChange = (ratings, sortOrder, category) => {
    setFilters({ selectedRatings: ratings, sortOrder, selectedCategory: category });
  };

  const location = useLocation();

 
  const hideFooterPaths = ["/login", "/signup", "/forgot-password", "/reset-password"];
  const shouldHideFooter = hideFooterPaths.includes(location.pathname);


  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
     
  
      <Routes>
       <Route path="/" element={<HeroSection />} />
        <Route path="/Service" element={<ServicePage />} />
         <Route path="/myorders" element={<MyOrders />} />
         <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/forgot-password" element={<ForgotPasswordScreen />} />
        <Route path="/reset-password" element={<SetPasswordScreen />} />
        <Route path="/booking-confirmation" element={<BookingConfirmation />} />
        <Route path="/laundry-details/:id" element={<LaundryServiceDetail />} />
        <Route path="/cart" element={<Addcard />} />
        <Route path="/serviceList" element={<ServiceList/>} filters={filters} />
        <Route path="/feedback" element={<FeedbackForm />} />
        <Route path="*" element={<NotFoundPage />} />
        
      </Routes>
      <ScrollToTopButton />
      
      {!shouldHideFooter && <Footer />}
      
    </div>

 

     


  );
};

export default App;
