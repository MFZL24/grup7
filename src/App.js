// File: src/App.js
import React from "react";
import "./App.css"; // Import file CSS
import CounterComponent from "./components/CounterComponent";
import UserComponent from "./components/UserComponent";

function App() {
  return (
    <div className="container">
      {" "}
      {/* Tambahkan class container */}
      <h1>Redux Toolkit App</h1>
      <CounterComponent />
      <UserComponent />
    </div>
  );
}

export default App;
