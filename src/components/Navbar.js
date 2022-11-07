import "./navbar.css"
import { Button } from 'react-bootstrap';

function Navbar() {


  return (
    <div className="navbar">
      <Button variant="primary">Inicio</Button>
      <Button>Profissionais</Button>
      <Button>Empresas</Button>
    </div>
  )
}

export default Navbar