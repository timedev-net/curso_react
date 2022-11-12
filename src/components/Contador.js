import { useState } from 'react'
import { Card, Button } from "react-bootstrap";

export default function Contador() {

    const [numero, setNumero] = useState(0)

    function adiciona() {
        setNumero(numero + 1)
    }

    function subtrai() {
        setNumero(numero - 1)
    }

  return (
    <Card style={{ width: "18rem", display: "flex", alignItems: "center" }}>
      <Card.Body>
        <Card.Title>Meu Contador</Card.Title>
        
        <h1>Valor: {numero}</h1>
        
        <Button onClick={subtrai}>Subtrai</Button>{' '}
        <Button onClick={adiciona}>Adiciona</Button>
      </Card.Body>
    </Card>
  )
}
