import React, { useContext } from "react";
import { MeetupsListContext } from '../contexts/meetupListContext';
import FavoriteMeetupItem from "../components/meetups/FavoriteMeetupItem";
import classes from "./../components/meetups/MeetupList.module.css";
import styled from "styled-components";

const Container = styled.section`
  margin: 10rem auto;
  width: 90%;
  max-width: 40rem;
`

export default function FavoritesPage() {
  
  const { favoriteMeetups } = useContext(MeetupsListContext)

  return (
    <Container>
      <h1 data-testid="favorite-title">Favorites Page</h1>
      <ul className={classes.list}>
        {favoriteMeetups.map((item) => {
          return (
            <div key={item.id}>            
              <FavoriteMeetupItem item={item}/>
            </div>
          )
        })}
      </ul>
    </Container>
  );
}
