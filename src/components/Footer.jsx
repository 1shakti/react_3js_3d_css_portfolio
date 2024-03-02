import React from "react";
import { githubsocial, gmail, linkedin } from "../assets";

const Footer = () => {
  return (
    <footer className="footer bg-primary py-10">
      <div className="container mx-auto flex justify-center">
        <a
          href="https://github.com/1shakti"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-gray-300 mx-2 transition duration-300"
        >
          <img src={githubsocial} alt="github" className="h-8 w-8" />
        </a>
        <a
          href="mailto:shakti26.sj@gmail.com"
          className="text-gray-400 hover:text-gray-300 mx-2 transition duration-300"
        >
          <img src={gmail} alt="gmail" className="h-8 w-8" />
        </a>
        <a
          href="https://www.linkedin.com/in/shakti-yadav-371303162"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-gray-300 mx-2 transition duration-300"
        >
          <img src={linkedin} alt="linkedin" className="h-8 w-8" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
