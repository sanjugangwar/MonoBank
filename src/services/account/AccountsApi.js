import axios from "axios";
export const getCustomerAccounts = async () => {
    try {
        let response = await axios.get(
            'http://localhost:8084/bankapp/getAccountsByUsername', {
            params: {
                username: localStorage.getItem('username')
            }
            ,
            headers: {
                Authorization: "Bearer " + localStorage.getItem('auth')
            }
        }
        )

        return response;
    }
    catch (error) {
        throw error;
    }
}

export const transaction = async (accountNo, recieverAccount, type, amount) => {

    try {

        let response = await axios.post(
            'http://localhost:8084/bankapp/transaction', {
            accountNumber: accountNo,
            recieverAccount: recieverAccount,
            type: type,
            amount: amount
        }, {
            headers: {
                Authorization: "Bearer " + localStorage.getItem('auth')
            }
        }

        )

        return response;
    }
    catch (error) {
        throw error;
    }

}

export const getTransactionByUsername = async (accountNo, pageNumber, pageSize) => {

    try {

        let response = await axios.get(
            'http://localhost:8084/bankapp/getTransactionByAccountNumber', {
            params: {
                username: localStorage.getItem('username'),
                accountNumber: accountNo,
                pageNumber,
                pageSize
            }
            ,
            headers: {
                Authorization: "Bearer " + localStorage.getItem('auth')
            }
        }
        )

        return response;
    }
    catch (error) {
        throw error;
    }


}

export const showAllTransactions = async (pageNumber, pageSize) => {

    try {
        let response = await axios.get(
            'http://localhost:8084/bankapp/showAllTransactions', {
            params: {
                pageNumber,
                pageSize
            },
            headers: {
                Authorization: "Bearer " + localStorage.getItem('auth')
            }
        }
        )

        return response;
    }
    catch (error) {
        throw error;
    }

}