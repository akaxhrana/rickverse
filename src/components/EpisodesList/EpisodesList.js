import React from 'react';
import './EpisodesList.css';
import Episodes from '../Episodes/Episodes';
import PropTypes from 'prop-types';

// componet to render the list of all epispdes that the character has featured

const EpisodesList = ({ episodes }) => {

  return (
    
      <div className="episodes-list" >
        {episodes.map((episode, id) => {
          return (<Episodes key={id} episode={episode} />);
        })}
      </div>
    
  );
};

EpisodesList.propTypes = {
  episodes: PropTypes.array
};

export default EpisodesList;