import React from "react";
import "./styles.css";
import Name from "./Name";
import List from "./List";
import Button from "./Button";

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <h1>React Three Components</h1>
      </header>

      {/* Location 1: Top - Name component */}
      <section className="section section-top">
        <h2>Location 1: Name Component</h2>
        <p className="label">The component below is the Name component:</p>
        <Name />
      </section>

      {/* Location 2: Middle - List component */}
      <section className="section section-middle">
        <h2>Location 2: List Component</h2>
        <p className="label">The component below is the List component:</p>
        <List />
      </section>

      {/* Location 3: Bottom - Button component */}
      <section className="section section-bottom">
        <h2>Location 3: Button Component</h2>
        <p className="label">The component below is the Button component:</p>
        <Button />
      </section>
    </div>
  );
}

export default App;
