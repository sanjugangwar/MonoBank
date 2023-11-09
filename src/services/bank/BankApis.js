import axios from "axios";

export const updateBank = async (name,abbrebiation,branch,ifsc) => {

    let response = await axios.put(
        'http://localhost:8084/bankapp/updateBank', {
            bankName:name,
            abbrevation:abbrebiation,
            branch:branch,
            ifsc:ifsc
        }, {
        headers: {
            Authorization: "Bearer " + localStorage.getItem('auth')
        }
    }

    )

    return response;

}

export const deleteBank=async(bankId)=>{

    let response = await axios.delete(
        'http://localhost:8084/bankapp/deleteBank', {
        params: {
            bankId:bankId
        },
        headers: {
            Authorization:"Bearer "+localStorage.getItem('auth')
        }
    }
    )

    return response;

}