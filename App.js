import React, { useState } from 'react';
import './style.css';

export default function App() {
  const url = 'https://dummy.restapiexample.com/api/v1/create';

  const postData = async () => {
    try {
      const dataToSend = { name, age, degree };
      console.log('Data to send:', dataToSend);

      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(dataToSend),
      });

      if (response.ok) {
        alert('Added Successfully');
      } else {
        alert('Not Added');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred while adding data.');
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (name.length > 0 && age.length > 0 && degree.length > 0) {
      postData();
    } else {
      alert('Please fill in all fields.');
    }
  };

  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [degree, setDegree] = useState('');

  return (
    <div>
      <form>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter Name"
        />
        <label htmlFor="age">Age</label>
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
        <button onClick={onSubmit}>Submit</button>
      </form>
    </div>
  );
}
