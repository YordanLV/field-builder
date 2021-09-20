import styled, { css } from "styled-components";

const StyledButton = styled.button`
  background-color: #5dbb5b;
  border-radius: 0.3125rem;
  border: 0;
  color: white;
  font-size: 1rem;
  font-weight: 400;
  padding: 0.5rem;
  cursor: pointer;
  ${(props) =>
    props.secondary &&
    css`
      background: white;
      color: #ff0004;
    `}
    ${(props) =>
    props.tertiary &&
    css`
      background: white;
      border: 0.0625rem solid black;
      color: black;
      width: 100%;
    `}
`;

export default function Button({ label, secondary, tertiary, onClick }) {
  return <StyledButton onClick={onClick} secondary={secondary} tertiary={tertiary}>{label}</StyledButton>;
}
