import React from 'react'

const BlogBox = () => {
    return (
        <>
            <div className="card" style={ { width: "20rem" } }>
                <img src="https://getbootstrap.com/docs/5.0/examples/heroes/bootstrap-themes.png" classNameName="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" loading="lazy" />
                <div className="card-body">
                    <h5 className="card-title">Foodies</h5>
                    <p className="card-text">Recipe sharing: Share your favorite recipes, cooking tips, and techniques. You can focus on a particular type of cuisine, or offer a wide range of recipes that appeal to a variety of tastes.</p>
                    <a href="#" className="btn btn-primary">Go To Blog</a>
                </div>
            </div>
        </>
    )
}

export default BlogBox