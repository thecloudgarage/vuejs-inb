<template>
    <form v-on:submit.prevent="edit">

        <FormInput
            label="PayeeName"
            type="payeename"
            v-model="payeeName"
            v-bind:error="errors.payeeName"
        />
        <FormInput
            label="PayeeEmail"
            type="payeeemail"
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

        <button class="btn btn-default">Submit</button>

    </form>
</template>


<script>
    import { userEmail } from '../../utils/authentication';
    var useremail = userEmail();
    import FormInput from '../../components/FormInput.vue';
    import { getPayee, updatePayee } from '../../api/payee';

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
                myId: '',
                errors: {},
            };

        },
        props: {
            id: {
                type: String,
                required: true,
            },
        },
        created() {

            getPayee(this.id)
                .then((response) => {
                    const payee = response.data;

                    this.payeeName = payee.payeeName;
                    this.payeeEmail = payee.payeeEmail;
                    this.payeeMobile = payee.payeeMobile;
                    this.payeeBank = payee.payeeBank;
                    this.payeeBranch = payee.payeeBranch;
                    this.payeeAccountId = payee.payeeAccountId;
                    this.myId = payee.myId;
                });

        },
        methods: {
            edit() {

                updatePayee(this.id, this.$data)
                    .then((response) => {

                        console.log(response);
                        this.$router.push('/payee');

                    });

            },
        },
    };
</script>


<style>
</style>
