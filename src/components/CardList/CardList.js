import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Card from '../Card/Card';
import './CardList.css'


const CardList = () => {
  const [cards, setCards] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://rickandmortyapi.com/api/character/?page=${currentPage}`);
        const { info, results} = response.data;
        setCards(results);
        setTotalPages(info.pages);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [currentPage]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div>
    <div className="card-list">
      {cards.map((card) => (
        <Card key={card.id} character={card}/>
      ))}
    </div>
      <div className="footer">
        <button onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>
          Previous
        </button>
        <button onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages}>
          Next
        </button>
      </div>
    </div>
  );
};

export default CardList;
