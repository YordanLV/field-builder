import { useState } from "react"

import Input from "../components/Input";
import Textarea from "../components/ArrayTextArea";
import Button from "../components/Button";

export default function App() {

  const defaultFields = {
    label: '',
    defaultValue: '',
    choices: [],
  }
  const [fields, setFields] = useState(defaultFields);

  const setLabel = (event) => {
    setFields({...fields, label: event.target.value});
  }

  const setDefaultValue = (event) => {
    setFields({...fields, defaultValue: event.target.value});
  };

  const setChoices = (event) => {
    setFields({...fields, choices: event.target.value.split(/\n/)})
  };

  const arrangeAlphabetical = () => {
    setFields({...fields, choices: fields.choices.sort()});
  }

  const resetFields = () => {
    setFields(defaultFields)
  };

  const stringChoices = fields.choices.join("\n");

  return (
    <div className="App">
      <header className="App-header">
        <h1>Field Builder</h1>
      </header>
        <Input label="Label" onChange={setLabel} value={fields.label} />
        <Input label="Default Value" onChange={setDefaultValue} value={fields.defaultValue} />
        <Textarea label="Choices" onChange={setChoices} value={stringChoices}/>
        <Button onClick={arrangeAlphabetical} label="Display Choices Alphabetical"/>
        <Button onClick={resetFields} label="Cancel" />
    </div>
  );
}
