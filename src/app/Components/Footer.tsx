"use client";
import Link from "next/link";
import React from "react";
import { SiGithub, SiLinkedin, SiInstagram, SiTwitter, SiAcademia } from "react-icons/si";

function Footer() {
  const thanks =
    "Thank you, for reaching us Please check out my Social handles";
  return (
    <>
      <div className="flex flex-col items-center text-center w-full h-[200px] bg-gray-50 text-black">
        {thanks}

        <div className="flex flex-row px-3 py-5 flex-wrap">
          <div className="m-3">
            <Link
              target="blank"
              href={"https://github.com/abhishekDev047"}
              className=" text-xl md:text-5xl hover:text-blue-600 hover:bg-black "
            >
              
              <SiGithub />
            </Link>
          </div>
          <div className="m-3">
            <Link
              target='blank' href={'https://www.linkedin.com/in/abhishek-kumar-080086241/'}
              className=" text-xl md:text-5xl hover:text-blue-600 hover:bg-black "
            >
              
              <SiLinkedin />
            </Link>
          </div>
          <div className="m-3">
            <Link
             target='blank' href={'https://www.instagram.com/ab_hish_ek_1/'}
              className=" text-xl md:text-5xl hover:text-blue-600 hover:bg-black "
            >
              
              <SiInstagram />
            </Link>
          </div>
          <div className="m-3">
            <Link
              target='blank' href={'https://twitter.com/abhishek_dev_47'}
              className=" text-xl md:text-5xl hover:text-blue-600 hover:bg-black "
            >
              
              <SiTwitter />
            </Link>
          </div>
          <div className="m-3">
            <Link
              target='blank' href={'https://abhishek-kumar-47.vercel.app'}
              className=" text-xl md:text-5xl hover:text-blue-600 hover:bg-black "
            >
              
              <SiAcademia />
            </Link>
          </div>
          
        </div>
      </div>
    </>
  );
}

export default Footer;
