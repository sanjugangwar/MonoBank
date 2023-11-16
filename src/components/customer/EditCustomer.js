import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function EditCustomer(data) {

    const handleClose = () => data.setShow(false);
    const handleShow = () => data.setShow(true);

    const handleUpdate=()=>{

        data.updateCustomerHandler();
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
                    <Modal.Title>Edit Customer</Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    <form className="p-2">
                        <div className="mb-3">
                            <label className="form-label">Name</label>
                            <input type="text" className="form-control rounded-pill text-primary fw-bold"
                                onChange={
                                    (e) => { data.setName(e.target.value) }
                                }
                                value={data.name}
                            />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Surname</label>
                            <input type="text" className="form-control rounded-pill text-primary fw-bold"
                                onChange={
                                    (e) =>
                                        data.setSurname(e.target.value)
                                }

                                value={data.surname}
                            />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Mobile</label>
                            <input type="text" className="form-control rounded-pill text-primary fw-bold"
                                onChange={(e) =>

                                    data.setMobile(e.target.value)
                                }

                                value={data.mobile}
                            />
                        </div>

                        <div className="mb-3">
                            <label className="form-label">Email</label>
                            <input type="text" className="form-control rounded-pill text-primary fw-bold"
                                onChange={(e) =>

                                    data.setEmail(e.target.value)
                                }

                                value={data.email}
                            />
                        </div>

                    </form>

                </Modal.Body>
                <Modal.Footer>
                   
                    <button className='btn btn-outline-secondary' onClick={handleClose}>Close</button>
                    <button className='btn btn-outline-primary' onClick={handleUpdate}>Update</button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default EditCustomer;