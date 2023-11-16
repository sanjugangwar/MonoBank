import React, { useEffect, useState } from 'react'
import { getAllAccounts } from '../../services/ApiService';
import Table from '../shared/table/Table';
import PaginationApp from '../shared/table/PaginationApp';
import PageSelect from '../shared/table/PageSelect';

const GetAllAccounts = (props) => {

  const [accounts, setAccounts] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);
  const [pageSize, setPageSize] = useState(2);
  const [totalPages, setTotalPages] = useState(0);
  const [totalElements, setTotalElements] = useState();
  const [filteredData, setFilteredData] = useState('');
  let search = '';

  const handleApi = async () => {
    let response = await getAllAccounts(pageNumber, pageSize);
    setAccounts(response.data.content);
    setTotalElements(parseInt(response.headers['account-count']));
    setTotalPages(Math.ceil(parseInt(response.headers['account-count']) / pageSize));
    console.log(response);
  }



  useEffect(() => {

    handleApi();

  }, [pageNumber, pageSize, props])

  return (
    <div className='container'>
      <div className='row my-5'>
        <div className='col-4 offset-1'>
          <PaginationApp
            totalPages={totalPages}
            pageSize={pageSize}
            setPageNumber={setPageNumber}
            pageNumber={pageNumber}
          >
          </PaginationApp>
        </div>

        <div className='col-3'>
          {
            props.search ?


              <input className='rounded-pill px-3 text-primary fw-bold' placeholder='Search Here'
                onChange={(e) => {
                  search = e.target.value;
                  let d = accounts.filter((account) => {
                    return search.toLowerCase === '' ? account :
                      account.holderName.includes(search)
                      || account.bankName.includes(search)
                      || account.surName.includes(search)
                      || account.ifsc.includes(search)
                      || account.branch.includes(search)
                      || account.accountNo.toString().includes(search)
                      || account.balance.toString().includes(search)
                      ;
                  })
                  setFilteredData(d);
                }}
              ></input>
              :null

        }
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

      </div>

      <div className='row'>

        <div className='display-4 text-center my-2 text-primary fw-bold'>All Accounts</div>

        <div className='col-10 offset-1 shadow-lg'>

          <Table data={filteredData == [] ? accounts : filteredData}
            canUpdate={false}
            canDelete={true}
          ></Table>

        </div>

      </div>


    </div>
  )
}

export default GetAllAccounts