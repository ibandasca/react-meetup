import { ALL_MEETUP_PAGE, FAVORITES_PAGE, NEW_MEETUP_PAGE } from "./../../utils/constants";

import classes from "./MainNavigation.module.css";

import { Link } from "react-router-dom";

export default function MainNavigation() {
  return (
    <header className={classes.header} data-test="navigation-header">
      <div className={classes.logo}>React Meetups</div>
      <nav>
        <ul>
          <li>
            <Link to="/">
             All Meetups
            </Link>
          </li>
          <li>
            <Link to="/newmeetup">
              Add New Meetup
            </Link>
          </li>
          <li>
             <Link to="/favorites">
              My Favorites            
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
