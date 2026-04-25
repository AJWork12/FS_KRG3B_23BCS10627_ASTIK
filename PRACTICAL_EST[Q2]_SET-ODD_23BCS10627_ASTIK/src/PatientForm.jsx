import React, { useState } from 'react';
export default function PatientForm() {
  const [patientName, setPatientName] = useState('');
  const [email, setEmail] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!patientName.trim() || !email.trim()) {
      console.log('Form submission prevented: All fields are required');
      return;
    }
    console.log('Form submitted:', {
      patientName,
      email,
    });
    setPatientName('');
    setEmail('');
  };
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="patientName">Patient Name: </label>
        <input
          id="patientName"
          type="text"
          value={patientName}
          onChange={(e) => setPatientName(e.target.value)}
          placeholder="Enter patient name"
        />
      </div>

      <div>
        <label htmlFor="email">Email: </label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter email"
        />
      </div>

      <button type="submit">Submit</button>
    </form>
  );
}
