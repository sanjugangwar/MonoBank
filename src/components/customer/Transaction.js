import React, { useState } from 'react'
import HeadingTag from '../shared/HeadingTag'

const Transaction = () => {

    const [type, setType] = useState("Debit")
    var classes='rounded-pill px-5 btn  fs-1 fw-bold btn-outline';

    return (
        <div>

            <HeadingTag first="Transaction" second="Service"></HeadingTag>

            <div className='container'>

                <div className='row'>

                    <div className='col-8 offset-2 mt-5 justify-content-around d-flex'>

                        <div>
                            <button className={type=="Debit"?classes+'-primary active shadow-lg':classes+'-primary'}
                            onClick={
                                ()=>{
                                    setType("Debit")
                                }
                            }
                            >Debit</button>
                        </div>

                        <div>
                            <button className={type=="Credit"?classes+'-success active shadow-lg ':classes+'-success'} 
                                onClick={
                                    () => {
                                        setType("Credit")
                                    }
                                }
                            >Credit</button>
                        </div>

                        <div>
                            <button className={type=="Transfer"?classes+'-danger active shadow-lg':classes+'-danger'}
                                onClick={() => {
                                    setType("Transfer")
                                }}
                            >Transfer</button>
                        </div>

                    </div>

                    <div className='col-8 offset-2 mt-5'>

                        <form className="shadow-lg p-5">
                            <div className="mb-3">
                                <label className="form-label">Amount</label>
                                <input type="text" className="form-control rounded-pill text-primary fw-bold"
                                />
                            </div>
                            {type == "Transfer" ?
                                <div className="mb-3">
                                    <label className="form-label">Reciever Account</label>
                                    <input type="text" className="form-control rounded-pill text-primary fw-bold"

                                    />
                                </div>:null}
                            <button type="submit" className="btn-lg btn-outline-success rounded-pill border-3 border-success px-5 fw-bold">{type}</button>
                        </form>

                    </div>



                </div>

            </div>

        </div>
    )
}

export default Transaction