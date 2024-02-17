import logo from "./logo.svg";
import MSWrapper from "./MsWrapper";
import { DD_OPTIONS } from "./constants";
// import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div style={{ width: "50%", margin: "0 auto" }}>
          <MSWrapper
            displayValue="label"
            onKeyPressFn={function noRefCheck() {}}
            onSearch={function noRefCheck() {}}
            options={DD_OPTIONS}
            showCheckbox
          />
        </div>
      </header>
    </div>
  );
}

export default App;
