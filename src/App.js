import "./App.css";
import book from "./book.png";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={book} className="App-logo img-fluid" alt="logo" />
        <h1>Dictionary</h1>
      </header>
    </div>
  );
}

export default App;
