import axios from "axios";

export const updateBank = async (name, abbrebiation, branch, ifsc) => {

    try {

        let response = await axios.put(
            'http://localhost:8084/bankapp/updateBank', {
            bankName: name,
            abbrevation: abbrebiation,
            branch: branch,
            ifsc: ifsc
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

export const deleteBank = async (bankId) => {

    try {

        let response = await axios.delete(
            'http://localhost:8084/bankapp/deleteBank', {
            params: {
                bankId: bankId
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
        
        throw error;
    }


}

export const saveBank = async (name, abbrebiation, branch, ifsc) => {

    try {

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
    } catch (error) {
        throw error;
    }


}