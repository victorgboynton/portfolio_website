import { useState } from "react";
import React from "react";
import Image from "next/image";
import pictureOfMe from "./pictureOfMe.jpg";
import blackPan from "./blackpan.jpg";

const projects = [
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
export default function Home() {
  return (
    <div>
      <Navbar />
      <Header />
      <Description />
      <ProjectList />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <div className="flex justify-center items-center m-4 lg:mx-96 border-cyan-900 border-dashed border-4">
      <span className=" font-bold flex justify-center items-center text-4xl mb-8 text-slate-200">
        Fuck-stack web development, with a snaggletooth smile
      </span>
    </div>
  );
}

function Navbar() {
  return (
    <nav className="flex items-center justify-between border-b-2 border-y border-slate-500 bg-sky-800">
      <div className="left-0">
        <h1 className="font-semibold px-2 text-xl tracking-wide p-1 text-slate-100 bg-sky-900">
          Victor Boynton, AAS
        </h1>
      </div>
      <div className="text-slate-100 font-bold pr-1 py space-x-2">
        <button className="hover:bg-sky-900 rounded p-1.5">Projects</button>
        <button className="hover:bg-sky-900 rounded p-1.5">Contact</button>
        <button className="hover:bg-sky-900 rounded p-1.5">About Me</button>
      </div>
    </nav>
  );
}

function Description() {
  return (
    <div className="flex border-4 border-b-4 lg:mr-96 pr-2 border-cyan-900 mr-auto">
      <Image
        src={pictureOfMe}
        alt="picture of me"
        className="border-slate-500 border w-32 h-32 mr-2"
      />
      <p className="text-lg font-semibold font-sans text-slate-100">
        Hello! My name is Victor Boynton, and I am an aspiring web developer. I
        have worked for years to gather the skills necessary to enter the tech
        industry, and I think that now is the right time for me to do just that.
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum..
      </p>
    </div>
  );
}

function ProjectList() {
  return (
    <div>
      <ul className="flex justify-between">
        {projects.map((project) => (
          <Project projectObj={project} key={project.id} />
        ))}
      </ul>
    </div>
  );
}

function Project({ projectObj }: { projectObj: any }) {
  return (
    <div className="flex-col items-center mt-6 mx-6">
      <Image
        src={projectObj.image}
        //src={blackPan}
        alt={projectObj.name}
        width={50}
        height={50}
      />
      <p>{projectObj.name}</p>
    </div>
  );
}

function Footer() {
  return <p>footer</p>;
}
