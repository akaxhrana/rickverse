import axios from 'axios';
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import './Residents.css'

const Residents = ({ locationUrl }) => {
  const [number, setNumber] = useState(0);
  useEffect(() => {
    try {
      const getdata = async () => {
        const { data } = await axios.get(`${locationUrl}`);
        const res = data?.residents?.length;
        setNumber(res);
      };
      getdata();
    } catch (err) {
      console.log(err);
    }
  }, [locationUrl]);
  return (
    <div>
      <span className="residents">Residents: </span> 
      <span className="residents-no">{number}</span>
      </div>
  );
};

Residents.propTypes = {
  locationUrl: PropTypes.string
};


export default Residents;