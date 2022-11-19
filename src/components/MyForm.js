import { useEffect, useState } from "react";
import { Card, Button, Form } from "react-bootstrap";
import { FaBeer } from "react-icons/fa";
// import { toast } from 'react-toastify';

export default function MyForm() {

  const [nome, setNome] = useState('')


  function salvar(e) {
    e.preventDefault()
    alert(nome)
    // toast.success(nome);
  }

  useEffect(() => {
    setNome('esse é um teste')
  }, [])

  return (
    <Form onSubmit={salvar}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Nome</Form.Label>
        <Form.Control onChange={(e) => { setNome(e.target.value) }} value={nome} type="text" />
      </Form.Group>

      <Button variant="primary" type="submit">
        Salvar
      </Button>
    </Form>
  );
}

