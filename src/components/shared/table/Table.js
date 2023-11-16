import React, { useEffect, useState } from 'react'
import EditProfile from '../../bank/EditBank';
import EditCustomer from '../../customer/EditCustomer';
import HeadingTag from '../HeadingTag';

const Table = (data) => {

    let title = data.title;
    let canDelete = data.canDelete;
    let canUpdate = data.canUpdate;
    let modalUsed = data.modal;

    const handleUpdate = data.handleUpdate;
    const handleDelete = data.handleDelete;

    let rowOfUsers;
    let headOfusers;
    data = data.data;

    if (data.length == 0) {
        return <HeadingTag second="Oops! No Data Found"></HeadingTag>
    }

    if (data.length > 0) {

        let headData = Object.keys(data[0]);
        if (canDelete || canUpdate)
            headData.push('Actions');

        headOfusers = headData.map(
            (d) => {
                return (
                    <th>
                        {d}
                    </th>
                )
            }
        )


    }
    if (data.length > 0) {
        rowOfUsers = data.map((d, ind) => {

            return (
                <tr key={ind}>
                    {
                        Object.values(d).map((t) => {
                            return (
                                <td>{t}</td>
                            )
                        })



                    }
                    {canUpdate || canDelete ?
                        <td >
                            {

                                canUpdate ?

                                    <button className='btn btn-outline-success me-2'

                                        onClick={() =>
                                            handleUpdate(d)

                                        }

                                    ><i class="bi bi-pencil-square me-1"></i>Edit Detail</button> : null

                            }
                            {
                                canDelete ? <button className='btn btn-outline-danger'
                                    onClick={() => handleDelete(d)}
                                ><i class="bi bi-trash3-fill me-1"></i> Delete </button> : null
                            }
                        </td>
                        : null}

                </tr>
            )

        });
    }
    return (
        <>

            <table class="table table-bordered mt-2 border-primary">
                <thead className='text-center'>
                    <tr>

                        {headOfusers}

                    </tr>
                </thead>
                <tbody className='text-center'>


                    {
                        rowOfUsers
                    }


                </tbody>
            </table>
        </>
    )
}

export default Table