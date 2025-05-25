import React from 'react';

export const SingleProject = ({ project }) => {
  return (
    <div className="relative flex flex-col items-center text-center p-4 rounded-lg group">
      {/* Project Image */}
      <div className="relative h-[225px] w-[500px]">
        <div
          className="h-full w-full bg-cover bg-center rounded-lg shadow-lg"
          style={{ backgroundImage: `url(${project.image})` }}
        ></div>

        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-70 rounded-lg scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-center flex flex-col items-center justify-center">
          <div className="text-white text-md font-bold px-4 text-center">
            {project.description}
          </div>
          <a href={project.link} target='_blank'>{project.button1}</a>
        </div>
      </div>

      {/* Project Name */}
      <h2 className="mt-4 text-2xl font-bold text-cyan">{project.name}</h2>
    </div>
  );
};
