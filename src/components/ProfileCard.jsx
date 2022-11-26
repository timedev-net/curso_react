import { Nav} from "react-bootstrap";
import { Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";


export default function ProfileCard ({ nome, bio, imgProfile}) {
  const navigate = useNavigate();
  return (
    <Card style={{ width: "18rem", display: "flex", alignItems: "center" }}>
      <Card.Img variant="top" src={imgProfile} style={{ width: 120 , borderRadius: '100px'}} />
      <Card.Body>
        <Card.Title>{nome}</Card.Title>
        <Card.Text>
          {bio}
        </Card.Text>
        <Nav.Link onClick={() => navigate('/perfil')}> 
          <Button variant="primary">
            Acessar
          </Button>
        </Nav.Link>
      </Card.Body>
    </Card>
  );
}