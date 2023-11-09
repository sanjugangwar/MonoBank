import React, { useEffect, useState } from 'react'
import { GetAllBanks } from './GetAllBanks'
import { saveBank } from '../../services/ApiService';
import { useNavigate } from 'react-router-dom';

const AddBank = () => {
   console.log("add bank render ")
    const [name,setName]=useState("");
    const [abbrebiation,setAbbrebiation]=useState("");
    const [branch,setBranch]=useState("");
    const [ifsc,setIfsc]=useState("");
    const [data,setData]=useState();
    const naviagate=new useNavigate();

   
    const handleSubmit=async(e)=>{
        e.preventDefault();
        if(name!="" && abbrebiation!="",branch!="",ifsc!=""){
            console.log(name + "  "+abbrebiation+"  "+branch+"  "+ifsc)
            let response = await saveBank(name,abbrebiation,branch,ifsc);
            setData(response);
            console.log(response);
            
        }
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
                            <div className="mb-3">
                                <label className="form-label">Bank Name</label>
                                <input type="text" className="form-control rounded-pill text-primary fw-bold"
                                onChange={
                                    (e)=>
                                    {setName(e.target.value)}
                                }

                                value={name}
                                />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Abbrebiation</label>
                                <input type="text" className="form-control rounded-pill text-primary fw-bold"
                                 onChange={
                                    (e)=>
                                    setAbbrebiation(e.target.value)
                                }

                                value={abbrebiation}
                                />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Branch name</label>
                                <input type="text" className="form-control rounded-pill text-primary fw-bold"
                                onChange={(e)=>

                                    setBranch(e.target.value)
                                }

                                value={branch}
                                />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Ifsc code</label>
                                <input type="text" className="form-control rounded-pill  text-primary fw-bold"
                                onChange={
                                    (e)=>
                                    setIfsc(e.target.value)
                                }

                                value={ifsc}
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

                <GetAllBanks props={data}></GetAllBanks>

            </div>


        </>
    )
}

export default AddBank