'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
import type { ModalConfirmationProps } from '@/types/app';


function ModalConfirmation({ id, message, onConfirm }: ModalConfirmationProps) {
  return (
    <dialog id={id} className="modal sm:modal-middle">
      <div className="modal-box bg-white min-h-52 pt-14">
        <div className="flex justify-center ">
          <h3 className="font-bold text-lg text-center">{message}</h3>
        </div>
        <div className="modal-action flex justify-between mt-16">
          <Button onClick={onConfirm} className="w-28 h-auto bg-primary-one hover:bg-[#854f2f]">
            <span className="text-white ">Yes</span>
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

export default ModalConfirmation;