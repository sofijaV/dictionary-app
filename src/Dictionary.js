import React, { useState } from "react";
import "./Dictionary.css";
import axios from "axios";
import Word from "./Word.js";
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
      <h1>What do you wanna look up...?</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="search"
          placeholder="Type any word.."
          autoFocus="on"
          onChange={updateWord}
        ></input>
      </form>
      <Word data={info} />
    </div>
  );
}
