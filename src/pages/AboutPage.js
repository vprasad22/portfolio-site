import React from "react";
import './AboutPage.css';


function AboutPage(props){
    return(
        <div class="yes">
            <div class="over"> </div>
            <img class="about-pic" src={require('./img/about-pic.png')} alt="no"/>
            <div class="intro">Hey there!</div>
            <div class ="body">I’m Vinay (Vinny) Prasad, a third-year student studying Computer Engineering at UC Santa Cruz. I plan to graduate with a Computer Science minor in Spring 2022.</div>
            <div class ="body1">The majority of my previous experience is in front-end and full-stack development. I want to learn more about Data Analytics and Artificial Intelligence. My short-term career goals include receiving internship and full-time Software Engineering positions. </div>
            <div class ="body2">In my free time I enjoy hiking, biking, playing badminton, eating Taco Bell, learning new technologies, and sleeping! </div>
        </div>
        
        
    );
} 

export default AboutPage;