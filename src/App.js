import { useState, useEffect } from 'react';
import { Card4 } from './components/Card';
import DropdownCountry from './components/Dropdown';

// NextUi
import { NextUIProvider, Input, Grid, Text } from '@nextui-org/react';

//URL
const BASE_URL = 'https://restcountries.com/v3.1/all';

function App() {
  const [countriesData, setCountriesData] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    fetch(BASE_URL)
      .then(res => res.json())
      .then(data => setCountriesData(data));
  }, []);

  console.log(countriesData);

  const searchHandler = event => {
    setSearch(event.target.value);
  };

  const searchCountries = countriesData.filter(country =>
    country.name.common.toLowerCase().includes(search.toLocaleLowerCase())
  );

  return (
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
          <Input
            labelPlaceholder='Search for a country...'
            status='primary'
            width='300px'
            value={search}
            onChange={searchHandler}
          />
        </Grid>
        <Grid>
          <DropdownCountry />
        </Grid>
      </Grid.Container>

      <Grid.Container gap={2} justify='center'>
        {searchCountries?.map((country, index) => {
          return (
            <Grid xl={2} md={4} sm={6} xs={12} key={index}>
              <Card4 data={country} />
            </Grid>
          );
        })}
      </Grid.Container>
    </NextUIProvider>
  );
}

export default App;
