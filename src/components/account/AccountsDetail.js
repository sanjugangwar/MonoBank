import React, { useEffect } from 'react'
import HeadingTag from '../shared/HeadingTag'
import GetAllAccounts from './GetAllAccounts'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Navbar from '../shared/navbar/Navbar';

const AccountsDetail = () => {

  const [valid, setValid] = useState(false)
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
  }, [])
  return (
    <>
    <Navbar></Navbar>
      <div>
        <HeadingTag first="Accounts" second="Detail"></HeadingTag>
        <GetAllAccounts search={true} valid={valid}></GetAllAccounts>

      </div>
    </>
  )
}

export default AccountsDetail