import React, { useEffect, useState } from 'react'
import { getAllBanks } from '../../services/ApiService';
import Table from '../shared/table/Table';
import PaginationApp from '../shared/table/PaginationApp';
import PageSelect from '../shared/table/PageSelect';
import EditBank from './EditBank'
import { deleteBank, updateBank } from '../../services/bank/BankApis';

export const GetAllBanks = ({ props }) => {


    const [pageNumber, setPageNumber] = useState(0);
    const [pageSize, setPageSize] = useState(2);
    const [data, setData] = useState([]);
    const [updateData, setUpdateData] = useState();
    const [totalPages, setTotalPages] = useState();
    const [totalElements, setTotalElements] = useState();
    const [updateResponse, setUpdateResponse] = useState();
    const [show, setShow] = useState(false);

    const [bankName, setBankName] = useState("");
    const [branch, setBranch] = useState("");
    const [abbrebiation, setAbbrebiation] = useState("");
    const [ifsc, setIfsc] = useState();

    

    const handleSubmit = async () => {
        console.log("handleSubmit called in get all banks")
        let response;
        response = await getAllBanks(pageNumber, pageSize);
        console.log(response);
        setData(response.data.content);
        setTotalElements(parseInt(response.headers['bank-count']));
        setTotalPages(Math.ceil(parseInt(response.headers['bank-count']) / pageSize));
        console.log(response.request.responseURL)

    }

    const handleUpdate=async(bank)=>{
           setBankName(bank.bankName)
           setBranch(bank.branch)
           setAbbrebiation(bank.abbrevation)
           setIfsc(bank.ifsc);
           setShow(true);
    }

   

    const callUpdateBank = async (bankName, abbrebiation, branch, ifsc) => {

        console.log("BEFORE update bank response")
        let response = await updateBank(bankName, abbrebiation, branch, ifsc);
        setUpdateData(response);
        console.log("AFTER update bank response")
        console.log(response);

    }


    const handleDelete = async (bankId) => {
        let response = await deleteBank(bankId);
        setUpdateData(response);
    }


    useEffect(() => {
        handleSubmit();

    }, [totalElements, pageSize, pageNumber, updateResponse, props, updateData])



    let pages = [];
    for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
    }
    return (
        <>
            <EditBank
         bankName={bankName} 
         abbrebiation={abbrebiation} 
         branch={branch}
         setBankName={setBankName}
         setAbbrebiation={setAbbrebiation}
         setBranch={setBranch}
         show={show}
         setShow={setShow}
         ifsc={ifsc}
         callUpdateBank={callUpdateBank}
         
         ></EditBank>

           

            <div className='container'>
                <div className='row my-5'>
                    <div className='col-8'>
                        <PaginationApp
                            totalPages={totalPages}
                            pageSize={pageSize}
                            setPageNumber={setPageNumber}
                            pageNumber={pageNumber}
                            getAllData={handleSubmit}

                        >
                        </PaginationApp>
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
                        <Table
                            data={data}
                            title="Edit Bank Details"
                            modal="EditProfile"
                            canUpdate={true}
                            canDelete={true}
                            handleUpdate={handleUpdate}
                            handleDelete={handleDelete}

                        >

                        </Table>
                    </div>
                </div>
            </div>
        </>
    )
}
