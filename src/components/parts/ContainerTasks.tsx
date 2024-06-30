import React from 'react';
import CardTask from './CardTask';
import { ContainerTasksProps } from '@/types/app';

function ContainerTasks({ titleContainer, tasks }: ContainerTasksProps) {
  return (
    <div className="tasks-content-urgent bg-slate-100 px-5 py-5 mb-7">
      <div className="title">
        <h4 className="text-xl font-semibold">{titleContainer}</h4>
        <div className="container-task grid xl:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-7 mt-5">
          {tasks.map((task) => (
            <CardTask key={task.id} task={task} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ContainerTasks;
