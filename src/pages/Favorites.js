import React, { useContext } from "react";
import { MeetupsListContext } from "../contexts/meetupListContext";
import FavoriteMeetupItem from "../components/meetups/FavoriteMeetupItem";
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

export default function FavoritesPage() {
  const { favoriteMeetups } = useContext(MeetupsListContext);

  return (
    <Container>
      <h1 data-testid="favorite-title">Favorites Page</h1>
      <StyledList>
        {favoriteMeetups.map((item) => {
          return (
            <div key={item.id}>
              <FavoriteMeetupItem item={item} />
            </div>
          );
        })}
      </StyledList>
    </Container>
  );
}
