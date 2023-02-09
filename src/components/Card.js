import { Card, Col, Row, Text } from '@nextui-org/react';

export const Card4 = ({ data }) => (
  <Card css={{ w: '100%', h: '400px' }}>
    <Card.Body css={{ p: 0 }}>
      <Card.Image
        src={data.flags.svg}
        width='100%'
        height='100%'
        objectFit='cover'
        alt={data.flags.alt}
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
            {data.name.common}
          </Text>
          <Text color='#000' size='$xl'>
            <strong>Population:</strong> {data.population.toLocaleString()}
          </Text>
          <Text color='#000' size='$xl'>
            <strong>Region:</strong> {data.region}
          </Text>
          <Text color='#000' size='$xl'>
            <strong>Capital:</strong> {data.capital}
          </Text>
        </Col>
      </Row>
    </Card.Footer>
  </Card>
);
