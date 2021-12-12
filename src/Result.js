import React from "react";
import Meanings from "./Meanings.js";
import "./Result.css";
import Photos from "./Photos.js";
export default function Result(props) {
  if (props.data) {
    return (
      <div className="Result">
        <section>
          <h2>{props.data.word}</h2>
          <a
            href={props.data.phonetics[0].audio}
            target="_blank"
            rel="noreferrer"
          >
            🔉
          </a>
          <span className="text">/{props.data.phonetics[0].text}/</span>
        </section>
        <Photos photos={props.photos} />
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
