import React from "react";
import { Description } from "./Description";
import { Header } from "./Header";
import { ProjectList } from "./ProjectList";
import Image from "next/image";
import pictureOfMe from "./pictureOfMe.jpg";

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
const softSkills = [
  {
    id: 1,
    skill: "Communication",
  },
  {
    id: 2,
    skill: "Leadership",
  },
  {
    id: 3,
    skill: "Customer Service",
  },
  {
    id: 4,
    skill: "Empathy",
  },
  {
    id: 5,
    skill: "Creativity",
  },
  {
    id: 6,
    skill: "Problem Solving",
  },
  {
    id: 7,
    skill: "Time Management",
  },
  {
    id: 8,
    skill: "Teamwork",
  },
  {
    id: 9,
    skill: "Critical Thinking",
  },
];
export default function Home() {
  return (
    <div>
      <Header />
      <div className="bg-gradient-to-b from-gray-900 to-gray-500">
        <ProjectList />
        <div className=" md:grid grid-col-3 place-items-center justify-center mx-8 mt-8 pb-10 items-center">
          <div className="col-span-2 flex flex-col gap-10 mx-4">
            <Description2 />
            <div className="mx-auto mb-10 flex justify-between">
              <SkillsList listItem={skills}>My Hard Skills:</SkillsList>
              <SkillsList listItem={softSkills}>My Soft Skills:</SkillsList>
            </div>
          </div>
          <div className="flex justify-center md:col-start-3">
            <Image
              src="/me.JPG"
              alt="picture of me"
              className="border-purple-700 border rounded "
              width={500}
              height={616}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function SkillsList({ children, listItem }: any) {
  return (
    <div className="text-center border-2 bg-purple-800/25 max-w-xl border-purple-700 rounded backdrop-blur mx-2">
      <p className="border-b-2 font-bold text-slate-50 border-purple-700 text-2xl font-monoRoboto bg-purple-900">
        {children}
      </p>
      <div className="flex flex-wrap mx-auto">
        <ul className="flex flex-wrap justify-center">
          {listItem.map((skill: any) => (
            <Skill skillObj={skill} key={skill.id} />
          ))}
        </ul>
      </div>
    </div>
  );
}

function Skill({ skillObj }: any) {
  return (
    <span className="font-bold border-2 rounded-2xl px-4 m-1 py-1 bg-purple-400 text-slate-950">
      {skillObj.skill}
    </span>
  );
}

function Description2() {
  return (
    <div className="grid text-center">
      <h1 className="text-4xl font-extrabold border-b-4 border-purple-700 mb-6 font-monoRoboto text-white">
        A LITTLE ABOUT ME
      </h1>
      <p className="text-left text-xl text-white font-monoRoboto">
        My name is Victor Boynton, and I am an aspiring web developer. I may not
        have much experience, but what I lack in formal training, I make up for
        in gusto and desire to learn. yada yada yada yada yada yada Lorem ipsum
        dolor sit amet consectetur adipisicing elit. Dolore quidem expedita
        doloremque officiis laborum, sapiente quam facilis qui vero eligendi
        unde maiores laudantium ratione quisquam sint magnam necessitatibus
        ipsam aliquam!
      </p>
    </div>
  );
}
