import React from "react";
import '../Ideas/Ideas.css';
import Card from '../Cards/Cards';

const Ideas = (props) => {
  const {deleteIdea} = props
 const ideaCards = props.ideas.map((idea)=> {
  return (
    <Card 
    title = {idea.title}
    description = {idea.description}
    id = {idea.id}
    key = {idea.id}
    deleteIdea = {deleteIdea}
    />
  )
 });

 

  return (
    <div className="ideas-container">
        {ideaCards}   
    </div>
  )  
}
export default Ideas;