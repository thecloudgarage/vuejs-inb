import Vue from 'vue';


export default function resetPassword(token, data) {

    return Vue.http.post(`${process.env.API_URL_RESET}/api/reset/${token}`, data);

}
