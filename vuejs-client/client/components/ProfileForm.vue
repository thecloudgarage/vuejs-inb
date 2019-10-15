<template>
    <form v-on:submit.prevent="edit">

        <FormInput
            label="First Name"
            type="text"
            placeholder="First Name"
            v-model="first_name"
            v-bind:error="errors.first_name"
        />

        <FormInput
            label="Last Name"
            type="text"
            placeholder="Last Name"
            v-model="last_name"
            v-bind:error="errors.last_name"
        />

        <FormInput
            label="Email"
            type="email"
            placeholder="Email"
            v-model="email"
            v-bind:error="errors.email"
        />

        <button class="btn btn-default">Submit</button>

        <div class="pull-right">
            <router-link to="/password">Password Settings</router-link>
        </div>

    </form>
</template>


<script>
    import FormInput from './FormInput.vue';
    import { getUser, updateUser } from '../api/user';
    import { userId } from '../utils/authentication';

    export default {
        components: {
            FormInput,
        },
        data() {

            return {
                first_name: '',
                last_name: '',
                email: '',
                errors: {},
            };

        },
        created() {

            const id = userId();

            getUser(id)
                .then((response) => {

                    const user = response.data;

                    this.first_name = user.first_name;
                    this.last_name = user.last_name;
                    this.email = user.email;

                });

        },
        methods: {
            edit() {

                const id = userId();

                updateUser(id, this.$data)
                    .then(() => {

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
