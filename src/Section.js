import React, { Component } from 'react';

class Section extends Component {
    render() {
        return (
            <div className="section" id={this.props.sectionId}>
                <h1>{this.props.sectionId}</h1>
                {this.props.children}
            </div>
        );
    }
}

export default Section;