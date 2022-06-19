import styled from "styled-components";

const CardContainer = styled.div`
  background-color: white;
  border-radius: 6px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
`;

export default function Card({ children }) {
  return <CardContainer>{children}</CardContainer>;
}
