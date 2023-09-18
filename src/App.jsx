import React from "react";
import Card from "./components/Card";
import Nav from "./components/Nav";
import data from "./data";
export default function App() {
  const cards=data.map((card)=><Card key={card.id} card={card}/>)
  return(
    <div className="page">
      <Nav/>
      <section className="cards-list">
      {cards}
      </section>
    </div>
  )
}
