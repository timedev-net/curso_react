import React from "react";
import MyCard from "../components/MyCard";

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
      <MyCard nome="Home" />
      <MyCard nome="Card 2" />
      <MyCard nome="Card 3" />
      <MyCard />
    </div>
  );
}
