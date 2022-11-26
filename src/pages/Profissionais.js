import {useEffect} from 'react'
import MyCard from '../components/MyCard'
import axios from 'axios'

export default function Profissionais() {

  
  const buscaDados = async () => {
    const res = await axios.get(`https://api.github.com/users/timedev-net`);
    console.log(res)
  }

  useEffect(() => {
    buscaDados()
  }, [])

  return (
  <div style={{display: "flex", gap: 10, justifyContent: 'center', flexWrap: 'wrap'}}>
    <MyCard nome="Profissionais" />
  </div>
  )
}
