import React, { Component} from 'react';
import './App.css';
import { CardList } from './Components/CardList/cardList';
import { SearchBox } from './Components/searchBox/searchBox';

class App extends Component{
  state = {
  monsters: [ ],
  searchField : ''
  }
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users'
    ).then(response => response.json()
    ).then(users => this.setState({monsters : users})
    ).catch(error => console.log(error));
    
  }
  searchFieldHandler = e =>{
    this.setState({searchField:e.target.value},
    //callback that is synchronous 
    () => console.log(this.state)
      );
  }

   render(){
     const { monsters, searchField } = this.state;
     const filteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLocaleLowerCase())
      );
    return ( 
      <div className="App">
        <h1>Monster Roledex</h1>
        <SearchBox placeholder = 'Search Monster' searchFieldHandler ={this.searchFieldHandler} />
        <CardList monsters ={filteredMonsters} /> 
      </div>
    );
   }
}

export default App;
