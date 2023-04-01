import React from "react";
import { BsTwitter, BsInstagram } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";

const SocialMedias = () => {
  return (
    <div className="app__social">
      <a href="https://twitter.com/MdTanvi86495602" target="_blank">
        <div>
          <BsTwitter />
        </div>
      </a>
      <a href="">
        <div>
          <BsInstagram />
        </div>
      </a>
      <a href="https://www.facebook.com/tanvir32567" target="_blank">
        <div>
          <FaFacebookF />
        </div>
      </a>
    </div>
  );
};

export default SocialMedias;
