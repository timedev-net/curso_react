import { useState } from "react";
import { Nav } from "react-bootstrap";
import Form from 'react-bootstrap/Form';
import IfroIcon from '../assets/ifroicon.svg'
// import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { toast, ToastContainer } from 'react-toastify';
import { login } from '../store/slices/userSlice'



export default function Login() {
  // const navigate = useNavigate();
  const dispatch = useDispatch();
  const rd_user = useSelector(state => state.user);
  const [gitName, setGitName] = useState('')
  const [password, setPassword] = useState('')

  function verify(gitName) {
    if (gitName === 'admin' && password === 'admin') {
      dispatch(login("Admin"))
      sessionStorage.setItem('user', "Admin")
      // navigate('/inicio')
    } else {
      toast.error('Credenciais incorretas!')
    }
  }

  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
      <ToastContainer theme="colored" />
      <Form>
        <img src={IfroIcon} style={{ width: "55%", marginBottom: "40px", marginTop: "60px" }} />
        <Form.Group className="mb-3" controlId="formBasicEmail" style={{ marginBottom: "32px" }}>
          <Form.Label style={{ color: "#4B4B4B" }}>Digite a sua matrícula</Form.Label>
          <Form.Control type="email" placeholder="Enter email" style={{ marginBottom: "32px" }}
            value={gitName} onChange={(e) => setGitName(e.target.value)} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label style={{ color: "#4B4B4B" }}>Digite a sua senha</Form.Label>
          <Form.Control type="password" placeholder="Password" style={{ marginBottom: "32px" }}
            value={password} onChange={(e) => setPassword(e.target.value)} />
        </Form.Group>
        <Nav.Link onClick={() => { verify(gitName) }}>
          <button style={{ width: "100%", height: "3.8vh", background: "#118D3B", border: "none", marginBottom: "32px", color: "white", borderRadius: "7px" }}>
            Entrar
          </button>
        </Nav.Link>
      </Form>
      <p style={{ lineHeight: "29px", color: "#118D3B", marginBottom: "32px" }}>Esqueceu a senha?</p>
      <div style={{ width: "20vw", marginBottom: "24px", border: "0.5px solid #A8A1A1" }}></div>
      <p style={{ color: "#4B4B4B", marginBottom: "8px" }}>Dúvidas? Entre em contato com</p>
      <p style={{ color: "#118D3B" }}>Suporte</p>
    </div>
  )
}