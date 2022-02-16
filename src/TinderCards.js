import React, { useState } from "react";
import "./TinderCards.css";
import TinderCard from "react-tinder-card";
import { SwipeableDrawer } from "@material-ui/core";


function TinderCards () {

    const [people, setPeople] = useState([
        {
            name: 'Elon Musk', 
            url:"https://media.gettyimages.com/photos/of-tesla-and-space-x-elon-musk-attends-the-2015-vanity-fair-oscar-picture-id464172224?s=2048x2048"
        },
        {
            name: 'Jeff Bezos', 
            url:"https://imageio.forbes.com/specials-images/imageserve/5f469ea85cc82fc8d6083f05/Amazon-Founder-and-CEO-Jeff-Bezos/960x0.jpg?fit=bounds&format=jpg&width=960"
        },
    ]);





        return (
            <div className="tinderCards">
                <div className="tinderCards__cardContiner">
                    {people.map((person) => (
                        <TinderCard 
                            className="swipe"
                            key={character.name}
                            preventSwipe={["up", "down"]}
                            onSwipe={(dir) => SwipeableDrawer(dir, character.name)}
                            onCardLeftScreen={()=> outOfFrame(character.name)}
                        >
                        </TinderCard>
                    ))}
                </div>
            </div>
        )
}

export default TinderCards;