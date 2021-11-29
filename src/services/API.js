import Amplify, { API } from 'aws-amplify';
import awsconfig from '../aws-exports';

Amplify.configure(awsconfig);

export default class APIWrapper {
    constructor() {
        this.apiName = 'jai';
    }

    get(endpoint) {
        return API.get(this.apiName, endpoint)
                    .then(response => {
                        return response
                    })
                    .catch(error => {
                        return error.response;
                    })
    }

    head(endpoint, body) {
        return API.head(this.apiName, endpoint, body)
                    .then(response => {
                        return response
                    })
                    .catch(error => {
                        return error.response;
                    })
    }

    put(endpoint, body) {
        return API.put(this.apiName, endpoint, body)
                    .then(response => {
                        return response
                    })
                    .catch(error => {
                        return error.response;
                    })
    }

    post(endpoint, body) {
        return API.post(this.apiName, endpoint, body)
                    .then(response => {
                        return response
                    })
                    .catch(error => {
                        return error.response;
                    })
    }

    delete(endpoint, body) {
        return API.del(this.apiName, endpoint, body)
                    .then(response => {
                        return response
                    })
                    .catch(error => {
                        return error.response;
                    })
    }

}