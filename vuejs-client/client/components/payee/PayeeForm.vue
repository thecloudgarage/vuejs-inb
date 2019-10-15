<template>
    <form>

        <FormInput
            label="PayeeName"
            type="payeename"
            v-model="payeeName"
            v-bind:error="errors.payeeName"
        />
        <FormInput
            label="PayeeEmail"
            type="payeeEmail"
            v-model="payeeEmail"
            v-bind:error="errors.payeeEmail"
        />		
        <FormInput
            label="PayeeMobile"
            type="payeemobile"
            v-model="payeeMobile"
            v-bind:error="errors.payeeMobile"
        />
        <FormInput
            label="PayeeBank"
            type="payeebank"
            v-model="payeeBank"
            v-bind:error="errors.payeeBank"
        />
        <FormInput
            label="PayeeBranch"
            type="payeebranch"
            v-model="payeeBranch"
            v-bind:error="errors.payeeBranch"
        />		
        <FormInput
            label="PayeeAccountId"
            type="payeeaccountid"
            v-model="payeeAccountId"
            v-bind:error="errors.payeeAccountId"
        />		

        <button class="btn btn-default" v-on:click="add" data-dismiss="modal">Submit</button>

    </form>
</template>


<script>
    import { userEmail } from '../../utils/authentication';
    var useremail = userEmail();
    import FormInput from '../../components/FormInput.vue';
    import { createPayee } from '../../api/payee';
    import { bus } from '../../index';

    export default {
        components: {
            FormInput,
        },
        data() {

            return {
                payeeName: '',
		payeeEmail: '',
                payeeMobile: '',
                payeeBank: '',
                payeeBranch: '',
                payeeAccountId: '',				
                myId: useremail,
                errors: {},
            };

        },
        methods: {
            add() {

                createPayee(this.$data)
                    .then((response) => {

                        console.log(response);
                        Object.assign(this.$data);
                        bus.$emit('payeeAdded');

                    })
                    .catch((response) => {

                        console.log(response);
                        const { errors } = response.body;
                        this.errors = errors;

                    });

            },
        },
    };
</script>


<style>

</style>
