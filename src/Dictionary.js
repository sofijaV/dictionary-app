import React, { useState } from "react";
import "./Dictionary.css";
import axios from "axios";
import Result from "./Result.js";
export default function Dictionary(props) {
  let [word, setWord] = useState(props.defaultWord);
  let [info, setInfo] = useState(null);
  let [loaded, setLoaded] = useState(false);
  function showData(response) {
    setInfo(response.data[0]);
  }
  function updateWord(event) {
    event.preventDefault();
    setWord(event.target.value);
  }
  function handleSubmit(event) {
    event.preventDefault();
    search();
  }
  function search() {
    // documentation: https://dictionaryapi.dev/
    let url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
    axios.get(url).then(showData);
  }
  function load() {
    setLoaded(true);
    search();
  }
  if (loaded) {
    return (
      <div className="Dictionary">
        <section>
          <h1>What word you wanna look up?</h1>
          <form onSubmit={handleSubmit}>
            <input
              type="search"
              autoFocus="on"
              defaultValue={props.defaultWord}
              onChange={updateWord}
            ></input>
            <button type="search" className="btn btn-light">
              <i className="fas fa-search"></i>
            </button>
          </form>
          <div className="hint">Suggested words: sunset, forest, yoga</div>
        </section>
        <Result data={info} />
      </div>
    );
  } else {
    load();
    return null;
  }
}
