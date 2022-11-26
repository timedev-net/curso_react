import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import IfroIcon from '../assets/ifroicon.svg'

export default function Login() {
  return (
    <div style={{display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column"}}>
      <Form>
        <img src={IfroIcon} style={{width: "55%", marginBottom: "40px", marginTop: "60px"}}/>
        <Form.Group className="mb-3" controlId="formBasicEmail" style={{marginBottom: "32px"}}>
          <Form.Label style={{color: "#4B4B4B"}}>Digite a sua matrícula</Form.Label>
          <Form.Control type="email" placeholder="Enter email" style={{marginBottom: "32px"}}/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label style={{color: "#4B4B4B"}}>Digite a sua senha</Form.Label>
          <Form.Control type="password" placeholder="Password" style={{marginBottom: "32px"}}/>
        </Form.Group>
        <Button variant="primary" type="submit" style={{width: "100%", background: "#118D3B", border: "none", marginBottom: "32px"}}>
          Entrar
        </Button>
      </Form>
      <p style={{lineHeight: "29px", color: "#118D3B", marginBottom: "32px"}}>Esqueceu a senha?</p>
      <div style={{width: "20vw", marginBottom: "24px", border: "0.5px solid #A8A1A1"}}></div>
      <p style={{color: "#4B4B4B", marginBottom: "8px"}}>Dúvidas? Entre em contato com</p>
      <p style={{color: "#118D3B"}}>Suporte</p>
    </div>  
  )
}