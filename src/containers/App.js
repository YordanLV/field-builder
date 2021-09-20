import { useEffect, useState, useCallback } from "react";
import axios from "axios";

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

  const saveLocalFields = () => {
    localStorage.setItem("fields", JSON.stringify(fields));
  };
  const getSaveLocalFields = useCallback(() => {
    if (localStorage.getItem("fields") === null) {
      localStorage.setItem("fields", JSON.stringify(fields));
    } else {
      let fieldsLocal = JSON.parse(localStorage.getItem("fields"));
      setFields(fieldsLocal);
    }
  }, [fields]);

  useEffect(() => {
    getSaveLocalFields();
  }, [getSaveLocalFields]);

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
      return false;
    } else if (checkForDuplicates(fields.choices)) {
      setError("An option is duplicated!");
      return false;
    } else if (fields.choices.length >= OPTIONS_LIMIT) {
      setError(`Options should not exceed more than ${OPTIONS_LIMIT}`);
      return false;
    }
    return true;
  };

  const handleSubmit = () => {
    addDefaultValue();
    if (validation()) {
      axios
        .post("http://www.mocky.io/v2/566061f21200008e3aabd919", {
          ...fields,
          choices: [...fields.choices, fields.defaultValue],
        })
        .then((res) => {
          console.log(res);
          console.log(res.data);
        });
    }
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
        label="Display Choices Alphabetical"
        onClick={arrangeAlphabetical}
      />
      <Button onClick={resetFields} label="Cancel" />
      <Button onClick={handleSubmit} label="Submit" />
    </div>
  );
}
