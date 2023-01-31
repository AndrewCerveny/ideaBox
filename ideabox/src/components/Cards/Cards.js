import React from "react";
import '../Cards/Cards.css';

const Card = (prop) => {
    const {title} = prop; 
    const {description} = prop;
    const {id} = prop;
    const {deleteIdea} = prop
    return (
        <div className='card'>
            <h3> {title} </h3>
            <p> {description} </p>
            <button onClick={() => deleteIdea(id)}> 🗑️ </button> 
        </div>
    )
}
export default Card; 