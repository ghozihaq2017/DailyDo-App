/* eslint-disable react-hooks/exhaustive-deps */
'use client';

import ModalAddNewTask from '@/components/modal/ModalAddNewTask';
import ContainerTasks from '@/components/parts/ContainerTasks';
import Header from '@/components/parts/Header';
import Loader from '@/components/parts/Loader';
import { Button } from '@/components/ui/button';
import useProjectsStore from '@/store/projectStore';
import type { Project, Task } from '@/types/app';
import React, { useEffect } from 'react';

function DetailProjectPage({ params }: any) {
  const {
    asyncGetDetail,
    detailProject
  }: { asyncGetDetail: (id: number) => void; detailProject: Project | null } = useProjectsStore();
  const { id } = params;

  useEffect(() => {
    asyncGetDetail(id);
  }, [asyncGetDetail, id]);

  const showModalAdd = () => {
    const modal = document.getElementById('modal_add_task') as HTMLDialogElement;
    if (modal) {
      modal.showModal();
    }
  };

  if (!detailProject) {
    return <Loader />;
  }

  const notStartedTasks = detailProject.tasks.filter((task: Task) => task.status === 'not started');
  const inProgressTasks = detailProject.tasks.filter((task: Task) => task.status === 'in progress');
  const completedTasks = detailProject.tasks.filter((task: Task) => task.status === 'completed');

  return (
    <section>
      <Header />
      <div className="content-projects min-h-screen py-24 xl:py-28 px-4 xl:px-20 ">
        <div className="container-content w-full min-h-[600px]">
          <div className="top-content border-b border-primary-one pb-5">
            <h2 className="text-3xl font-bold">{detailProject.title}</h2>
            <p className="mt-2">{detailProject.description}</p>
          </div>
          <Button
            onClick={showModalAdd}
            className="my-5 gap-2 bg-primary-one hover:bg-[#854f2f]"
            variant="outline"
          >
            <span className="font-base text-white">Add New Task</span>
          </Button>
          <ModalAddNewTask projectId={detailProject.id} />
          <ContainerTasks titleContainer="Not Started" tasks={notStartedTasks} />
          <ContainerTasks titleContainer="On Progress" tasks={inProgressTasks} />
          <ContainerTasks titleContainer="Completed" tasks={completedTasks} />
        </div>
      </div>
    </section>
  );
}

export default DetailProjectPage;
