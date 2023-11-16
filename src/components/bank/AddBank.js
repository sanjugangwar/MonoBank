import React, { useEffect, useState } from 'react'
import { GetAllBanks } from './GetAllBanks'
import { saveBank } from '../../services/ApiService';
import { useNavigate } from 'react-router-dom';
import { bankNameRegex, ifscCodeRegex, nameRegex } from '../shared/validation/Validation';

const AddBank = () => {
   console.log("add bank render ")
    const [name,setName]=useState("");
    const [abbrebiation,setAbbrebiation]=useState("");
    const [branch,setBranch]=useState("");
    const [ifsc,setIfsc]=useState("");
    const [data,setData]=useState();
    const [msg,setMsg]=useState("");
    const naviagate=new useNavigate();

   
    const handleSubmit=async(e)=>{
        e.preventDefault();

        if(name==""){

            setMsg("Bankname is empty")
            return ;

        }

        if(abbrebiation==""){

            setMsg("Abbrebiation is empty")
            return ;

        }

        if(branch==""){

            setMsg("Branchname is empty")
            return ;

        }

        if(ifsc==""){

            setMsg("Ifsc is empty")
            return ;

        }
        
            console.log(name + "  "+abbrebiation+"  "+branch+"  "+ifsc)
            let response;
            try{
               response = await saveBank(name,abbrebiation,branch,ifsc);
            }
            catch(error){
                alert("some error occured")
            }
            setData(response);
            console.log(response);
            
        
    }

    useEffect(()=>{
        setName("");
        setBranch("");
        setAbbrebiation("");
        setIfsc("")

    },[data]);

    const validateUser=()=>{
        if(localStorage.getItem('auth')==null){
            naviagate('/');
        }
        if(localStorage.getItem('auth')==null){
            naviagate('/');
        }
        if(localStorage.getItem('role')==null || localStorage.getItem('role')!='ADMIN'){
            naviagate('/');
        } 
    }

    useEffect(()=>{
        validateUser();
    },[])

    return (
        <>
            <div className="container">

                <div className="row">

                    <div className="h1 text-primary text-center mt-3">
                        Add A New Bank
                    </div>

                    <div className="col-8 offset-2">

                        <form className="shadow-lg p-5">
                            <div className='text-center text-danger'>{msg}</div>
                            <div className="mb-3">
                                <label className="form-label">Bank Name <span className='text-danger'>*</span></label>
                                <input type="text" className="form-control rounded-pill text-primary fw-bold"
                                onChange={
                                    (e)=>
                                    {setName(e.target.value)}
                                }

                                value={name}
                                />
                                {!bankNameRegex.test(name)  && name!="" ?<div className='text-danger'> Bankname should only cotain alphabets</div>:null}
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Abbrebiation<span className='text-danger'>*</span></label>
                                <input type="text" className="form-control rounded-pill text-primary fw-bold"
                                 onChange={
                                    (e)=>
                                    setAbbrebiation(e.target.value)
                                }

                                value={abbrebiation}
                                />
                                 {!nameRegex.test(abbrebiation)  && abbrebiation!="" ?<div className='text-danger'> Abbrebiation should only cotain alphabets</div>:null}
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Branch name<span className='text-danger'>*</span></label>
                                <input type="text" className="form-control rounded-pill text-primary fw-bold"
                                onChange={(e)=>

                                    setBranch(e.target.value)
                                }

                                value={branch}
                                />
                                 {!nameRegex.test(branch)  && branch!="" ?<div className='text-danger'> Branch should only cotain alphabets</div>:null}
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Ifsc code<span className='text-danger'>*</span></label>
                                <input type="text" className="form-control rounded-pill  text-primary fw-bold"
                                onChange={
                                    (e)=>
                                    setIfsc(e.target.value)
                                }

                                value={ifsc}
                                />
                                {!ifscCodeRegex.test(ifsc)  && ifsc!="" ?<div className='text-danger'> Ifsc must be alphanumeric</div>:null}

                            </div>
                            <button type="submit" className="btn-lg btn-success rounded-pill border-0"
                              onClick={
                                handleSubmit
                              }
                            >Submit</button>
                        </form>
                    </div>

                </div>

                <GetAllBanks props={data}></GetAllBanks>

            </div>


        </>
    )
}

export default AddBank