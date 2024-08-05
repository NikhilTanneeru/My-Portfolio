import React from 'react'
import Certificate from './Certificate'
import '../css/Certifications.css'

export default function Certifications() {
  return (
    <div className="container certbox-m">
        <center><h3 className="heading" style={{paddingTop:'3px'}}>Certifications</h3></center><br />
        <div class='container cont'>
            <Certificate className='certificate' title='Microsoft Azure Fundamentals (DP-900)' imgName='dp-900.png' desc='By Microsoft' altdesc='I learned the core data concepts and how they are implemented using Microsoft Azure data services. This includes an understanding of relational and non-relational data, data processing, and query languages like SQL.'/>

            <Certificate className='certificate' title='JavaScript Essentials 1' imgName='JSE.png' desc='By Cisco Network Academy' altdesc={`This Course has helped me to learn JavaScript from Scratch to Intermediate Level. Some of the topics include:\n
                **Operators and User Interaction:** Understanding how to use various operators and handle user input.\n
                **Control Flow:** Mastering conditional execution and loops to control the flow of programs.\n
                **Functions:** Learning to define and use functions to organize and reuse code.\n
                **Errors, Exceptions, Debugging, and Troubleshooting: ** Identifying and managing errors, using exceptions, and debugging techniques.`}
            />
            <Certificate className='certificate' title='Programming Essentials in Python 1 & 2' imgName='PCAP.png' desc='By Cisco Network Academy' altdesc='This Course has helped me to learn Python from Scratch. Starting with basics, Data types, Functions it also thought the Object Oriented Programming in Python which guided me to Intermediate Stage Python Learner'/>
            <Certificate className='certificate' title='Java Coding Challenge' imgName='JavaChallenge.png' desc='By CSI Club' altdesc='Successfully completed **100 Days Of Java Challenge** by CSI Club of VIT-AP University which helped me to recall all Java Basics, Pillars of OOPS and Multi Threading' link='https://credsverse.com/credentials/cb813c5e-6b84-4011-90ae-30baa5410ff8'/>
            <Certificate className='certificate' title='Project Merit Certificate' imgName='ECS.png' desc='By VIT- University' altdesc='Our Project (Smart Visual Assistant) was ranked in the **Top 15 projects** of the  university for the **FALL 2023-24 semester**. The device increased navigation accuracy and user independence' />

            <Certificate 
                className='certificate' 
                title='Using Python to Access Web data' 
                imgName='Coursera.png' 
                desc='By Coursera' 
                altdesc='In this course, I learned how to use regular expressions to extract data from strings, allowing me to efficiently parse and manipulate text data. 
                I gained an understanding of the protocols that web browsers use to retrieve documents and web applications, which provided me with a solid foundation for web development and networking. 
                I also learned how to retrieve data from websites and APIs using Python, enabling me to interact with web services and collect real-time data. Additionally, 
                I developed the skills to work with XML (eXtensible Markup Language) data, which is essential for handling structured data in various applications. 
                These skills have equipped me with the tools to effectively gather, process, and utilize data from a wide range of sources, enhancing my capabilities in data analysis and web development.' 
                link='https://coursera.org/share/7bd46aaafdeec7afbabab8c78c69fb3f'
            />

            <Certificate 
                className='certificate' 
                title='Web Development' 
                imgName='GFG-Certificate.png' 
                desc='By Geeks For Geeks'
                altdesc={`During the GeeksforGeeks 2-day bootcamp on Web Development, I acquired foundational and advanced skills necessary for web development. The intensive training covered a wide range of topics, including:\n
                **HTML & CSS**: I learned how to structure web pages using HTML and style them effectively with CSS, understanding the importance of responsive design to ensure web pages look great on all devices.\n
                **JavaScript**: The bootcamp introduced me to JavaScript, the scripting language of the web. I learned to create dynamic and interactive user interfaces by manipulating the DOM, handling events, and integrating third-party libraries.\n
                This bootcamp provided a comprehensive introduction to web development, equipping me with the skills needed to create functional and visually appealing web applications.`}
                link='https://media.geeksforgeeks.org/certificates/1678717527/ce8cc13c9529c472027244d18cde9f3b.pdf'
            />

            <Certificate className='certificate' title='Code Battle' imgName='Code Battle.jpg' desc='By NGC Cloud Club' altdesc='Participated in a Coding Challenge Conducted by NextGen Cloud CLub in VIT-AP University and secured **11 th out of 250 teams**'/>
            <Certificate className='certificate' title='Python Workshop' imgName='VIT_Python.png' desc='By VIT-AP' altdesc='Participated in 2 day workshop conducted by VIT-AP University on Python which thought me the basics of Numpy and Pandas Libraries'/>
            <Certificate className='certificate' title='Front End Web Development' imgName='Great_Learning.jpg' desc='By Great Learning' altdesc='This course by Great Learning had thought me the fundamentals of Web Development particularly concentrated on HTML & CSS'/>
        </div>
    </div>
  )
}
