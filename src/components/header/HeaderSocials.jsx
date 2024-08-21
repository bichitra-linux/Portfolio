import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { BsYoutube } from "react-icons/bs";

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a target="_blank" href="https://www.youtube.com/@linepsofficial">
        <BsYoutube />
      </a>
      <a target="_blank" href="https://www.linkedin.com/in/bichitra-gautam/">
        <BsLinkedin />
      </a>
      <a target="_blank" href="https://github.com/bichitra-linux">
        <FaGithub />
      </a>
    </div>
  );
};

export default HeaderSocials;
