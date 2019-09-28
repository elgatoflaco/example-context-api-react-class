import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { AppProvider } from "./context/example";
import Title from "./components/Title";
class App extends Component {
  state = {
    title: "Hello from Context"
  };
  render = _ => (
    <AppProvider
      // value={this.state}
      value={{
        data: this.state,
        updateTitle: () => {
          this.setState({ ...this.state, emojy: "😎" });
        }
      }}
    >
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            <Title />
          </p>
        </header>
      </div>
    </AppProvider>
  );
}

export default App;
