'use client';

import ModalConfirmation from '@/components/modal/ModalConfirmation';
import ModalEditTask from '@/components/modal/ModalEditTask';
import Header from '@/components/parts/Header';
import { Button } from '@/components/ui/button';
import React from 'react';

function DetailTaskPage() {
  const showModal = () => {
    const modal = document.getElementById('my_modal_5') as HTMLDialogElement;
    if (modal) {
      modal.showModal();
    }
  };
  const showModal2 = () => {
    const modal = document.getElementById('my_modal_8') as HTMLDialogElement;
    if (modal) {
      modal.showModal();
    }
  };
  return (
    <section>
      <Header />
      <div className="content-detailTask min-h-screen py-24 xl:py-28 px-4 xl:px-20 ">
        <div className="container-content  w-full  ">
          <div className="top-content border-b border-primary-one pb-5">
            <h2 className="text-3xl font-bold">Task 1</h2>
            <p className="mt-2">Due Date: Kamis, 22 Agustus 2024</p>
            <p className="mt-1">Priority: Medium</p>
            <p className="mt-1">Status: Not Started</p>
          </div>
          <div className="action-detailTask gap-2 flex">
            <Button
              onClick={showModal}
              className=" my-5 gap-2 w-28  bg-primary-one hover:bg-[#854f2f]"
              variant="outline"
            >
              <span className="font-base text-white">Done</span>
            </Button>
            <Button
              onClick={showModal2}
              className=" my-5 gap-2 w-28   bg-primary-one hover:bg-[#854f2f]"
              variant="outline"
            >
              <span className="font-base text-white">Edit Task</span>
            </Button>
            <ModalEditTask />
            <Button
              onClick={showModal}
              className=" my-5 gap-2 w-28  bg-primary-one hover:bg-[#854f2f]"
              variant="outline"
            >
              <span className="font-base text-white">Delete Task</span>
            </Button>
            <ModalConfirmation />
          </div>
          <div className="tasks-content-urgent bg-slate-100  px-5 py-5 mb-7">
            <div className="title">
              <h4 className="text-xl font-semibold">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis quam quae,
                quaerat itaque deserunt tempora eaque rem officiis repellat cumque placeat atque,
                provident sit ullam. Laborum earum perferendis quibusdam? Nobis qui magni quae ipsa
                distinctio, ullam quam, officia dolore eaque dicta atque ducimus iste!
              </h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DetailTaskPage;
