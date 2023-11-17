import React, { useState } from 'react'
import { login } from '../../services/ApiService';
import { useNavigate } from 'react-router-dom';
import HeadingTag from '../shared/HeadingTag';
import { Navbar } from 'react-bootstrap';

const Login = () => {

    const [userName,setUserName]=useState("");
    const [password,setPassword]=useState("");
    const [msg,setMsg]=useState("")
    const [type,setType]=useState("password");
    const naviagte=new useNavigate();


    const handleSubmit=async(e)=>{

        e.preventDefault();

        if(userName==""){
            setMsg("username is empty")
            return;
        }
        if(password==""){
            setMsg("password is empty")
            return;
        }

        console.log("userName =="+userName+"  password=="+password);
        let response;
        try{
          response=await login(userName,password);
        }
        catch(error){
            setMsg("username or password not matched")
            return ;
        }


        console.log(response);

        localStorage.setItem('auth',response.headers.auth)

        if(response.data.role=='ROLE_ADMIN'){
            localStorage.setItem('role','ADMIN')
            naviagte('/admin')
        }
        if(response.data.role=='ROLE_USER'){
            localStorage.setItem('username',response.data.username);
            localStorage.setItem('role','USER')
            naviagte('/customer')

        }

    }
    return (
        <div>

            <Navbar></Navbar>

            <div className="container">

                <div className="row">

                    <HeadingTag first="Login" second="Form"></HeadingTag>

                    <div className="col-8 offset-2 mt-5 pt-5">

                        <form className="shadow-lg p-5">
                            {msg!=""?<div className='text-center text-danger'>{msg}</div>:null}
                            <div className="mb-3">
                                <label className="form-label">Username<span className='text-danger'>*</span></label>
                                <input type="text" className="form-control rounded-pill text-primary fw-bold"
                                    onChange={
                                        (e) =>
                                            setUserName(e.target.value)
                                    }

                                    value={userName}



                                />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Password<span className='text-danger'>*</span></label>
                                <div className='d-flex'>
                                <input type={type} className="form-control rounded-pill text-primary fw-bold"
                                    onChange={
                                        (e) =>
                                            setPassword(e.target.value)
                                    }

                                    value={password}
                                />
                                <button className='border-0 btn btn-outline-primary'
                                onClick={
                                    (e)=>{
                                        e.preventDefault()
                                        type=="text"?
                                        setType("password"):
                                        setType("text")
                                    }
                                }
                                ><i class="bi bi-eye-fill px-2"></i></button>
                                </div>
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