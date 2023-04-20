import React from 'react'

const BlogBox = ({ data }) => {
    return (
        <>
            <div className="card" style={ { width: "20rem" } }>
                <img
                    src={ data.url }
                    className="d-block mx-lg-auto img-fluid"
                    lt="Bootstrap Themes"
                    loading="lazy" />
                <div className="card-body">
                    <h5 className="card-title">{ data.title }</h5>
                    <p className="card-text">{ data.title }</p>
                    <a href="#" className="btn btn-primary">Go To Blog</a>
                </div>
            </div>
        </>
    )
}

export default BlogBox