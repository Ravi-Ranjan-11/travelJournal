import React from 'react'

export default function Card(props) {
    console.log(props.items);
  return (
      <div className="card">
          <ul>
              <li><img src={props.items.image} className="card--img"/></li>
              <li className="card--about">
                  <h4><img src={require("../images/location_icon.png")} /> {props.items.location} <span className="second-word-formatting"><a href={props.items.googleMapsUrl} target="_blank" > View on Google Maps</a></span> </h4>
                  <h2>{props.items.title}</h2>
                  <h3>{props.items.startDate} - {props.items.endDate}</h3>
                  <p>{props.items.description}</p>
              </li>
          </ul>
      </div>
  )
}
