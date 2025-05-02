import React from "react";
import { MdChevronRight  } from "react-icons/md";
import { motion } from "framer-motion";
import logo1 from "../assets/Service/E-Seva1.png";
import logo2 from "../assets/Service/LaundryRound1.png";
import logo5 from "../assets/Service/HomeRepair4.jpg";
import logo7 from "../assets/Service/MedicalRound1.jpg";
import logo3 from "../assets/Service/Food2.jpg";
import logo9 from "../assets/Service/EventRound1.jpg";
import logo4 from "../assets/Service/RentalRound1.png";
import logo6 from "../assets/Service/WasteManagementRound.jpg";
import logo8 from "../assets/Service/PersonalCareRound.jpg";
import "./styles.css"; 


const services = [
  {
    icon: logo2,
    title: "Laundry Services",
    desc: "Fresh, crisp, and professionally cleaned clothes delivered to your doorstep.",
    link: "/laundry",
    bg: "from-indigo-100 via-blue-100 to-indigo-200",
    iconWidth: "96px",
    iconHeight: "96px",
  },
  {
    icon: logo1,
    title: "E-Seva Services",
    desc: "A one-stop platform for bill payments, e-Government services, and digital assistance.",
    link: "/eseva",
    bg: "from-indigo-100 via-blue-100 to-indigo-200",
    iconWidth: "104px",
    iconHeight: "104px",
  },
  {
    icon: logo5,
    title: "Home Repair Services",
    desc: "Fast, reliable help for plumbing, electrical, and home needs.",
    link: "/home-repair",
    bg: "from-indigo-100 via-blue-100 to-indigo-200",
    iconWidth: "55px",
    iconHeight: "55px",
  },
  {
    icon: logo3,
    title: "Food Services",
    desc: "Tasty, clean, and on-time meals—your daily dining solution.",
    link: "/food-services",
    bg: "from-indigo-100 via-blue-100 to-indigo-200",
    iconWidth: "58px",
    iconHeight: "58px",
  },
  {
    icon: logo4,
    title: "Rental Services",
    desc: "Discover comfortable and affordable rental homes tailored to your lifestyle.",
    link: "/rental-services",
    bg: "from-indigo-100 via-blue-100 to-indigo-200",
    iconWidth: "114px",
    iconHeight: "114px",
  },
  {
    icon: logo9,
    title: "Event Management Services",
    desc: "From setup to catering, we plan and manage events of all sizes seamlessly.",
    link: "/event-management",
    bg: "from-indigo-100 via-blue-100 to-indigo-200",
    iconWidth: "65px",
    iconHeight: "65px",
  },
  {
    icon: logo8,
    title: "Personal Care Services",
    desc: "Personalized grooming and wellness care—right at your home.",
    link: "/personal-care",
    bg: "from-indigo-100 via-blue-100 to-indigo-200",
    iconWidth: "56px",
    iconHeight: "56px",
  },
  {
    icon: logo6,
    title: "Waste Management Services",
    desc: "Driving a cleaner future with smart recycling and waste disposal.",
    link: "/waste-management",
    bg: "from-indigo-100 via-blue-100 to-indigo-200",
    iconWidth: "100px",
    iconHeight: "100px",
  },
  {
    icon: logo7,
    title: "Medical Services",
    desc: "Home healthcare, checkups, and emergency support to keep you safe and healthy.",
    link: "/medical-services",
    bg: "from-indigo-100 via-blue-100 to-indigo-200",
    iconWidth: "65px",
    iconHeight: "65px",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      type: "spring",
      stiffness: 50,
    },
  }),
};

const ServiceCard = () => {
  const handleBookNow = (link) => {
    window.location.href = link;
  };

  return (
    <div className="min-h-screen py-10 px-24 text-center bg-white-700">

      {/* <h2 className="text-[35px] underline mb-20 ">Our Services</h2> */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-0 gap-y-14">
        <div className="p-4 flex grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-96 gap-y-14 justify-center ml-[31rem]">
        {services.map((service, index) => (
          <div key={index} className="relative w-fit mx-auto">
            <motion.div
              className={`bg-gradient-to-br ${service.bg} rounded-2xl p-3 shadow-lg w-[320px] min-h-[280px] flex flex-col justify-between pb-12 clip-bottom-right-eye`}
          

              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)",
                transition: { type: "spring", stiffness: 300, damping: 20 },
              }}
            >
              <div>
                <div className="w-20 h-20 rounded-full bg-white shadow flex items-center justify-center mb-2 mx-auto">
                  <img
                    src={service.icon}
                    alt={service.title}
                    style={{
                      width: service.iconWidth || "32px",
                      height: service.iconHeight || "32px",
                    }}
                    className="object-contain"
                  />
                </div>

                <h3 className="text-[#013686] text-xl font-semibold mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-700 text-lg pl-3 pr-3">{service.desc}</p>
              </div>
            </motion.div>
            <motion.button
                onClick={() => handleBookNow(service.link)}
                className="group absolute bottom-[-4px] right-[-4px] w-12 h-12 rounded-full border-4 border-blue-500 flex items-center justify-center bg-white text-[#013686] shadow-xl transition-all duration-100 ease-in-out hover:bg-gradient-to-r hover:from-blue-400 hover:via-indigo-400 hover:to-blue-400 hover:text-white z-10"
                whileHover={{ scale: 1.0, rotate: 15 }}
                transition={{ type: "spring", stiffness: 300, damping: 15 }}
              >
                <MdChevronRight className="text-3xl" />
              </motion.button> 
          </div>
        ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
