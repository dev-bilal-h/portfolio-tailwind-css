"use client";

import TextEffect from "./TextEffect";
import { ArrowDownTrayIcon } from "@heroicons/react/24/solid";
import { FaLinkedin, FaGithub, FaInstagram, FaEnvelope } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import React from "react";
import profile from "@/assets/profile-img.jpg";

const Hero = () => {
  return (
    <section className="bg-black py-28 lg:py-44 flex flex-col lg:flex-row items-center">
      {/* Section for Profile */}
      <div className="lg:w-1/2 flex justify-center mb-12 lg:mb-0 lg:order-2 animate-slideInLeft">
        <div className="relative rounded-full w-48 sm:w-60 md:w-72 lg:w-96 h-48 sm:h-60 md:h-72 lg:h-96 overflow-hidden shadow-[0_8px_48px_rgba(0,255,255,0.9)] shadow-sky-600 animate-pulse">
          <div className="absolute inset-0 rounded-full" />
          <Image
            src={profile}
            alt="Bilal Hassan"
            className="absolute inset-0 w-full h-full rounded-full object-cover"
            width={208}
            height={208}
            quality={100}
          />
        </div>
      </div>

      {/* Content for left side */}
      <div className="lg:w-1/2 text-center lg:text-left px-6 lg:px-24 text-white animate-slideInFromBottom">
        <h2 className="text-xl lg:text-3xl font-bold">Hello, It&apos;s Me</h2>
        <h1 className="mt-3 font-bold text-3xl lg:text-5xl">Bilal Hassan</h1>
        <TextEffect />
        <p className="mt-3">
          <i>
            I&apos;m a web developer with a passion for creating engaging,
            user-friendly websites. I&apos;m also studying under the Governor
            Initiative for Cloud Applied Generative AI, Web 3.0 & Metaverse.
          </i>
        </p>

        {/* Section for Social Links */}
        <div className="mt-8 flex justify-center lg:justify-start gap-6">
          <Link
            href="https://www.linkedin.com/in/bilal-hassan-webdev"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-800 hover:bg-blue-700 shadow-[0_4px_20px_rgba(0,255,255,0.6)] shadow-sky-600 transition duration-900 ease-in-out transform hover:scale-105">
              <FaLinkedin className="w-6 h-6 text-white hover:text-sky-600 transition" />
            </div>
          </Link>
          <Link
            href="https://github.com/dev-bilal-h"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-800 hover:bg-gray-700 shadow-[0_4px_20px_rgba(0,255,255,0.6)] shadow-sky-600 transition duration-900 ease-in-out transform hover:scale-105">
              <FaGithub className="w-6 h-6 text-white hover:text-sky-600 transition" />
            </div>
          </Link>
          <Link
            href="https://www.instagram.com/bilal__aesthetics"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-pink-600 hover:bg-pink-500 shadow-[0_4px_20px_rgba(0,255,255,0.6)] shadow-sky-600 transition duration-900 ease-in-out transform hover:scale-105">
              <FaInstagram className="w-6 h-6 text-white hover:text-sky-600 transition" />
            </div>
          </Link>
          <Link
            href="mailto:siddiquibilal882@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-red-700 hover:bg-red-500 shadow-[0_4px_20px_rgba(0,255,255,0.6)] shadow-sky-600 transition duration-900 ease-in-out transform hover:scale-105">
              <FaEnvelope className="w-6 h-6 text-white hover:text-sky-600 transition" />
            </div>
          </Link>
        </div>

        {/* Download For CV Button */}
        <Link href="Empty" download="Empty">
          <button className="mt-12 px-2 py-1.5 lg:px-4 lg:py-2 bg-sky-600 text-black font-bold rounded-full text-sm shadow-lg hover:bg-sky-500 inline-flex items-center justify-center">
            DOWNLOAD CV <ArrowDownTrayIcon className="w-5 h-5 mt-1 ml-2" />
          </button>
        </Link>
      </div>
    </section>
  );
};

export default Hero;
