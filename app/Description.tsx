import React from "react";
import Image from "next/image";
import pictureOfMe from "./pictureOfMe.jpg";

export function Description() {
  return (
    <div className="flex flex-row">
      <Image
        src={pictureOfMe}
        alt="picture of me"
        className="border-orange-500 border-2 rounded w-60 h-60"
      />
      <div className="border-2 flex backdrop-blur rounded min-h-full max-w-xl border-orange-500 bg-gray-800/50">
        <div className="flex flex-col">
          <p className="text-center font-bold bg-orange-600 text-white text-2xl border-b-2 border-orange-500">
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
