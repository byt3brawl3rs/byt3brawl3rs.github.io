import React, {Component} from "react";
import './ItemCard.css';

function ItemCard(props) {
    return (
        <div className="ItemCard">
            <p id="title">${props.title}</p>
            <img id="itemPhoto" alt="" src="./upload/Ripped%20Jeans.jpg"></img>
            <p className="price">$${props.price}</p>
            <img id="review" alt="" src="./upload/1star.jpeg"></img>
        </div>
    );

}

export default ItemCard;