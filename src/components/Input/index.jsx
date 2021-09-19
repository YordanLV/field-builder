import { useState } from 'react';

export default function Input() {
  const [value, setValue] = useState('');

  const onChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div>
      <label>Input value:</label>
      <input value={value} onChange={onChange} />
    </div>
  );
}