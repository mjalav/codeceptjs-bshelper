import axios from 'axios';

export interface ApiHelper {
    axios: any;
}

export class ApiHelper {

    constructor() {
        this.axios = axios.create();
    }

    async makePostRequest (url:string, payload = {}, headers = {}) {
        try {
            return axios.post(url, payload, { headers });
        } catch (e) {
            throw new Error(e.message);
        }
    }

    async makePutRequest (url:string, payload = {}, headers = {}) {
        try {
            return axios.put(url, payload, { headers });
        } catch (e) {
            throw new Error(e.message);
        }
    }

    async makeGetRequest(url:string, headers = {}) {
        try {
            return axios.get(url, { headers });
        } catch (e) {
            throw new Error(e.message);
        }
    }

    async makeDeleteRequest(url:string, headers = {}) {
        try {
            return axios.delete(url, { headers });
        } catch (e) {
            throw new Error(e.message);
        }
    }
}
