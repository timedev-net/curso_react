import { useEffect, useState } from "react";
import { Card, Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { incrementar, decrementar, incrementarPorQuantia } from '../store/reducers/contadorSlice'

export default function ContadorRedux() {
  const dispatch = useDispatch();
  const { numero } = useSelector(state => state.contador);


  function adiciona() {
    dispatch(incrementar())
  }

  function adiciona10() {
    dispatch(incrementarPorQuantia(10))
  }

  function subtrai() {
    dispatch(decrementar())
  }

  // useEffect(() => {
  //   console.log("montou o componente");
  //   return () => {
  //     console.log("desmontou o componente");
  //   };
  // }, []);

  // useEffect(() => {
  //   console.log(numero);
  // }, [numero]);

  return (
    <Card style={{ width: "20rem", display: "flex", alignItems: "center" }}>
      <Card.Body>
        <Card.Title>Meu Contador com Redux</Card.Title>
        <h1>Valor: {numero}</h1>
        <Button onClick={subtrai}>Subtrai</Button>{" "}
        <Button onClick={adiciona}>Adiciona</Button>{" "}
        <Button onClick={adiciona10}>Adiciona 10</Button>
      </Card.Body>
    </Card>
  );
}
