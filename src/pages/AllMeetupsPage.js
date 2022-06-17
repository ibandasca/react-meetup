import React, { useContext } from 'react';
import { MeetupsListContext } from '../contexts/meetupListContext';
import MeetupItem from "../components/meetups/MeetupItem";
import classes from "./../components/meetups/MeetupList.module.css";
import styled from "styled-components";

const Container = styled.section`
  margin: 10rem auto;
  width: 90%;
  max-width: 40rem;
`

export default function AllMeetupsPage() {

  const { mettups } = useContext(MeetupsListContext);

  return (
    <Container>
      <h1>All Meetups</h1>
      <ul className={classes.list}>
        {mettups.map((item) => {
          return (
            <div key={item.id}>
              <MeetupItem item={item}/>
            </div>
          )})
        }
      </ul>
    </Container>
  );
}
