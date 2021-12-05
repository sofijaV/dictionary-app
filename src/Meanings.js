import React from "react";
import "./Meanings.css";
export default function Meanings(props) {
  return (
    <div className="Meanings">
      <h3>{props.meaning.partOfSpeech}</h3>
      {props.meaning.definitions.map(function (definition, index) {
        return (
          <div key={index}>
            <strong>
              <p className="mt-3">{definition.definition}</p>
            </strong>
            <em>
              <p>{definition.example}</p>
            </em>
            {definition.synonyms.map(function (synonym, index) {
              return (
                <ul>
                  <li key={index}>{synonym},</li>
                </ul>
              );
            })}
          </div>
        );
      })}
    </div>
  );
}
