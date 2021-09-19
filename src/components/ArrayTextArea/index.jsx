import { useState } from 'react';

export default function ArrayTextArea() {
  const [value, setValue] = useState('');
  const [arrayValue, setArrayValue] = useState([]);

  const onChange = (event) => {
    setValue(event.target.value);
    setArrayValue(event.target.value.split(/\n/))
  };

  const arrangeAlphabetical = () => {
    setValue(arrayValue.sort().join("\n"));
  }

  return (
    <>
      <label>Input value:</label>
      <textarea cols="5" rows="1" value={value} onChange={onChange} />
      <button onClick={arrangeAlphabetical}>Arrange alphabetical</button>
    </>
  );
}