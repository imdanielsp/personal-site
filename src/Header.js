import React, { Component } from 'react';

class Header extends Component {
    render() {
      return (
        <nav className="navbar navbar-light bg-light justify-content-center sticky-top">
            <a className="navbar-brand" href="/">
                <h1>DSP</h1>
            </a>
            <div className="nav">
                <a className="nav-link active" href="#about">about</a>
                {/* <a className="nav-link active" href="#projects">projects</a> */}
                <a className="nav-link active" href="#blog">blog</a>
            </div>
            <div className="links right">
                <a href="https://www.github.com/imdanielsp">
                    <ion-icon name="logo-github"></ion-icon>
                </a>
                <a href="https://www.linkedin.com/in/danielsantosio">
                    <ion-icon name="logo-linkedin"></ion-icon>
                </a>
            </div>
        </nav>
      );
    }
}

export default Header;