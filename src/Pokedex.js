import "./Pokedex.css";
import Pokecard from "./Pokecard";

const Pokedex = ({ pokemons }) => (
  <div className="Pokedex">
    {pokemons.map(({ id, name, type, base_experience }) => (
      <Pokecard
        key={id}
        name={name}
        image={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
        type={type}
        baseExperience={base_experience}
      />
    ))}
  </div>
);

export default Pokedex;
