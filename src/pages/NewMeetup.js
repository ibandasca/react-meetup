import NewMeetupForm from "../components/meetups/NewMeetupForm";
import styled from "styled-components";

const Container = styled.section`
  margin: 3rem auto;
  width: 90%;
  max-width: 40rem;
`


export default function NewMeetupsPage() {
  return (
    <Container>
      <h1>Add New Meetup</h1>
      <NewMeetupForm />
    </Container>
  );
}
