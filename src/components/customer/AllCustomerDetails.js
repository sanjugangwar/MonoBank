import React, { useEffect } from 'react'
import { GetAllCustomer } from './GetAllCustomer'
import HeadingTag from '../shared/HeadingTag'
import { useNavigate } from 'react-router-dom'

const AllCustomerDetails = () => {

    const naviagate=new useNavigate();

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
        <div>

            <HeadingTag first="Customers" second="Detail"></HeadingTag>
            <GetAllCustomer search={true}></GetAllCustomer>

        </div>
    )
}

export default AllCustomerDetails