import React from "react";
function Portfolio() {
    return(
        <nav class="Home">
        <body>
            <div className="t">
            <div class="h">My Work</div>
            
                <div class="works">
                 <img class="pic" src={require('./video-pic.jpg')} alt="Video Website"/>
                 <div className="under">
                    <span className="top">Videos</span>
                    A video website where you can watch short videos of any kind.
                 </div>
                </div>
                <div class="works">
                <img class="pic" src={require('./dramatic-book.jpg')} alt="Stories Website"/> 
                <div className="under">
                <span className="top">Storyteller</span>
                    A website where you can read a wide range of stories. 
                </div>
                </div>
                <div class="works">
                <img class="pic" src={require('./rock-paper-scissors.png')} alt="Game Website"/>
                <div className="under">
                <span className="top">Rock-Paper-Scissors</span>
                    A simple game to help you to make choices.
                </div>
                </div>
            </div>
        </body>
        </nav>
    )
}
export default Portfolio;