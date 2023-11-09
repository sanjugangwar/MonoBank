import React, { useEffect, useState } from 'react'
import GetAllAccounts from './GetAllAccounts';
import { saveAccount } from '../../services/ApiService';

const AddAccount = () => {
    
    const [customerId,setCustomerId]=useState("");
    const [bankId,setBankId]=useState("");
    const [balance,setBalance]=useState("");
    const [data,setData]=useState();

   
    const handleSubmit=async(e)=>{
        e.preventDefault();
       
            console.log(customerId+ "  "+bankId+"  "+balance)
            let response = await saveAccount(customerId,bankId,balance);
            setData(response);
            console.log(response);
            
        
    }

    useEffect(()=>{
        setCustomerId("");
        setBankId("");
        setBalance("");

    },[data]);

    return (
        <>
            <div className="container">

                <div className="row">

                    <div className="h1 text-primary text-center mt-3">
                        Add A New Account
                    </div>

                    <div className="col-8 offset-2">

                        <form className="shadow-lg p-5">
                            <div className="mb-3">
                                <label className="form-label">CustomerId</label>
                                <input type="text" className="form-control rounded-pill text-primary fw-bold"
                                onChange={
                                    (e)=>
                                    {setCustomerId(e.target.value)}
                                }

                                value={customerId}



                                />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">BankId</label>
                                <input type="text" className="form-control rounded-pill text-primary fw-bold"
                                 onChange={
                                    (e)=>
                                    setBankId(e.target.value)
                                }

                                value={bankId}
                                />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Balance</label>
                                <input type="number" className="form-control rounded-pill text-primary fw-bold"
                                onChange={(e)=>

                                    setBalance(e.target.value)
                                }

                                value={balance}
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

                <GetAllAccounts props={data}></GetAllAccounts>

            </div>


        </>
    )
}

export default AddAccount