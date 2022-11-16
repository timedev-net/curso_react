import React from 'react'
import ProfileCard from '../components/ProfileCard'

export default function Devs() {
  return (
  <div style={{display: "flex", gap: 10, justifyContent: 'center', flexWrap: 'wrap'}}>
    <ProfileCard nome="Profissionais" />
  </div>
  )
}
