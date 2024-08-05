import React, { useState } from "react";
import "./App.css";

function App() {
  const [reservation, setReservation] = useState(null);
  const [form, setForm] = useState({
    name: "",
    date: "",
    train: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setReservation(form);
  };

  return (
    <div className="App">
      <h1>Railway Reservation System</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={form.name}
          onChange={handleChange}
          required
        />
        <input
          type="date"
          name="date"
          placeholder="Date"
          value={form.date}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="train"
          placeholder="Train Number"
          value={form.train}
          onChange={handleChange}
          required
        />
        <button type="submit">Reserve</button>
      </form>

      {reservation && (
        <div>
          <h2>Reservation Details</h2>
          <p>Name: {reservation.name}</p>
          <p>Date: {reservation.date}</p>
          <p>Train: {reservation.train}</p>
        </div>
      )}
    </div>
  );
}

export default App;
