import { useForm } from "react-hook-form";
import { FaSearch } from 'react-icons/fa'
import { useNavigate } from "react-router-dom";
import { Container, Button, Form, Nav, Navbar, InputGroup} from "react-bootstrap";
import './navbar.css'
import { login, logout } from '../../store/slices/userSlice'
import { useSelector, useDispatch } from "react-redux";

export default function () {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();

  const onSubmit = (input) => alert(input.pesquisa);

  function submeter(parametro) {
    alert(parametro.pesquisa)
  }

  const handleLogout = () => {
    sessionStorage.clear();
    dispatch(logout())
  }

  return (
    <Navbar bg="light" expand="lg" className="mb-3 w-100">
      <Container>
        <img src='logo_ifro.svg' alt='logo_ifro' width={190} className='me-5' />
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
           <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: "100px" }}>
            <Nav.Link onClick={() => navigate('/')}>Inicio</Nav.Link>
            <Nav.Link onClick={() => navigate('/profissionais')}>Profissionais</Nav.Link>
            <Nav.Link onClick={() => navigate('/vagas_abertas')}>Vagas Abertas</Nav.Link> 
            <Nav.Link onClick={() => navigate('/processo_seletivo')}>Processos Seletivos</Nav.Link> 
            <Nav.Link onClick={() => navigate('/contadores')}>Contadores</Nav.Link> 
            
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
          <Nav.Link className="ms-3" onClick={handleLogout}>Sair</Nav.Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
