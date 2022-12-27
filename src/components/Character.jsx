export const Character = ({ character }) => {
  return (
    <div className="text-center p-3">
      <h3>{character.name}</h3>

      <div className="p-1">
        <img className="image-fluid rounded-pill w-75" src={character.image} alt={character.name} />
      </div>
      <p>{character.origin.name}</p>
    </div>
  );
};
