// components
import Welcome from './views/welcome/Welcome.vue';
import Register from './views/user/Register.vue';
import Login from './views/user/Login.vue';
import Profile from './views/Profile.vue';
import Password from './views/Password.vue';
import Forgot from './views/Forgot.vue';
import Reset from './views/Reset.vue';
import Feedback from './views/Feedback.vue';
import Payee from './views/payee/Payee.vue';
import PayeeEdit from './views/payee/PayeeEdit.vue';
import PayeeTransfer from './views/transfer/PayeeTransfer.vue';
import TransferList from './views/transfer/TransferList.vue';
export default [
    {
        path: '/',
        component: Welcome,
    },
    {
        path: '/forgot',
        component: Forgot,
    },
    {
        path: '/reset/:token',
        component: Reset,
    },
    {
        path: '/register',
        component: Register,
    },
    {
        path: '/login',
        component: Login,
    },
    {
        path: '/feedback',
        component: Feedback,
    },
    {
        path: '/password',
        component: Password,
    },
    {
        path: '/profile',
        component: Profile,
    },
    {
        path: '/payee',
        component: Payee,
    },
    {
        path: '/editpayee/:id',
        component: PayeeEdit,
    },
    {
        path: '/transferpayee/:id',
        component: PayeeTransfer,
    },
    {
        path: '/transferlist',
        component: TransferList,
    },
];
