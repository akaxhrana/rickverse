import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import "./Episodes.css";

// this component gets the URL of the episode and sets the name of episode

const Episodes = ({ episode }) => {
  const [name, setName] = useState('');
  useEffect(() => {
    try { 
      const getdata = async () => {
        const response = await axios.get(`${episode}`);
        setName(response.data.name);
      };
      getdata();
    } catch (err) { console.log(err); }
  }, [episode]);

  return (<>
    <div className="details">{name}</div>
  </>
  );
};

Episodes.propTypes = {
  episode: PropTypes.string
};

export default Episodes;
