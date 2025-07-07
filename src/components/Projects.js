// import React from 'react';
// import ProjectCard from './ProjectCard';
// import '../css/Certifications.css';

// export default function Projects(props) {
//   return (
//     <div className="container certbox-m">
//       <center><h3 className="heading py-3">Projects</h3></center>
//       <div className="container cont">
//         <ProjectCard 
//             title={'Surveillance based Control System'} 
//             imgName='surveillance.png' 
//             desc='JavaScript, ReactJS, NodeJS, Tailwind CSS, MongoDB, Axios, Node-WiFi' 
//             role='Fullstack Web Developer'
//             githubLink=""
//             altdesc={`**Role**: Full Stack Web Developer\n
//               **Responsibilities**: \n
//               • Authentication and Authorization of Uses and Admin\n
//               • Creating a attractive User Interface\n
//               • Stream cameras and divide areas\n
//               • Implement Backend logic to make it function\n
//               • Estimating the advantage by using our model by calculating cost savings and display them using graphs.\n
//               **Project Description**: The project is initiated to find an efficient solution to reduce human intervention in controlling devices. This system uses real-time camera surveillance that were strategically installed to cover the areas with devices and let the user to turn on/off devices in specified areas. Working on it to make it more effective and user-friendly.`}

//         />
//         <ProjectCard 
//             title={'Online Apraisal'} 
//             imgName='Appraisal.png' 
//             desc='JavaScript, ReactJS, NodeJS, Tailwind CSS, MongoDB, Axios' 
//             role='Project Lead (Under Faculty Guidance)'
//             githubLink="https://github.com/NikhilTanneeru/OnlineAppraisal"
//             altdesc={`➢ Analyze the performance of faculty of a university by considering various factors and activities that are conducted by them.\n
//               ➢ Made using ReactJS, NodeJS ad MongoDB as database.\n
//               ➢ Used JWT for login authentication.\n
//               ➢ Used Axios API to make http requests from server(NodeJS).\n
//               ➢ Dashboard for visualizing performance metrics.`}

//         />
//         <ProjectCard 
//             title={'PayRoll Management System'} 
//             imgName='PayRoll.png' 
//             desc='Java, JavaFx, Apache Poi, Spreadsheet as Database, Scene Builder' 
//             role='Team Lead'
//             githubLink="https://github.com/NikhilTanneeru/PayRoll"  
//             altdesc={`Lead a team to develop Payroll Management System using Java, Javafx, Fxml.\n
//               ➢ Used apache poi library to access csv file as a database. \n
//               ➢ Consists of User and Admin Login pages\n
//               ➢ Admin can Add, Modify or Delete Employees.\n
//               ➢ User Can view their Salary Details in a Table Format.\n
//               ➢ GUI is built by using JavaFx and SceneBuilder( which uses FXML).`}
//           />
//         <ProjectCard 
//               title={'Infix to Postfix Converter'} 
//               imgName='InfixPostfix.png' 
//               desc='HTML, CSS, JavaScript with dynamic programming' 
//               role='Team Lead'
//               altdesc={`This interactive website converts Infix Expression to Prefix and Postfix Expressions.`}
//               githubLink="https://github.com/NikhilTanneeru/Expression-Converter"
//         />
//         <ProjectCard 
//               title={'Random Password Generator'} 
//               imgName='Password.png' 
//               desc='Python, Libraries such as Random' 
//               role='Logic and GUI Development'
//               githubLink="https://github.com/NikhilTanneeru/Random-Password-Generator"
//               altdesc={`➢ Generates a Random Password of Specified Length\n
//                 ➢ Includes Digits, Alphabet and Special Characters \n
//                 ➢ Repetition of characters is User Choice`}
//         />
//         <ProjectCard 
//               title={'Temperature Converter'} 
//               imgName='TempConv.png' 
//               desc='HTML, CSS, JavaScript' 
//               role='Individual Contributor'
//               githubLink="https://github.com/NikhilTanneeru/Temperature-Converter"
//               altdesc={`Responsible Website which converts temperature across three different units of temperature: Celsius, Kelvin and Fahrenheit.`}
//         />
//       </div>
//     </div>
//   );
// }

import React, { useState } from 'react';
import ProjectCard from './ProjectCard';
import '../css/Certifications.css';

