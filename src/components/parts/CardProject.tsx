'use client';

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import ModalConfirmation from '@/components/modal/ModalConfirmation';
import ModalEditProject from '@/components/modal/ModalEditProject';
import type { CardProjectProps } from '@/types/app';
import toast from 'react-hot-toast';
import useProjectsStore from '@/store/projectStore';
import Loader from '@/components/parts/Loader';
import Link from 'next/link';

const CardProject: React.FC<CardProjectProps> = ({ project }) => {
  const { asyncDeleteProject } = useProjectsStore();

  const projectId = project.id;

  const showModalEdit = () => {
    const modal = document.getElementById(`modal_edit_${projectId}`) as HTMLDialogElement;
    if (modal) {
      modal.showModal();
    }
  };

  const showModalConfirm = () => {
    const modal = document.getElementById(`modal_confirm_rm_prj_${projectId}`) as HTMLDialogElement;
    if (modal) {
      modal.showModal();
    }
  };

  const onConfirm = async () => {
    try {
      await asyncDeleteProject(projectId);
      toast.success('Project deleted successfully');
      const modal = document.getElementById(
        `modal_confirm_rm_prj_${projectId}`
      ) as HTMLDialogElement;
      if (modal) {
        modal.close();
      }
    } catch (err) {
      console.log(err);
      toast.error('Delete project failed');
    }
  };

  if (!project) {
    return <Loader />;
  }

  return (
    <div className="card-project bg-white h-56 rounded-xl border border-primary-one">
      <Link
        href={`/projects/${projectId}`}
        className="top-card bg-primary-one h-3/5 rounded-t-xl flex justify-center items-center"
      >
        <h5 className="text-white font-bold text-2xl">DailyDo&apos;s Project</h5>
      </Link>
      <div className="bottom-card h-2/5 p-3">
        <div className="info-project">
          <Link href={`/projects/${projectId}`} className="font-semibold text-sm">
            {project.title}
          </Link>
          <div className="action mt-2 flex gap-3">
            <Button
              onClick={showModalEdit}
              className="py-[6px] px-0 w-full h-auto bg-primary-one hover:bg-[#854f2f]"
            >
              <span className="text-white text-xs">Edit Project</span>
            </Button>
            <Button
              onClick={showModalConfirm}
              className="py-[6px] px-0 w-full h-auto bg-primary-one hover:bg-[#854f2f]"
            >
              <span className="text-white text-xs">Remove Project</span>
            </Button>

            <ModalConfirmation
              id={`modal_confirm_rm_prj_${project.id}`}
              message="Are you sure to want delete this project?"
              onConfirm={onConfirm}
            />
            <ModalEditProject project={project} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardProject;
