import React, { useState } from 'react'; 
import './RegistrationForm.css';

function RegistrationForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    contact: '',
    organization: '',
    delegates: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        alert('Thank you for registering!');
      } else {
        alert('Error submitting form');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Error submitting form');
    }
  };

  return (
    <section id="register" className="register">
      <div className='whole'>
      <h2>Register Now</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Full Name" value={formData.name} onChange={handleChange} required />
        <input type="email" name="email" placeholder="Email Address" value={formData.email} onChange={handleChange} required />
        <input type="tel" name="contact" placeholder="Contact Number" value={formData.contact} onChange={handleChange} required />
        <input type="text" name="organization" placeholder="Organization" value={formData.organization} onChange={handleChange} required />
        <input type="number" name="delegates" placeholder="Number of Delegates" value={formData.delegates} onChange={handleChange} required />
        <button type="submit">Submit</button>
      </form>
      </div>
    </section>
  );
}

export default RegistrationForm;
