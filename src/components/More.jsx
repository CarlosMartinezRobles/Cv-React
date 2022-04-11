import React from "react";
import "./More.css";

const More = ({ languages, habilities, volunteer }) => {
  return (
    <div className="more">
      <div className="divider">
        <span></span>
        <span>languages</span>
        <span></span>
      </div>
      <div className="card"> 
        <p>{languages.ingles.language}</p>
        <p>✏️ Nivel escrito: {languages.ingles.wrlevel}</p>
        <p>💭 Nivel oral: {languages.ingles.splevel}</p>
      </div>
      <div className="card"> 
        <p>{languages.portugues.language}</p>
        <p>✏️ Nivel escrito: {languages.portugues.wrlevel}</p>
        <p>💭 Nivel oral: {languages.portugues.splevel}</p>
      </div>
        <div className="divider">
        <span></span>
        <span>Skills</span>
        <span></span>
        </div>
      <div className="habilities card">
        {habilities.map((txt) => (
          <p>🔧 {txt}</p>
        ))}
      </div>
      <div className="divider">
        <span></span>
        <span>Voluntariados</span>
        <span></span>
      </div>
      <div className="volunteer card">
        {volunteer.map((item) => {
          return (
            <div key={JSON.stringify(item)}>
              <p className="name">🥽{item.name}</p>
              <p>{item.where}</p>
              <p>{item.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default More;
