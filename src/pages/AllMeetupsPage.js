import React, { useContext } from "react";
import { MeetupsListContext } from "../contexts/meetupListContext";
import MeetupItem from "../components/meetups/MeetupItem";
import styled from "styled-components";

const Container = styled.section`
  margin: 10rem auto;
  width: 90%;
  max-width: 40rem;
`;

const StyledList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

export default function AllMeetupsPage() {
  const { mettups } = useContext(MeetupsListContext);

  return (
    <Container>
      <h1 data-testid="all-meetups-title">All Meetups</h1>
      <StyledList data-testid="list-of-meetups">
        {mettups.map((item) => {
          return (
            <div key={item.id}>
              <MeetupItem item={item} />
            </div>
          );
        })}
      </StyledList>
    </Container>
  );
}
