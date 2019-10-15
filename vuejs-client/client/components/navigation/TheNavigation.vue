<template>

    <div id="navigation">

        <nav class="navbar navbar-inverse">
            <div class="container-fluid">

                <ul class="nav navbar-nav">
                    <li>
                            <a class="navbar-brand"><img src="https://anhalwaysfortest.s3.amazonaws.com/delllogo.png" alt=""></a>
                    </li>
                    <li>
                        <router-link to="/">
                            <i class="material-icons">home</i> Home
                        </router-link>
                    </li>
                    <li v-if="authenticated">
                        <router-link to="/payee">
                            <i class="material-icons">face</i> Payees
                        </router-link>
                    </li>
                    <li v-if="authenticated">
                        <router-link to="/transferlist">
                            <i class="material-icons">vertical_split</i> Transactions
                        </router-link>
                    </li>
                </ul>

                <ul class="nav navbar-nav navbar-right">

                    <template v-if="!authenticated">
                        <li>
                            <router-link to="/register">Register</router-link>
                        </li>
                        <li>
                            <router-link to="/login">Login</router-link>
                        </li>
                    </template>

                    <template v-if="authenticated">
                        <li class="dropdown">
                            <a role="button" class="dropdown-toggle" data-toggle="dropdown">
                                {{name}} <span class="glyphicon glyphicon-user" />
                                <span class="caret" />
                            </a>
                            <ul class="dropdown-menu">
                                <li>
                                    <router-link to="/profile">Profile</router-link>
                                </li>
                                <li>
                                    <a role="button" tabIndex="0" v-on:click="logout">Logout</a>
                                </li>
                            </ul>
                        </li>
                    </template>

                </ul>

            </div>
        </nav>

    </div>

</template>


<script>
    import Vue from 'vue';
    import { bus } from '../../index';
    import { isAuthenticated, userFirstName } from '../../utils/authentication';

    export default {
        created() {

            bus.$on('login', () => {

                this.authenticated = isAuthenticated();
                this.name = userFirstName();

            });

            bus.$on('logout', () => {

                this.authenticated = isAuthenticated();
                this.name = userFirstName();

            });

        },
        data() {

            return {
                authenticated: isAuthenticated(),
                name: userFirstName(),
            };

        },
        methods: {
            logout() {

                localStorage.removeItem('token');
                delete Vue.http.headers.common.Authorization;
                bus.$emit('logout');
                this.$router.push('/');

            },
        },
    };
</script>


<style scoped>
    .navbar-right {
        margin-right: 0px;
    }
</style>
