// import React from 'react'
// import '../css/Contact.css'
// export default function Contact() {
//   return (
//     <div className='lastbox'>
//         <div className="contele">
//             <h4 style={{paddingTop:'4vh'}}>Let's Connect</h4>
//             <p style={{paddingLeft:'20px'}}>
//                 I am currently looking for new oppurtunities, my inbox will always be open. 
//                 Whether you have any questions, or just want to say me Hi, I'll always be best to get back to you
//             </p>
//         </div>
//         <div className="contele">
//             <label for="">Your Email</label><br />
//             <input type="text" /><br /><br />
//             <label for="">Subject</label><br />
//             <input type="text" /><br /><br />
//             <label for="">Message</label><br />
//             <textarea name="" id="" rows="3"></textarea>
//             <br />
//             <button type='submit' className="btn btn-primary my-3">Submit</button>
//         </div>
//     </div>
//   )
// }


import React, { useState } from 'react';
import '../css/Contact.css';

export default function Contact() {
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const response = await fetch('http://localhost:5000/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          subject,
          message,
        }),
      });
  
      if (response.ok) {
        alert('Email sent successfully');
        setEmail('');
        setSubject('');
        setMessage('');
      } else {
        alert('Failed to send email');
      }
    } catch (error) {
      console.error('Error sending email:', error);
      alert('Failed to send email');
    }
  };
  

  return (
    <div className='lastbox' id='contact'>
      <div className="contele">
        <h4 style={{paddingTop:'4vh'}}>Let's Connect</h4>
        <p style={{paddingLeft:'20px'}}>
          I am currently looking for new opportunities, my inbox will always be open.
          Whether you have any questions, or just want to say hi, I'll always do my best to get back to you.
        </p>
      </div>
      <div className="contele">
        <form onSubmit={handleSubmit}>
          <label htmlFor="email">Your Email</label><br />
          <input 
            type="email" 
            id="email" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required 
          /><br /><br />
          <label htmlFor="subject">Subject</label><br />
          <input 
            type="text" 
            id="subject" 
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            required 
          /><br /><br />
          <label htmlFor="message">Message</label><br />
          <textarea 
            id="message" 
            rows="3" 
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          ></textarea>
          <br />
          <button type='submit' className="btn btn-primary my-3">Submit</button>
        </form>
      </div>
    </div>
  );
}