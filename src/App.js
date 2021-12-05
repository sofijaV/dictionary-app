import "./App.css";
import Dictionary from "./Dictionary.js";
export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">Dictionary</header>
        <Dictionary />
        <footer className="App-footer">
          This code is{" "}
          <a
            href="https://github.com/sofijaV/dictionary-app"
            target="_blank"
            rel="noreferrer"
          >
            open-sourced on GitHub{" "}
          </a>
          and coded by Sofija
        </footer>
      </div>
    </div>
  );
}
