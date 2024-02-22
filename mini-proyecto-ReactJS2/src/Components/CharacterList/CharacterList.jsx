import React from "react";
import Card from "../Card/Card";
import "./CharacterList.css"


 const CharacterList = () => {
  const [characterList, setCharacterList] = React.useState([]);

  React.useEffect(() => {
    (async () => {
      let data = await fetch(`https://rickandmortyapi.com/api/character/`).then(
        (res) => res.json()
      );

      setCharacterList(data.results);
    })();
  }, []);

  return (
    <>
    <div className="containerCharacters">
      {characterList.map((character) => {
        if (character.status == "Alive" || character.status == "unknown") {
          return (
            <Card key={character.id} character={character} />
            // <div key={character.id}>
            //   <img src={character.image} alt={character.name} />
            //   <h2 className="id">{character.id}</h2>
            //   <h2 className="name">{character.name}</h2>
            //   <p>Status: {character.status}</p>
            //   

            // </div>
          );
        } else {
          return null;
        }
      })}
      </div>
    </>
  );
};

export default CharacterList
