import React from "react";

export function Navbar() {
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
