import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


export default function Login() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Digite a sua matrícula</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Digite a sua senha</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
      <Button variant="primary" type="submit" style={{width: "100%", background: "#118D3B"}}>
          Entrar
        </Button>
    </Form>
    </div>
  )
}