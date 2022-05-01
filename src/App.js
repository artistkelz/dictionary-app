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
          <Dictionary />
        </main>
        <footer>
          Coded by Kelsey Murray hosted on Netifly and open sourced on Github
        </footer>
      </div>
    </div>
  );
}

export default App;
