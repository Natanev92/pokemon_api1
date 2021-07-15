import React, { useEffect, useState } from 'react';
//importing react,useEffect & useSate to prevent side effects & track the inputs
const FetchPokemon = () => {//? no props?
//set FetchPokemon to hold the the handelr functions
    const[fetchState, setFetchState] = useState();

    const handleClick = () => {
        fetch("https://pokeapi.co/api/v2/pokemon/?limit=807")
            .then(response => response.json())
            .then(response => setFetchState(response.results))
            .catch(err => console.log(err))
    };//consumes the data from the API in JS & uses promises
// setFetchState tracks the data from the API response results
    return (
        <div>
            <button onClick={handleClick}>Fetch Pokémon</button>
            {//when the handle function is triggered by onclick
                (fetchState) ? (fetchState.map((pokemon, i) => 
                { return <div key={i}>{pokemon.name}</div> })) :
                <h1>Gotta catch 'em all, Pokémon!</h1>
            }
        </div>//fetchState displays the data with .map operater allowing us to copy
        // all the data and we return a key value pair at a specicfic index. 
    );
};

export default FetchPokemon;