import React, { useEffect, useState } from 'react'
import HeadingTag from '../shared/HeadingTag'
import { getCustomerAccounts, transaction } from '../../services/account/AccountsApi';
import { useNavigate } from 'react-router-dom';
import Navbar from '../shared/navbar/Navbar';

const Transaction = () => {


    var classes = 'rounded-pill px-5 btn  fs-1 fw-bold btn-outline';


    const [accounts, setAccounts] = useState([]);
    const [accountNumber, setAccountNumber] = useState('')
    const [type, setType] = useState("DEBIT")
    const [amount, setAmount] = useState('');
    const [recieverAccount, setRecieverAccount] = useState(0);
    const [data, setData] = useState([]);
    const [valid, setValid] = useState(false);


    const getAccounts = async () => {
        try{
        let response = await getCustomerAccounts();
        setAccounts(response.data);
        console.log(response.data);
        }
        catch(error){
            alert(error.response.data.message);
        }
    }

    const handleSubmit = async (e) => {

        e.preventDefault();
        try {
            let response = await transaction(accountNumber, recieverAccount, type, amount);
            console.log(response);
            if (response.status == 200) {
                alert("Transaction success")
            }
            setData(response);
        }
        catch(error){
            alert(error.response.data.message);
        }


    }

    useEffect(
        () => {

            getAccounts();

        }, [data]
    )


    const naviagate = new useNavigate();

    const validateUser = () => {
        if (localStorage.getItem('auth') == null || localStorage.getItem('role') == null || localStorage.getItem('role') != 'USER') {
            alert("You are not logged in")
            naviagate('/');
        }
        setValid(true);
    }

    useEffect(() => {
        validateUser();
    }, [])

    return (
        <>
            <Navbar></Navbar>
            <div>

                <HeadingTag first="Transaction" second="Service"></HeadingTag>

                {
                    accounts.length == 0 ? <HeadingTag second="No Accounts Found ! please Open Your Account With Us"></HeadingTag>
                        :
                        <>
                            <div className='container'>

                                <div className='row'>

                                    <div className='col-8 offset-2 mt-5 justify-content-around d-flex'>

                                        <div>
                                            <button className={type == "DEBIT" ? classes + '-primary active shadow-lg' : classes + '-primary'}
                                                onClick={
                                                    () => {
                                                        setType("DEBIT")
                                                    }
                                                }
                                            >Debit</button>
                                        </div>

                                        <div>
                                            <button className={type == "CREDIT" ? classes + '-success active shadow-lg ' : classes + '-success'}
                                                onClick={
                                                    () => {
                                                        setType("CREDIT")
                                                    }
                                                }
                                            >Credit</button>
                                        </div>

                                        <div>
                                            <button className={type == "TRANSFER" ? classes + '-danger active shadow-lg' : classes + '-danger'}
                                                onClick={() => {
                                                    setType("TRANSFER")
                                                }}
                                            >Transfer</button>
                                        </div>

                                    </div>

                                    <div className='col-8 offset-2 mt-5'>

                                        <form className="shadow-lg p-5">
                                            {
                                                accountNumber != '' ?
                                                    <div className='text-primary fw-bold mb-2'>Balance:<span className='text-danger'>{accounts.find(
                                                        (account) => {
                                                            return account.accountNo == accountNumber
                                                        }
                                                    ).balance}</span></div> : null
                                            }
                                            <div className="mb-3">

                                                <select class="form-select rounded-pill" aria-label="Default select example"
                                                    onChange={
                                                        (e) => {
                                                            setAccountNumber(e.target.value)
                                                        }
                                                    }
                                                >
                                                    <option value={"select"}>select Your Account</option>
                                                    {
                                                        accounts.map((account) => {
                                                            return <option value={account.accountNo}>{account.accountNo}</option>
                                                        })
                                                    }
                                                </select>
                                            </div>

                                            {
                                                accountNumber ?
                                                    <div className="mb-3">
                                                        <label className="form-label">Bank Name</label>
                                                        <input type="text" className="form-control rounded-pill text-primary fw-bold"
                                                            value={
                                                                accounts.find(
                                                                    (account) => {
                                                                        return account.accountNo == accountNumber
                                                                    }
                                                                ).bankName
                                                            }
                                                        />
                                                    </div> : null
                                            }

                                            <div className="mb-3">
                                                <label className="form-label">Amount</label>
                                                <input type="text" className="form-control rounded-pill text-primary fw-bold"
                                                    value={amount}
                                                    onChange={
                                                        (e) => {
                                                            setAmount(e.target.value)
                                                        }
                                                    }
                                                />
                                            </div>
                                            {type == "TRANSFER" ?
                                                <div className="mb-3">
                                                    <label className="form-label">Reciever Account</label>
                                                    <input type="text" className="form-control rounded-pill text-primary fw-bold"
                                                        onChange={
                                                            (e) => {
                                                                setRecieverAccount(e.target.value);
                                                            }
                                                        }
                                                    />
                                                </div> : null}
                                            <button type="submit" className="btn-lg btn-outline-success rounded-pill border-3 border-success px-5 fw-bold"
                                                onClick={
                                                    handleSubmit
                                                }
                                            >{type}</button>
                                        </form>

                                    </div>



                                </div>

                            </div>
                        </>
                }

            </div>

        </>
    )
}

export default Transaction