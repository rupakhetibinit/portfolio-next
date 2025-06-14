import Image from "next/image";
import React from "react";

const skills = [
  { skill: "C#" },
  { skill: "Angular" },
  { skill: "SQL Server" },
  { skill: "Node.js" },
  { skill: "TypeScript" },
  { skill: "Rust" },
  { skill: "React" },
  { skill: "Next.js" },
  { skill: "PostgreSQL" },
  { skill: "MongoDB" },
  { skill: "Tailwind CSS" },
  { skill: "Git" },
  { skill: "GitHub" },
];

const AboutSection = () => {
  return (
    <section id="about">
      <div className="my-12 pb-12 md:pt-16 md:pb-40">
        <h1 className="text-center font-bold text-4xl">
          About Me
          <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded-sm" />
        </h1>

        <div className="flex flex-col space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left">
          <div className="md:w-1/2 ">
            <h1 className="text-center text-2xl font-bold mb-6 md:text-left">
              Some things about me
            </h1>
            <p>
              Hi, my name is Binit Rupakheti and I am a{" "}
              <span className="font-bold">{" passionate"}</span>,
              <span className="font-bold">{" self-motivated"}</span>, and
              <span className="font-bold">{" driven"}</span> Full Stack Engineer
              based in Kathmandu, Nepal
            </p>
            <br />
            <p>
              While I don&#39;t have many hobbies, watching movies, reading
              books, and programming take up most of my remaining free time.
            </p>
            <br />
            <p>
              I believe that you should{" "}
              <span className="font-bold text-teal-500">
                never stop growing
              </span>{" "}
              and that&#39;s what I strive to do, which is why I love to
              experiment with new stuff all the time. Currently I&#39;m in the
              process of learning the Rust Programming Language in my free time.
            </p>
          </div>
          <div className="text-center md:w-1/2 md:text-left">
            <h1 className="text-2xl font-bold mb-6">My Skills</h1>
            <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start">
              {skills.map((item) => {
                return (
                  <p
                    key={item.skill}
                    className="bg-gray-200 px-4 py-2 mr-2 mt-2 text-gray-500 rounded-sm font-semibold"
                  >
                    {item.skill}
                  </p>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
