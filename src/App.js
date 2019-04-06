import React, { Component } from 'react';

import Header from './Header';
import Section from './Section';
import Blog from './Blog';
import About from './About';
import blogPosts from "./data/blogPosts";


class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="container">
          <Section sectionId="about">
            <About />
          </Section>
        </div>

        <div className="container">
          <Section sectionId="blog">
            <Blog posts={blogPosts} />
          </Section>
        </div>

        {/* <div className="container">
          <Section sectionId="projects">
            <Projects projects={projects} />
          </Section>
        </div> */}

        <footer>
          <div className="container">
            <div className="row">
              <div className="col col-lg-11 text-center">
                <p>made with <ion-icon name="cafe"></ion-icon></p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}

export default App;
