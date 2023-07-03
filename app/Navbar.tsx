import React from "react";

export function Navbar() {
  return (
    <nav className="flex items-center justify-between ">
      <div className="left-0">
        <h1 className="font-semibold px-2 text-xl tracking-wide p-1 text-white rounded bg-purple-950">
          Victor Boynton, AAS
        </h1>
      </div>
      <div className="text-white font-bold pr-1 py space-x-2">
        <button className="hover:bg-purple-900/25 rounded p-1.5">
          Projects
        </button>
        <button className="hover:bg-purple-900/50 rounded p-1.5">
          Contact
        </button>
        <button className="hover:bg-purple-900/50 rounded p-1.5">
          About Me
        </button>
      </div>
    </nav>
  );
}
