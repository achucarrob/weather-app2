import logo from "./logo.svg";
import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <Weather />
      <footer>
        <p>
          This project was coded by Claudia Achucarro. You can find the
          repository in{" "}
          <a
            href="https://github.com/achucarrob/my-app"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            this link.
          </a>
        </p>
      </footer>
    </div>
  );
}

export default App;
