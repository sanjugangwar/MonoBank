import React, { useEffect, useState } from 'react'
import { getAllCustomers } from '../../services/ApiService';
import Table from '../shared/table/Table';
import PaginationApp from '../shared/table/PaginationApp';
import PageSelect from '../shared/table/PageSelect';
import EditCustomer from './EditCustomer';
import { deleteCustomer, updateCustomer } from '../../services/customer/CustomerApis';

export const GetAllCustomer = (props) => {


  const [pageNumber, setPageNumber] = useState(0);
  const [pageSize, setPageSize] = useState(2);
  const [customers, setCustomers] = useState([]);
  const [totalPages, setTotalPages] = useState();
  const [totalElements, setTotalElements] = useState();

  const [customerId, setCustomerId] = useState();
  const [name, setName] = useState();
  const [surname, setSurname] = useState();
  const [mobile, setMobile] = useState();
  const [email, setEmail] = useState();
  const [show, setShow] = useState();
  const [updateData, setUpdateData] = useState();
  let searchs = '';
  const [filteredData, setFilteredData] = useState([]);


  const handleSubmit = async () => {
    let response;
    response = await getAllCustomers(pageNumber, pageSize);
    console.log(response);
    setCustomers(response.data.content);
    setTotalElements(parseInt(response.headers['customer-count']));
    setTotalPages(Math.ceil(parseInt(response.headers['customer-count']) / pageSize));
    console.log(response.request.responseURL)


  }

  const handleDelete = async (d) => {

    let response = await deleteCustomer(d.id);
    setUpdateData(response);

  }

  const handleUpdate = (d) => {

    setName(d.name);
    setSurname(d.surname);
    setMobile(d.mobile);
    setEmail(d.email);
    setShow(true);
    setCustomerId(d.id);
  }

  const updateCustomerHandler = async () => {
    let response = await updateCustomer(customerId, name, surname, mobile, email);
    setUpdateData(response);

  }

  useEffect(() => {
    handleSubmit();
  }, [totalElements, pageSize, pageNumber, props, updateData])


  let pages = [];
  for (let i = 1; i <= totalPages; i++) {
    pages.push(i);
  }
  return (
    <>
      <EditCustomer
        name={name}
        surname={surname}
        mobile={mobile}
        email={email}
        show={show}
        setName={setName}
        setMobile={setMobile}
        setEmail={setEmail}
        setSurname={setSurname}
        setShow={setShow}
        updateCustomerHandler={updateCustomerHandler}

      ></EditCustomer>
      <div className='container'>
        <div className='row my-5'>
          <div className='col-4'>
            <PaginationApp
              totalPages={totalPages}
              pageSize={pageSize}
              setPageNumber={setPageNumber}
              pageNumber={pageNumber}

            >
            </PaginationApp>
          </div>
          <div className='col-4'>
            {
              props.search ?

                <input className='rounded-pill px-3 text-primary fw-bold'
                  placeholder='search here'
                  onChange={(e) => {
                    searchs = e.target.value;
                    let d = customers.filter((customer) => {
                      return searchs.toLowerCase === '' ?
                        customer :
                        customer.name.includes(searchs)
                        || customer.surname.includes(searchs)
                        || customer.mobile.includes(searchs)
                        || customer.email.includes(searchs)
                    })
                    setFilteredData(d);
                  }}
                ></input> : null}

          </div>
          <div className='col-2 offset-1'>

            <PageSelect

              totalElements={totalElements}
              setPageSize={setPageSize}
              setPageNumber={setPageNumber}
              setTotalPages={setTotalPages}
              pageSize={pageSize}

            >
            </PageSelect>
          </div>
          <div className='col-10 offset-1'>
            <Table data={filteredData.length == 0 ? customers : filteredData}
              title="Edit Customer Details"
              modal="EditCustomer"
              canUpdate={true}
              canDelete={true}
              handleUpdate={handleUpdate}
              handleDelete={handleDelete}
            ></Table>
          </div>
        </div>
      </div>
    </>
  )
}