import React from "react";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Cards = () => {
  return (
    <>
      <div className="flex flex-col justify-center gap-9 items-center bg-white h-[100vh]">
        <div className="flex justify-center items-center flex-col appear">
          <h1 className="text-secondary text-3xl font-semibold ">
            Caring is the new marketing
          </h1>

          <p className="text-gray text-sm font-normal text-center">
            The Nexcent blog is the best place to read about the membership
            insights, trends and more. <br />
            See who s joining the community, read about how our community are
            increasing their membership income and lot s more.
          </p>
        </div>

        <div className="flex justify-center items-center gap-6 cas">
          <div className="w-[350px] h-[250px] relative">
            <img
              src="https://images.unsplash.com/photo-1640955014216-75201056c829?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGN8ZW58MHx8MHx8fDA%3D"
              alt=""
              className="w-full h-full object-cover rounded-lg"
            />
            <div className="flex justify-center p-0 gap-6 items-center flex-col text-center  bg-neutralSilver rounded-xl drop-shadow-xl shadow-gray  absolute top-[65%] left-0  right-0 m-auto w-[80%] h-[70%]">
              <p className="text-lg font-semibold text-gray ">Creating Streamlined <br /> Safeguarding Processes with <br /> OneRen</p>
              <a href="" className="font-semibold text-lg text-shade">
                Read More
                <FontAwesomeIcon icon={faArrowRight} className="ml-3" />
              </a>
            </div>
          </div>

          <div className="w-[350px] h-[250px] relative">
            <img
              src="https://plus.unsplash.com/premium_photo-1681666713689-cd1416a652f8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHBjfGVufDB8fDB8fHww"
              alt=""
              className="w-full h-full object-cover rounded-lg"
            />
            <div className="flex justify-center p-0 gap-6 items-center flex-col text-center  bg-neutralSilver rounded-xl drop-shadow-xl shadow-gray  absolute top-[65%] left-0  right-0 m-auto w-[80%] h-[70%]">
              <p className="text-lg font-semibold text-gray ">Creating Streamlined Safeguarding Processes with OneRen</p>
              <a href="" className="font-semibold text-lg text-shade">
                Read More{" "}
                <FontAwesomeIcon icon={faArrowRight} className="ml-3" />
              </a>
            </div>
          </div>

          <div className="w-[350px] h-[250px] relative">
            <img
              src="https://plus.unsplash.com/premium_photo-1683736986779-987763ccc545?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjF8fHBjfGVufDB8fDB8fHww"
              alt=""
              className="w-full h-full object-cover rounded-lg"
            />
            <div className="flex justify-center p-0 gap-6 items-center flex-col text-center  bg-neutralSilver rounded-xl drop-shadow-xl shadow-gray  absolute top-[65%] left-0  right-0 m-auto w-[80%] h-[70%]">
              <p className="text-lg font-semibold text-gray ">Creating Streamlined Safeguarding Processes with OneRen</p>
              <a href="" className="font-semibold text-lg text-shade">
                Read More{" "}
                <FontAwesomeIcon icon={faArrowRight} className="ml-3" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cards;
