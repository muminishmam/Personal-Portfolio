import React from "react"
import Image from "next/image"
import Link from "next/link"
import SlideUp from "./SlideUp"
import { BsGithub} from "react-icons/bs"

const projects = [
  {
    name: "Reversible Learning",
    description:
      "Reversible Learning is a comprehensive study application tailored for students and lifelong learners. It's designed to assist users in organizing class notes across multiple subjects, archiving past questions, and ensuring that knowledge remains accessible for future reference.",
    image: "/RL.png",
    github: "https://github.com/muminishmam/Reversible-Learning"
  },
  {
    name: "GSTAT",
    description: "A dynamic web application used to collect user game playing time and spending on games from external gaming platforms for multiple consoles. ",
    image: "/GSTAT-GL.png",
    github: "https://github.com/muminishmam/Gstat"
  },
  {
    name: "MR. VIPER",
    description:
      "An algorithm to efficiently mine minimal rare itemsets, modifying an existing Vertical Pattern Mining Algorithm(VIPER) for frequent patterns.",
    image: "/VIPER.png",
    github: "https://github.com/muminishmam/MR.VIPER"
  },
  {
    name: "FAT-32 Manipulator",
    description:
      "A program to access and retrieve files from FAT-32 drives written in C, demonstrating strong file handling skills and system programming expertise. Designed to be visually appealing, highly performant, and responsive. Each component and section has been crafted with meticulous attention to detail, providing a seamless and engaging user experience across all devices.",
    image: "/fat-fs.jpeg",
    github: "https://github.com/muminishmam/FAT-32-Manipulator"
  },
  {
    name: "Personal Portfolio",
    description:
      "A showcase of my skills and experiences, brought to life through the power of Next.js and Tailwind CSS. Meticulously crafted to reflect my expertise in building scalable, efficient, and user-friendly web applications.",
    image: "/portfolio.png",
    github: "https://github.com/muminishmam/Personal-Portfolio"
  },
]

const ProjectsSection = () => {
  return (
    <section id="projects">
      <h1 className="my-10 text-center font-bold text-4xl">
        Projects
        <hr className="w-6 h-1 mx-auto my-4 bg-orange-500 border-0 rounded"></hr>
      </h1>

      <div className="flex flex-col space-y-28">
        {projects.map((project, idx) => {
          return (
            <div key={idx}>
              <SlideUp offset="-300px 0px -300px 0px">
                <div className="flex flex-col  animate-slideUpCubiBezier animation-delay-2 md:flex-row md:space-x-12">
                  <div className=" md:w-1/2">
                    <Link href={project.github}>
                      <Image
                        src={project.image}
                        alt=""
                        width={1000}
                        height={1000}
                        className="rounded-xl shadow-xl hover:opacity-70"
                      />
                    </Link>
                  </div>
                  <div className="mt-8 md:w-1/2">
                    <h1 className="text-4xl font-bold mb-6">{project.name}</h1>
                    <p className="text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400">
                      {project.description}
                    </p>
                    <div className="flex flex-row align-bottom space-x-4">
                      <Link href={project.github} target="_blank">
                        <BsGithub
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </SlideUp>
            </div>
          )
        })}
        
      </div>
    </section>
  )
}

export default ProjectsSection
