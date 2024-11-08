import React from "react";
import { heroDetails, userData } from "../../../data/data";
import "../../../styles/hero.css";

const Hero: React.FC = () => {
  return (
    <main className="overflow-hidden">
      <section id="home" className="py-8 flex justify-center">
        <div
          className="
            max-w-6xl mx-6 lg:mx-8 sm:mx-4
            grid lg:gap-16 md:gap-12 max-md:gap-10
            lg:pt-8 md:grid-cols-[1fr_2fr_1fr]
          "
        >
          {/* Hero Text and Image */}
          <div className="grid xl:gap-8 lg:gap-6 md:order-2 text-center">
            <h1 className="text-center lg:text-4xl xl:text-5xl text-3xl font-montserratBold font-bold tracking-wide mb-2">
              Hi, I’m Alice <br />
              UI/UX Interaction Developer <br />
              Based in England
            </h1>

            {/* Profile Image */}
            <div
              className="
                relative w-[250px] h-[350px] lg:w-[350px] lg:h-[500px]
                bg-gray-50 border-2 border-gray-300
                rounded-[10rem] grid place-items-center
                transition-colors duration-400 mx-auto
              "
            >
              <div
                className="
                  w-[220px] h-[300px] lg:w-[300px] lg:h-[450px]
                  bg-gradient-to-br from-gray-300 to-gray-400
                  rounded-[10rem] overflow-hidden flex justify-center items-end
                "
              >
                <img
                  src="/profile.png"
                  alt="profile"
                  className="lg:w-[230px] w-[170px]"
                />
              </div>

              <img
                src="/shape-waves.svg"
                alt="decorative waves"
                className="
                  absolute opacity-10
                  w-[70px] left-[-2rem] top-[5rem]
                  md:w-[100px]
                "
              />
              <img
                src="/shape-circle.svg"
                alt="decorative circle"
                className="
                  absolute opacity-10
                  w-[180px] md:w-[250px]
                  bottom-[-2rem] right-[-3rem]
                  rotate-[15deg] z-[-1]
                "
              />
            </div>
          </div>

          {/* Biography, Contact, and Services */}
          <div className="grid gap-8 md:order-1 md:mt-40 md:text-left xl:grid-rows-3 xl:gap-y-16 xl:mt-64">
            <div>
              <h3
                className="
                  text-sm font-normal text-gray-500
                  mb-4 font-montserrat
                "
              >
                BIOGRAPHY
              </h3>
              <p className="font-imfell text-lg text-gray-900">
                {heroDetails.bio}
              </p>
            </div>
            <div>
              <h3
                className="
                  text-sm font-normal text-gray-500
                  mb-4 font-montserrat
                "
              >
                CONTACT
              </h3>
              <p className="font-imfell text-lg text-gray-900">
                {heroDetails.location} <br />
                {userData.email} <br />
                {heroDetails.PNO}
              </p>
            </div>
            <div>
              <h3
                className="
                  text-sm font-normal text-gray-500
                  mb-4 font-montserrat
                "
              >
                SERVICES
              </h3>
              <p className="font-imfell text-lg text-gray-900">
                {heroDetails.services.map((service, index) => (
                  <span key={index}>
                    {service}
                    {index < heroDetails.services.length - 1 && <br />}
                  </span>
                ))}
              </p>
            </div>
          </div>

          {/* Experience, Projects, and Companies */}
          <div className="grid gap-8 md:order-3 md:mt-40 md:text-right xl:grid-rows-3 xl:gap-y-16 xl:mt-64">
            <div>
              <h3
                className="
                  text-sm font-normal text-gray-500
                  mb-4 font-montserrat
                "
              >
                YEARS OF EXPERIENCE
              </h3>
              <p className="text-4xl font-montserratBold font-semibold text-gray-900">
                {heroDetails.YOR}
              </p>
            </div>
            <div>
              <h3
                className="
                  text-sm font-normal text-gray-500
                  mb-4 font-montserrat
                "
              >
                SATISFACTION OF CLIENTS
              </h3>
              <p className="text-4xl font-montserratBold font-semibold text-gray-900">
                100%
              </p>
            </div>
            <div>
              <h3
                className="
                  text-sm font-normal text-gray-500
                  mb-4 font-montserrat
                "
              >
                CLIENTS ON WORLDWIDE
              </h3>
              <p className="text-4xl font-montserratBold font-semibold text-gray-900">
                {heroDetails.Clients}
              </p>
            </div>
            <div>
              <h3
                className="
                  text-sm font-normal text-gray-500
                  mb-4 font-montserrat
                "
              >
                PROJECTS DONE
              </h3>
              <p className="text-4xl font-montserratBold font-semibold text-gray-900">
                {heroDetails.Projects}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Company Logos Section */}
      <div className="py-8 flex justify-center">
        <div
          className="
            flex flex-wrap gap-8 md:gap-12
            justify-center max-w-[90%] md:max-w-none
          "
        >
          <img
            src="/adobe.svg"
            alt="Company 1"
            className="w-20 sm:w-28 md:w-31 grayscale hover:grayscale-0 transition-all duration-300"
          />
          <img
            src="/applitools.svg"
            alt="Company 2"
            className="w-20 sm:w-28 md:w-31 grayscale hover:grayscale-0 transition-all duration-300"
          />
          <img
            src="/daisyUI.svg"
            alt="Company 3"
            className="w-20 sm:w-28 md:w-31 grayscale hover:grayscale-0 transition-all duration-300"
          />
          <img
            src="/mockflow.svg"
            alt="Company 4"
            className="w-20 sm:w-28 md:w-31 grayscale hover:grayscale-0 transition-all duration-300"
          />
          <img
            src="/zeroheight.svg"
            alt="Company 5"
            className="w-20 sm:w-28 md:w-31 grayscale hover:grayscale-0 transition-all duration-300"
          />
        </div>
      </div>
    </main>
  );
};

export default Hero;
