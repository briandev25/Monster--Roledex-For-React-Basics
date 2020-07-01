import React from 'react';
import './searchBox.styles.css';


export const SearchBox = ({placeholder,searchFieldHandler}) =>(
    <input
    className ='search' 
    type="search"
    placeholder={placeholder}
    onChange = {searchFieldHandler}/>
);