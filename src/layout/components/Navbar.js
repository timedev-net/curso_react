import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom'

export default function Navbar() {
  const navigate = useNavigate()

  return (
    <div className="d-flex justify-content-center gap-5 bg-primary p-2">
      <Button onClick={() => navigate('/')} variant="primary">Inicio</Button>
      <Button onClick={() => navigate('/profissionais')}>Profissionais</Button>
      <Button onClick={() => navigate('/empresas')}>Empresas</Button>
    </div>
  )
}

