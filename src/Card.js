import React from "react";

function Card(props){
    console.log(props)
  return(
  <>
    <div className="main_div">
    <div className="crads">
    <div className="card">
      <img className="images" src={props.imgsrc} alt="image" />
      <div className="card_info">
      <span className="card_category">{props.title}</span>
      <h3 className="card_title">{props.sname} </h3>
    <a href={props.link} target="">
    <button className="button" style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
      watch now
    </button>
    </a>
    
      </div>
    </div>
    </div>
    </div>
    </>
    )}
    export default Card;