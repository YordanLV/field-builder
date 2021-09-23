import { useState, useEffect } from "react";
import axios from "axios";

import Input from "../components/Input";
import Card from "../components/Card";
import SuccessMessage from "../components/Success";
import Error from "../components/Error";
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

  const initialState = () => JSON.parse(localStorage.getItem("fields")) || defaultFields;

  const OPTIONS_LIMIT = 50;

  const [fields, setFields] = useState(initialState);
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState(false);

  useEffect(() => {
    localStorage.setItem('fields', JSON.stringify(fields));
  }, [fields]);

  const setLabel = (event) => {
    const value = event.target.value;
    const updatedFields = { ...fields, label: value };
    setFields(updatedFields);
  };

  const setDefaultValue = (event) => {
    const updatedFields = { ...fields, defaultValue: event.target.value }
    setFields(updatedFields);
  };

  const addDefaultValue = () => {
    const { defaultValue } = fields;
    if (!fields.choices.includes(defaultValue)) {
      const updatedFields = { ...fields, choices: [...fields.choices, defaultValue] };
      setFields(updatedFields);
    }
  };

  const toggleCheckbox = () => {
    const updatedFields = { ...fields, multiSelect: !fields.multiSelect };
    setFields(updatedFields);
  };

  const setChoices = (event) => {
    const updatedFields = { ...fields, choices: event.target.value.split(/\n/) };
    setFields(updatedFields);
  };

  const arrangeAlphabetical = () => {
    const updatedFields = { ...fields, choices: fields.choices.sort() };
    setFields(updatedFields);
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
          setError("");
          setSuccessMessage(true);
        });
    }
  };

  const stringChoices = fields.choices.join("\n");

  return (
    <>
      <Card title="Field Builder">
        {error && <Error>{error}</Error>}
        {successMessage && (
          <SuccessMessage>
            Successfully Submitted (Check Console)
          </SuccessMessage>
        )}
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
          <div />
          <div>
            <div style={{ marginBottom: "1rem" }}>
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
    </>
  );
}
