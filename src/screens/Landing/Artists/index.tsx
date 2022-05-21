import { ArtistsList } from './artistsList';

import './styles.scss';

export function Artists() {
  return (
    <div className="container artists-container">
      <h2>Artists</h2>

      <div className="artists">
        {ArtistsList.map((artist) => (
          <div className="artist">
            <img src={artist.image} alt={artist.name} />
            <div className="artist__infos">
              <h3>{artist.name}</h3>
              <p>{artist.responsibility}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
