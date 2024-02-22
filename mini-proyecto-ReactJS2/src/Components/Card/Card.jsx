import "./Card.css"


 const Card = (props) => {
  const { character } = props;

  return (
    <figure>
      {/* <h2 className="id">{character.id}</h2> */}
      <img src={character.image} alt={character.name} />
      <h2 className="name">{character.name}</h2>
      <p>Status: {character.status}</p>
      <p className="origin">Origin: {character.location.name}</p>
    </figure>
  );
};

export default Card;