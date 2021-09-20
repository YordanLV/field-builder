import styled from 'styled-components';

import { TwoColGrid } from "../TwoColGrid";

const StyledInput = styled.input`
    width: 100%;
    border: none; 
    border:solid 1px #757575;
    border-radius: 5px;
    padding: 0 0.5rem;
    height: 30px;
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
