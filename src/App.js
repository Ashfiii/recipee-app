import React, { useState, useEffect } from 'react';
import Recipee from './Recipee';
import './App.css';

const App = () => {

  const [recipees, setRecipees] = useState([])
  const [search, setSearch] = useState('')
  const [query, setQuery] = useState('chicken')

  useEffect(() => {
    getRecipees();
  }, [query]);

  const req = `https://api.edamam.com/search?q=${query}&app_id=${process.env.REACT_APP_APP_ID}&app_key=${process.env.REACT_APP_APP_KEY}`;

  const getRecipees = async () => {
    const res = await fetch(req)
    const data = await res.json();
    //console.log(data);
    setRecipees(data.hits);
  }

  const searchHandler = (e) => {
    setSearch(e.target.value)
  }

  const queryHandler = (e) => {
    e.preventDefault();
    setQuery(search);
    setSearch('');
  }

  return (
    <div className="App">
      <form onSubmit={queryHandler} className="search-form">
        <input className="search-bar" onChange={searchHandler} />
        <button className="search-button" type="submit">Search</button>
      </form>
      <div className="recipees">
        {recipees.map(recipee => (
          <Recipee key={recipee.recipe.label}
            title={recipee.recipe.label}
            calories={recipee.recipe.calories}
            image={recipee.recipe.image}
            ingredients={recipee.recipe.ingredients} />
        ))}
      </div>
    </div>
  )
}

export default App;
