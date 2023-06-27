import { useState } from "react";
import React from "react";

export default function Home() {
	return (
		<div>
			<Header />
			<Description />
			<ProjectList />
		</div>
	);
}

function Header() {
	return (
		<nav className="flex items-center justify-between border-b-2 border-y border-slate-500 mb-1 bg-sky-800">
			<div className="left-0">
				<h1 className="font-semibold px-2 text-xl tracking-wide p-1 text-slate-100 bg-slate-500">
					Victor Boynton
				</h1>
			</div>
			<div className="text-slate-100 font-bold pr-1 py space-x-4">
				<button className="hover:bg-cyan-600 rounded p-1.5">Contact</button>
				<button className="hover:bg-cyan-600 rounded p-1.5">About Me</button>
			</div>
		</nav>
	);
}

function Navbar() {
	<nav></nav>;
}

function Description() {
	return (
		<p className="border-4 m-center">
			Hello! My name is Victor Boynton, and I am an aspiring web developer. I
			have worked for years to gather the skills necessary to enter the tech
			industry, and I think that now is the right time for me to do just that.
		</p>
	);
}

function ProjectList() {
	return <p>Project List</p>;
}

function Project() {
	return <p>project</p>;
}

function Footer() {
	return <p>footer</p>;
}
