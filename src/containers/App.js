import { useState } from "react"
import Input from "../components/Input";
import Textarea from "../components/ArrayTextArea";

export default function App() {
  const [fields, setFields] = useState({
    label: '',
    defaultValue: '',
    choices: [],
  });

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

  const stringChoices = fields.choices.join("\n");

  console.log(fields.choices)

  return (
    <div className="App">
      <header className="App-header">
        <h1>Field Builder</h1>
      </header>
        <Input label="Label" onChange={setLabel} value={fields.label} />
        <Input label="Default Value" onChange={setDefaultValue} value={fields.defaultValue} />
        <Textarea label="Choices" onChange={setChoices} value={stringChoices}/>
        <button onClick={arrangeAlphabetical}>Arrange alphabetical</button>
    </div>
  );
}
