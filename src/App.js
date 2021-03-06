import React, { useEffect, useState } from 'react';
import './App.css';
import Recipe from './Recipe';

const App = () => {
    const APP_ID = 'ed3df2c4';
    const APP_KEY = 'cef2d5e1995f1c2211cb5bed3983b021';
    // const explReq = `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`;

    const [recipes, setRecipes] = useState([]);
    const [search, setSearch] = useState('');
    const [query, setQuery] = useState('chicken');

    useEffect(() => {
        getRecipes();
    }, [query]);

    const getRecipes = async () => {
        const response = await fetch(
            `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
        );
        const data = await response.json();
        setRecipes(data.hits);
        console.log(data.hits);
    };

    const updateSearch = (e) => {
        setSearch(e.target.value);
    };

    const getSearch = (e) => {
        e.preventDefault();
        setQuery(search);
    };

    return (
        <div className="App">
            <form onSubmit={getSearch} className="search-form">
                <input
                    className="search-bar"
                    type="text"
                    value={search}
                    onChange={updateSearch}
                />
                <button className="search-button" type="submit">
                    Search
                </button>
            </form>
            <div className="items">
                {recipes.map((rec) => (
                    <Recipe
                        key={rec.recipe.label}
                        title={rec.recipe.label}
                        colaries={rec.recipe.calories}
                        image={rec.recipe.image}
                        ingredients={rec.recipe.ingredients}
                    />
                ))}
            </div>
        </div>
    );
};

export default App;
