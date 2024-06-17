import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <Weather defaultCity="Asunción" />
      <footer>
        <div>
          This project was coded by Claudia Achucarro.
          <div>
            {" "}
            You can find the repository in{" "}
            <a
              href="https://github.com/achucarrob/my-app"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              this link.
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
