import "./Card.css";

const Card = ({name, image, status, origin}) => {
  

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
