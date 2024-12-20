import React, { Component } from "react";
import Icons from "./Icons";
import technologies from "./data/technologies";

class About extends Component {
  render() {
    return (
      <div className="container">
        <div className="row" id="bio">
          <div className="col col-xl-4 col-lg-4 col-md-6 col-sm-6 col-10">
            <img
              src="/profile_pic.jpg"
              alt="Danile Santos"
              className="img-thumbnail"
            />
          </div>
          <div className="col col-xl-8 col-lg-8 col-md-12 col-sm-12 col-12">
            <h2>Daniel Santos</h2>
            <h5>
              Staff Software Engineer @ <a href="https://rivianvw.tech/">Rivian & Volkswagen Group</a>
            </h5>
            <p>
              Software Engineer at Rivian and VW Group, contributing to advanced
              software solutions in the connected automotive domain. Skilled in
              C++, Rust, Python, and IoT technologies, with hands-on experience in
              implementing scalable systems.
              <br/>
              <br/>
              Strong engineering professional with a Bachelor’s Degree focused in
              Computer Science from the University of Massachusetts Lowell.
              For more, check my{" "}
              <u>
                <a href="https://www.github.com/imdanielsp">GitHub</a>
              </u>{" "}
              or{" "}
              <u>
                <a href="https://www.linkedin.com/in/danielsantosio">
                  LinkedIn
                </a>
              </u>
              .
            </p>

            <h4>
              <b>Now</b>
            </h4>
            <a href="https://rivianvw.tech">
              <Icons width="400" height="100" marginTop="0" id="rivianvw" />
            </a>
            <h4>
              <b>Previously</b>
            </h4>
            <a href="https://www.rivian.com">
              <Icons width="200" height="100" marginTop="0" id="rivian" />
            </a>
            <a href="https://www.amazon.com">
              <Icons width="120" marginTop="0" id="amazon" />
            </a>
            <a href="https://www.sonos.com">
              <Icons width="100" id="sonos" />
            </a>
            <a href="https://www.ibm.com">
              <Icons width="100" id="ibm" />
            </a>
            <a href="https://www.zoll.com">
              <Icons width="130" id="zoll" />
            </a>
            <a href="https://www.schneider-electric.us/">
              <Icons width="130" id="schneider-electric" />
            </a>
          </div>
        </div>
        <div className="row">
          <div id="col col-xl-12 col-sm-12 col-12 justify-content-md-center">
            <h3>technologies</h3>
            <div id="technologies">
              {technologies.map((id) => {
                return <Icons key={id} id={id} width="120" />;
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
