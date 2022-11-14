import React, { Fragment } from 'react'
import './App.js';
import './App.css';
export default function Developer() {
    
   /*useEffect(() => {
        fetch('https://localhost:7179/api/Cookies')
          .then((response) => response.json())
          .then((json) => setUsers(json));*/
          const imgicon = document.getElementById('imgiconlink')

          function openNav() {
              document.getElementById("mySidebar").style.width = "250px";
              document.getElementById("main").style.marginLeft = "250px"; 
              document.getElementById("imgiconlink").style.display = "none";
            }
            
            /* Set the width of the sidebar to 0 and the left margin of the page content to 0 */
            function closeNav() {
              document.getElementById("mySidebar").style.width = "0";
              document.getElementById("main").style.marginLeft = "0";    
              document.getElementById("imgiconlink").style.display = "block"
            }
    return (
    <Fragment>

<body class="background" background="src/images/donutbackground1.jpg">
        <h1> Donut Maker </h1>
    <div id="mySidebar" class="sidebar">
    <img className="closebtn redx" onClick={closeNav} src="src/images/redx.jfif" alt='red X'/>
            
            <a href="/app.js">Home</a>
            <a href="/About.html">About</a>
            <a href="/Inspo.html">Inspiration</a>
            <a href="/Developer.js">Developer</a>
    </div>
    <div id="main">
            <button class="openbtn" onclick="openNav()"> 
                <img class="imgicon" id="imgiconlink" src="src/images/donuticon.png" alt="donut" /> 
            </button>
    </div>
    
    
    <div class="body">
        <h1>Samantha Johnson</h1>
        <h3> Developer of the Donut Maker </h3>
            <p>Hello, and welcome to my game the Donut Maker.</p>
            <p>I am junior software developer, aspiring to learn as much as I</p>
            <p>can. If you have enjoyed my game and would like to contact me, please do</p>
            <p>
            <br />
            <br />Thank You!</p>
        <h3>
            <br />
            <br />
            <br />Contact Information</h3>
            <a href="mailto:samanthamariejae@gmail.com">SamanthaMarieJae@gmail.com</a>
        <h3>Links</h3>
        <div>
            <a href="https://www.github.com/SamanthaJ2" >
                <img src="src/images/github.png" width="50px" alt="github icon" /></a>
            <a href="https://www.linkedin.com/in/samanthajohnson11/">
                <img src="src/images/LinkedIn.jpg" width="50px" alt="linkedin icon" /></a>
            <a href="https://SamanthaJ2.github.io/" alt="github icon">
                <img src="src/images/B&WProfilePic1.jpg" width="50px" alt="developer" /></a>
            <a href="src/Samantha.Johnson.Resume.Copy.pdf" download="Samantha.Johnson.Resume" >
                <img src="src/images/download.png" width="45px" alt="downloand"/></a>
        </div>
    </div>
  
</body>
</Fragment>
    )
}
