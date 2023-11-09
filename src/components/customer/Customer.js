import React from 'react'

const Customer = () => {
    return (
        <div className='container ' style={{marginTop:"20vh"}}>
            <div className='row'>

                <div className='col-4  '>

                    <div className='card bgcolor shadow-lg'>
                        <a className='btn btn-lg p-5 text-primary fs-1 fw-bold'  href="#">Do A Transaction</a>
                    </div>

                </div>

                <div className='col-4  '>

                    <div className='card bgcolor shadow-lg'>
                        <a className='btn btn-lg p-5 text-primary fs-1 fw-bold'  href="#">Show My Passbook</a>
                    </div>

                </div>

                <div className='col-4  '>

                    <div className='card bgcolor shadow-lg'>
                        <a className='btn btn-lg p-5 text-primary fs-1 fw-bold'  href="/getAllAccounts">Edit Profile Details</a>
                    </div>

                </div>

            </div>


        </div>
    )
}

export default Customer