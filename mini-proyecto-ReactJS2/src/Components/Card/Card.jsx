import "./Card.css";

const Card = (props) => {
  const { character } = props;

  return (
    <li>
      <p>{character.name}</p>
      <img src={character.image} alt={character.name} />
      <p>{character.status}</p>
      <p>{character.origin.name}</p>
    </li>
  );
};

export default Card;
