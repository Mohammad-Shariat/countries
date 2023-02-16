import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

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

  return <div>{console.log(country)}</div>;
};

export default Country;
