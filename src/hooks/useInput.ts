'use client';

import { useState, ChangeEvent } from 'react';

function useInput(defaultValue: string = '') {
  const [value, setValue] = useState<string>(defaultValue);

  function handleValueChange(
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    setValue(event.target.value);
  }

  return [value, handleValueChange, setValue] as const;
}

export default useInput;
