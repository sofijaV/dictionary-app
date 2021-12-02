import React, { useState } from "react";
import "./Dictionary.css";
import axios from "axios";
export default function Form() {
  let [word, setWord] = useState(null);
  function showData(response) {
    console.log(response.data[0]);
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
      <h1>What do you wanna look up...?</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="search"
          placeholder="Type any word.."
          autoFocus="on"
          onChange={updateWord}
        ></input>
        <button type="submit" className="btn btn-outline-dark">
          Search
        </button>
      </form>
    </div>
  );
}
