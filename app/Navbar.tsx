import Image from "next/image";
import React from "react";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between ">
      <div className="left-0">
        <h1 className="font-semibold px-2 text-xl tracking-wide p-1 text-white rounded bg-purple-950">
          Victor Boynton, AAS
        </h1>
      </div>
      <div className="text-white font-bold pr-1 space-x-2">
        <button className="hover:bg-purple-900/25 rounded p-1.5">
          Projects
        </button>
        <button className="hover:bg-purple-900/50 rounded p-1.5">
          Contact
        </button>
        <button className="hover:bg-purple-900/50 rounded p-1.5">
          About Me
        </button>
        <div>
          <button>
            <Image
              src="/hamburger.svg"
              alt="Menu hamburger"
              width={30}
              height={30}
            />
          </button>
        </div>
      </div>
    </nav>
  );
}
