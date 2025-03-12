import React, { useState } from 'react'

function Formcomponent() {
    const[formdata,setformdata]=useState({
        name: '',
        email: '',
        password: '',
    });
    const[submittedData, setSubmittedData]=useState();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setformdata({
          ...formdata,
          [name]: value,
        });
      };
      const handleSubmit = (e) => {
        e.preventDefault();
        setSubmittedData(formdata); // Set the submitted form data
      };
    //   const handleadd = (e) => {
    //     e.preventDefault();
    
    //     let valid = true;
    //     const newErrors = { ...errors };
    
    //     // Validate name
    //     if (!formdata.name) {
    //       newErrors.name = 'Name is required.';
    //       valid = false;
    //     }
    
    //     // Validate email
    //     if (!formdata.email) {
    //       newErrors.email = 'Email is required.';
    //       valid = false;
    //     } else if (!validateEmail(formData.email)) {
    //       newErrors.email = 'Please enter a valid email address.';
    //       valid = false;
    //     }
    
    //     // Validate password
    //     if (!formdata.password) {
    //       newErrors.password = 'Password is required.';
    //       valid = false;
    //     }
    
    //     // If valid, submit the data
    //     if (valid) {
    //       setSubmittedData(formdata);
    //       setErrors({ name: '', email: '', password: '' }); // Clear any existing errors
    //     } else {
    //       setErrors(newErrors);
    //     }
    //   };
  return (
    <div>
         <h2>Sign Up Form</h2>
      
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formdata.name}
            onChange={handleChange}
            required
          />
        </div>
        
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formdata.email}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formdata.password}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit">Submit</button>
      </form>

      {/* Display the submitted form data */}
      {submittedData && (
        <div>
          <h3>Submitted Data:</h3>
          <pre>{JSON.stringify(submittedData, null, 2)}</pre>
        </div>
      )}
    </div>
  )
}

export default Formcomponent
