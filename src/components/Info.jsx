import React from "react";
import pana from "../assets/pana.png";
import { motion } from "framer-motion";
import { fadeUp } from "./Community";
const Info = () => {
  return (
    <>
      <section>
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
            <motion.div
              variants={fadeUp(0.5)}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="relative h-64 z-[-1] overflow-hidden rounded-lg sm:h-80 lg:order-first lg:h-full"
            >
              <img
                alt=""
                src={pana}
                className="absolute inset-0 h-full w-full object-cover"
              />
            </motion.div>

            <motion.div initial={{x:50,opacity:0}} whileInView={{x:0,opacity:1,when:'beforeChildren',transition:{duration:1.6,delay:1}}} className="lg:py-24">
              <motion.h2
                variants={fadeUp(0.5)}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                className="text-3xl font-bold sm:text-4xl text-secondary"
              >
                How to design your site footer like we did
              </motion.h2>

              <motion.p
                variants={fadeUp(0.7)}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                className="mt-4 text-gray-600"
              >
                Donec a eros justo. Fusce egestas tristique ultrices. Nam
                tempor, augue nec tincidunt molestie, massa nunc varius arcu, at
                scelerisque elit erat a magna. Donec quis erat at libero
                ultrices mollis. In hac habitasse platea dictumst. Vivamus
                vehicula leo dui, at porta nisi facilisis finibus. In euismod
                augue vitae nisi ultricies, non aliquet urna tincidunt. Integer
                in nisi eget nulla commodo faucibus efficitur quis massa.
                Praesent felis est, finibus et nisi ac, hendrerit venenatis
                libero. Donec consectetur faucibus ipsum id gravida.
              </motion.p>

              <motion.a
                variants={fadeUp(0.9)}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                href="#"
                className="mt-8 inline-block rounded bg-shade px-12 py-3 text-sm font-normal text-white transition hover:bg-green focus:outline-none focus:ring focus:ring-primary"
              >
                Learn More
              </motion.a>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Info;
