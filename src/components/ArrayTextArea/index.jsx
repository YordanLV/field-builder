import styled from "styled-components";
import { uid } from "react-uid";

const TextAreaWrapper = styled.div`
  position: relative;
`;

const Textarea = styled.textarea`
  font: 400 16px Arial;
  color: white;
`;

const OverlayTextArea = styled.div`
  position: absolute;
  font: 400 16px Arial;
  padding: 3px;
  top: 0;
`;

const HighlightedText = styled.span`
  color: red;
`;

export default function ArrayTextArea({ label, value, arrayValues, onChange }) {
  return (
    <div>
      <label>{label}</label>
      <TextAreaWrapper>
        <Textarea rows="5" wrap="hard" value={value} onChange={onChange} />
        <OverlayTextArea>
          {arrayValues?.map((singleValue) => {
              const nonExceededValue = singleValue.slice(0, 40);
              const exceededValue = singleValue.slice(40);
              return (
                <div key={uid(singleValue)}>
                  {nonExceededValue}
                  {exceededValue && <HighlightedText>{exceededValue}</HighlightedText>}
                </div>
              )
            })}
        </OverlayTextArea>
      </TextAreaWrapper>
    </div>
  );
}
