import React from "react";
import logo from "./../assets/RK.png";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className=" mb-15 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <img className="mx-2 w-20" src={logo} alt="logo" />
      </div>
      <div className=" m-8 flex items-center justify-center gap-4 text-2xl">
        <Link to={"https://www.linkedin.com/in/rishi-venkata-kousik-01160a254"}>
          <FaLinkedinIn />
        </Link>
        <Link to={"https://github.com/Rishivenkatakousik"}>
          <FaGithub />
        </Link>
        <Link to={"https://www.instagram.com/rishi_koushik_23/"}>
          <FaInstagram />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
