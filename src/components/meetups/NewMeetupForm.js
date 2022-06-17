import { useState, useContext } from "react";
import { MeetupsListContext } from '../../contexts/meetupListContext';
import Card from "../ui/Card";
import classes from "./NewMeetupForm.module.css";

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
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="title">Meetup Title</label>
          <input 
            type="text" 
            required 
            id="title" 
            value={meetupTitle} 
            onChange={(e) => handleChangeMeetUpTitle(e.target.value)}
          />
        </div>
        <div className={classes.control}>
          <label htmlFor="image">Meetup Image</label>
          <input 
            type="url" 
            required 
            id="image"
            value={meetupImage}
            onChange={(e) => handleChangeMeetupImage(e.target.value)} 
          />
        </div>
        <div className={classes.control}>
          <label htmlFor="address">Address</label>
          <input 
            type="text" 
            required 
            id="address"
            value={meetupAddress}
            onChange={(e) => handleChangeAddress(e.target.value)} />
        </div>
        <div className={classes.control}>
          <label htmlFor="description">Description</label>
          <textarea 
            id="description" 
            required 
            rows="5"
            value={meetupDescription}
            onChange={(e) => handleChangeMeetupDescription(e.target.value)}
            >
          </textarea>
        </div>
        <div className={classes.actions}>
          <button>Add Meetup</button>
        </div>
      </form>
    </Card>
  );
}
