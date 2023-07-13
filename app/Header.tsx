import React from "react";

export function Header() {
  return (
    <div className=" mx-auto mt-4 mb-10 justify-center rounded-lg shadow-md shadow-emerald-600 bg-gray-800/50 border-purple-500 border-2 lg:max-w-7xl">
      <div className="px-4 pt-4 justify-center">
        <h1 className=" flex-col lg:text-5xl text-center text-4xl mb-2 font-extrabold font-monoRoboto text-gray-100">
          Full-stack web development, done right.
        </h1>
        <div className="text-right pb-4">
          <span className="text-gray-400  text-4xl font-bold">by</span>
          <em className="text-gray-400 text-4xl font-bold mb-4">
            Victor Boynton
          </em>
        </div>
      </div>
    </div>
  );
}
