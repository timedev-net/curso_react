import { Card, Button } from "react-bootstrap";
import { FaBeer } from "react-icons/fa";

function MyCard({ nome }) {
  return (
    <Card style={{ width: "18rem", display: "flex", alignItems: "center" }}>
      <Card.Img variant="top" src="image.jpeg" style={{ width: 120 }} />
      <Card.Body>
        <Card.Title>{nome}</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">
          <FaBeer /> Go somewhere
        </Button>
      </Card.Body>
    </Card>
  );
}

export default MyCard;
