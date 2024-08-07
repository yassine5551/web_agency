import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUsers } from "@fortawesome/free-solid-svg-icons";
import { faHandHoldingHand } from "@fortawesome/free-solid-svg-icons";
import { faCreditCard } from "@fortawesome/free-solid-svg-icons";
import { faHandPointUp } from "@fortawesome/free-solid-svg-icons";

const Stats = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row text-center md:text-start justify-around items-center w-full h-[50vh] bg-neutralSilver">
        <div className="  ">
          <h1 className="text-4xl font-medium text-secondary mb-2">
            Helping a local
          </h1>
          <span className="text-4xl font-medium text-shade ">
            business reinvent itself
          </span>
          <p className="mt-4">
            We reached here with our hard work and dedication
          </p>
        </div>
        <div className="grid grid-cols-2 gap-2 md:gap-4">
          <div className="relative  px-[16px] md:px-[32px] flex flex-col items-start justify-center">
            <FontAwesomeIcon
              icon={faUsers}
              className="text-shade  text-lg md:text-2xl absolute left-0"
            />
            <div className="ml-4">
              <p className="text-lg md:text-2xl font-semibold text-secondary ">
                2,245,341
              </p>
              <span>Members</span>
            </div>
          </div>
          <div className="ml-[50px] relative px-[16px] md:px-[32px] flex flex-col items-start justify-center">
            <FontAwesomeIcon
              icon={faHandHoldingHand}
              className="text-shade  text-lg md:text-2xl absolute left-0"
            />
            <div className="ml-4">
              <p className="text-lg md:text-2xl font-semibold text-secondary">46,365</p>

              <span>Clubs</span>
            </div>
          </div>
          <div className="relative px-[16px] md:px-[32px] flex flex-col items-start justify-center">
            <FontAwesomeIcon
              icon={faHandPointUp}
              className="text-shade  text-lg md:text-2xl absolute left-0"
            />
            <div className="ml-4">

            <p className="text-lg text-start md:text-2xl font-semibold text-secondary">828,867</p>
            <span>Event Bookings</span>
            </div>
          </div>
          <div className="ml-[50px] relative px-[16px] md:px-[32px] flex flex-col items-start justify-center">
            <FontAwesomeIcon
              icon={faCreditCard}
              className="text-shade  text-lg md:text-2xl absolute left-0"
            />
            <div className="ml-4">

            <p className="text-lg md:text-2xl font-semibold text-secondary">1,926,436</p>
            <span>Payments</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Stats;
