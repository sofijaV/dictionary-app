import "./App.css";
import Dictionary from "./Dictionary.js";
import reading from "./reading.svg";
export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img src={reading} className="img-fluid" alt="woman reading"></img>
        </header>
        <Dictionary defaultWord="plant" />
        <footer className="App-footer">
          This code is{" "}
          <a
            href="https://github.com/sofijaV/dictionary-app"
            target="_blank"
            rel="noreferrer"
          >
            open-sourced on GitHub <i class="fab fa-github"></i>
          </a>{" "}
          <div>
            and coded <small> (with a lot of love)</small> by Sofija{" "}
            <i className="fas fa-heart"></i>
          </div>
        </footer>
      </div>
    </div>
  );
}
