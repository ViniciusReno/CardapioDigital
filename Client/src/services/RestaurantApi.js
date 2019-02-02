import axios from 'axios';

const urlBase = 'http://challange.goomer.com.br/restaurants/';

export default {
    getAll: () => {
        return axios.get(urlBase)
            .then((response) => {
                return response.data

            })
    },
    getOne: (id) => {
        return axios.get(urlBase + id + "/menu")
            .then((response) => {
                return response.data
            })
    }
}