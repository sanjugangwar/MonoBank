import React from 'react'
import './Admin.css'
import HeadingTag from '../shared/HeadingTag'
const Admin = () => {
    return (
        <div className='container '>

            <HeadingTag first="Admin" second="Dashboard"></HeadingTag>

            <div className='row'  style={{ marginTop: "10vh" }}>

                <div className='col-4  card1'>

                    <div className='card bgcolor shadow-lg'>
                        <a className='btn btn-lg p-5 text-primary fs-1 fw-bold' href="/getAllBanks">Banks Controller</a>
                    </div>

                </div>

                <div className='col-4  '>

                    <div className='card bgcolor shadow-lg'>
                        <a className='btn btn-lg p-5 text-primary fs-1 fw-bold' href="/getAllCustomers">Customer Controller</a>
                    </div>

                </div>

                <div className='col-4  '>

                    <div className='card bgcolor shadow-lg'>
                        <a className='btn btn-lg p-5 text-primary fs-1 fw-bold' href="/getAllAccounts">Account Controller</a>
                    </div>

                </div>

            </div>

            <div className='row mt-5'>

                <div className='col-4  '>

                    <div className='card bgcolor shadow-lg'>
                        <a className='btn btn-lg p-5 text-primary fs-1 fw-bold' href="/getAllBanks">Show All Transactions</a>
                    </div>

                </div>

                <div className='col-4  '>

                    <div className='card bgcolor shadow-lg'>
                        <a className='btn btn-lg p-5 text-primary fs-1 fw-bold' href="/getAllCustomers">Show All Customers</a>
                    </div>

                </div>

                <div className='col-4  '>

                    <div className='card bgcolor shadow-lg'>
                        <a className='btn btn-lg p-5 text-primary fs-1 fw-bold' href="/accountsDetail">Show All Accounts</a>
                    </div>

                </div>

            </div>


        </div>
    )
}

export default Admin