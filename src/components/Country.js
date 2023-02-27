import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { Card5 } from './SingleCountryCard';

const Country = () => {
  const [country, setCountry] = useState([]);
  const { name } = useParams();

  useEffect(() => {
    const getCountry = async () => {
      try {
        const res = await fetch(`https://restcountries.com/v3.1/name/${name}`);
        const data = await res.json();
        setCountry(data);
      } catch (error) {
        console.error(error);
      }
    };
    getCountry();
  }, [name]);

  return (
    <>
      {console.log(country)}
      <Card5 country={country} />
    </>
  );
};

export default Country;
