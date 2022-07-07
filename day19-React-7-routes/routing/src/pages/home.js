import { useState } from 'react';
import { ListGroup, Badge } from 'react-bootstrap';
import CardComponent from '../component/card';
// import Contact from './contact';

function Home() {
  const [state, setState] = useState(0);
  return (
    <div className="App">
        {/* <Contact name="Jayesh and Priyansh" /> */}
      Home
      <br />
      <br />
      <h1>{state}</h1>
      <br />
      <br />
      <button onClick={() => setState(2)}>Clicl</button>
      <br />
      <a href="/contact">Got to contact</a>
      <br />
      <ListGroup as="ol" numbered>
        <ListGroup.Item
          as="li"
          className="d-flex justify-content-between align-items-start"
        >
          <div className="ms-2 me-auto">
            <div className="fw-bold">Subheading</div>
            Cras justo odio
          </div>
          <Badge bg="primary" pill>
            14
          </Badge>
        </ListGroup.Item>
        <ListGroup.Item
          as="li"
          className="d-flex justify-content-between align-items-start"
        >
          <div className="ms-2 me-auto">
            <div className="fw-bold">Subheading</div>
            Cras justo odio
          </div>
          <Badge bg="primary" pill>
            14
          </Badge>
        </ListGroup.Item>
        <ListGroup.Item
          as="li"
          className="d-flex justify-content-between align-items-start"
        >
          <div className="ms-2 me-auto">
            <div className="fw-bold">Subheading</div>
            Cras justo odio
          </div>
          <Badge bg="primary" pill>
            14
          </Badge>
        </ListGroup.Item>
      </ListGroup>

      <CardComponent
        img="https://miro.medium.com/max/1200/1*hYSKyofnqThnPIsYRfnUUQ.png"
        text="The state is a built-in React object that is used to contain data or information about the component"
        title="React State"
        btnLink="OK"
      />
      <CardComponent
        img="https://dmitripavlutin.com/static/6d14625626a323816b47d301a6319626/c24d5/cover.png"
        text="We use props in React to pass data from one component to another "
        title="React Props"
        btnLink="OK"
      />
    </div>
  );
}

export default Home;
