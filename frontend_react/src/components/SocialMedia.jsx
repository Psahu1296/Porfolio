import React from "react";
import { BsTwitter } from "react-icons/bs";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";

const SocialMedia = () => {
  return (
    <div className="app__social">
      <div >
        <a href="https://twitter.com/PSahu112" target="_blank" rel="noreferrer">
        <BsTwitter />
        </a>
      </div>
      <div>
        <a href="https://www.linkedin.com/in/pushpendra-sahu-389963140" target="_blank" rel="noreferrer">
        <FaLinkedinIn />
        </a>
      </div>
      <div>
        <a href="https://www.facebook.com/pushpendra.sahu.5648" target="_blank" rel="noreferrer">
        <FaFacebookF />
        </a>
      </div>
    </div>
  );
};

export default SocialMedia;
