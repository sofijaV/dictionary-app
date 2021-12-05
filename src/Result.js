import React from "react";
import Meanings from "./Meanings.js";

export default function Result(props) {
  if (props.data) {
    return (
      <div className="Result">
        <h1>{props.data.word}</h1>
        <h2>"{props.data.phonetics[0].text}"</h2>
        {props.data.meanings.map(function (meaning, index) {
          return (
            <div key={index}>
              <Meanings meaning={meaning} />
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
