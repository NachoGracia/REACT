import React from "react";
import "./App.css"



const App = () => {
const [characterList, setCharacterList] = React.useState([])

React.useEffect(() => {
  (async () => {
    let data = await fetch(`https://rickandmortyapi.com/api/character/`).then(
      (res) => res.json()
    );

    setCharacterList(data.results);
  })();
}, []);

  return(
    <>
    {characterList.map((character) => {
      if (character.status == "Alive" || character.status == "unknown") {
        return (
          <div key={character.id}>
            <img src={character.image} alt={character.name} />
            {/* <h2 className="id">{character.id}</h2> */}
            <h2 className="name">{character.name}</h2>
            <p>Status: {character.status}</p>
            <p className="origin">Origin: {character.location.name}</p>
          </div>
        );
      } else {
        return null; 
      }
    })}
  </>
);
};
export default App;
