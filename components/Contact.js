import React from "react";
function Contact() {
    return(
        <body>
            <div class="contact">
            <div class="first">
                <div class="contactme">
                Contact Me
                </div>
                <div class="contact-info">
                aderinsolasamashimi@gmail.com<br/>
                +234-8147374245
                </div>
                <div className="icons1">
                <div className="icons2"><a href="https://www.instagram.com/lawlietandhisoka?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="><img className="icons" src={require('./instagram.png')}/></a></div>
                <div className="icons2"></div><a href="http://www.tiktok.com/@lawlietandhisoka?_t=8iwtRt2m101&_r=1">
                <img className="icons" src={require('./tiktok.png')}/></a></div>
                <div className="icons2"><a href="https://youtube.com/@lawlietandhisoka?si=By8FFXkppn8DaOJ"><img className="icons" src={require('./youtube.png')}/></a></div>
            </div >
            <div class="second">
                <input className="name" placeholder="Your name"/><br/>
                <input className="email" placeholder="Your email"/><br/>
                <input className="message" placeholder="Your message"/><br/>
                <button className="submit">Submit</button>
            </div>
            </div>
        </body>
    )
}
export default Contact;