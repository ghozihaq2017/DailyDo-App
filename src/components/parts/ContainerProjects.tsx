'use client';

import React, { useEffect } from 'react';
import CardProject from '@/components/parts/CardProject';
import useProjectsStore from '@/store/projectStore';
import Loader from '@/components/parts/Loader';
import type { Project } from '@/types/app';


function ContainerProjects() {
  const { projectsData, asyncGetAll } = useProjectsStore();

  useEffect(() => {
    asyncGetAll();
  }, [asyncGetAll]);

  console.log(projectsData);

  if (!projectsData) {
    return <Loader />;
  }

  return (
    <div className="container-projects w-full gap-10 px-3 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
      {projectsData.map((project: Project) => (
        <CardProject key={project.id} project={project} />
      ))}
    </div>
  );
}

export default ContainerProjects;
