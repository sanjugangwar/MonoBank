import React, { useEffect } from 'react'
import HeadingTag from '../shared/HeadingTag'
import GetAllAccounts from './GetAllAccounts'
import { useNavigate } from 'react-router-dom';

const AccountsDetail = () => {


  const naviagate=new useNavigate();

    const validateUser=()=>{
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

      <HeadingTag first="Accounts" second="Detail"></HeadingTag>
      <GetAllAccounts search={true}></GetAllAccounts>

    </div>
  )
}

export default AccountsDetail