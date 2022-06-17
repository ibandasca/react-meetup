import React, { useContext } from "react";
import { MeetupsListContext } from '../../contexts/meetupListContext';
import classes from "./MeetupItem.module.css";
import Card from "../ui/Card";

export default function MeetupItem({ item }) {
  
  const { favoriteMeetups, setFavoriteMeetups } = useContext(MeetupsListContext)

  const handleAddToFavorite = (id) => {
    const isElementAFavoriteOne = favoriteMeetups.find((element) => element.id === id)
    if(!isElementAFavoriteOne) setFavoriteMeetups([...favoriteMeetups, item])
  }

  return (
    <li className={classes.item} data-test='meet-up-item'>
      <Card>
        <div className={classes.image}>
          <img src={item.image} alt={item.title} />
        </div>
        <div className={classes.content}>
          <h3>{item.title}</h3>
          <address>{item.address}</address>
          <p>{item.description}</p>
        </div>
        <div className={classes.actions}>
          <button onClick={() => handleAddToFavorite(item.id)} data-testid='add-to-favorites-button'>
            Add to favorites
          </button>
        </div>
      </Card>
    </li>
  );
}
