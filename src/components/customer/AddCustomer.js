import React, { useEffect, useState } from 'react'
import { GetAllCustomer } from './GetAllCustomer';
import { saveCustomer } from '../../services/ApiService';
import { eightCharAlphanumericPasswordRegex, emailRegex, indianMobileRegex, nameRegex } from '../shared/validation/Validation';
import { useNavigate } from 'react-router-dom';

const AddCustomer = () => {
    console.log("add bank render ")
    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");
    const [mobile, setMobile] = useState();
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [data, setData] = useState();
    const [error, setError] = useState(false);
    const naviagate = new useNavigate();
    const [msg,setMsg]=useState("");

    const validateUser = () => {
        if (localStorage.getItem('auth') == null) {
            naviagate('/');
        }
        if (localStorage.getItem('auth') == null) {
            naviagate('/');
        }
        if (localStorage.getItem('role') == null || localStorage.getItem('role') != 'ADMIN') {
            naviagate('/');
        }
    }

    useEffect(() => {
        validateUser();
    }, [])


    const handleSubmit = async (e) => {
        e.preventDefault();
        if(name==""){
            setMsg("first name is empty")
            return ;
        }
        if(surname==""){
            setMsg("last name is empty")
            return ;
        }
        if(mobile==""){
            setMsg("mobile is empty")
            return ;
        }
        if(email==""){
            setMsg("email is empty")
            return ;
        }
        if(username==""){
            setMsg("username is empty")
            return ;
        }
        if(password==""){
            setMsg("password is empty")
            return ;
        }
        console.log(name, surname, mobile, email, username, password)
        let response = await saveCustomer(name, surname, mobile, email, username, password)
        setData(response);
        console.log(response);


    }

    useEffect(() => {
        setName("");
        setSurname("");
        setMobile("");
        setEmail("");
        setUsername("");
        setPassword("");

    }, [data]);



    return (
        <>
            <div className="container">

                <div className="row">

                    <div className="h1 text-primary text-center mt-3">
                        Add A New Customer
                    </div>

                    <div className="col-8 offset-2">

                        <form className="shadow-lg p-5">
                            {msg!=""?<div className='text-center text-danger'>{msg}</div>:null}
                            <div className="mb-3">
                                <label className="form-label">First Name<span className='text-danger'>*</span></label>
                                <input type="text" className="form-control rounded-pill text-primary fw-bold"

                                    onChange={
                                        (e) => {
                                            if (nameRegex.test(e.target.value)) {

                                                setError(false)
                                            } else {
                                                setError(true)

                                            }

                                            setName(e.target.value)

                                        }
                                    }

                                    value={name}
                                />
                                {!nameRegex.test(name) & name != "" ? <div className='text-danger'> First Name should only cotain alphabets</div> : null}

                            </div>
                            <div className="mb-3">
                                <label className="form-label">Last Name<span className='text-danger'>*</span></label>
                                <input type="text" className="form-control rounded-pill text-primary fw-bold"
                                    onChange={
                                        (e) => {
                                            if (nameRegex.test(e.target.value)) {

                                                setError(false)
                                            } else {
                                                setError(true)

                                            }

                                            setSurname(e.target.value)
                                        }

                                    }

                                    value={surname}
                                />
                                {!nameRegex.test(surname) && surname != "" ? <div className='text-danger'>Last Name should only cotain alphabets</div> : null}
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Mobile<span className='text-danger'>*</span></label>
                                <input type="number" className="form-control rounded-pill text-primary fw-bold"
                                    onChange={(e) =>

                                        setMobile(e.target.value)
                                    }

                                    value={mobile}
                                />

                                {!indianMobileRegex.test(mobile) && mobile != "" ? <div className='text-danger'>Mobile Should contain 10 digits</div> : null}
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Email<span className='text-danger'>*</span></label>
                                <input type="email" className="form-control rounded-pill  text-primary fw-bold"
                                    onChange={
                                        (e) =>
                                            setEmail(e.target.value)
                                    }

                                    value={email}
                                />
                                {
                                    !emailRegex.test(email) && email != "" ? <div className='text-danger'>Email is not valid</div> : null
                                }
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Username<span className='text-danger'>*</span></label>
                                <input type="text" className="form-control rounded-pill  text-primary fw-bold"
                                    onChange={
                                        (e) =>
                                            setUsername(e.target.value)
                                    }

                                    value={username}
                                />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Password<span className='text-danger'>*</span></label>
                                <input type="text" className="form-control rounded-pill  text-primary fw-bold"
                                    onChange={
                                        (e) =>
                                            setPassword(e.target.value)
                                    }

                                    value={password}
                                />
                                {
                                    !eightCharAlphanumericPasswordRegex.test(password) && password != "" ? <div className='text-danger'>Password is not valid</div> : null
                                }

                            </div>
                            <button type="submit" className="btn-lg btn-success rounded-pill border-0"
                                onClick={
                                    handleSubmit
                                }
                            >Submit</button>
                        </form>
                    </div>

                </div>

                <GetAllCustomer props={data} search={false}></GetAllCustomer>

            </div>


        </>
    )
}

export default AddCustomer