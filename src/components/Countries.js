import { useState, useEffect } from 'react';
import { Card4 } from './Card';
import SearchInput from './SearchInput';
import DropdownCountry from './Dropdown';

// NextUi
import { NextUIProvider, Grid, Text } from '@nextui-org/react';

//URL
const BASE_URL = 'https://restcountries.com/v3.1/all';

function Countries() {
  const [countriesData, setCountriesData] = useState([]);
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('');

  useEffect(() => {
    fetch(BASE_URL)
      .then(res => res.json())
      .then(data => setCountriesData(data));
  }, []);

  const searchHandler = event => {
    setSearch(event.target.value);
  };

  const searchCountries = countriesData.filter(country =>
    country.name.common.toLowerCase().includes(search.toLocaleLowerCase())
  );

  // Filter By Region

  async function filterByRegion(region) {
    try {
      const res = await fetch(
        `https://restcountries.com/v3.1/region/${region}`
      );
      const data = await res.json();
      console.log(data);
      setFilter(data);
    } catch (error) {
      console.error(error);
    }
  }

  function handleFilterByRegion(e) {
    e.preventDefault();
    filterByRegion();
  }

  console.log(countriesData);

  return (
    <>
      <NextUIProvider>
        <Grid.Container gap={2}>
          <Grid>
            <Text color='#555' h2>
              Where in the world ?
            </Text>
          </Grid>
        </Grid.Container>

        <Grid.Container gap={2} justify='space-between' alignItems='center'>
          <Grid>
            <SearchInput
              countriesData={countriesData}
              value={search}
              onChange={searchHandler}
            />
          </Grid>
          <Grid>
            <DropdownCountry
              handleFilterByRegion={handleFilterByRegion}
              value={filter}
              onChange={e => filterByRegion(e.target.value)}
            />
          </Grid>
        </Grid.Container>

        <Grid.Container gap={2} justify='center'>
          {searchCountries.map(country => {
            return (
              <Grid
                xl={2}
                lg={3}
                md={4}
                sm={6}
                xs={12}
                key={country.name.common}
              >
                <Card4 {...country} />
              </Grid>
            );
          })}
        </Grid.Container>
      </NextUIProvider>
    </>
  );
}

export default Countries;
