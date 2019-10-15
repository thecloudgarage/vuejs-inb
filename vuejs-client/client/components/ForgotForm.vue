<template>

    <form v-on:submit.prevent="forgot">

        <FormInput
            label="Email"
            type="email"
            placeholder="Email"
            v-model="email"
            v-bind:error="errors.email"
        />

        <button class="btn btn-default">Submit</button>

    </form>

</template>


<script>
    import FormInput from './FormInput.vue';
    import forgot from '../api/forgot';

    export default {
        components: {
            FormInput,
        },
        data() {

            return {
                email: '',
                errors: {},
            };

        },
        methods: {
            forgot() {

                forgot(this.$data)
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