export default function Projects(props) {
  const [showAll, setShowAll] = useState(false);

  const projects = [
    {
      title: 'Surveillance based Control System',
      imgName: 'surveillance.png',
      desc: 'JavaScript, ReactJS, NodeJS, Tailwind CSS, MongoDB, Axios, Node-WiFi',
      role: 'Fullstack Web Developer',
      githubLink: '',
      altdesc: `**Role**: Full Stack Web Developer\n
        **Responsibilities**: \n
        • Authentication and Authorization of Uses and Admin\n
        • Creating a attractive User Interface\n
        • Stream cameras and divide areas\n
        • Implement Backend logic to make it function\n
        • Estimating the advantage by using our model by calculating cost savings and display them using graphs.\n
        **Project Description**: The project is initiated to find an efficient solution to reduce human intervention in controlling devices. This system uses real-time camera surveillance that were strategically installed to cover the areas with devices and let the user to turn on/off devices in specified areas. Working on it to make it more effective and user-friendly.`
    },
    {
      title: 'Online Apraisal',
      imgName: 'Appraisal.png',
      desc: 'JavaScript, ReactJS, NodeJS, Tailwind CSS, MongoDB, Axios',
      role: 'Project Lead (Under Faculty Guidance)',
      githubLink: 'https://github.com/NikhilTanneeru/OnlineAppraisal',
      altdesc: `➢ Analyze the performance of faculty of a university by considering various factors and activities that are conducted by them.\n
        ➢ Made using ReactJS, NodeJS ad MongoDB as database.\n
        ➢ Used JWT for login authentication.\n
        ➢ Used Axios API to make http requests from server(NodeJS).\n
        ➢ Dashboard for visualizing performance metrics.`
    },
    {
      title: 'PayRoll Management System',
      imgName: 'PayRoll.png',
      desc: 'Java, JavaFx, Apache Poi, Spreadsheet as Database, Scene Builder',
      role: 'Team Lead',
      githubLink: 'https://github.com/NikhilTanneeru/PayRoll',
      altdesc: `Lead a team to develop Payroll Management System using Java, Javafx, Fxml.\n
        ➢ Used apache poi library to access csv file as a database. \n
        ➢ Consists of User and Admin Login pages\n
        ➢ Admin can Add, Modify or Delete Employees.\n
        ➢ User Can view their Salary Details in a Table Format.\n
        ➢ GUI is built by using JavaFx and SceneBuilder( which uses FXML).`
    },
    {
      title: 'Infix to Postfix Converter',
      imgName: 'InfixPostfix.png',
      desc: 'HTML, CSS, JavaScript with dynamic programming',
      role: 'Team Lead',
      githubLink : "https://github.com/NikhilTanneeru/Expression-Converter",

      altdesc: `This interactive website converts Infix Expression to Prefix and Postfix Expressions.`
    },
    {
      title: 'Random Password Generator',
      imgName: 'Password.png',
      desc: 'Python, Libraries such as Random',
      role: 'Logic and GUI Development',
      githubLink: 'https://github.com/NikhilTanneeru/Random-Password-Generator',
      altdesc: `➢ Generates a Random Password of Specified Length\n
        ➢ Includes Digits, Alphabet and Special Characters \n
        ➢ Repetition of characters is User Choice`
    },
    {
      title: 'Temperature Converter',
      imgName: 'TempConv.png',
      desc: 'HTML, CSS, JavaScript',
      role: 'Individual Contributor',
      githubLink: "https://github.com/NikhilTanneeru/Temperature-Converter",

      altdesc: `Responsible Website which converts temperature across three different units of temperature: Celsius, Kelvin and Fahrenheit.`
    }
  ];

  const visibleProjects = showAll ? projects : projects.slice(0, 3);

  return (
    <div className="container certbox-m">
      <center><h3 className="heading py-3">Projects</h3></center>
      <div className="container cont">
        {visibleProjects.map((proj, index) => (
          <ProjectCard key={index} {...proj} />
        ))}
      </div>
      <div className="view-more-container">
        <button onClick={() => setShowAll(!showAll)} className="view-more-btn">
          {showAll ? 'Show Less' : 'View More'}
        </button>
      </div>
    </div>
  );
}
