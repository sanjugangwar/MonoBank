import axios from "axios";

export const updateCustomer = async (id, name, surname, mobile, email) => {

    try {

        let response = await axios.put(
            'http://localhost:8084/bankapp/updateCustomer', {
            customerId: id,
            firstName: name,
            lastName: surname,
            mobile: mobile,
            email: email
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

export const deleteCustomer = async (id) => {

    try {

        let response = await axios.delete(
            'http://localhost:8084/bankapp/deleteCustomersById', {
            params: {
                cid: id
            },
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

export const getAllCustomerDetails = async () => {

    try {

        let response = await axios.get(
            'http://localhost:8084/bankapp/getAllCustomers', {
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

export const getBanksByCustomerId = async (customerId) => {

    try {
        let response = await axios.get(
            'http://localhost:8084/bankapp/getBanksByCustomerId', {
            params: {
                customerId: customerId
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

export const getCustomerByUsername = async () => {

    try {

        let response = await axios.get(
            'http://localhost:8084/bankapp/getCustomerByUsername', {
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
    } catch (error) {
        throw error;
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
        
        throw error;

    }


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
        
        throw error;

    }


}
