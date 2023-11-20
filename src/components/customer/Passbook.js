import React, { useEffect, useState } from 'react'
import GetCustomerTransactions from './GetCustomerTransactions'
import HeadingTag from '../shared/HeadingTag'
import { getCustomerAccounts } from '../../services/account/AccountsApi';
import { useNavigate } from 'react-router-dom';
import PaginationApp from '../shared/table/PaginationApp';
import Navbar from '../shared/navbar/Navbar';

const Passbook = () => {
    const [accountNumber, setAccountNumber] = useState('');
    const [accounts, setAccounts] = useState([]);
    const [userValid, setUserValid] = useState(false);


    const getAccounts = async () => {
        try {
            let response = await getCustomerAccounts();
            setAccounts(response.data);
            console.log(response.data);
        }
        catch (error) {
            alert("some error occured")
        }
    }


    const naviagate = new useNavigate();

    const validateUser = () => {
        if (localStorage.getItem('auth') == null || localStorage.getItem('role') == null || localStorage.getItem('role') != 'USER') {
            alert("you are not logged in")
            naviagate('/');
        }
        else {
            setUserValid(true);
        }
    }

    useEffect(() => {
        validateUser();
    }, [])

    useEffect(() => {
        if (userValid) {
            console.log("get accounts ")
            getAccounts();
        }

    }, [accountNumber, userValid])

    return (
        <>
        <Navbar></Navbar>
            <div>

                <HeadingTag first="Your" second="Passbook"></HeadingTag>
                <div className='container'>

                    <div className='row'>

                        <div className='col-4 offset-2'></div>



                        <div className='col-6 offset-3'>

                            <div className="my-3">

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

                            {accountNumber != '' && accountNumber != "select" ?
                                <div className='text-primary fw-bold'>Balance:<span className='text-danger'>{
                                    accounts.find(
                                        (account) => {
                                            return account.accountNo == accountNumber
                                        }
                                    ).balance
                                }</span></div>
                                : null}



                        </div>

                        <GetCustomerTransactions accountNumber={accountNumber}></GetCustomerTransactions>

                    </div>

                </div>


            </div>
        </>
    )
}

export default Passbook