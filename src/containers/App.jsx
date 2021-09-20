import { useState } from "react";
import axios from "axios";

import Input from "../components/Input";
import Card from "../components/Card";
import { TwoColGrid } from "../components/TwoColGrid";
import Checkbox from "../components/Checkbox";
import Textarea from "../components/ArrayTextArea";
import Button from "../components/Button";

export default function App() {
  const defaultFields = {
    label: "",
    multiSelect: true,
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

  const toggleCheckbox = () => {
    setFields({ ...fields, multiSelect: !fields.multiSelect });
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
    <Card title="Field Builder">
      {error}
      <Input label="Label" onChange={setLabel} value={fields.label} />
      <Checkbox
        label="Type"
        onChange={toggleCheckbox}
        checked={fields.multiSelect}
      />
      <Input
        label="Default Value"
        onChange={setDefaultValue}
        value={fields.defaultValue}
      />
      <Textarea
        label="Choices"
        onChange={setChoices}
        value={stringChoices}
        arrayValues={fields.choices}
      />
      <TwoColGrid>
        <div/>
        <div>
          <div style={{marginBottom: '1rem'}}>
            <Button
              label="Display Choices Alphabetical"
              onClick={arrangeAlphabetical}
              tertiary
            />
          </div>
          <Button onClick={handleSubmit} label="Save Changes" />
          <span style={{ padding: "0 1rem" }}>or</span>
          <Button onClick={resetFields} label="Cancel" secondary />
        </div>
      </TwoColGrid>
    </Card>
  );
}
