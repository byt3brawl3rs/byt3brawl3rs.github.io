import React, {useEffect, useState} from "react";
import SwipeLeft from "./SwipeLeft";
import ItemCard from "./ItemCard";
import SwipeRight from "./SwipeRight";

function FeaturedItems(props) {
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch("localhost:8080/items")
            .then(response => {
                return response.json()
            }).then(items => {
            setItems(items)
        });
    }, []);
    return (
        <div className="FeaturedItems">
            <SwipeLeft/>
            items.map((item) => <ItemCard title={item.title} price={item.price}/>);
            <SwipeRight/>
        </div>
    );

}

export default FeaturedItems;