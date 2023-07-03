import React from "react";
import Image from "next/image";
import pictureOfMe from "./pictureOfMe.jpg";

export function Description() {
  return (
    <div className="flex flex-row">
      <Image
        src={pictureOfMe}
        alt="picture of me"
        className="border-slate-500 border w-60 h-60"
      />
      <div className="border-2 flex backdrop-blur rounded min-h-full max-w-xl border-cyan-900 ">
        <div className="flex flex-col">
          <p className="text-center font-bold bg-cyan-800 text-white text-2xl border-b-2 border-cyan-900">
            A little about me:
          </p>
          <p className="text-xl font-semibold font-sans text-white">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
      </div>
    </div>
  );
}
