import React, { useEffect, useState } from 'react'
import { GetAllCustomer } from './GetAllCustomer'
import HeadingTag from '../shared/HeadingTag'
import { useNavigate } from 'react-router-dom'
import Navbar from '../shared/navbar/Navbar'

const AllCustomerDetails = () => {

    const naviagate = new useNavigate();
    const [valid, setValid] = useState(false);

    const validateUser = () => {
        if (localStorage.getItem('auth') == null || localStorage.getItem('role') == null || localStorage.getItem('role') != 'ADMIN') {
            alert("You are not logged in ")
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
                <HeadingTag first="Customers" second="Detail"></HeadingTag>
                <GetAllCustomer search={true} valid={valid}></GetAllCustomer>

            </div>
        </>
    )
}

export default AllCustomerDetails