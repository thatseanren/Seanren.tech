import React from 'react'

export default function Header_Navi() {
    return (
        <div class="h-section-navi">
        <ul class="navi">
          <li id="Education">
            <a href="/education"> Education</a>
          </li>
          <li id="Skills">
            <a href="#S-section"> Skills</a>
          </li>
          <li id="Experience">
            <a href="/working"> Experience</a>
          </li>
          <li id="Value">
            <a href="/value"> Value</a>
          </li>
          <li id="KnowMe">
            <a href="/bio">Know Me</a>
          </li>
        </ul>
        <h3>Contact Me</h3>
        <a href="https://www.facebook.com/profile.php?id=100007375026743">
          <i
            className="fa fa-facebook-square"
            style={{ "font-size": "250%", color: "#4267b2" }}
          ></i>
        </a>
        <a href="https://www.linkedin.com/in/siyang-ren-13b422b6/">
          <i
            className="fa fa-linkedin-square"
            style={{ "font-size": "250%", color: "#0073b1" }}
          ></i>
        </a>
        <a href="https://www.instagram.com/sean.ren/">
          <i className="fa fa-instagram" style={{ "font-size": "250%" }}></i>
        </a>
      </div>
    )
}