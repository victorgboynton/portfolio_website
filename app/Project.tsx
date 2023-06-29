import React from "react";
import Image from "next/image";

export function Project({ projectObj }: { projectObj: any }) {
  return (
    <div className="flex-col items-center text-center mt-6 mx-6">
      <div className=" relative w-20 h-20">
        <Image src={projectObj.image} alt={projectObj.name} fill={true} />
      </div>
      <span className="text-slate-50 text-center border-4 border-cyan-900">
        {projectObj.name}
      </span>
    </div>
  );
}
