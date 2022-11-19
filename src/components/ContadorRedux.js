import { useEffect, useState } from "react";
import { Card, Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { incrementar, decrementar, incrementarPorQuantia, decrementarPorQuantia } from '../store/slices/contadorSlice'

export default function ContadorRedux() {
  const dispatch = useDispatch();
  const rd_contador = useSelector(state => state.contador);
  // const { numero } = useSelector(state => state.contador);
  // const store = useSelector(state => state)

  function adiciona() {
    dispatch(incrementar())
  }

  function adiciona10() {
    dispatch(incrementarPorQuantia(10))
  }

  function subtrai() {
    dispatch(decrementar())
  }
  function subtrai10() {
    if(rd_contador.numero > 0){
      dispatch(decrementarPorQuantia(10))
    }
  }

  useEffect(() => {
    console.log(rd_contador.numero);
    // console.log(store.contador.numero);
  }, [rd_contador]);

  return (
    <Card style={{ width: "20rem", display: "flex", alignItems: "center" }}>
      <Card.Body>
        <Card.Title>Meu Contador com Redux</Card.Title>
        <h1>Valor: {rd_contador.numero}</h1>
        <Button onClick={subtrai}>Subtrai</Button>{" "}
        <Button onClick={adiciona}>Adiciona</Button>{" "}
        <Button onClick={adiciona10}>Adiciona 10</Button>
        <Button onClick={subtrai10}>Subtrai 10</Button>
      </Card.Body>
    </Card>
  );
}
