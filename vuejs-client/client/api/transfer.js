import Vue from 'vue';
import { userEmail } from '../utils/authentication';
var userqueryemail = userEmail();
export function getTransfers() {

    return Vue.http.get(`${process.env.API_URL_TRANSFER}/api/transfer/?myId=${userqueryemail}`);

}


export function createTransfer(data) {

    return Vue.http.post(`${process.env.API_URL_TRANSFER}/api/transfer`, data);

}
