import styled from 'styled-components';

import { TwoColGrid } from "../TwoColGrid";

const StyledInput = styled.input`
    width: 100%;
    border: none; 
    border:solid 0.0625rem #757575;
    border-radius: 0.3125rem;
    padding: 0 1rem;
    height: 1.875rem;
`;

export default function Input({ label, value, onChange }) {
  return (
    <TwoColGrid>
      <div>
        <label>{label}</label>
      </div>
      <div>
        <StyledInput value={value} onChange={onChange} />
      </div>
    </TwoColGrid>
  );
}
