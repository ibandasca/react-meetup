import { useState, useContext } from "react";
import styled from "styled-components";
import { MeetupsListContext } from '../../contexts/meetupListContext';
import Card from "../ui/Card";

const StyledForm = styled.form`
  padding: 1rem;
`

const Control = styled.div`
  margin-bottom: 0.5rem;
`

const StyledLabel = styled.label`
  display: block;
  font-weight: bold;
  margin-bottom: 0.5rem;
`

const StyledInput = styled.input`
  display: block;
  font: inherit;
  border-radius: 4px;
  border: 1px solid #ccc;
  padding: 0.25rem;
  width: 100%;
`

const StyledTextArea = styled.textarea`
  display: block;
  font: inherit;
  border-radius: 4px;
  border: 1px solid #ccc;
  padding: 0.25rem;
  width: 100%;
`

const Actions = styled.div`
  margin-top: 1rem;
  text-align: right;

  & > button {
    font: inherit;
    cursor: pointer;
    background-color: #77002e;
    color: white;
    padding: 0.5rem 1.5rem;
    border: 1px solid #77002e;
    border-radius: 4px;
    font-weight: bold;

    &:hover {
      background-color: #a50e48;
      border-color: #a50e48;
    }
  }
`

export default function NewMeetupForm() {

  const { mettups, setMeetups } = useContext(MeetupsListContext);

  const [meetupTitle, setMeetupTitle] = useState("");
  const [meetupImage, setMeetupImage] = useState("");
  const [meetupAddress, setMeetupAddress] = useState("");
  const [meetupDescription, setMeetupDescription] = useState("");
  
  function submitHandler(event) {
    event.preventDefault()
    
    const numberOfMeetups = mettups.length + 1

    const newMeetup = {
      "id": "m" + numberOfMeetups,
      "title": meetupTitle,
      "image": meetupImage,
      "address": meetupAddress,
      "description": meetupDescription
    }

    setMeetups([...mettups, newMeetup])
    setMeetupTitle("")
    setMeetupImage("")
    setMeetupAddress("")
    setMeetupDescription("")
  }

  const handleChangeMeetUpTitle = (value) => {
    setMeetupTitle(value)
  }

  const handleChangeMeetupImage = (url) => {
    setMeetupImage(url)
  }

  const handleChangeAddress = (address) => {
    setMeetupAddress(address)
  }

  const handleChangeMeetupDescription = (description) => {
    setMeetupDescription(description)
  }


  return (
    <Card>
      <StyledForm onSubmit={submitHandler}>
        <Control>
          <StyledLabel htmlFor="title">Meetup Title</StyledLabel>
          <StyledInput 
            type="text" 
            required 
            id="title" 
            value={meetupTitle} 
            onChange={(e) => handleChangeMeetUpTitle(e.target.value)}
            data-testid="title"
          />
        </Control>
        <Control>
          <StyledLabel htmlFor="image">Meetup Image</StyledLabel>
          <StyledInput 
            type="url" 
            required 
            id="image"
            value={meetupImage}
            onChange={(e) => handleChangeMeetupImage(e.target.value)} 
            data-testid="image"
          />
        </Control>
        <Control>
          <StyledLabel htmlFor="address">Address</StyledLabel>
          <StyledInput 
            type="text" 
            required 
            id="address"
            value={meetupAddress}
            onChange={(e) => handleChangeAddress(e.target.value)} 
            data-testid="address"
          />
        </Control>
        <Control>
          <StyledLabel htmlFor="description">Description</StyledLabel>
          <StyledTextArea 
            id="description" 
            required 
            rows="5"
            value={meetupDescription}
            onChange={(e) => handleChangeMeetupDescription(e.target.value)}
            data-testid="description"
            >
          </StyledTextArea>
        </Control>
        <Actions>
          <button data-testid="add-meetup-button">Add Meetup</button>
        </Actions>
      </StyledForm>
    </Card>
  );
}
