import './navbar.css'

import { useForm } from "react-hook-form";
import { FaSearch } from 'react-icons/fa'
import { useNavigate } from "react-router-dom";
import { Container, Button, Form, Nav, Navbar, InputGroup} from "react-bootstrap";

export default function NavBar() {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();

  const onSubmit = (input) => alert(input.pesquisa);

  function submeter(parametro) {
    alert(parametro.pesquisa)
  }

  return (
    <Navbar bg="light" expand="lg" className="mb-3 w-100">
      <Container>
        <img src='logo_ifro.svg' alt='logo_ifro' width={190} className='me-5' />
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: "100px" }}>
            <Nav.Link onClick={() => navigate('/inicio')}>Inicio</Nav.Link>
            <Nav.Link onClick={() => navigate('/profissionais')}>Profissionais</Nav.Link>
            <Nav.Link onClick={() => navigate('/empresas')}>Empresas</Nav.Link>             
          </Nav>
        <Form className="d-flex" onSubmit={handleSubmit(submeter)}>
          <InputGroup className="">
            <Form.Control
              className="input-pesquisa"
              placeholder="Pesquisa"
              {...register("pesquisa")}
              style={{borderRight: 0}}
            />
            <Button className="bg-white" type="submit" style={{borderColor: '#ced4da', borderLeft: 0}}><FaSearch color="#198754"/></Button>
          </InputGroup>
        </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
