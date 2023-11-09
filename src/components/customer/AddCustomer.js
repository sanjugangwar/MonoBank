import React, { useEffect, useState } from 'react'
import { GetAllCustomer } from './GetAllCustomer';
import { saveCustomer } from '../../services/ApiService';
import { nameRegex } from '../shared/validation/Validation';

const AddCustomer = () => {
   console.log("add bank render ")
    const [name,setName]=useState("");
    const [surname,setSurname]=useState("");
    const [mobile,setMobile]=useState();
    const [email,setEmail]=useState("");
    const [username,setUsername]=useState("");
    const [password,setPassword]=useState("");
    const [data,setData]=useState();
    const [error,setError]=useState(false);

   
    const handleSubmit=async(e)=>{
            e.preventDefault();
            console.log(name,surname,mobile,email,username,password)
            let response = await saveCustomer(name,surname,mobile,email,username,password) 
            setData(response);
            console.log(response);
            
        
    }

    useEffect(()=>{
        setName("");
        setSurname("");
        setMobile("");
        setEmail("");
        setUsername("");
        setPassword("");

    },[data]);

    return (
        <>
            <div className="container">

                <div className="row">

                    <div className="h1 text-primary text-center mt-3">
                        Add A New Customer
                    </div>

                    <div className="col-8 offset-2">

                        <form className="shadow-lg p-5">
                            <div className="mb-3">
                                <label className="form-label">First Name</label>
                                <input type="text" className="form-control rounded-pill text-primary fw-bold"
                                
                                onChange={
                                    (e)=>
                                    {
                                        if(nameRegex.test(e.target.value)){
                                            
                                            setError(false)
                                        }else{
                                            setError(true)
                                            
                                        }
                                        
                                        setName(e.target.value)
                                     
                                    }
                                }

                                value={name}
                                />
                                {!nameRegex.test(name) ?<div className='text-danger'>Name should only cotain alphabets</div>:null}
                               
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Last Name</label>
                                <input  type="text" className="form-control rounded-pill text-primary fw-bold"
                                 onChange={
                                    (e)=>{
                                        if(nameRegex.test(e.target.value)){
                                            
                                            setError(false)
                                        }else{
                                            setError(true)
                                            
                                        }
                                        
                                        setSurname(e.target.value)
                                    }
                                    
                                }

                                value={surname}
                                />
                                 {!nameRegex.test(surname)?<div className='text-danger'>Name should only cotain alphabets</div>:null}
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Mobile</label>
                                <input  type="number" className="form-control rounded-pill text-primary fw-bold"
                                onChange={(e)=>

                                    setMobile(e.target.value)
                                }

                                value={mobile}
                                />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Email</label>
                                <input  type="email" className="form-control rounded-pill  text-primary fw-bold"
                                onChange={
                                    (e)=>
                                    setEmail(e.target.value)
                                }

                                value={email}
                                />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Username</label>
                                <input  type="text" className="form-control rounded-pill  text-primary fw-bold"
                                onChange={
                                    (e)=>
                                    setUsername(e.target.value)
                                }

                                value={username}
                                />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Password</label>
                                <input  type="text" className="form-control rounded-pill  text-primary fw-bold"
                                onChange={
                                    (e)=>
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

                <GetAllCustomer props={data}></GetAllCustomer>

            </div>


        </>
    )
}

export default AddCustomer