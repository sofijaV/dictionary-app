import React, { useState } from "react";
import "./Dictionary.css";
import axios from "axios";
import Result from "./Result.js";
export default function Form() {
  let [word, setWord] = useState(null);
  let [info, setInfo] = useState(null);
  function showData(response) {
    console.log(response.data[0]);
    setInfo(response.data[0]);
  }
  function updateWord(event) {
    event.preventDefault();
    setWord(event.target.value);
  }
  function handleSubmit(event) {
    event.preventDefault();
    // documentation: https://dictionaryapi.dev/
    let url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
    axios.get(url).then(showData);
  }
  return (
    <div className="Dictionary">
      <section>
        <h1>What word you wanna look up?</h1>
        <form onSubmit={handleSubmit}>
          <input type="search" autoFocus="on" onChange={updateWord}></input>
          <button type="search" className="btn btn-light">
            <i className="fas fa-search"></i>
          </button>
        </form>
        <div className="hint">Suggested words: sunset, forest, yoga</div>
      </section>
      <Result data={info} />
    </div>
  );
}
