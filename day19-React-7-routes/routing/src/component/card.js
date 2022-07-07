import {Card , Button} from 'react-bootstrap';

function CardComponent({ img, btnLink, text, title }) {
    let hello = 'world';
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={img} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          {text}
        </Card.Text>
        <Button variant="primary">{btnLink}</Button>
        <h1>{hello}</h1>
      </Card.Body>
    </Card>
  );
}

export default CardComponent;