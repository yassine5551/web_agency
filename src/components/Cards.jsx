import React from "react";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import { fadeUp } from "./Community";
const Cards = () => {
  return (
    <>
      <div className="flex flex-col justify-center gap-9 items-center bg-white h-[100vh] md:mb-0 mb-[300px]">
        <div className="flex justify-center items-center flex-col  text-center">
          <motion.h1
            variants={fadeUp(0.8)}
            initial="initial"
            whileInView="animate"
            className="text-secondary text-3xl font-semibold "
          >
            Caring is the new marketing
          </motion.h1>

          <motion.p
            variants={fadeUp(1)}
            initial="initial"
            whileInView="animate"
            className="text-gray text-sm font-normal text-center"
          >
            The Nexcent blog is the best place to read about the membership
            insights, trends and more. <br />
            See who s joining the community, read about how our community are
            increasing their membership income and lot s more.
          </motion.p>
        </div>

        <div className="flex flex-col md:flex-row justify-center items-center gap-[100px] md:gap-6  ">
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            whileInView={{
              x: 0,
              opacity: 1,

              transition: {
                duration: 0.3,
                delay: 0.6,
                type: "spring",
                stiffness: 100,
                ease: "easeInOut",
              },
            }}
            className="w-[350px] h-[250px] relative"
          >
            <img
              src="https://images.unsplash.com/photo-1640955014216-75201056c829?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGN8ZW58MHx8MHx8fDA%3D"
              alt=""
              className="w-full h-full object-cover rounded-lg"
            />
            <motion.div
              whileHover={{ translateY: 10, transition: { duration: 0.3 } }}
              className="flex justify-center p-0 gap-6 items-center flex-col text-center  bg-neutralSilver rounded-xl drop-shadow-xl shadow-gray  absolute top-[65%] left-0  right-0 m-auto w-[80%] h-[70%]"
            >
              <p className="text-lg font-semibold text-gray ">
                Creating Streamlined <br /> Safeguarding Processes with <br />{" "}
                OneRen
              </p>
              <a href="" className="font-semibold text-lg text-shade">
                Read More
                <FontAwesomeIcon icon={faArrowRight} className="ml-3" />
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            variants={fadeUp(0.8)}
            initial="initial"
            whileInView="animate"
            className="w-[350px] h-[250px] relative"
          >
            <img
              src="https://plus.unsplash.com/premium_photo-1681666713689-cd1416a652f8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHBjfGVufDB8fDB8fHww"
              alt=""
              className="w-full h-full object-cover rounded-lg"
            />
            <motion.div
              whileHover={{ translateY: 10, transition: { duration: 0.3 } }}
              className="flex justify-center p-0 gap-6 items-center flex-col text-center  bg-neutralSilver rounded-xl drop-shadow-xl shadow-gray  absolute top-[65%] left-0  right-0 m-auto w-[80%] h-[70%]"
            >
              <p className="text-lg font-semibold text-gray ">
                Creating Streamlined Safeguarding Processes with OneRen
              </p>
              <a href="" className="font-semibold text-lg text-shade">
                Read More{" "}
                <FontAwesomeIcon icon={faArrowRight} className="ml-3" />
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ x: 100, opacity: 0 }}
            whileInView={{
              x: 0,
              opacity: 1,

              transition: {
                duration: 0.3,
                delay: 0.6,
                type: "spring",
                stiffness: 100,
                ease: "easeInOut",
              },
            }}
            className="w-[350px] h-[250px] relative"
          >
            <img
              src="https://plus.unsplash.com/premium_photo-1683736986779-987763ccc545?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjF8fHBjfGVufDB8fDB8fHww"
              alt=""
              className="w-full h-full object-cover rounded-lg"
            />
            <motion.div
              whileHover={{ translateY: 10, transition: { duration: 0.3 } }}
              className="flex justify-center p-0 gap-6 items-center flex-col text-center  bg-neutralSilver rounded-xl drop-shadow-xl shadow-gray  absolute top-[65%] left-0  right-0 m-auto w-[80%] h-[70%]"
            >
              <p className="text-lg font-semibold text-gray ">
                Creating Streamlined Safeguarding Processes with OneRen
              </p>
              <a href="" className="font-semibold text-lg text-shade">
                Read More{" "}
                <FontAwesomeIcon icon={faArrowRight} className="ml-3" />
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Cards;
