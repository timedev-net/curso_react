import React from 'react'
import { useState, useEffect } from "react";
import ProfileCard from '../components/ProfileCard'

export default function Devs() {
  const [gitData, setGitData] = useState([]) 

  useEffect(()=>{
    fetch('https://api.github.com/users/timedev-net')
    .then(response => response.json() )
    .then(data => setGitData(data))
  },[])

  return (
  <div style={{display: "flex", gap: 10, justifyContent: 'center', flexWrap: 'wrap'}}>
    <ProfileCard nome={gitData.name} bio={gitData.bio} imgProfile={gitData.avatar_url}/>
  </div>
  )
}
