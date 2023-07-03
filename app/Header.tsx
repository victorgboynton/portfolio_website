import React from "react";

export function Header() {
  return (
    <div className=" mx-auto mt-4 justify-center rounded-lg backdrop-blur border-cyan-900 border-2 lg:max-w-7xl">
      <div className="px-4 pt-4 justify-center">
        <h1 className=" flex-col lg:text-5xl text-center text-4xl mb-2 font-extrabold text-white">
          Full-stack web development done right
        </h1>
        <div className="text-right">
          <em className="text-green-500  text-5xl font-bold">
            By Victor Boynton
          </em>
        </div>
      </div>
    </div>
  );
}
