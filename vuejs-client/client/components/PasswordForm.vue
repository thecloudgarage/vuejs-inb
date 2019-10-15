<template>

    <form v-on:submit.prevent="change">

        <FormInput
            label="Current Password"
            type="password"
            v-model="current_password"
            v-bind:error="errors.current_password"
        />

        <FormInput
            label="New Password"
            type="password"
            v-model="new_password"
            v-bind:error="errors.new_password"
        />

        <FormInput
            label="Confirm Password"
            type="password"
            v-model="confirmation"
            v-bind:error="errors.confirmation"
        />

        <button class="btn btn-default">Update</button>

    </form>

</template>


<script>
    import FormInput from './FormInput.vue';
    import changePassword from '../api/password';

    export default {
        components: {
            FormInput,
        },
        data() {

            return {
                current_password: '',
                new_password: '',
                confirmation: '',
                errors: {},
            };

        },
        methods: {
            change() {

                changePassword(this.$data)
                    .then(() => {

                        this.$router.push('/');

                    })
                    .catch((response) => {

                        const { errors } = response.body;

                        console.log(errors);
                        this.errors = errors;

                    });

            },
        },
    };
</script>


<style>
</style>
