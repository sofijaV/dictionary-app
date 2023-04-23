import React, { useState } from "react";
import "./Dictionary.css";
import axios from "axios";
import Result from "./Result.js";

export default function Dictionary(props) {
  let [word, setWord] = useState(props.defaultWord);
  let [info, setInfo] = useState(null);
  let [loaded, setLoaded] = useState(false);
  let [photos, setPhotos] = useState(null);
  function showData(response) {
    setInfo(response.data[0]);
  }
  function showPhotos(response) {
    setPhotos(response.data.photos);
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
    // documentation: https://www.pexels.com/api/documentation/#photos-search
    let pexelsKey = "563492ad6f91700001000001e45d990c31ae4f35b6810fc3b9461aa2";
    let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${word}&per_page=6`;
    axios
      .get(pexelsApiUrl, { headers: { Authorization: `${pexelsKey}` } })
      .then(showPhotos);
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
        <Result data={info} photos={photos} />
      </div>
    );
  } else {
    load();
    return null;
  }
}
