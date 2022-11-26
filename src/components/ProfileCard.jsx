import { Card, Button } from "react-bootstrap";

export default function ProfileCard ({ nome, bio, imgProfile}) {
  return (
    <Card style={{ width: "18rem", display: "flex", alignItems: "center" }}>
      <Card.Img variant="top" src={imgProfile} style={{ width: 120 }} />
      <Card.Body>
        <Card.Title>{nome}</Card.Title>
        <Card.Text>
          {bio}
        </Card.Text>
        <Button variant="primary">
          Acessar
        </Button>
      </Card.Body>
    </Card>
  );
}