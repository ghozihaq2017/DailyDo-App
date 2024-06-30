import React from 'react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';


function ModalEditTask() {
  return (
    <dialog id="my_modal_8" className="modal sm:modal-middle">
      <div className="modal-box bg-white py-8 ">
        <h3 className="font-bold text-lg">Edit Task</h3>
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
            />
          </div>
          <div className="grid w-full  items-center gap-1.5 mt-3">
            <Label htmlFor="priority" className="text-xs">
              Priority
            </Label>
            <select
              name="priority"
              className="select bg-white border-[0.1px] border-primary-one"
              // value={selectedWarehouse}
              required
            >
              <option value="">Select Priority</option>
              <option value="easy">Easy</option>
              <option value="medium">Medium</option>
              <option value="hard">Hard</option>
            </select>
          </div>
          <div className="grid w-full  items-center gap-1.5 mt-3">
            <Label htmlFor="dueDate" className="text-xs">
              Due Date
            </Label>
            <input
              type="date"
              id="title"
              className="border-[0.1px] h-10 w-full border-primary-one  rounded-md  border-input  px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring bg-white focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 custom-date-picker"
              placeholder="Project 1"
            />
          </div>
        </div>

        <div className="modal-action flex justify-between mt-5">
          <Button className="w-28 h-auto bg-primary-one hover:bg-[#854f2f]">
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

export default ModalEditTask;
