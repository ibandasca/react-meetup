import styled from "styled-components";

const BadgeComponent = styled.div`
    background-color: #cc2062;
    color: white;
    border-radius: 12px;
    padding: 0 1rem;
    margin-left: 0.5rem;
`

export default function Badge({amount}) {
    return <BadgeComponent>{amount}</BadgeComponent>;
  }