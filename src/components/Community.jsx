import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUsers } from "@fortawesome/free-solid-svg-icons";
import { faBuilding } from "@fortawesome/free-solid-svg-icons";
import { faHandHoldingHand } from "@fortawesome/free-solid-svg-icons";
const Community = () => {
  return (
    <>
      <div className="flex flex-col justify-center gap-9 items-center bg-white h-[100vh]">
        <div className="flex justify-center items-center flex-col">
          <h1 className="text-secondary text-3xl font-semibold">
            Manage your entire community
          </h1>
          <p className="text-secondary text-3xl font-semibold mb-[6px]">
            in a single system
          </p>
          <p className="text-secondary font-normal ">
            Who is Nextcent suitable for?
          </p>
        </div>

        <div className="flex justify-center items-center gap-[120px]">
          <div className="w-[250px] h-[250px]  flex justify-center items-center flex-col shadow-primary shadow-xl">
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
          </div>

          <div className="w-[250px] h-[250px]  flex justify-center items-center flex-col flex-wrap shadow-primary shadow-xl">
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
          </div>

          <div className="w-[250px] h-[250px]  flex justify-center items-center flex-col flex-wrap rounded-lg shadow-primary shadow-xl">
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
          </div>
        </div>
      </div>
    </>
  );
};

export default Community;
