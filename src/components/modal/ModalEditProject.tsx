'use client';

import React, { useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import type { CardProjectProps } from '@/types/app';
import useInput from '@/hooks/useInput';
import useProjectsStore from '@/store/projectStore';
import toast from 'react-hot-toast';
import Loader from '@/components/parts/Loader';

function ModalEditProject({ project }: CardProjectProps): JSX.Element {
  const [title, onTitleChange] = useInput(project ? project.title : '');
  const [description, onDescriptionChange] = useInput(project ? project.description : '');
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const modalRef = useRef<HTMLDialogElement>(null);

  const { asyncEditProject } = useProjectsStore();

  const projectId = project.id;

  const onEditProject = async () => {
    setIsLoading(true);
    try {
      if (!title || !description) {
        toast.error('Please insert in all fields');
        setIsLoading(false);
        return;
      }
      await asyncEditProject(projectId, title, description);
      toast.success(`Project ${title} updated successfully`);
      setIsLoading(false);
      if (modalRef.current) {
        modalRef.current.close();
      }
    } catch (err) {
      console.log(err);
      toast.error('updated project failed');
      setIsLoading(false);
    }
  };

  if (!project) {
    return <Loader />;
  }

  return (
    <dialog id={`modal_edit_${project.id}`} className="modal sm:modal-middle" ref={modalRef}>
      <div className="modal-box bg-white py-8 ">
        <h3 className="font-bold text-lg">Edit Project</h3>
        <div className="form-edit mt-5 w-full ">
          <div className="grid w-full  items-center gap-1.5">
            <Label htmlFor="title" className="text-xs">
              Title
            </Label>
            <Input
              type="text"
              id="title"
              className="border-[0.1px] border-primary-one"
              placeholder="Project 1"
              defaultValue={project.title}
              onChange={onTitleChange}
              disabled={isLoading}
            />
          </div>
          <div className="grid w-full  items-center gap-1.5 mt-3">
            <Label htmlFor="desc" className="text-xs">
              Description
            </Label>
            <Textarea
              className="border-[0.1px] border-primary-one"
              placeholder="Type your description here."
              id="desc"
              defaultValue={project.description}
              onChange={onDescriptionChange}
              disabled={isLoading}
            />
          </div>
        </div>

        <div className="modal-action flex justify-between mt-5">
          <Button
            type="button"
            onClick={onEditProject}
            className="w-28 h-auto bg-primary-one hover:bg-[#854f2f]"
          >
            <span className="text-white ">Submit</span>
          </Button>
          <form method="dialog">
            <Button className="w-28 h-auto bg-primary-one hover:bg-[#854f2f]">
              <span className="text-white ">Cancel</span>
            </Button>
          </form>
        </div>
      </div>
    </dialog>
  );
}

export default ModalEditProject;
