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
    <div>
      <Navbar />
      <Header />
      <div className="flex flex-wrap justify-center lg:gap-60 items-center">
        <Description />
        <SkillsList />
      </div>
      <ProjectList />

      <Footer />
    </div>
  );
}

function SkillsList() {
  return (
    <div>
      <div className="grid grid-cols-3 mx-auto">
        <ul>
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
    <span className=" col-span-1 border-2 rounded-2xl px-4 m-1 py-1 bg-fuchsia-600 text-slate-900">
      {skillObj.skill}
    </span>
  );
}

function Footer() {
  return (
    <div className="mx-auto flex  max-w-md  text-center items-center justify-center">
      <div className="h-36 w-full rounded-md bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-1">
        <div className="flex h-full w-full items-center justify-center bg-gray-800 back">
          <h1 className="text-2xl font-black text-white">Please hire me</h1>
        </div>
      </div>
    </div>
  );
}
