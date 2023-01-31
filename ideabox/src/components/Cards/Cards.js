import React from "react";
import '../Cards/Cards.css';

const Card = (prop) => {
    
    const {title} = prop; 
    const {description} = prop;
    const {id} = prop;
    return (
        <div className='card'>
            <h3> {title} </h3>
            <p> {description} </p>
            <button> 🗑️ </button> 
        </div>
    )
}
export default Card; 