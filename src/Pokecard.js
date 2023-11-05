import "./Pokecard.css";

const Pokecard = ({ name, image, type, baseExperience }) => (
  <div className="Pokecard">
    <h3>{name}</h3>
    <img src={image} alt={name} />
    <span className="Pokemon-type">Type: {type}</span>
    <span className="Pokemon-exp">EXP: {baseExperience}</span>
  </div>
);

export default Pokecard;
