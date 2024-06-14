"use client" // this is a client component
import React from "react"
import Image from "next/image"
import { Link } from "react-scroll/modules"
import { HiArrowDown } from "react-icons/hi"

const HeroSection = () => {
  return (
    <section id="home">
      <div className="flex flex-col text-center items-center justify-center animate-fadeIn animation-delay-2 my-10 py-16 sm:py-32 md:py-28 md:flex-row md:space-x-4 md:text-left">
        <div className="md:mt-2 md:w-1/2">
          <Image
            src="/Profile.jpeg"
            alt=""
            width={325}
            height={290}
            className="rounded-full shadow-2xl"
          />
        </div>
        <div className="md:mt-2 md:w-3/5">
          <h1 className="text-4xl font-bold mt-6 md:mt-0 md:text-7xl">Hey,<br /> I&#39;m Ishmam!</h1>
          <p className="text-lg mt-4 mb-6 md:text-2xl">
            A Dedicated{" "}
            <span className="font-semibold text-orange-600">
              Software Engineer and Web Developer{" "}
            </span>
            Committed to Excellence and Innovation.
          </p>
          <Link
            to="technical-skills"
            className="mr-4 text-neutral-100 font-semibold px-6 py-3 bg-orange-600 rounded shadow hover:bg-gray-700 cursor-pointer"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            Technical Skills
          </Link>
          <a
            href="/Resume_Ishmam_24.pdf"
            target="_blank"
            rel="noreferrer"
            className="text-neutral-100 font-semibold px-6 py-3 bg-orange-600 rounded shadow hover:bg-gray-700 cursor-pointer"
          >
            Résumé
          </a>
        </div>
      </div>
      <div className="flex flex-row items-center text-center justify-center ">
        <Link
          to="about"
          activeClass="active"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
        >
          <HiArrowDown size={35} className="animate-bounce" />
        </Link>
      </div>
    </section>
  )
}

export default HeroSection
