
import React, { useState } from "react";

export const ProjectsData = [
  {
    name: "Hard Rock Hotel Cancún Intern Managment",
    description:
      "Desarrollo web integral que consta de una base de datos en Postgres, API REST en NestJS y frontend en React con Redux y TypeScript.",
    images: "/images/projects-images/HardRock",
  },

];

interface ProjectData {
  name: string;
  description: string;
  images: string;
}

interface ProjectDisplayProps {
  data: ProjectData;
}


export const ProjectDisplay: React.FC<ProjectDisplayProps> = ({ data }) => {

  const getImagesFromPath = (path: string) => {
    const images = [];
    for (let i = 1; i <= 3; i++) {
      images.push(`${path}/${i}.PNG`);
    }
    return images;
  };

  if (data) {
    return (
  
         <div className="project-display-container">
        <div className="project-display-images">
          {getImagesFromPath(data.images).map((image, index) => (
            <img
              key={index}
              src={image}
              alt={data.name}
              className={`project-image project-image-${index}`}
            />
          ))}
        </div>
        <div className="project-display-description">
          <h4>{data.name}</h4>
          <p>{data.description}</p>
        </div>
      </div>
     
     
   
    );
  } else {
    return <h4>No hay proyectos</h4>;
  }
};
