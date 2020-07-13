import React from "react";

export default function App() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="App">
      <form onSubmit={(e) => handleSubmit(e)}>
        <div>
          <label htmlFor="email">Email:</label>
          <input id="email" />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input id="password" />
        </div>
        <button>Submit</button>
      </form>
    </div>
  );
}
