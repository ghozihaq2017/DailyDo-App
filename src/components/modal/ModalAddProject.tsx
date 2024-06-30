'use client';

import React, { useState, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import useInput from '@/hooks/useInput';
import useProjectsStore from '@/store/projectStore';
import toast from 'react-hot-toast';

function ModalAddProject() {
  const [title, onTitleChange] = useInput('');
  const [description, onDescriptionChange] = useInput('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const modalRef = useRef<HTMLDialogElement>(null);

  const { asyncAddProject } = useProjectsStore();

  const onAddProject = async () => {
    setIsLoading(true);
    try {
      if (!title || !description) {
        toast.error('Please insert in all fields');
        setIsLoading(false);
        return;
      }
      await asyncAddProject(title, description);
      toast.success(`Project ${title} added successfully`);
      setIsLoading(false);
      if (modalRef.current) {
        modalRef.current.close();
      }
    } catch (err) {
      console.log(err);
      toast.error('Add new project failed');
      setIsLoading(false);
    }
  };

  return (
    <dialog id="add_project" className="modal sm:modal-middle" ref={modalRef}>
      <div className="modal-box bg-white py-8 ">
        <h3 className="font-bold text-lg">Add New Project</h3>
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
              value={title}
              onChange={onTitleChange}
              required
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
              value={description}
              onChange={onDescriptionChange}
              required
              disabled={isLoading}
            />
          </div>
        </div>

        <div className="modal-action flex justify-between mt-5">
          <Button
            type="button"
            onClick={onAddProject}
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

export default ModalAddProject;
