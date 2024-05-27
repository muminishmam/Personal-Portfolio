import React from "react"
import Image from "next/image"
import SlideUp from "./SlideUp"

const skills = [
  { skill: "Java" },
  { skill: "HTML" },
  { skill: "JavaScript" },
  { skill: "CSS" },
  { skill: "Python" },
  { skill: "React" },
  { skill: "Next JS" },
  { skill: "Tailwind CSS" },
  { skill: "GitHub" },
  { skill: "Git" },
  { skill: "C/C++" },
  { skill: "SQL" },
  { skill: "R" },
  { skill: "Linux/UNIX" },
]

const AboutSection = () => {
  return (
    <section id="about">
      <div className="my-12 pb-12 md:pt-16 md:pb-48">
        <h1 className="text-center font-bold text-4xl">
          About Me
          <hr className="w-6 h-1 mx-auto my-4 bg-orange-500 border-0 rounded"></hr>
        </h1>

        <div className="flex flex-col space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left">
          <div className="md:w-1/2 ">
            <h1 className="text-center text-2xl font-bold mb-6 md:text-left">
              Get to know me!
            </h1>
            <p>
              Hi, my name is Chowdhury Ishmam and I am a{" "}
              <span className="font-bold">{"highly ambitious"}</span>,
              <span className="font-bold">{" self-motivated"}</span>, and
              <span className="font-bold">{" driven"}</span> software engineer and web developer
              based in Winnipeg, MB.
            </p>
            <br />
            <p>
              I graduated with a Bachelor's degree in Computer Science, with a Minor in Statistics and a specialization in Databases from the University of Manitoba.
              With a strong foundation in both front-end and back-end development, I specialize in creating scalable, efficient, and user-friendly web applications. 
            </p>
            <br />
            <p>
            I've worked on diverse projects ranging from android applications to data mining algorithms,
            always striving to deliver high-quality solutions that meet client needs. 
            </p>
            <br />
            <p>
              I believe that you should{" "}
              <span className="font-bold text-orange-500">
                never stop growing
              </span>{" "}
              and that&#39;s what I strive to do, I have a passion for
              technology and a desire to always push the limits of what is
              possible. Whether working independently or as part of a collaborative team,
              I am dedicated to developing innovative software that enhances user experiences and drives business success.
              I am excited to see where my career takes me and am
              always open to new opportunities. 🙂
            </p>
          </div>
          <div className="text-center md:w-1/2 md:text-left">
            <h1 className="text-2xl font-bold mb-6">Technical Skills</h1>
            <div className="animate-slideUpCubiBezier animation-delay-2 flex flex-wrap flex-row justify-center z-10 md:justify-start">
              {skills.map((item, idx) => {
                return (
                  <p
                    key={idx}
                    className="bg-gray-200 px-4 py-2 mr-2 mt-2 text-gray-500 rounded font-semibold"
                  >
                    {item.skill}
                  </p>
                )
              })}
            </div>
            <SlideUp offset="-300px 0px -300px 0px">
            <Image
              src="/mechanical.png"
              alt=""
              width={425}
              height={425}
              className="hidden md:block md:relative md:top-2 md:left-14 md:z-0"
            />
            </SlideUp>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection