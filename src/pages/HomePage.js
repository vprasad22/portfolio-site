import React from "react";
import './HomePage.css';


function HomePage(props){
    return(
        <div class= "new"> 
           <img class="bg" src={require('./img/back.png')} alt="no"/>
           <img class="home-pic" src={require('./img/home-pic.png')} alt="no"/>
           <div class="N">Vinay Prasad</div>
           <div class="description">3rd-year Computer Engineering Student at UC Santa Cruz </div>
           <div class ="learn">Check out my socials and resume!</div>
           <a href= "https://linkedin.com/in/vinay-prasad1"> 
           <img class="linker" src={require('./img/linker.png')} alt="tell"/>
           </a>
           <a href="https://github.com/vprasad22"> 
           <img class="git" src={require('./img/git.png')} alt="tell"/>
           </a>
           <a href="https://drive.google.com/file/d/1yIa5khzagACcQOlqqcqQtdXhW9SaJScy/view?usp=sharing"> 
           <img class="resume" src={require('./img/resume.png')} alt="tell"/>
           </a>

        </div>
        
    );
} 

export default HomePage;