import React from 'react';
import './card.styles.css';

export const Card = props =>(
   <div className ="card-container">
       <img alt ="monsters" src ={`https://robohash.org/${props.monster.id}?set=set3$size=180*180`} />
       <h3>{props.monster.name} </h3>
      <p>{props.monster.email}</p>
   </div>
);