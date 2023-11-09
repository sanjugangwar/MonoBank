import React, { useState } from 'react'
import { login } from '../../services/ApiService';
import { useNavigate } from 'react-router-dom';
import HeadingTag from '../shared/HeadingTag';

const Login = () => {

    const [userName,setUserName]=useState("");
    const [password,setPassword]=useState("");
    const naviagte=new useNavigate();


    const handleSubmit=async(e)=>{

        e.preventDefault();

        console.log("userName =="+userName+"  password=="+password);
        let response=await login(userName,password);

        console.log(response);

        localStorage.setItem('auth',response.headers.auth)

        if(response.data.role=='ROLE_ADMIN'){
            naviagte('/admin')
        }
        if(response.data.role=='ROLE_USER'){
            naviagte('/customer')
        }

    }
    return (
        <div>

            <div className="container">

                <div className="row">

                    <HeadingTag first="Login" second="Form"></HeadingTag>

                    <div className="col-8 offset-2 mt-5 pt-5">

                        <form className="shadow-lg p-5">
                            <div className="mb-3">
                                <label className="form-label">Username</label>
                                <input type="text" className="form-control rounded-pill text-primary fw-bold"
                                    onChange={
                                        (e) =>
                                            setUserName(e.target.value)
                                    }

                                    value={userName}



                                />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Password</label>
                                <input type="text" className="form-control rounded-pill text-primary fw-bold"
                                    onChange={
                                        (e) =>
                                            setPassword(e.target.value)
                                    }

                                    value={password}
                                />
                            </div>
                            <button type="submit" className="btn-lg btn-success rounded-pill border-0"
                                onClick={
                                    handleSubmit
                                }
                            >Submit</button>
                        </form>
                    </div>

                </div>



            </div>

        </div>
    )
}

export default Login