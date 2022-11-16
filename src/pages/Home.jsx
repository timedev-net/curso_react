import React from "react";
import ProfileCard from "../components/ProfileCard";

export default function Home() {
  return (
    <div
      style={{
        display: "flex",
        gap: 10,
        justifyContent: "center",
        flexWrap: "wrap",
      }}
    >
      <ProfileCard nome="Home" />
      <ProfileCard nome="Card 2" />
      <ProfileCard nome="Card 3" />
      <ProfileCard />
    </div>
  );
}
