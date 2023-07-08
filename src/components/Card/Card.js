import React, { useState } from 'react';
import Residents from '../Residents/Residents';
import EpisodesList from '../EpisodesList/EpisodesList'
import PropTypes from 'prop-types';
import './Card.css';

const Card = ({ character }) => {

  const [expanded, setExpanded] = useState(false);

  const handleCardClick = () => {
    setExpanded(!expanded);
  };

  // getting character status 
  const statusColor = character.status === 'Alive' ? 'green' : character.status === 'Dead' ? 'red' : 'yellow';
  return (<>
  {/* when clicked, a card will display list of all episodes */}
    <div className={`card ${expanded ? 'expanded' : ''}`} onClick={handleCardClick}>
      
        <img className="image" src={character.image} alt="" />
      
      <div className="content-wrapper">

      <div className="section">
        <a className="character-name" href={character.url}>{character.name}</a>
        <span className="status">
          <span className="status-icon" style={{backgroundColor: statusColor}}></span>
          <span>{character.gender} - {character.species}</span>
        </span>
      </div>

      <div className="section">
        <span className="detail-head">Last known location:</span>
        <a className="detail-subhead" href={character.location.url}>{character.location.name}</a>
        <Residents locationUrl={character.location.url}/>
      </div>

      <div className="section">
        <span className="detail-head">Origin:</span>
        <a className="detail-subhead" href={character.origin.url}>{character.origin.name}</a>
        <Residents locationUrl={character.origin.url}/>
      </div>
      

      {expanded && 
      <div className="section">
      <span className="chapters-title">Chapters Featured in :</span>
      <EpisodesList episodes={character.episode} />
    </div>
    }
    </div>
    </div >

  </>
  );
};

Card.propTypes = {
  character: PropTypes.object,
};

export default Card;