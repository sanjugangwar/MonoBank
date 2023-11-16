import React, { useEffect } from 'react'
import HeadingTag from '../shared/HeadingTag'
import profile from '../../images/profile.png'
import { getCustomerByUsername, updateCustomer } from '../../services/customer/CustomerApis'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { emailRegex, indianMobileRegex, nameRegex } from '../shared/validation/Validation'


const EditProfile = () => {

    const [customer, setCustomer] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [mobile, setMobile] = useState("");
    const [msg, setMsg] = useState("");

    const getCustomerData = async () => {

        let response = await getCustomerByUsername();
        setCustomer(response.data);
        setFirstName(response.data.name);
        setLastName(response.data.surname);
        setEmail(response.data.email);
        setMobile(response.data.mobile);

    }

    const handleSave = async (e) => {
        e.preventDefault();
        let response;

        if (firstName == "") {
            setMsg("first name is empty")
            return;
        }
        if (lastName == "") {
            setMsg("last name is empty")
            return;
        }
        if (mobile == "") {
            setMsg("mobile is empty")
            return;
        }
        if (email == "") {
            setMsg("email is empty")
            return;
        }

        response = await updateCustomer(customer.id, firstName, lastName, mobile, email);
        setFirstName("");
        setLastName("");
        setMobile("");
        setEmail("");

    }


    const naviagate = new useNavigate();

    const validateUser = () => {
        if (localStorage.getItem('auth') == null) {
            naviagate('/');
        }
        if (localStorage.getItem('auth') == null) {
            naviagate('/');
        }
        if (localStorage.getItem('role') == null || localStorage.getItem('role') != 'USER') {
            naviagate('/');
        }
    }



    useEffect(() => {

        validateUser();

        console.log("component called")

        getCustomerData();

    }, [])

    return (
        <div>

            <HeadingTag first="Edit" second="Profile"></HeadingTag>

            <div className='container'>

                <div className='row align-items-center'>

                    <div className='col-6 offset-3 '>
                        <div className='text-center'>

                            <img src={profile} alt='profile image' style={{ height: "20vh" }}></img>
                        </div>
                        <form className="shadow-lg p-5">

                            <div className='text-center fw-bold text-success'>{msg}</div>



                            <div className="mb-3">
                                <label className="form-label">First Name <span className='text-danger'>*</span></label>
                                <input type="text" className="form-control rounded-pill text-primary fw-bold"
                                    value={firstName}
                                    onChange={(e) => {
                                        setMsg("")
                                        setFirstName(e.target.value)
                                    }}

                                />

                                {!nameRegex.test(firstName) & firstName != "" ? <div className='text-danger'> First Name should only cotain alphabets</div> : null}
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Last Name <span className='text-danger'>*</span></label>
                                <input type="text" className="form-control rounded-pill text-primary fw-bold"
                                    value={lastName}
                                    onChange={(e) => {
                                        setMsg("")
                                        setLastName(e.target.value)
                                    }}

                                />
                                {!nameRegex.test(lastName) & lastName != "" ? <div className='text-danger'> Last Name should only cotain alphabets</div> : null}
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Mobile <span className='text-danger'>*</span></label>
                                <input type="text" className="form-control rounded-pill text-primary fw-bold"
                                    value={mobile}
                                    onChange={(e) => {
                                        setMsg("")
                                        setMobile(e.target.value)
                                    }}

                                />
                                {!indianMobileRegex.test(mobile) & mobile != "" ? <div className='text-danger'> Mobile Only Contain 10 digits</div> : null}
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Email <span className='text-danger'>*</span></label>
                                <input type="text" className="form-control rounded-pill  text-primary fw-bold"
                                    value={email}
                                    onChange={(e) => {
                                        setMsg("")
                                        setEmail(e.target.value)
                                    }}

                                />
                                {!emailRegex.test(email) & email != "" ? <div className='text-danger'> Email is not valid</div> : null}
                            </div>
                            <div className='mb-3'>
                                <button type="submit" className="btn-lg btn-outline-success rounded-pill"
                                    onClick={handleSave}
                                >Save Changes</button>
                            </div>
                        </form>
                    </div>

                </div>

            </div>



        </div>
    )
}

export default EditProfile