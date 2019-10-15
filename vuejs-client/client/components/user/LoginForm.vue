<template>

    <form v-on:submit.prevent="login">

        <FormInput
            label="Email"
            type="email"
            placeholder="Email"
            v-model="email"
            v-bind:error="errors.email"
        />

        <FormInput
            label="Password"
            type="password"
            placeholder="Password"
            v-model="password"
            v-bind:error="errors.password"
        />

        <button class="btn btn-default">Submit</button>

        <div class="pull-right">
            <router-link to="/forgot">Forgot Password?</router-link>
        </div>

    </form>

</template>


<script>
    import Vue from 'vue';
    import FormInput from '../FormInput.vue';
    import login from '../../api/login';
    import { bus } from '../../index';

    export default {
        components: {
            FormInput,
        },
        data() {

            return {
                email: '',
                password: '',
                errors: {},
            };

        },
        methods: {
            login() {

                login(this.$data)
                    .then((response) => {

                        const { token } = response.data;

                        localStorage.setItem('token', token);
                        bus.$emit('login');
                        this.$router.push('/');

                    })
                    .catch((response) => {

                        const { errors } = response.body;
                        this.errors = errors;

                    });

            },
        },
    };
</script>


<style>
</style>
