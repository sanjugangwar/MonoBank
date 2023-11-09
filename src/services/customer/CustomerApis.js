import axios from "axios";

export const updateCustomer = async (id,name,surname,mobile,email) => {

    let response = await axios.put(
        'http://localhost:8084/bankapp/updateCustomer', {
            customerId:id,
            firstName:name,
            lastName:surname,
            mobile:mobile,
            email:email
        }, {
        headers: {
            Authorization: "Bearer " + localStorage.getItem('auth')
        }
    }

    )

    return response;

}

export const deleteCustomer=async(id)=>{

    let response = await axios.delete(
        'http://localhost:8084/bankapp/deleteCustomersById', {
        params: {
            cid:id
        },
        headers: {
            Authorization:"Bearer "+localStorage.getItem('auth')
        }
    }
    )

    return response;

}