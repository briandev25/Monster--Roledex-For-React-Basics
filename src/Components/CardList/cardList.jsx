import React from 'react';
import './cardList.styles.css';
import '../Card/card'
import { Card } from '../Card/card';

export const CardList = props => (
<h1 className ='card-list'> 
 {props.monsters.map(monster =>
   <Card  key ={monster.id} monster={monster} />  
 )} 
 </h1>
);