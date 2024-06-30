'use client'

import ModalAddProject from '@/components/modal/ModalAddProject';
import ContainerProjects from '@/components/parts/ContainerProjects';
import Header from '@/components/parts/Header';
import { Button } from '@/components/ui/button';

export default function Home() {
  const showModal = () => {
    const modal = document.getElementById('add_project') as HTMLDialogElement;
    if (modal) {
      modal.showModal();
    }
  };
  return (
    <main>
      <Header />
      <div className="content-projects min-h-screen py-24 xl:py-28 px-4 xl:px-20 ">
        <div className="container-content  w-full min-h-[600px] ">
          <Button
            onClick={showModal}
            className=" my-5 gap-2 ml-4 bg-primary-one hover:bg-[#854f2f]"
            variant="outline"
          >
            <span className="font-base text-white">Add New Project</span>
          </Button>
          <ModalAddProject />
          <ContainerProjects />
        </div>
      </div>
    </main>
  );
}
