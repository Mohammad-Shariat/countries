import { Card, Button, Text, Grid, Row } from '@nextui-org/react';
import { Link } from 'react-router-dom';

export const Card5 = ({ country }) =>
  country.map(item => {
    return (
      <Grid.Container key={item.name.official} css={{ h: '100vh' }}>
        <Card css={{ w: '100%' }}>
          <Card.Body css={{ p: 0 }}>
            <Card.Image
              src={item.flags.svg}
              width='100%'
              alt={item.flags.alt}
              objectFit='cover'
            />
          </Card.Body>
        </Card>
        <Text
          h2
          color='#333'
          css={{ w: '100%' }}
          justify='center'
          align='center'
        >
          {item.name.official}
        </Text>
        <Grid.Container
          gap={4}
          justify='flex-start'
          css={{
            w: '100%',
          }}
        >
          <Grid>
            <Text h4 color='#333'>
              Population: {item.population.toLocaleString()}
            </Text>
            <Text h4 color='#333'>
              Region: {item.region}
            </Text>
            <Text h4 color='#333'>
              Sub Region: {item.subregion}
            </Text>
          </Grid>
          <Grid>
            <Text h4 color='#333'>
              Capital: {item.capital[0]}
            </Text>
            <Text h4 color='#333'>
              Top Level Domain: {item.tld}
            </Text>
            <Text h4 color='#333'>
              {/* Currencies: {item.currencies.EUR.name} */}
            </Text>
            <Text h4 color='#333'>
              Languages:
              {}
            </Text>
          </Grid>
        </Grid.Container>
        <Grid.Container
          gap={4}
          justify='flex-start'
          css={{
            w: '100%',
          }}
        >
          <Grid>
            <Row justify='space-between' align='center' gap={2}>
              <Text h5 color='#333'>
                {`Borders : `}
              </Text>
              {item.borders?.map((border, index) => {
                return (
                  <Button key={index} size='xs' disabled>{` ${border}`}</Button>
                );
              })}
              <Link to='/'>
                <Button>Back</Button>
              </Link>
            </Row>
          </Grid>
        </Grid.Container>
      </Grid.Container>
    );
  });
