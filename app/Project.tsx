import React from "react";
import Image from "next/image";

export function Project({ projectObj }: { projectObj: any }) {
  return (
    <div className="flex-col items-center text-center mt-6 mx-6 border-2 justify-between border-orange-500 flex backdrop-blur bg-gray-800/50 rounded">
      <div className=" relative w-60 h-60">
        <Image
          src={projectObj.image}
          alt={projectObj.name}
          fill={true}
          className="border-b-2 border-orange-500"
        />
      </div>
      <p className="text-slate-50 text-center backdrop-blur  bg-gray-800/50">
        {projectObj.name}
      </p>
    </div>
  );
}
