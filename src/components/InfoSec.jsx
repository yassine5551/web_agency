import React from "react";

import client1 from "../assets/client1.png";
import client2 from "../assets/client2.png";
import client3 from "../assets/client3.png";
import client4 from "../assets/client4.png";
import client5 from "../assets/client5.png";
import client6 from "../assets/client6.png";
import { motion } from "framer-motion";
import { fadeUp } from "./Community";
const InfoSec = () => {
  return (
    <>
      <section>
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16 bg-neutralSilver md:mb-0 mb-[250px]">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
            <motion.div initial={{x:-30,opacity:0}} whileInView={{x:0,opacity:1,transition:{duration:1.5,delay:1}}} className="relative h-64  overflow-hidden rounded-lg sm:h-80 lg:order-first lg:h-full">
              <img
                alt=""
                src="https://images.unsplash.com/photo-1674027326252-a09b3473e18f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHdlYnNpdGVzfGVufDB8fDB8fHww"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </motion.div>

            <motion.div
              variants={fadeUp(0.8)}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              <p className=" text-gray text-sm">
                Maecenas dignissim justo eget nulla rutrum molestie. Maecenas
                lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin
                eu enim metus. Vivamus sed libero ornare, tristique quam in,
                gravida enim. Nullam ut molestie arcu, at hendrerit elit. Morbi
                laoreet elit at ligula molestie, nec molestie mi blandit.
                Suspendisse cursus tellus sed augue ultrices, quis tristique
                nulla sodales. Suspendisse eget lorem eu turpis vestibulum
                pretium. Suspendisse potenti. Quisque malesuada enim sapien,
                vitae placerat ante feugiat eget. Quisque vulputate odio neque,
                eget efficitur libero condimentum id. Curabitur id nibh id sem
                dignissim finibus ac sit amet magna.
              </p>

              <span className="mt-3 inline-block text-sm font-medium md:text-2xl  text-shade">
                Tim Smith
              </span>
              <p className="text-sm text-gray">
                British Dragon Boat Racing Association
              </p>
              <div className="flex justify-between items-center mt-6 flex-wrap">
                <img
                  src={client1}
                  alt=""
                  className="w-[35px] h-[35px] object-contain"
                />
                <img
                  src={client2}
                  alt=""
                  className="w-[35px] h-[35px] object-contain"
                />
                <img
                  src={client3}
                  alt=""
                  className="w-[35px] h-[35px] object-contain"
                />
                <img
                  src={client4}
                  alt=""
                  className="w-[35px] h-[35px] object-contain"
                />
                <img
                  src={client5}
                  alt=""
                  className="w-[35px] h-[35px] object-contain"
                />
                <img
                  src={client6}
                  alt=""
                  className="w-[35px] h-[35px] object-contain"
                />
                <a href="" className="font-semibold text-sm text-shade  ">
                  Meet all customers ->
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default InfoSec;
