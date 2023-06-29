import React from "react";
import Image from "next/image";

export function Project({ projectObj }: { projectObj: any }) {
  return (
    <div className="flex-col items-center justify-center text-center mt-6 mx-6">
      <div className=" relative h-20 w-20">
        <Image src={projectObj.image} alt={projectObj.name} fill={true} />
      </div>
      <p className="text-slate-50">{projectObj.name}</p>
    </div>
  );
}
