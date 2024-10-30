import React, { useState } from 'react';
import Header from './components/Header';
import FactionCard from './components/FactionCard';
import factions from './data/data'; // Ensure this path is correct.
import './styles/style.css';

console.log('factions data:::', factions); // Check the data structure here

function App() {
  const [coverImage, setCoverImage] = useState(factions[0]?.image || ''); // Default to an empty string if image is undefined.

  const handleFactionClick = (image) => {
    setCoverImage(image);
  };

  return (
    <div className="app-container">
      <Header coverImage={coverImage} />
      <div className="faction-cards">
        {factions.map((faction) => {
          // console.log('faction data:::', faction);
          return (
            <FactionCard
              key={faction.id}
              {...faction}
              onClick={() => handleFactionClick(faction.image)}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
