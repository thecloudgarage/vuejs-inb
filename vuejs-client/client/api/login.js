import Vue from 'vue';


export default function login(data) {

    return Vue.http.post(`${process.env.API_URL_LOGIN}/api/login`, data);

}
