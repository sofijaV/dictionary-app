import React, { useState } from "react";
import "./Dictionary.css";
export default function Form() {
  let [word, setWord] = useState(null);
  function updateWord(event) {
    event.preventDefault();
    setWord(event.target.value);
  }
  function handleSubmit(event) {
    event.preventDefault();
    return alert(word);
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
