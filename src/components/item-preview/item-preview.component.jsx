import React, { Component } from 'react'
import './item-preview.styles.scss'
const ItemPreview = props => (
  <div className="item-preview">
    <div className="img"> <img src={props.ride.map_url} /> </div>
    <div className="details">
      <div>
        <label className="label"> Ride id :</label>
        <label> {props.ride.id} </label>
      </div>
      <div>
        <label className="label"> Origin Station :</label>
        <label> {props.ride.origin_station_code}</label>
      </div>
      <div>
        <label className="label"> Station Path :</label>
        <label> [{props.ride.station_path.join(', ')}]</label>
      </div>
      <div>
        <label className="label"> Date :</label>
        <label> {props.ride.date}</label>
      </div>
      <div>
        <label className="label"> Distance :</label>
        <label> {props.ride.distance} </label>
      </div>
    </div>
    <div className="badg">
      <span className="badg-item"> {props.ride.city} </span>
      <span className="badg-item"> {props.ride.state} </span>
    </div>
  </div>
)


export default ItemPreview