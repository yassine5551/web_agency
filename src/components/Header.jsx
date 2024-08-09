import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faX } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import logo from "../assets/logo.png";
import { useState } from "react";
import { delay, easeIn, motion, stagger } from "framer-motion";
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleNav = () => {
    setIsOpen(!isOpen);
  };
  const variantNav = {
    hidden: {
      y: -100,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeInOut",
        staggerChildren: 0.4,
      },
    },
  };
  const variantChildren = {
    hidden: {
      opacity: 0,
      x: -50,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        when: "beforeChildren",
        delay: 0.8,
      },
    },
  };

  return (
    <>
      <motion.nav
        variants={variantNav}
        initial="hidden"
        animate="visible"
        className="z-[10000]  bg-neutralSilver flex justify-between items-center py-[2rem] px-[2.5rem] fixed top-0 w-full h-[32px]   "
      >
        <motion.div
          variants={variantChildren}
          initial="hidden"
          animate="visible"
        >
          <img src={logo} alt="" />
        </motion.div>

        <motion.ul
          variants={variantChildren}
          initial="hidden"
          animate="visible"
          className="md:flex gap-[2rem] hidden"
        >
          <li className="cursor-pointer hover:text-shade transition-all font-semibold">
            Home
          </li>
          <li className="cursor-pointer hover:text-shade transition-all">
            Service
          </li>
          <li className="cursor-pointer hover:text-shade transition-all">
            Feature
          </li>
          <li className="cursor-pointer hover:text-shade transition-all">
            Product
          </li>
          <li className="cursor-pointer hover:text-shade transition-all">
            Testimonial
          </li>
          <li className="cursor-pointer hover:text-shade transition-all">
            FAQ
          </li>
        </motion.ul>

        <motion.div
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{
            opacity: 1,
            scale: 1,
            transition: { duration: 2, delay: 1.2 },
          }}
          className="md:flex hidden"
        >
          <button className="bg-none border-none md:px-[20px] px-3 py-1 md:py-[10px] text-shade">
            Login
          </button>
          <button className="bg-shade md:px-[20px] px-3 py-1 md:py-[10px] rounded-md hover:bg-green transition-all text-white ">
            Sign up
          </button>
        </motion.div>
        <div onClick={toggleNav} className="md:hidden">
          {isOpen ? (
            <FontAwesomeIcon icon={faX} className="text-2xl text-shade" />
          ) : (
            <FontAwesomeIcon icon={faBars} className="text-2xl text-shade" />
          )}
        </div>
      </motion.nav>

      {isOpen && (
        <div className="w-full h-[100vh] flex justify-start  items-center pl-5 gap-[65px] bg-shade fixed z-50">
          <ul className=" text-3xl text-white flex flex-col gap-7 ">
            <li className="cursor-pointer hover:text-secondary transition-all ">
              Home
            </li>
            <li className="cursor-pointer hover:text-secondary transition-all">
              Service
            </li>
            <li className="cursor-pointer hover:text-secondary transition-all">
              Feature
            </li>
            <li className="cursor-pointer hover:text-secondary transition-all">
              Product
            </li>
            <li className="cursor-pointer hover:text-secondary transition-all">
              Testimonial
            </li>
            <li className="cursor-pointer hover:text-secondary transition-all">
              FAQ
            </li>
          </ul>
          <div className="flex flex-col gap-6 ">
            <button className="bg-neutralSilver hover:bg-info transition-all font-semibold hover:text-white rounded-md border-none md:px-[20px] px-6 py-3 md:py-[10px] text-secondary">
              Login
            </button>
            <button className="bg-info md:px-[20px] font-semibold hover:bg-neutralSilver h px-6 py-3 md:py-[10px] rounded-md hover:text-info transition-all text-white ">
              Sign up
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
