import React from 'react';
import  { useState } from 'react';

function Signin() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setpassword] = useState('');
  const [contact, setcontact] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = { name, email,password,contact};

    try {
      const response = await fetch('http://localhost:5000/create/insert', {
        method: 'POST',
        headers: {  
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        alert('Form submitted successfully!');
      } else {
        alert('Failed to submit form.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Error submitting form.');
    }
  };

  return (
    <div>
      <h1>Signin Form</h1>
      <form onSubmit={handleSubmit} method='post' >
        <label>
          <h3>Name:</h3>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
        </label>
        <br />
        <label>
          <h3>Email:</h3>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </label>
        <br />
        <label>
          <h3>password:</h3>
          <input type="password" value={password} onChange={(e) => setpassword(e.target.value)} required />
        </label>
        <br />
        <label>
          <h3>contact:</h3>
          <input type="contact" value={contact} onChange={(e) => setcontact(e.target.value)} required />
        </label><br />
       < br />
        <button type="submit">Submit</button>
      
      </form>
    
    </div>
   
 
  );
}
export default Signin;