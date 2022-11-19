import React from 'react'
import Contador from '../components/Contador'
import ContadorRedux from '../components/ContadorRedux'
// import MyCard from '../components/MyCard'
import MyForm from '../components/MyForm'

export default function VagasAbertas() {
  return (
  <div style={{display: "flex", gap: 10, justifyContent: 'center', flexWrap: 'wrap'}}>
    <Contador />  
    <ContadorRedux />  
    <MyForm/>
  </div>
  )
}
