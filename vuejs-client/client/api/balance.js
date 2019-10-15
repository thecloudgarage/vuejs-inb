import Vue from 'vue';
import { userEmail } from '../utils/authentication';
var email = userEmail();
export function getBalances() {

   return Vue.http.get(`${process.env.API_URL_BALANCE}/api/balance/?myId=${email}`);

}
