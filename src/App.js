import React from "react"
import Navbar from "./components/Navbar"
import Card from "./components/Card"
import data from "./data";
import "./style.css";
import "./card.css"

export default function App() {

    const cards = data.map(items => {
        return ( 
            <Card
                key={items.id}
                items={items}
            />
        )
    })

    return (
        <div>
            <Navbar />
            <section className="cards-list">
                {cards}
            </section>
        </div>
    )
}