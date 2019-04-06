import React, { Component } from 'react';
import Icons from './Icons';
import technologies from "./data/technologies";

class About extends Component {
    render() {
        return (
            <div className="container">
                <div className="row" id="bio">
                    <div className="col col-xl-4 col-lg-4 col-md-6 col-sm-6 col-10">
                        <img src="/profile_pic.jpg" alt="Danile Santos" className="img-thumbnail" />
                        {/* <img src="/profile_pic_rounded.png" alt="Daniel Santos" className="img-thumbnail" style={{ border: 0, width: 300}}/> */}
                    </div>
                    <div className="col col-xl-8 col-lg-8 col-md-12 col-sm-12 col-12">
                        <h2>Daniel Santos</h2>
                        <h5>Software Engineer @ <a href="https://www.sonos.com">Sonos</a></h5>
                        <p>Experienced Software Engineer with a demonstrated history of working in the consumer electronics and medical devices industry. Skilled in C++, Python, JavaScript, IoT, Machine Learning, web and mobile development, and. Strong engineering professional with a Bachelor’s Degree focused in Computer Science from the University of Massachusetts Lowell. For more, check
                        my <a href="https://www.github.com/imdanielsp">GitHub</a> or <a href="https://www.linkedin.com/in/danielsantosio">LinkedIn</a>.
                        </p>

                        <h5>Previously</h5>
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
                        {
                            technologies.map(id => {
                                return <Icons key={id} id={id} width="80" />;
                            })
                        }
                    </div>
                </div>
            </div>
            </div >
        );
    }
}

export default About;