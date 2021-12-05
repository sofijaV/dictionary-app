import React from "react";

export default function Meanings(props) {
  return (
    <div className="Meanings">
      <h3>{props.meaning.partOfSpeech}</h3>
      {props.meaning.definitions.map(function (definition, index) {
        return (
          <div key={index}>
            <p>{definition.definition}</p>
            <em>
              <p>{definition.example}</p>
            </em>
          </div>
        );
      })}
    </div>
  );
}
