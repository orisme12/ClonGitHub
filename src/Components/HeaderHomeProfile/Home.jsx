import React from "react";


export default function Home({ name, clase,type }) {
  return (
    <div style={{ display: "flex" , padding : "5px"}}>
      <box-icon name={clase} style={{width: "19px"} } type={type}></box-icon>
      <p style={{fontSize : "12px" , padding: "5px"}}>{name}</p>
    </div>
  );
}
