<template>

    <form v-on:submit.prevent="reset">

        <FormInput
            label="New Password"
            type="password"
            v-model="password"
            v-bind:error="errors.password"
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
    import resetPassword from '../api/reset';

    export default {
        components: {
            FormInput,
        },
        data() {

            return {
                password: '',
                confirmation: '',
                errors: {},
            };

        },
        methods: {
            reset() {

                const { token } = this.$route.params;
                console.log(token);
                console.log(this.$data);

                resetPassword(token, this.$data)
                    .then((response) => {

                        console.log(response);
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
