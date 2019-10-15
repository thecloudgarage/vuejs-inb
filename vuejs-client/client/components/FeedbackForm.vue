<template>

    <form v-on:submit.prevent="submit">

        <FormInput
            label="Email"
            type="email"
            placeholder="Email"
            v-model="email"
            v-bind:error="errors.email"
        />

        <FormTextArea
            label="Feedack"
            placeholder="Tell us what you think!"
            rows="8"
            v-model="feedback"
            v-bind:error="errors.feedback"
        />

        <button class="btn btn-default">Submit</button>

    </form>

</template>


<script>
    import FormInput from './FormInput.vue';
    import FormTextArea from './FormTextArea.vue';
    import feedback from '../api/feedback';
    import { userEmail } from '../utils/authentication';

    export default {
        components: {
            FormInput,
            FormTextArea,
        },
        data() {

            return {
                email: userEmail(),
                feedback: '',
                errors: {},
            };

        },
        methods: {
            submit() {

                feedback(this.$data)
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
