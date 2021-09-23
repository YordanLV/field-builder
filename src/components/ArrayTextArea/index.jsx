import styled from "styled-components";

import { TwoColGrid } from "../TwoColGrid";

const TextAreaWrapper = styled.div`
  position: relative;
`;

const Textarea = styled.textarea`
  font: 400 1rem Arial;
  position: relative;
  width: 100%;
  border: none;
  border: solid 0.0625rem #757575;
  border-radius: 5px;
  height: 1.875rem;
  resize: none;
  height: 200px;
  z-index: 2;
  padding: 0.5rem 1rem;
`;

export default function ArrayTextArea({ label, value, onChange }) {
  return (
    <TwoColGrid>
      <div>
        <label>{label}</label>
      </div>
      <div>
        <TextAreaWrapper>
          <Textarea value={value} onChange={onChange} />
        </TextAreaWrapper>
      </div>
    </TwoColGrid>
  );
}
