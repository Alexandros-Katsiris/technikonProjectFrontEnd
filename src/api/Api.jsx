

import axios from "axios";




export const apiClient = axios.create(

    {

        baseURL: 'http://192.168.206.28:8080/'

    }

)



