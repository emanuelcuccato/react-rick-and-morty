import { Character } from './Character';

import { useEffect, useState } from 'react';

const NavPage = ({ page, setPage }) => {
  return (
    <div className="text-center w-100">
      <div className="row p-3">
        <div className="col-4">
          {page == 1 ? (
            ''
          ) : (
            <button className="btn btn-primary btn-sm" onClick={() => setPage(page - 1)}>
              {page - 1}
            </button>
          )}
        </div>
        <div className="col-4">{page}</div>
        <div className="col-4">
          <button className="btn btn-primary btn-sm" onClick={() => setPage(page + 1)}>
            {page + 1}
          </button>
        </div>{' '}
      </div>
    </div>
  );
};

export const CharactersList = () => {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(`https://rickandmortyapi.com/api/character?page=${page}`);
      const data = await response.json();
      setLoading(false);
      setCharacters(data.results);
    }

    fetchData();
  }, [page]);

  return (
    <div className="container">
      <NavPage page={page} setPage={setPage} />
      {loading ? (
        <h1>Loading</h1>
      ) : (
        <div className="row">
          {characters.map((character) => {
            return (
              <div className="col-md-4" key={character.id}>
                <Character character={character} />
              </div>
            );
          })}
        </div>
      )}

      <NavPage page={page} setPage={setPage} />
    </div>
  );
};
