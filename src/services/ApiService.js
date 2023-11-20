import axios from "axios";
export const login = async (userName, password) => {

    try {
        let response = await axios.post(
            'http://localhost:8084/bankapp/login', {
            username: userName,
            password: password
        }
        )
        return response;
    } catch (error) {
        throw error;
    }

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
       throw error;
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
        throw error
    }


}

export const saveAccount = async (customerId, bankId, balance) => {

    try {

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
    } catch (error) {
        throw error;
    }


}