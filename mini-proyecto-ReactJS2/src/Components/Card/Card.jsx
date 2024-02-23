import "./Card.css";

const Card = ({character}) => {


  const {name, image, status, origin} = character

  return (
    <li>
      <p>{name}</p>
      <img src={image} alt={name} />
      <p>{status}</p>
      <p>{origin.name}</p>
    </li>
  );
};

export default Card;
