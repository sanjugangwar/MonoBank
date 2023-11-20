import React, { useEffect, useState } from 'react'
import HeadingTag from '../shared/HeadingTag'
import { showAllTransactions } from '../../services/account/AccountsApi'
import Table from '../shared/table/Table';
import { useNavigate } from 'react-router-dom';
import PaginationApp from '../shared/table/PaginationApp';
import PageSelect from '../shared/table/PageSelect';
import Navbar from '../shared/navbar/Navbar';

const AllTransactions = () => {
    const [pageNumber, setPageNumber] = useState(0);
    const [pageSize, setPageSize] = useState(2);
    const [totalPages, setTotalPages] = useState();
    const [totalElements, setTotalElements] = useState();
    const [filteredData, setFilteredData] = useState([]);
    const [valid, setValid] = useState(false);
    let search = '';

    const [data, setData] = useState([]);

    const getAllTransactions = async () => {
        let response = await showAllTransactions(pageNumber, pageSize);
        setTotalElements(parseInt(response.headers['totalelements']));
        setTotalPages(Math.ceil(parseInt(response.headers['totalelements']) / pageSize));
        setData(response.data.content)
        setFilteredData([])
        console.log(response)
    }


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
        getAllTransactions();
    }, [pageNumber, pageSize, totalElements, totalPages])

    return (
        <>
            <Navbar></Navbar>
            <div>
                <HeadingTag first="All" second="Transactions"></HeadingTag>


                <div>
                    <div className='container'>
                        <div className='row mt-3'>

                            <div className='col-5'>
                                <PaginationApp
                                    totalPages={totalPages}
                                    pageSize={pageSize}
                                    setPageNumber={setPageNumber}
                                    pageNumber={pageNumber}
                                >
                                </PaginationApp>

                            </div>

                            <div className='col-3'>

                                <input className='rounded-pill px-3 text-primary fw-bold'
                                    placeholder='search here'
                                    onChange={(e) => {
                                        search = e.target.value;
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

                            <div className='col-2 offset-2'>

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

                                <Table
                                    data={filteredData.length == 0 ? data : filteredData}
                                    canUpdate={false}
                                    canDelete={false}
                                ></Table>

                            </div>

                        </div>

                    </div>



                </div>


            </div>
        </>
    )
}

export default AllTransactions