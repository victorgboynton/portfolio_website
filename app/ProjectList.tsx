import React from "react";
import { projects } from "./page";
import { Project } from "./Project";

export function ProjectList() {
  return (
    <div>
      <ul className="flex justify-between lg:mx-96">
        {projects.map((project) => (
          <Project projectObj={project} key={project.id} />
        ))}
      </ul>
    </div>
  );
}
