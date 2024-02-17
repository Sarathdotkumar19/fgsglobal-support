import logo from "./logo.svg";
import MSWrapper from "./MsWrapper";
import SelectWithSearch from "./SelectWithSearch";
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
          <br />
          <br />
          <br />
          <SelectWithSearch
            isObject={false}
            onKeyPressFn={function noRefCheck() {}}
            onRemove={function noRefCheck() {}}
            onSearch={function noRefCheck() {}}
            onSelect={function noRefCheck() {}}
            options={[
              "Sarath Kumar",
              "Narmadha",
              "Uthra",
              "Sathick basha",
              "Furkan",
            ]}
            placeholder="Find a person"
          />
        </div>
      </header>
    </div>
  );
}

export default App;
