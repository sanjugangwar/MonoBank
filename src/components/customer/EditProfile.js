import React from 'react'
import HeadingTag from '../shared/HeadingTag'
import profile from '../../images/profile.png'
import edit from '../../images/edit.png'


const EditProfile = () => {
    return (
        <div>

            <HeadingTag first="Edit" second="Profile"></HeadingTag>

            <div className='container'>

                <div className='row align-items-center'>

                    {/* <div className='col-5'>

                        <img src={edit} alt='edit detail image' className='img-fluid'></img>

                    </div> */}

                    <div className='col-6 offset-3 '>
                        <div className='text-center'>

                            <img src={profile} alt='profile image' style={{ height: "20vh" }}></img>
                        </div>
                        <form className="shadow-lg p-5">
                            <div className="mb-3">
                                <label className="form-label">First Name</label>
                                <input type="text" className="form-control rounded-pill text-primary fw-bold"

                                />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Last Name</label>
                                <input type="text" className="form-control rounded-pill text-primary fw-bold"

                                />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Mobile</label>
                                <input type="text" className="form-control rounded-pill text-primary fw-bold"

                                />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Email</label>
                                <input type="text" className="form-control rounded-pill  text-primary fw-bold"

                                />
                            </div>
                            <div className='mb-3'>
                                <button type="submit" className="btn-lg btn-outline-danger rounded-pill me-2">Cancel</button>
                                <button type="submit" className="btn-lg btn-outline-success rounded-pill">Save Changes</button>
                            </div>
                        </form>
                    </div>

                </div>

            </div>



        </div>
    )
}

export default EditProfile