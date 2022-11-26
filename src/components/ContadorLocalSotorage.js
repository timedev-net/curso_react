import { useEffect, useState } from "react";
import { Card, Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { incrementar, decrementar, incrementarPorQuantia, decrementarPorQuantia, definirNumero2 } from '../store/slices/contadorSlice'

export default function ContadorLocalSotorage() {
  const dispatch = useDispatch();
  const rd_contador = useSelector(state => state.contador);
  const num = rd_contador.numero2

  function adiciona() {
    const novoNum = num + 1;
    localStorage.setItem('numero', novoNum)
    dispatch(definirNumero2(+novoNum))
  }

  function adiciona10() {
    const novoNum = num + 10;
    localStorage.setItem('numero', novoNum)
    dispatch(definirNumero2(+novoNum))
  }

  function subtrai() {
    const novoNum = num - 1;
    localStorage.setItem('numero', novoNum)
    dispatch(definirNumero2(+novoNum))
  }

  function subtrai10() {
    if(num > 0){
      const novoNum = num - 10;
      localStorage.setItem('numero', novoNum)
      dispatch(definirNumero2(+novoNum))
    }
  }

  useEffect(() => {
    console.log(num);
  }, [rd_contador]);

  useEffect(() => {
    const myNumero = localStorage.getItem('numero')
    dispatch(definirNumero2(+myNumero))
  }, []);

  return (
    <Card style={{ width: "20rem", display: "flex", alignItems: "center" }}>
      <Card.Body>
        <Card.Title>Redux + localStorage</Card.Title>
        <h1>Valor: {num}</h1>
        <Button onClick={subtrai}>Subtrai</Button>{" "}
        <Button onClick={adiciona}>Adiciona</Button>{" "}
        <Button onClick={adiciona10}>Adiciona 10</Button>
        <Button onClick={subtrai10}>Subtrai 10</Button>
      </Card.Body>
    </Card>
  );
}
