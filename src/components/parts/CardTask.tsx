'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
import ModalConfirmation from '../modal/ModalConfirmation';
import type { CardTaskProps } from '@/types/app';
import { formatDate } from '@/lib/formatDate';
import toast from 'react-hot-toast';
import useTasksStore from '@/store/taskStore';
import useProjectsStore from '@/store/projectStore';

function CardTask({ task }: CardTaskProps) {
  const { asyncDeleteTask } = useTasksStore();
  const { asyncGetDetail } = useProjectsStore();
  const taskId = task.id;

  const showModalDelete = () => {
    const modal = document.getElementById(`modal_confirm_rm_tsk_${taskId}`) as HTMLDialogElement;
    if (modal) {
      modal.showModal();
    }
  };

  let colorCard;
  if (task.priority == 'low') {
    colorCard = 'bg-easy';
  } else if (task.priority == 'medium') {
    colorCard = 'bg-medium';
  } else {
    colorCard = 'bg-hard';
  }

  const onConfirm = async () => {
    try {
      await asyncDeleteTask(taskId);
      toast.success('Project deleted successfully');
      asyncGetDetail(task.projectId);
      const modal = document.getElementById(
        `modal_confirm_rm_tsk_${taskId}`
      ) as HTMLDialogElement;
      if (modal) {
        modal.close();
      }
    } catch (err) {
      console.log(err);
      toast.error('Delete task failed');
    }
  };

  return (
    <div className={`card-task ${colorCard} w-[19rem] h-[19rem] p-5 relative`}>
      <div className="top-card">
        <div className="title">
          <h5 className="font-bold text-lg">{task.name}</h5>
        </div>
        <div className="deadline text-sm mt-1">Due Date : {formatDate(task.dueDate)}</div>
      </div>
      <div className="main-card mt-3">
        <p className="text-[0.95rem]">{task.description}</p>
      </div>
      <div className="container-actions absolute bottom-6 w-10/12">
        <div className="actions-card mt-3 flex gap-3 ">
          <Button
            onClick={showModalDelete}
            className="py-[6px] px-0 w-full h-auto bg-primary-one hover:bg-[#854f2f]"
          >
            <span className="text-white text-xs">Done</span>
          </Button>
          <Button
            onClick={showModalDelete}
            className="py-[6px] px-0 w-full h-auto bg-primary-one hover:bg-[#854f2f]"
          >
            <span className="text-white text-xs">Remove Task</span>
          </Button>
          <ModalConfirmation
            id={`modal_confirm_rm_tsk_${taskId}`}
            message="Are you sure to want delete this task?"
            onConfirm={onConfirm}
          />
        </div>
      </div>
    </div>
  );
}

export default CardTask;
