import React from 'react';

export const SingleProject = ({ project }) => {
  return (
    <div className="relative flex flex-col items-center text-center p-4 rounded-lg">
      <div
        className="h-[225px] w-[500px] bg-cover bg-center rounded-lg shadow-lg"
        style={{ backgroundImage: `url(${project.image})` }}
      ></div>
      <h2 className="mt-4 text-2xl font-bold text-cyan">{project.name}</h2>
    </div>
  );
};
