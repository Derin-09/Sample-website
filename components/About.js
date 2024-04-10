import React from "react";

function About() {
    return(
  <nav class="About">
  <body>
    <div class="allabout">
    <h1>About Me</h1>
    <div class="info2">
    I'm a nineteen-year-old 200 level student of Bells University of Technology. I love coding and I've learnt quite a bit when it comes to that. I'm also a very good and passionate writer with excellent skills in drawing and painting. I'm highly talented and versed in what I do. When it comes to creativity, I'm nothing short of an expert. If you think of creativity, think of Sam-Ashimi Aderinsola. I have an Upwork account that is based on my skills.
    </div>
    <div class="moredetails">
        <div class="tab-titles">
        <div class="tab-links active" >Skills</div>
        <div class="tab-links active" >Coding </div>
        <div class="tab-links active">Education</div>
        </div>
        <div class="giving-issues">
         <div class="tab-contents active-tab" id="skills">
            <ul>
           <li><span className="time">UI/UX</span><br/>Designing web interfaces</li>
           <li><span className="time">Web Development</span><br/>Creating websites</li>
           </ul>
        </div>
        <div class="tab-contents active-tab" id="coding">
            <ul>
            <li>React JS</li>
            <li>JavaScript</li>
            <li>HTML</li>
            <li>CSS</li>
            <li>C</li>
            </ul>
        </div>
        <div class="tab-contents active-tab" id="education">
            <ul>
       <li><span className="time">2007 - 2013</span><br/>Towergate Primary School</li>
       <li><span className="time">2014 - 2017</span><br/>Abbot Daysprings Secondary School</li>
       <li><span className="time">2017 - 2020</span><br/>The Ambassadors College</li>
       <li><span className="time">2022 - Present</span><br/>Bells University of Technology</li>
       </ul>
        </div>
        </div>
    </div>
    </div>
    </body>
    </nav>
    )
}



export default About;