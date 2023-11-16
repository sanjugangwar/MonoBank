import axios from "axios";

export const getAllBanks = async (pagenumber, pagesize) => {

    try {

        let response = await axios.get(
            'http://localhost:8084/bankapp/allBanks', {
            params: {
                pageNumber: pagenumber,
                pageSize: pagesize
            },
            headers: {
                Authorization: "Bearer " + localStorage.getItem('auth')
            }
        }
        )

        return response;
    }
    catch (error) {
        alert("some error occured")
    }


}

export const getAllUsers = async (pagenumber, pagesize) => {

    try {

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
    catch (error) {
        alert("some error occured")
    }


}

export const saveBank = async (name, abbrebiation, branch, ifsc) => {

    // try {

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
    // } catch (error) {
    //     alert("some error occured")
    // }


}

export const saveCustomer = async (name, surname, mobile, email, username, password) => {

    try {

        let response = await axios.post(
            'http://localhost:8084/bankapp/addCustomer', {
            name: name,
            surname: surname,
            mobile: mobile,
            email: email,
            userName: username,
            password: password

        }, {
            headers: {
                Authorization: "Bearer " + localStorage.getItem('auth')
            }
        }

        )

        return response;
    } catch (error) {
        alert("some error occured")
    }


}

export const login = async (userName, password) => {

    // try {
        let response = await axios.post(
            'http://localhost:8084/bankapp/login', {
            username: userName,
            password: password
        }
        )
        return response;
    // } catch (error) {
    //     alert("some error occured")
    // }

}

export const getAllAccounts = async (pagenumber, pagesize) => {

    try {

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
    } catch (error) {
        alert("some error occured")
    }


}

export const getAllCustomers = async (pagenumber, pagesize) => {

    try {

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
    } catch (error) {
        alert("some error occured")
    }


}

export const saveAccount = async (customerId, bankId, balance) => {

    // try {

        let response = await axios.post(
            'http://localhost:8084/bankapp/addAccount', {
            customerId: customerId,
            bankId: bankId,
            balance: balance
        }, {
            headers: {
                Authorization: "Bearer " + localStorage.getItem('auth')
            }
        }

        )

        return response;
    // } catch (error) {
    //     alert("some error occured")
    // }


}