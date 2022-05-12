import "./App.css";
import book from "./book.png";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img src={book} className="App-logo img-fluid" alt="logo" />
          <h1>Dictionary</h1>
        </header>
        <main>
          <Dictionary defaultKeyword="sunset" />
        </main>
        <footer>
          Coded by{" "}
          <a
            href="https://www.linkedin.com/in/kelseymurray07/"
            target="_blank"
            rel="noreferrer"
          >
            Kelsey Murray
          </a>
          , open sourced on {""}
          <a
            href="https://github.com/artistkelz/dictionary-app"
            target="_blank"
            rel="noreferrer"
          >
            Github
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
