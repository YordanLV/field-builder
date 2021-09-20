import styled from "styled-components";
import { uid } from "react-uid";

import { TwoColGrid } from "../TwoColGrid";

const TextAreaWrapper = styled.div`
  position: relative;
`;

const Textarea = styled.textarea`
  font: 400 16px Arial;
  position: relative;
  width: 100%;
  border: none;
  border: solid 0.0625rem #757575;
  border-radius: 5px;
  height: 1.875rem;
  resize: none;
  height: 200px;
  z-index: 2;
`;

const OverlayTextArea = styled.div`
  position: absolute;
  font: 400 1rem Arial;
  top: 0;
  width: 100%;
  height: 1.875rem;
  padding: 0.2rem 0.2rem;
  word-wrap: break-word;
  z-index: 3;
`;

const HighlightedText = styled.span`
  color: red;
`;

export default function ArrayTextArea({ label, value, arrayValues, onChange }) {
  return (
    <TwoColGrid>
      <div>
        <label>{label}</label>
      </div>
      <div>
        <TextAreaWrapper>
          <Textarea rows="5" wrap="hard" value={value} onChange={onChange} />
          <OverlayTextArea>
            {arrayValues?.map((singleValue) => {
              const nonExceededValue = singleValue.slice(0, 40);
              const exceededValue = singleValue.slice(40);
              return (
                <div key={uid(singleValue)}>
                  {nonExceededValue}
                  {exceededValue && (
                    <HighlightedText>{exceededValue}</HighlightedText>
                  )}
                </div>
              );
            })}
          </OverlayTextArea>
        </TextAreaWrapper>
      </div>
    </TwoColGrid>
  );
}
