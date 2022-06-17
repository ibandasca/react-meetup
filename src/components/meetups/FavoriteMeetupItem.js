import React, { useContext } from "react";
import { MeetupsListContext } from '../../contexts/meetupListContext'; 
import classes from "./MeetupItem.module.css";
import Card from "../ui/Card";

export default function FavoriteMeetupItem({ item }) {
    
    const { favoriteMeetups, setFavoriteMeetups } = useContext(MeetupsListContext)
    
    const handleRemoveFromFavorites = (id) => {
        const newArrayofFavoriteItems = favoriteMeetups.filter((element) => element.id !== id )
        setFavoriteMeetups(newArrayofFavoriteItems)
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
          <button onClick={() => handleRemoveFromFavorites(item.id)} data-testid='remove-from-favorite-button'>Remove from favorites</button>
        </div>
      </Card>
    </li>
  );
}
