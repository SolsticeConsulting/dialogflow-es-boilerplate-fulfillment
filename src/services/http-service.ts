import Axios from "axios"
import { API_ROUTES } from "../constants/api-constants"

const getRequest = (route: string, token: string) => {
    return Axios.get(route, {
        headers: {
            "Authorization": `Bearer ${token}`
        }
    })
}

export const getOrders = (token: string) => {
    return getRequest(API_ROUTES.GET_DUMMY_STATUS, token);
}
