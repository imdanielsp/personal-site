import React, { Component } from 'react';

class Blog extends Component {
    render() {
        return (
            <div>
                {this.props.posts.map((post, idx) => {
                    return (
                        <div key={idx} className="d-inline-flex p-3">
                            <a href={post.link} className="blog-item--link">
                                <div className="blog-item card shadow sm hoverable" style={{ width: "18rem" }}>
                                    <img src={post.thumbnail} className="card-img-top blog-item--image" alt="..." />
                                    <div className="card-body">
                                        <h4 className="card-title blog-item--title">{post.title}</h4>
                                        <p className="card-text blog-item--summary">{post.summary}</p>
                                    </div>
                                </div>
                            </a>
                        </div>
                    );
                })}
            </div>
        );
    }
}

export default Blog;
