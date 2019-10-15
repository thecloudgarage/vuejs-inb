import Vue from 'vue';


export default function feedback(data) {

    return Vue.http.post(`${process.env.API_URL_FEEDBACK}/api/feedback`, data);

}
