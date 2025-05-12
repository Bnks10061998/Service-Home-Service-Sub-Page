// import React from "react";
// import Services from "./Pages/Services";
// import HeroSection from "./Pages/HeroSection";

// const App = () => {
//   return (
//     <div>

//       <HeroSection />
//       <Services />
//     </div>
//   );
// };

// export default App;

import React from "react";
import { Routes, Route,useLocation  } from "react-router-dom";
//import Services from "./Pages/Services"; // Import your Services component
//import ACRepair from "./Pages/ACRepari"; // Import other pages you're routing to
import Navbar from "./Components/Navbar";
import HeroSection from "./Pages/HeroSection"; // Import HeroSection component
import Footer from "./Components/Footer";
import ScrollToTopButton from "./Components/ScrollToTopButton";
// import ServiceCard from './Components/ServiceCard';
// import ValuesSection from "./Components/ValuesSection";
import ServicePage from "./Components/ServicePage";
import Login from "./Pages/Login";
import SignUpPage from "./Pages/SignUpPage";
import ForgotPasswordScreen from "./Pages/ForgotPasswordScreen";
import SetPasswordScreen from "./Pages/SetPasswordScreen";
import MyOrders from "./Pages/MyOrder/MyOrders";

const App = () => {

  const location = useLocation();

  // Define paths where footer should not appear
  const hideFooterPaths = ["/login", "/signup", "/forgot-password", "/reset-password"];
  const shouldHideFooter = hideFooterPaths.includes(location.pathname);


  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
     
      {/* <HeroSection /> */}
      {/* <ServiceCard />
      <ValuesSection /> */}
      <Routes>
        <Route path="/" element={<HeroSection />} />
        <Route path="/Service" element={<ServicePage />} />
        <Route path="/myorders" element={<MyOrders />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/forgot-password" element={<ForgotPasswordScreen />} />
        <Route path="/reset-password" element={<SetPasswordScreen />} />
      </Routes>
      <ScrollToTopButton />

      {!shouldHideFooter && <Footer />}
        {/* <Login/> */}
        {/* <MyOrders/> */}
    </div>
  );
};

export default App;
