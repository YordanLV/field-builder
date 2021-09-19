import { useState } from 'react';

export default function ArrayTextArea({label, value, onChange}) {
  return (
    <div>
      <label>{label}</label>
      <textarea value={value} onChange={onChange} />
    </div>
  );
}