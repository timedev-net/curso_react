import { useEffect } from "react";
import { Card, Button } from "react-bootstrap";
import { useCookies } from 'react-cookie';

export default function ContadorCookie() {
  const [cookies, setCookie] = useCookies(['numero']);
  const num = +cookies.numero

  function adiciona() {
    const novoNum = num + 1;
    setCookie('numero', novoNum, { path: '/' });
  }

  function adiciona10() {
    const novoNum = num + 10;
    setCookie('numero', novoNum, { path: '/' });
  }

  function subtrai() {
    const novoNum = num - 1;
    setCookie('numero', novoNum, { path: '/' });
  }

  function subtrai10() {
    if(num > 10){
      const novoNum = num - 10;
      setCookie('numero', novoNum, { path: '/' });
    }
  }

  useEffect(() => {
    console.log(cookies);
  }, [cookies]);

  useEffect(() => {
    if (num) {
      setCookie('numero', num, { path: '/' });
    } else {
      setCookie('numero', 0, { path: '/' });
    }
  }, []);

  return (
    <Card style={{ width: "20rem", display: "flex", alignItems: "center" }}>
      <Card.Body>
        <Card.Title>Cookie</Card.Title>
        <h1>Valor: {cookies.numero}</h1>
        <Button onClick={subtrai}>Subtrai</Button>{" "}
        <Button onClick={adiciona}>Adiciona</Button>{" "}
        <Button onClick={adiciona10}>Adiciona 10</Button>{" "}
        <Button onClick={subtrai10}>Subtrai 10</Button>
      </Card.Body>
    </Card>
  );
}
