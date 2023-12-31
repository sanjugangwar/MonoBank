import React, { useEffect, useState } from 'react'
import GetAllAccounts from './GetAllAccounts';
import { saveAccount } from '../../services/ApiService';
import { getAllCustomerDetails, getBanksByCustomerId } from '../../services/customer/CustomerApis';
import { useNavigate } from 'react-router-dom';
import Navbar from '../shared/navbar/Navbar';

const AddAccount = () => {

    const [customerId, setCustomerId] = useState("");
    const [bankId, setBankId] = useState("");
    const [balance, setBalance] = useState("");
    const [data, setData] = useState([]);
    const [customers, setCustomers] = useState([]);
    const [banks, setBanks] = useState([]);
    const [msg, setMsg] = useState();
    const [valid, setValid] = useState(false);


    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!customerId || customerId == "select") {
            setMsg("select customer id")
            return;
        }

        if (!bankId || bankId == "select") {
            setMsg("select bank id")
            return;
        }

        if (balance < 5000) {
            setMsg("Minimum balance is 5000")
            return;
        }

        console.log(customerId + "  " + bankId + "  " + balance)
        try {
            let response = await saveAccount(customerId, bankId, balance);
            setData(response);
            console.log(response);
            setBalance("");
            setBankId("");
            setCustomerId("");
    
        }
        catch (error) {
            
            alert(error.response.data.message)
        }
       


    }

    const findCustomers = async () => {
        try {
            let response = await getAllCustomerDetails();
            console.log(response)
            setCustomers(response.data);
        }
        catch (error) {
            alert(error.response.data.message);
        }
    }

    const showBanks = async () => {

        if (customerId == "" || customerId == "select") {
            setMsg("select customer id")
            return;
        }
        try{
        let response = await getBanksByCustomerId(customerId);
        setBanks(response.data);
        console.log(response.data);
        }
        catch(error){
            alert(error.response.data.message);
        }

    }

    const naviagate = new useNavigate();

    const validateUser = () => {
        if (localStorage.getItem('auth') == null || localStorage.getItem('role') == null || localStorage.getItem('role') != 'ADMIN') {
            alert("You are not logged in ")
            naviagate('/');
        }
        setValid(true);
    }


    useEffect(() => {
        validateUser();
        setCustomerId("");
        setBankId("");
        setBalance("");
        findCustomers();

    }, []);

    useEffect(() => {

        showBanks();

    }, [customerId])

    return (
        <>
            <Navbar></Navbar>
            <div className="container">

                <div className="row">

                    <div className="h1 text-primary text-center mt-3">
                        Add A New Account
                    </div>

                    <div className="col-8 offset-2">

                        <form className="shadow-lg p-5">
                            <div className='text-center text-danger'>{msg}</div>
                            <div className="mb-3">
                                <label className="form-label">CustomerId<span className='text-danger'>*</span></label>
                                <select class="form-select rounded-pill" aria-label="Default select example"
                                    onChange={
                                        (e) => {
                                            setCustomerId(e.target.value)
                                            setMsg("")
                                        }
                                    }
                                >
                                    <option value={"select"}>select customer id</option>
                                    {
                                        customers.map((customer) => {
                                            return <option value={customer.id}>{customer.id}</option>
                                        })
                                    }
                                </select>
                            </div>
                            {
                                customerId && customerId !== "select" ? <div className="mb-3">
                                    <label className="form-label">Customer Name</label>
                                    <input type="text" className="form-control rounded-pill text-primary fw-bold"
                                        value={customers.find((customer) => {

                                            return customer.id == customerId;
                                        }).name}
                                    />
                                </div>
                                    : null

                            }
                            <div className="mb-3">
                                <label className="form-label">BankId<span className='text-danger'>*</span></label>
                                <select class="form-select rounded-pill" aria-label="Default select example"
                                    onChange={
                                        (e) => {
                                            setBankId(e.target.value)
                                        }
                                    }
                                >
                                    <option value={"select"}>select BankId</option>
                                    {
                                        banks.map((bank) => {
                                            return <option value={bank.bankId}>{bank.bankId}</option>
                                        })
                                    }
                                </select>
                            </div>
                            {
                                bankId && bankId !== "select" ? <><div className="mb-3">
                                    <label className="form-label">Bank Name</label>
                                    <input type="text" className="form-control rounded-pill text-primary fw-bold"
                                        value={

                                            banks.find((bank) => {

                                                return bank.bankId == bankId;

                                            }).bankName

                                        }
                                    />
                                </div>
                                    <div className="mb-3">
                                        <label className="form-label">Ifsc code</label>
                                        <input type="text" className="form-control rounded-pill text-primary fw-bold"
                                            value={

                                                banks.find((bank) => {

                                                    return bank.bankId == bankId;

                                                }).ifsc

                                            }
                                        />
                                    </div></>
                                    : null

                            }
                            <div className="mb-3">
                                <label className="form-label">Balance<span className='text-danger'>*</span></label>
                                <input type="number" className="form-control rounded-pill text-primary fw-bold"
                                    onChange={(e) =>

                                        setBalance(e.target.value)
                                    }

                                    value={balance}
                                />
                            </div>

                            <button type="submit" className="btn-lg btn-success border-0"
                                onClick={
                                    handleSubmit
                                }
                            >Submit</button>
                        </form>
                    </div>

                </div>

                <GetAllAccounts props={data} search={false} valid={valid}></GetAllAccounts>

            </div>


        </>
    )
}

export default AddAccount