import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { updateBank } from '../../services/bank/BankApis';

function EditProfile(data) {

    const handleClose = () => data.setShow(false);
    const handleShow = () => {
        data.setShow(true);
       
    }

    const handleSubmit=async()=>{
        
        data.callUpdateBank(data.bankName,data.abbrebiation,data.branch,data.ifsc);
        data.setShow(false);
       
    }


    return (
        <>
            <Modal
                show={data.show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Edit Bank Details</Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    <form className="p-2">
                        <div className="mb-3">
                            <label className="form-label">Bank Name</label>
                            <input type="text" className="form-control rounded-pill text-primary fw-bold"
                                onChange={
                                    (e) => { data.setBankName(e.target.value) }
                                }
                                value={data.bankName}

                               
                            />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Abbrebiation</label>
                            <input type="text" className="form-control rounded-pill text-primary fw-bold"
                                onChange={
                                    (e) =>
                                        data.setAbbrebiation(e.target.value)
                                }

                                value={data.abbrebiation}

                             
                            />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Branch name</label>
                            <input type="text" className="form-control rounded-pill text-primary fw-bold"
                                onChange={(e) =>

                                    data.setBranch(e.target.value)
                                }

                                value={data.branch}

                               
                            />
                        </div>

                    </form>

                </Modal.Body>
                <Modal.Footer>
                    <button className='btn btn-outline-secondary' onClick={handleClose}>Close</button>
                    <button className='btn btn-outline-primary' onClick={handleSubmit}>Update</button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default EditProfile;