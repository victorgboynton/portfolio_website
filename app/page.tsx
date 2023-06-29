import { useState } from "react";
import React from "react";
import Image from "next/image";
import pictureOfMe from "./pictureOfMe.jpg";

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

function Navbar() {
	return (
		<nav className="flex items-center justify-between border-b-2 border-y border-slate-500 bg-gradient-to-br from-sky-400 to-sky-900">
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

function Header() {
	return (
		<div className="m-4 mx-auto justify-center text-center max-w-3xl bg-gray-800 rounded border-sky-800 border-2">
			<div className="px-4 justify-center">
				<div className=" font-bold flex-col text-4xl mb-8 text-slate-100">
					Full-stack web development,
				</div>
				<em className="text-green-500 text-5xl font-bold">with a smile.</em>
			</div>
		</div>
	);
}

function Description() {
	return (
		<div className="border-2 flex flex-row bg-gray-800 rounded pr-2 max-w-md lg:mx-60 border-cyan-900 mr-auto justify-between">
			<Image
				src={pictureOfMe}
				alt="picture of me"
				className="border-slate-500 border w-60 h-60 mr-2"
			/>
			<p className="text-lg font-semibold font-sans text-slate-50">
				Hello! My name is Victor Boynton, and I am an aspiring web developer. I
				have worked for years to gather the skills necessary to enter the tech
				industry, and I think that now is the right time for me to do just that.
			</p>
		</div>
	);
}

function ProjectList() {
	return (
		<div>
			<ul className="flex justify-between lg:mx-96">
				{projects.map((project) => (
					<Project projectObj={project} key={project.id} />
				))}
			</ul>
		</div>
	);
}

function Project({ projectObj }: { projectObj: any }) {
	return (
		<div className="flex-col items-center justify-center text-center mt-6 mx-6">
			<div className=" relative h-20 w-20">
				<Image
					src={projectObj.image}
					//src={blackPan}
					alt={projectObj.name}
					fill={true}
				/>
			</div>
			<p className="text-slate-50">{projectObj.name}</p>
		</div>
	);
}

function Footer() {
	return (
		<div className="mx-auto flex  max-w-md  text-center items-center justify-center">
			<div className="h-36 w-full rounded-md bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-1">
				<div className="flex h-full w-full items-center justify-center bg-gray-800 back">
					<h1 className="text-2xl font-black text-white">
						the quick brown fox jumps over the lazy dog
					</h1>
				</div>
			</div>
		</div>
	);
}
