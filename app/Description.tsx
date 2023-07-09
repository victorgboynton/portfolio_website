import React from "react";
import Image from "next/image";
import pictureOfMe from "./pictureOfMe.jpg";

export function Description() {
  return (
    <div className="flex flex-row border-2 border-purple-700  rounded">
      <Image
        src={pictureOfMe}
        alt="picture of me"
        className="border-purple-700 border-r-2 w-60 h-60"
      />
      <div className=" flex backdrop-blur rounded min-h-full max-w-xl ">
        <div className="flex flex-col bg-purple-800/25">
          <p className="text-center font-bold bg-purple-900 text-white text-2xl border-b-2 border-purple-700">
            A little about me:
          </p>
          <p className="text-xl font-semibold font-sans text-white">
            My name is Victor Boynton, and I am an aspiring full-stack web
            developer.
          </p>
        </div>
      </div>
    </div>
  );
}
