<template>

    <div id="welcome">
        <div class="container">

            <template v-if="!authenticated">
                <h1>Welcome.</h1>
                <h4>Please <router-link to="/register">register</router-link> or <router-link to="/login">login</router-link>.</h4>
            </template>

            <template v-if="authenticated">
                <h1>Welcome, {{name}}. Your Balance as of today is {{balance}}.</h1>
            </template>

        </div>
    </div>

</template>


<script>
    import JSON from 'JSON'
    import { bus } from '../../index';
    import { isAuthenticated, userFirstName, userEmail } from '../../utils/authentication';
	import { getBalances } from '../../api/balance'

    export default {
        data() {

            return {
                authenticated: isAuthenticated(),
                name: userFirstName(),
                email: userEmail(),
		balance: '', 
            };

        },

        methods: {
            refresh() {
                getBalances()
                    .then((response) => {

                        console.log(response);
                        var balanceapijson = response.data[0];
                        var balancejson = balanceapijson.myAccountBalance
                        var balance = JSON.parse(balancejson);
                        this.balance = balance;

                    });

            },
          },
		
        created() {
            this.refresh();
            bus.$on('login', () => {

                this.authenticated = isAuthenticated();
                this.name = userFirstName();
                this.email = userEmail();
                this.refresh();

            });

            bus.$on('logout', () => {

                this.authenticated = isAuthenticated();
                this.name = userFirstName();
                this.email = userEmail();
                this.refresh();

            });

        },
    };
</script>


<style>
</style>
