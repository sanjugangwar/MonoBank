import React, { useEffect, useState } from 'react'
import { getTransactionByUsername } from '../../services/account/AccountsApi'
import Table from '../shared/table/Table';
import PaginationApp from '../shared/table/PaginationApp';
import PageSelect from '../shared/table/PageSelect';

const GetCustomerTransactions = ({ accountNumber }) => {

  const [data, setData] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);
  const [pageSize, setPageSize] = useState(2);
  const [totalPages, setTotalPages] = useState();
  const [totalElements, setTotalElements] = useState();
  const [filteredData, setFilteredData] = useState([]);
  let search='';
  const getCustomerTransactions = async () => {
    if (accountNumber) {
      let response = await getTransactionByUsername(accountNumber, pageNumber, pageSize);
      console.log(response);
      setTotalElements(parseInt(response.headers['totalelements']));
      setTotalPages(Math.ceil(parseInt(response.headers['totalelements']) / pageSize));
      setData(response.data.transactions.content)
    }
  }
  useEffect(() => {

    getCustomerTransactions();

  }, [accountNumber, pageNumber, pageSize, totalElements, totalPages])
  return (
    <div>
      <div className='container'>
        <div className='row'>

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

            <input className='rounded-pill px-3 text-primary fw-bold'
              placeholder='search here'
              onChange={(e) => {
                search= e.target.value;
                let dat = data.filter((d) => {
                  return search.toLowerCase === '' ?
                    d :
                    d.transactionId.toString().includes(search)
                    || d.accountNumber.toString().includes(search)
                    || d.recieverAccount.toString().includes(search)
                    || d.type.includes(search)
                    || d.amount.toString().includes(search)
                })
                setFilteredData(dat);
              }}
            ></input>

          </div>

          <div className='col-4 '>

            <PageSelect

              totalElements={totalElements}
              setPageSize={setPageSize}
              setPageNumber={setPageNumber}
              setTotalPages={setTotalPages}
              pageSize={pageSize}

            >
            </PageSelect>

          </div>

        </div>

      </div>
      <Table
        data={filteredData.length == 0 ? data : filteredData}
        canUpdate={false}
        canDelete={false}
      ></Table>

    </div>
  )
}

export default GetCustomerTransactions;