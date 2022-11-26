import React from 'react'
import Contador from '../components/Contador'
import ContadorRedux from '../components/ContadorRedux'
import ContadorLocalSotorage from '../components/ContadorLocalSotorage'
import ContadorSessao from '../components/ContadorSessao'
import ContadorCookie from '../components/ContadorCookie'
// import MyCard from '../components/MyCard'
import MyForm from '../components/MyForm'

export default function Contadores() {
  return (
  <div style={{display: "flex", gap: 10, justifyContent: 'center', flexWrap: 'wrap'}}>
    <Contador />  
    <ContadorRedux />  
    <ContadorSessao />  
    <ContadorLocalSotorage />  
    <ContadorCookie />  
    <MyForm/>
  </div>
  )
}
