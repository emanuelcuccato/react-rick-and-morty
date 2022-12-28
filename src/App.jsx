import { CharactersList } from './components/CharactersList';

export const App = () => {
  return (
    <div className="bg-dark text-white text-center">
      <h1 className="text-center display-1 py-3">
        <b>Rick and Morty</b>
      </h1>
      <CharactersList />
    </div>
  );
};

export default App;
