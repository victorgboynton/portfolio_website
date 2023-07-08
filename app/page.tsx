import { useState } from "react";
import React from "react";
import { Description } from "./Description";
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
    <div>
      <Header />
      <div className="bg-zinc-300 border-t-4 border-slate-900">
        <ProjectList />
        <div className="flex flex-wrap justify-center lg:gap-20 mt-8 pb-10 items-center">
          <Description />
          <SkillsList />
        </div>
      </div>
    </div>
  );
}

function SkillsList() {
  return (
    <div className="text-center border-2 bg-purple-800/25 max-w-xl border-purple-700 rounded backdrop-blur">
      <p className="border-b-2 font-bold text-slate-50 border-purple-700 text-2xl bg-purple-900">
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
    <span className="font-bold border-2 rounded-2xl px-4 m-1 py-1 bg-purple-400 text-slate-950">
      {skillObj.skill}
    </span>
  );
}
