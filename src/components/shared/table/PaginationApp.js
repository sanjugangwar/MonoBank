import React, { useState } from 'react'
import { Container } from 'react-bootstrap';
import Pagination from 'react-bootstrap/Pagination';

const PaginationApp = (data) => {
    console.log("pagination is rendering")
    let items = [];
    const [active, setActive] = useState(1);

    console.log(data.totalPages);
    items.push(<Pagination.Prev
        onClick={
            (e) => {
                if (active == 1) {
                    
                    setActive(data.totalPages );
                    data.setPageNumber(data.totalPages - 1);
                    // data.getAllData();
                }
                else {
                    
                    setActive(active - 1);
                    data.setPageNumber(data.pageNumber-1);
                    // data.getAllData();
                }

            }
        }
    ></Pagination.Prev>)
    for (let number = 1; number <= data.totalPages; number++) {

        items.push(
            <Pagination.Item key={number} active={number === active}

                onClick={
                    (e) => {
                        data.setPageNumber(number - 1);
                        setActive(number);
                        // data.getAllData()
                    }
                }
            >
                {number}
            </Pagination.Item>,
        );

    }
    items.push(<Pagination.Next
        onClick={
            (e) => {

                if (active == data.totalPages) {
                    console.log("active " + active)
                    setActive(1);
                    data.setPageNumber(0);
                    // data.getAllData();
                }
                else {
                    console.log("active " + active)
                    setActive(active + 1);
                    data.setPageNumber(active);
                    // data.getAllData();
                }

            }
        }

    ></Pagination.Next>)
    return (
            <Pagination >
                {items}
            </Pagination>
    )
}

export default PaginationApp