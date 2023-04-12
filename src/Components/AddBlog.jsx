import React from 'react'

const AddBlog = () => {
    return (
        <>
            <div className="container col-xxl-8 px-4 py-5">
                <div style={ { width: "500px", margin: "auto" } }>
                    <h4 className="mb-3">Add Blog</h4>
                    <form className="needs-validation" novalidate="">
                        <div className="row g-3">
                            <div className="col-sm-6">
                                <label for="blog-title" className="form-label">Blog title</label>
                                <input type="text" className="form-control" id="firstName" placeholder="" value="" required="" />
                                <div className="invalid-feedback">
                                    Valid first name is required.
                                </div>
                            </div>

                            <div className="col-12">
                                <label for="blog-des" className="form-label">Blog Description</label>
                                <div className="input-group has-validation">
                                    <textarea type="text" className="form-control" id="blog-des" placeholder="Blog Description" required=""></textarea>
                                    <div className="invalid-feedback">
                                        Your blog-des is required.
                                    </div>
                                </div>
                            </div>

                            <div className="col-6">
                                <label for="blog-type" className="form-label">Blog type</label>
                                <select className="form-select" id="blog-type" required>
                                    <option value="">Choose...</option>
                                    <option>Food</option>
                                    <option>Gameing</option>
                                    <option>Traveling</option>
                                    <option>Finace</option>
                                </select>
                                <div className="invalid-feedback">
                                    Please select option.
                                </div>
                            </div>
                            <div className="col-6">
                                <label for="formFile" class="form-label">Default file input example</label>
                                <input class="form-control" type="file" accept='image/jpg, image/png' id="formFile" />
                            </div>
                        </div>
                        <hr />
                        <button className="w-100 btn btn-primary btn-lg" type="submit">Add Blog</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default AddBlog