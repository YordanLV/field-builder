import { useState } from "react";

import Input from "../components/Input";
import Textarea from "../components/ArrayTextArea";
import Button from "../components/Button";

export default function App() {
  const defaultFields = {
    label: "",
    defaultValue: "",
    choices: [],
  };

  const OPTIONS_LIMIT = 50;

  const [fields, setFields] = useState(defaultFields);
  const [error, setError] = useState("");

  const setLabel = (event) => {
    const value = event.target.value;
    setFields({ ...fields, label: value });
  };

  const setDefaultValue = (event) => {
    setFields({ ...fields, defaultValue: event.target.value });
  };

  const addDefaultValue = () => {
    const { defaultValue } = fields;
    if (!fields.choices.includes(defaultValue)) {
      setFields({ ...fields, choices: [...fields.choices, defaultValue] });
    }
  };

  const setChoices = (event) => {
    setFields({ ...fields, choices: event.target.value.split(/\n/) });
  };

  const arrangeAlphabetical = () => {
    setFields({ ...fields, choices: fields.choices.sort() });
  };

  const resetFields = () => {
    setFields(defaultFields);
  };

  const checkForDuplicates = (array) => {
    return new Set(array).size !== array.length;
  };

  const validation = () => {
    if (fields.label === "") {
      setError("Label is required!");
    } else if (checkForDuplicates(fields.choices)) {
      setError("An option is duplicated!");
    } else if (fields.choices.length >= OPTIONS_LIMIT) {
      setError(`Options should not exceed more than ${OPTIONS_LIMIT}`);
    }
  };
  const submit = () => {
    validation();
    addDefaultValue();
  };

  const stringChoices = fields.choices.join("\n");

  return (
    <div className="App">
      <header className="App-header">
        <h1>Field Builder</h1>
      </header>
      {error}
      <Input label="Label" onChange={setLabel} value={fields.label} />
      <Input
        label="Default Value"
        onChange={setDefaultValue}
        value={fields.defaultValue}
      />
      <Textarea label="Choices" onChange={setChoices} value={stringChoices} />
      <Button
        onClick={arrangeAlphabetical}
        label="Display Choices Alphabetical"
      />
      <Button onClick={resetFields} label="Cancel" />
      <Button onClick={submit} label="Submit" />
    </div>
  );
}
