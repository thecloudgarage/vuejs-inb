// vue
import Vue from 'vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';

// components
import App from './App.vue';

// routes
import routes from './routes';

// plugins
Vue.use(VueRouter);
Vue.use(VueResource);

// router
const router = new VueRouter({
    routes,
    mode: 'history',
});

// event bus
export const bus = new Vue();

// http
const token = localStorage.getItem('token');

if (token) {

    Vue.http.headers.common.Authorization = `Bearer ${token}`;

}

// application
export const app = new Vue({
    el: '#app',
    router,
    template: '<App/>',
    components: { App },
});
