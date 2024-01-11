import React, { useState, useEffect } from 'react';
import './style.css';
import axios from 'axios';

export default function App() {
  function onSubmit(e) {
    e.preventDefault();
    console.log(e);
    if (name.length > 0 && age.length > 0 && degree.length > 0) {
      alert('Addedd Successfully');
    } else {
      alert('Not Addedd');
    }
  }

  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [degree, setDegree] = useState('');

  const postData = () => {
    const result = {
      name: { name },
      age: { age },
      degree: { degree },
    };

  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(postData),
  });


  return (
    <div>
      <form>
        <label for="name">Name</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter Name"
        />
        <label for="age">Age</label>
        <input
          type="text"
          id="age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          placeholder="Enter Age"
        />
        <select value={degree} onChange={(e) => setDegree(e.target.value)}>
          <option>Select</option>
          <option>BE</option>
          <option>ME</option>
          <option>PHD</option>
        </select>
        <button onClick={onSubmit}>submit</button>
      </form>
    </div>
  );
}
