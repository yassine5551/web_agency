import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUsers } from "@fortawesome/free-solid-svg-icons";
import { faBuilding } from "@fortawesome/free-solid-svg-icons";
import { faHandHoldingHand } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";

export  const fadeUp = (delay) => {
  return {
    initial: {
      y: 50,
      opacity: 0,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        duration: 0.5,
        delay: delay,
      },
    },
  };
};
const Community = () => {
  return (
    <>
      <motion.div
        variants={fadeUp(0.8)}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="flex flex-col justify-center gap-9 items-center bg-white h-[100vh] mb-[250px] md:mb-0"
      >
        <div className="flex justify-center items-center flex-col ">
          <h1 className="text-secondary md:text-3xl text-4xl font-semibold text-center">
            Manage your entire community
          </h1>
          <p className="text-secondary md:text-3xl text-4xl font-semibold mb-[6px]">
            in a single system
          </p>
          <p className="text-secondary font-normal ">
            Who is Nextcent suitable for?
          </p>
        </div>

        <div className="flex justify-center items-center gap-[120px]  flex-col md:flex-row">
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
            whileHover={{scale:1.1,transition:{duration:0.3}}}
            className="w-[250px] h-[250px]  flex justify-center items-center flex-col shadow-primary shadow-xl rounded-xl"
          >
            <div className="bg-lightGreen w-[35px] h-[35px] rounded-br-2xl rounded-sm relative mb-[20px]">
              <FontAwesomeIcon
                icon={faUsers}
                className="text-shade absolute top-1 left-[-0.5rem] text-xl"
              />
            </div>
            <h2 className="text-secondary text-2xl font-semibold text-center mb-[12px] ">
              Membership Organisations
            </h2>
            <p className="text-center text-sm  text-secondary font-light">
              Our membership management software provides full automation of
              membership renewals and payments
            </p>
          </motion.div>

          <motion.div whileHover={{scale:1.1,transition:{duration:0.3}}} className="w-[250px] h-[250px]  flex justify-center items-center flex-col flex-wrap shadow-primary shadow-xl rounded-xl">
            <div className="bg-lightGreen  w-[35px] h-[35px] rounded-br-2xl rounded-sm relative mb-[20px]">
              <FontAwesomeIcon
                icon={faBuilding}
                className="text-shade absolute top-1 left-[-0.3rem] text-xl"
              />
            </div>
            <h2 className="text-secondary text-2xl font-semibold text-center mb-[12px]">
              National Associations
            </h2>
            <p className="text-center text-sm text-secondary font-light">
              Our membership management software provides full automation of
              membership renewals and payments
            </p>
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
            whileHover={{scale:1.1,transition:{duration:0.3}}}
            className="w-[250px] h-[250px]  flex justify-center items-center flex-col flex-wrap  shadow-primary shadow-xl rounded-xl"
          >
            <div className="bg-lightGreen w-[35px] h-[35px] rounded-br-2xl rounded-sm relative mb-[20px]">
              <FontAwesomeIcon
                icon={faHandHoldingHand}
                className="text-shade absolute top-1 left-[-0.3rem] text-xl"
              />
            </div>
            <h2 className="text-secondary text-2xl font-semibold text-center mb-[12px]">
              Clubs And Groups
            </h2>
            <p className="text-center text-sm text-secondary font-light">
              Our membership management software provides full automation of
              membership renewals and payments
            </p>
          </motion.div>
        </div>
      </motion.div>
    </>
  );
};

export default Community;
