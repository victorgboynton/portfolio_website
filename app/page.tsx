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
];
export default function Home() {
  return (
    <div className="bg-scroll">
      <div
        className=" -z-50 sm:bg-image_background h-screen "
        style={{
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <Navbar />
        <Header />

        <div className="flex flex-wrap justify-center lg:gap-48 mt-8 items-center">
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
    <div className="text-center border-4 max-w-xl border-cyan-900 rounded bg-gray-800">
      <p className="border-b-4 font-bold text-slate-50 border-cyan-900 text-2xl bg-cyan-800">
        My skills:
      </p>
      <div className="flex mx-auto">
        <ul className="flex flex-wrap">
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
    <span className="font-bold border-2 rounded-2xl px-4 m-1 py-1 bg-cyan-600 text-slate-900">
      {skillObj.skill}
    </span>
  );
}

function Footer() {
  return <div className="bg:black bottom-0">hello world</div>;
}
