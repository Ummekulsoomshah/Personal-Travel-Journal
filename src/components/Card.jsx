import React from "react";
export default function Card(props) {
   
        return (
            <div className="card">
                <div className="badge">{props.card.id}</div>
                <div className="img-main">
                    <img src={props.card.coverImg} alt="" />
                </div>
                <div className="content">
                    <div className="map-info">
                        <i class="fa-solid fa-location-dot"></i>
                        <a href={props.card.map} target="_blank">view on google map</a>
                    </div>
                    <p>{props.card.location}</p>
                    <h2>{props.card.title}</h2>
                    <p>{props.card.date}</p>
                    <p>{props.card.description}</p>
                </div>
            </div>
        )
    }

   
