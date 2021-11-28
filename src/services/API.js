import Amplify, { API } from 'aws-amplify';
import awsconfig from '../aws-exports';

Amplify.configure(awsconfig);

export default class APIWrapper {
    constructor() {
        this.apiName = 'jai';
    }

    get(endpoint, body) {
        return API.get(this.apiName, endpoint, body)
                    .then(response => {
                    return response
                    })
                    .catch(error => {
                    console.log(error.response);
                    })
    }

    put(endpoint, body) {
        return API.put(this.apiName, endpoint, body)
                    .then(response => {
                    console.log(response)
                    })
                    .catch(error => {
                    console.log(error.response);
                    })
    }

    post(endpoint, body) {
        return API.post(this.apiName, endpoint, body)
                    .then(response => {
                    console.log(response)
                    })
                    .catch(error => {
                    console.log(error.response);
                    })
    }

    delete(endpoint, body) {
        return API.del(this.apiName, endpoint, body)
                    .then(response => {
                    console.log(response)
                    })
                    .catch(error => {
                    console.log(error.response);
                    })
    }

}