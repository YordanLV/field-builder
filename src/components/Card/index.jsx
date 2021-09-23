import styled from "styled-components";

const StyledCard = styled.div`
  border-radius: 0.3125rem;
  border: 1px solid #d9edf7;
  left: 50%;
  position: absolute;
  top: 50%;
  transform: translate(-50%, -45%);
  @media only screen and (max-width: 56.25rem) {
    position: relative;
    transform: initial;
    left: 0%;
  }
`;

const CardTitle = styled.h3`
  background-color: #d9edf7;
  color: #206c93;
  font-size: 1.125rem;
  margin-top: 0;
  padding: 0.625rem;
`;

const CardWrapper = styled.div`
  padding: 0 3.75rem 5rem;
  @media only screen and (max-width: 56.25rem) {
    padding: 0 1.5rem 2rem;
  }
`;

export default function Card({ title, children }) {
  return (
    <StyledCard>
      <CardTitle>{title}</CardTitle>
      <CardWrapper>{children}</CardWrapper>
    </StyledCard>
  );
}
