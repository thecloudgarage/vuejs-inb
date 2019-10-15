import Vue from 'vue';
import { userEmail } from '../utils/authentication';
var userqueryemail = userEmail();
export function getPayees() {

    return Vue.http.get(`${process.env.API_URL_PAYEE}/api/payee/?myId=${userqueryemail}`);

}


export function getPayee(id) {

    return Vue.http.get(`${process.env.API_URL_PAYEE}/api/payee/${id}`);

}


export function createPayee(data) {

    return Vue.http.post(`${process.env.API_URL_PAYEE}/api/payee`, data);

}


export function updatePayee(id, data) {

    return Vue.http.put(`${process.env.API_URL_PAYEE}/api/payee/${id}`, data);

}


export function deletePayee(id) {

    return Vue.http.delete(`${process.env.API_URL_PAYEE}/api/payee/${id}`);

}
