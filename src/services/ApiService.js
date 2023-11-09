import axios from "axios";

export const getAllBanks = async (pagenumber, pagesize) => {

    let response = await axios.get(
        'http://localhost:8084/bankapp/allBanks', {
        params: {
            pageNumber: pagenumber,
            pageSize: pagesize
        },
        headers: {
            Authorization:"Bearer "+localStorage.getItem('auth')
        }
    }
    )

    return response;

}

export const getAllUsers = async (pagenumber, pagesize) => {

    let response = await axios.get(
        'http://localhost:8084/bankapp/getAllCustomer', {
        params: {
            pageNumber: pagenumber,
            pageSize: pagesize
        }
    }
    )

    return response;

}

export const saveBank = async (name, abbrebiation, branch, ifsc) => {

    let response = await axios.post(
        'http://localhost:8084/bankapp/addBank', {
        bankName: name,
        abbrevation: abbrebiation,
        branch: branch,
        ifsc: ifsc,

    }, {
        headers: {
            Authorization: "Bearer " + localStorage.getItem('auth')
        }
    }

    )

    return response;

}

export const saveCustomer = async (name, surname,mobile,email,username,password) => {

    let response = await axios.post(
        'http://localhost:8084/bankapp/addCustomer', {
            name:name,
            surname:surname,
            mobile:mobile,
            email:email,
            userName:username,
            password:password
        
        }, {
        headers: {
            Authorization: "Bearer " + localStorage.getItem('auth')
        }
    }

    )

    return response;

}

export const login = async (userName, password) => {
    let response = await axios.post(
        'http://localhost:8084/bankapp/login', {
        username: userName,
        password: password
    }
    )
    return response;
}

export const getAllAccounts = async (pagenumber, pagesize) => {

    let response = await axios.get(
        'http://localhost:8084/bankapp/getAllAccounts', {
        params: {
            pageNumber: pagenumber,
            pageSize: pagesize
        }
        ,
        headers: {
            Authorization: "Bearer " + localStorage.getItem('auth')
        }
    }
    )

    return response;

}

export const getAllCustomers = async (pagenumber, pagesize) => {

    let response = await axios.get(
        'http://localhost:8084/bankapp/getAllCustomer', {
        params: {
            pageNumber: pagenumber,
            pageSize: pagesize
        }
        ,
        headers: {
            Authorization: "Bearer " + localStorage.getItem('auth')
        }
    }
    )

    return response;

}

export const saveAccount = async (customerId,bankId,balance) => {

    let response = await axios.post(
        'http://localhost:8084/bankapp/addAccount', {
            customerId:customerId,
            bankId:bankId,
            balance:balance
        }, {
        headers: {
            Authorization: "Bearer " + localStorage.getItem('auth')
        }
    }

    )

    return response;

}