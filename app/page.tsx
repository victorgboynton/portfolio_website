import { useState } from "react";
import React from "react";
import { Description } from "./Description";
import { Navbar } from "./Navbar";
import { Header } from "./Header";
import { ProjectList } from "./ProjectList";

export const projects = [
  {
    id: 1,
    name: "CookSuccess",
    image: "https://m.media-amazon.com/images/I/81+8uKL1xQL._AC_SL1500_.jpg",
  },
  {
    id: 2,
    name: "Blackjack",
    image: "https://m.media-amazon.com/images/I/81+8uKL1xQL._AC_SL1500_.jpg",
  },
  {
    id: 3,
    name: "Root Kava Co. Website",
    image: "https://m.media-amazon.com/images/I/81+8uKL1xQL._AC_SL1500_.jpg",
  },
];

const skills = [
  {
    id: 1,
    skill: "React",
  },
  {
    id: 2,
    skill: "HTML/CSS",
  },
  {
    id: 3,
    skill: "Python",
  },
  {
    id: 4,
    skill: "C++",
  },
  {
    id: 5,
    skill: "C#",
  },
  {
    id: 6,
    skill: "UI/UX",
  },
  {
    id: 7,
    skill: "MongoDB",
  },
  {
    id: 8,
    skill: "Mongoose",
  },
  {
    id: 9,
    skill: "Tailwind CSS",
  },
  {
    id: 10,
    skill: "SQL",
  },
  {
    id: 11,
    skill: "Javascript",
  },
];
export default function Home() {
  return (
    <div className="bg-local">
      <div
        className=" -z-50 sm:bg-image_background md:h-full"
        style={{
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <Navbar />
        <Header />

        <div className="flex flex-wrap justify-center  lg:gap-20 mt-8 items-center">
          <Description />
          <SkillsList />
        </div>

        <ProjectList />

        <Footer />
      </div>
    </div>
  );
}

function SkillsList() {
  return (
    <div className="text-center border-2 bg-gray-800/50 max-w-xl border-orange-500 rounded backdrop-blur">
      <p className="border-b-2 font-bold text-slate-50 border-orange-500 text-2xl bg-orange-600">
        My skills:
      </p>
      <div className="flex flex-wrap mx-auto">
        <ul className="flex flex-wrap justify-center">
          {skills.map((skill) => (
            <Skill skillObj={skill} key={skill.id} />
          ))}
        </ul>
      </div>
    </div>
  );
}

function Skill({ skillObj }: { skillObj: any }) {
  return (
    <span className="font-bold border-2 rounded-2xl px-4 m-1 py-1 bg-orange-400 text-slate-950">
      {skillObj.skill}
    </span>
  );
}

function Footer() {
  return (
    <div className=" flex justify-between bottom-0 text-white bg-black px-4">
      <ul className="flex gap-2">
        <li>Projects</li>
        <li>Contact</li>
        <li>About Me</li>
      </ul>
      <div>Logo place-holder</div>

      <p>Return to top</p>
    </div>
  );
}
