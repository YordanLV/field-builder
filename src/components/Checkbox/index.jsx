import styled from "styled-components";

import { TwoColGrid } from "../TwoColGrid";

const StyledCheckbox = styled.input`
  margin: 0 0.5rem;
`;

const RequiredText = styled.span`
  color: #646464;
  font-weight: 600;
`;

export default function Checkbox({ checked, label, onChange }) {
  return (
    <TwoColGrid>
      <div>
        <label>{label}</label>
      </div>
      <div>
        <span>Multi-select</span>
        <StyledCheckbox type="checkbox" checked={checked} onChange={onChange} />
        <RequiredText>A Value is required</RequiredText>
      </div>
    </TwoColGrid>
  );
}
