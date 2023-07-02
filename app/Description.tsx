import React from "react";
import Image from "next/image";
import pictureOfMe from "./pictureOfMe.jpg";

export function Description() {
  return (
    <div className="border-4 flex flex-col bg-gray-800 rounded  max-w-md border-cyan-900 justify-between">
      <p className="text-center font-bold bg-cyan-800 text-slate-50 text-2xl border-b-4 border-cyan-900">
        A little about me:
      </p>
      <Image
        src={pictureOfMe}
        alt="picture of me"
        className="border-slate-500 border w-60 h-60 mr-2"
      />
      <p className="text-lg font-semibold font-sans text-slate-50">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </p>
    </div>
  );
}