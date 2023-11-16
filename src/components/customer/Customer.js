import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

const Customer = () => {


    const naviagate=new useNavigate();

    const validateUser=()=>{
        if(localStorage.getItem('auth')==null){
            naviagate('/');
        }
        if(localStorage.getItem('auth')==null){
            naviagate('/');
        }
        if(localStorage.getItem('role')==null || localStorage.getItem('role')!='USER'){
            naviagate('/');
        }
    }

    useEffect(()=>{
        validateUser();
    },[])

    return (
        <>
        <div className='container ' style={{marginTop:"20vh"}}>
            <div className='row'>

                <div className='col-4  '>

                    <div className='card bgcolor shadow-lg'>
                        <a className='btn btn-lg p-5 text-primary fs-1 fw-bold'  href="/transaction">Do A Transaction</a>
                    </div>

                </div>

                <div className='col-4  '>

                    <div className='card bgcolor shadow-lg'>
                        <a className='btn btn-lg p-5 text-primary fs-1 fw-bold'  href="/passbook">Show My Passbook</a>
                    </div>

                </div>

                <div className='col-4  '>

                    <div className='card bgcolor shadow-lg'>
                        <a className='btn btn-lg p-5 text-primary fs-1 fw-bold'  href="/editProfile">Edit Profile Details</a>
                    </div>

                </div>

            </div>


        </div>
        </>
    )
}

export default Customer