import React from "react";
import "./Meanings.css";
export default function Meanings(props) {
  return (
    <div className="Meanings">
      <section>
        <h3>{props.meaning.partOfSpeech}</h3>
        {props.meaning.definitions.map(function (definition, index) {
          return (
            <div key={index}>
              <strong>{definition.definition}</strong>
              <br />

              <em>{definition.example}</em>
              <br />
              {definition.synonyms.map(function (synonym, index) {
                return (
                  <ul key={index}>
                    <li>{synonym}</li>
                  </ul>
                );
              })}
            </div>
          );
        })}
      </section>
    </div>
  );
}
