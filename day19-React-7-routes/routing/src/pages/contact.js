import { Accordion } from "react-bootstrap";
import CardComponent from "../component/card";
import '../App.css'

function Contact({ name }) {
  return (
    <div className="App">
      Contact
      <br />
      <a href="/">Got to Home</a>
      <Accordion style={{ marginTop: "100px" }} defaultActiveKey="0" flush>
        <Accordion.Item eventKey="0">
          <Accordion.Header>Accordion Item #1</Accordion.Header>
          <Accordion.Body>
            Welome {name}
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>Accordion Item #2</Accordion.Header>
          <Accordion.Body>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
      <CardComponent
        img="https://dmitripavlutin.com/static/6d14625626a323816b47d301a6319626/c24d5/cover.png"
        text="We use props in React to pass data from one component to another "
        title="React Props"
        btnLink="OK"
      />
    </div>
  );
}

export default Contact;
