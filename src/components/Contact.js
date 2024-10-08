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



// import React, { useState } from 'react';
// import '../css/Contact.css';
// import { FaEnvelope } from 'react-icons/fa';


// export default function Contact() {
//   const [email, setEmail] = useState('');
//   const [subject, setSubject] = useState('');
//   const [message, setMessage] = useState('');

//   const handleSubmit = async (e) => {
//     e.preventDefault();
  
//     try {
//       const response = await fetch('http://localhost:5000/send-email', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//           email,
//           subject,
//           message,
//         }),
//       });
  
//       if (response.ok) {
//         alert('Email sent successfully');
//         setEmail('');
//         setSubject('');
//         setMessage('');
//       } else {
//         alert('Failed to send email');
//       }
//     } catch (error) {
//       console.error('Error sending email:', error);
//       alert('Failed to send email');
//     }
//   };
  

  // return (
  //   <div className='lastbox' id='contact'>
  //     <div className="contele">
  //       <h4 style={{paddingTop:'4vh'}}>Let's Connect</h4>
  //       <p style={{paddingLeft:'20px'}}>
  //         I am currently looking for new opportunities, my inbox will always be open.
  //         Whether you have any questions, or just want to say hi, I'll always do my best to get back to you.
  //       </p><br />
  //       <p><b>Note: </b>The submit button on the form does not work when viewing my portfolio on GitHub Pages, as it does not support server-side processing. Please use your email client to contact me by clicking the button below.</p>
  //       <button className="btn btn-primary my-3">
  //         <FaEnvelope />
  //         <a href="mailto:nikhiltanneeru4@gmail.com" className="text-decoration-none mx-3">
  //           Mail Here
  //         </a>
  //       </button>
  //     </div>
  //     <div className="contele">
  //       <form onSubmit={handleSubmit}>
  //         <label htmlFor="email">Your Email</label><br />
  //         <input 
  //           type="email" 
  //           id="email" 
  //           value={email}
  //           onChange={(e) => setEmail(e.target.value)}
  //           required 
  //         /><br /><br />
  //         <label htmlFor="subject">Subject</label><br />
  //         <input 
  //           type="text" 
  //           id="subject" 
  //           value={subject}
  //           onChange={(e) => setSubject(e.target.value)}
  //           required 
  //         /><br /><br />
  //         <label htmlFor="message">Message</label><br />
  //         <textarea 
  //           id="message" 
  //           rows="3" 
  //           value={message}
  //           onChange={(e) => setMessage(e.target.value)}
  //           required
  //         ></textarea>
  //         <br />
  //         <button type='submit' className="btn btn-primary my-3">Submit</button>
  //       </form>
  //     </div>
      
  //   </div>
  // );
// }







import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import '../css/Contact.css';
import { FaEnvelope } from 'react-icons/fa'; // Ensure you have react-icons installed

export default function Contact() {
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const templateParams = {
      email: email,
      subject: subject,
      message: message,
    };

    emailjs.send('service_6vmyk7g', 'template_ubo7d07', templateParams, '1RkTK2INcGPOjFlhG')
      .then((response) => {
        alert('Message received. We will get back to you soon.');
        setEmail('');
        setSubject('');
        setMessage('');
      }, (error) => {
        alert('Failed to send message. Please try again later.');
      });
  };

  return (
    <div className='lastbox' id='contact'>
      <div className="contele">
        <h4 style={{ paddingTop: '4vh' }}>Let's Connect</h4>
        <p style={{ paddingLeft: '20px' }}>
          I am currently looking for new opportunities, my inbox will always be open.
          Whether you have any questions, or just want to say hi, I'll always do my best to get back to you.
        </p>
        <br />
        <p><b>Note: </b>If the Submit button is not working, please use below button to securely send mail via your email client!</p>
        <button className="btn btn-primary my-3">
          <FaEnvelope />
          <a href="mailto:nikhiltanneeru4@gmail.com" className="text-decoration-none mx-3">   
            Mail Here
          </a>
        </button>
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
