import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaPhone } from "react-icons/fa";

const Footer = () => {
  const link1 = () => {
    const giUrl = `https://github.com/Tushardev0172`;
    window.location.href = giUrl;
  };
  const link2 = () => {
    const liUrl = `https://www.linkedin.com/in/tushar-ab660126a/`;
    window.location.href = liUrl;
  };
  return (
    <div className="w-full bg-primary">
      <div className="p-4 flex justify-center">
        <div className="w-[90%] flex md:flex-row md:gap-72 xs:flex-col xs:gap-20  xs:items-center md:items-start">
          <h1 className="font-title text-white text-[2.5rem] xs:text-center md:text-start">
            Tech Books
          </h1>
          <div className="text-white">
            <ul className="flex flex-col">
              <h5 className="font-bold text-[1.5rem] xs:text-center md:text-start">
                KEEP IN TOUCH
              </h5>
              <li className="text-lg py-2 xs:text-center md:text-start">
                Feel Free to contact us any time. <br /> We are available 24/7
              </li>
              <li>
                <i className="flex flex-row gap-2 items-center xs:justify-center md:justify-normal">
                  <FaPhone />
                  <p>+91 99XXXXXXX0</p>
                </i>
              </li>
              <li className="flex gap-4  pt-4 xs:justify-center md:justify-normal">
                <span>
                  <button onClick={() => link1()}>
                    <FaGithub className="text-4xl" />
                  </button>
                </span>
                <span>
                  <button onClick={() => link2()}>
                    <FaLinkedin className="text-4xl" />
                  </button>
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <hr className="w-[90%] mx-auto" />
      {/* bottom */}
      <div className="flex justify-center py-4">
        <p className="text-xl text-white">
          &copy; {new Date().getFullYear()} Tech Books. All rights reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
