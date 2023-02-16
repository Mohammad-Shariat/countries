import { Card, Col, Row, Text } from '@nextui-org/react';
import { Link } from 'react-router-dom';

export const Card4 = ({ flags, name, population, region, capital }) => (
  <Link to={`/${name.common}`}>
    <Card
      css={{ w: '100%', h: '400px' }}
      isPressable
      isHoverable
      variant='bordered'
    >
      <Card.Body css={{ p: 0 }}>
        <Card.Image
          src={flags.svg}
          width='100%'
          height='100%'
          objectFit='cover'
          alt={flags.alt}
        />
      </Card.Body>
      <Card.Footer
        isBlurred
        css={{
          position: 'absolute',
          bgBlur: '#ffffff66',
          borderTop: '$borderWeights$light solid rgba(255, 255, 255, 0.2)',
          bottom: 0,
          zIndex: 1,
        }}
      >
        <Row>
          <Col>
            <Text color='#000' size='$3xl' h1>
              {name.common}
            </Text>
            <Text color='#000' size='$xl'>
              <strong>Population:</strong> {population.toLocaleString()}
            </Text>
            <Text color='#000' size='$xl'>
              <strong>Region:</strong> {region}
            </Text>
            <Text color='#000' size='$xl'>
              <strong>Capital:</strong> {capital}
            </Text>
          </Col>
        </Row>
      </Card.Footer>
    </Card>
  </Link>
);
