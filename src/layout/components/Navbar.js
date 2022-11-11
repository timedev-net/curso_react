import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom'

export default function Navbar() {
  const navigate = useNavigate()

  return (
    <div className="d-flex justify-content-around shadow gap-4 bg-light p-2 mb-4" style={{ width: '80vw'}}>
      <img src='logo_ifro.svg' alt='logo_ifro' width={190} />
      <Button variant="light" onClick={() => navigate('/')}>Inicio</Button>
      <Button variant="light" onClick={() => navigate('/profissionais')}>Profissionais</Button>
      <Button variant="light" onClick={() => navigate('/empresas')}>Empresas</Button>
      <img src='logo_ifro.svg' alt='logo_ifro' width={190} />
    </div>
  )
}

