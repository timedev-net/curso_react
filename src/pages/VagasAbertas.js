import React from 'react'
import Contador from '../components/Contador'
import MyCard from '../components/MyCard'

export default function VagasAbertas() {
  return (
  <div style={{display: "flex", gap: 10, justifyContent: 'center', flexWrap: 'wrap'}}>
    <Contador />  
  </div>
  )
}
