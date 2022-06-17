import React, { createContext, useState} from "react";

const MeetupsListContext = createContext()

const MeetupsListProvider = ({ children }) => {
    const [mettups, setMeetups] = useState([
        {
            "id": "m1",
            "title": "This is a first meetup",
            "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg",
            "address": "Meetupstreet 5, 12345 Meetup City",
            "description": "This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!"
        },
        {
            "id": "m2",
            "title": "This is a second meetup",
            "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg",
            "address": "Meetupstreet 5, 12345 Meetup City",
            "description": "This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!"
        },
        {
            "id": "m3",
            "title": "This is a third meetup",
            "image": "https://www.deutschakademie.de/muenchen/blog/wp-content/uploads/2021/03/Mu%CC%88nchen-Alemania.jpg",
            "address": "Meetupstreet 5, 12345 Meetup City",
            "description": "This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!"
        }
    ])

    const [favoriteMeetups, setFavoriteMeetups] = useState([])

    return (
       <MeetupsListContext.Provider value={{
        mettups, 
        setMeetups, 
        favoriteMeetups, 
        setFavoriteMeetups
       }}>
        {children}
       </MeetupsListContext.Provider> 
    )
}

export { MeetupsListContext, MeetupsListProvider }

