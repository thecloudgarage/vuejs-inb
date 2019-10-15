<template>
    <form v-on:submit.prevent="transfer">

        <FormInput
            label="Date"
            type="date"
            v-model="date"
            v-bind:error="errors.date"
        />
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
        <FormInput
            label="PayeeTransferAmount"
            type="payeetransferamount"
            v-model="payeeTransferAmount"
            v-bind:error="errors.payeeTransferAmount"
        />
        <button class="btn btn-default">Submit</button>

    </form>
</template>


<script>
    import moment from 'moment';
    import { userEmail } from '../../utils/authentication';
    var useremail = userEmail();
    import FormInput from '../../components/FormInput.vue';
    import { getPayee } from '../../api/payee';
    import { createTransfer } from '../../api/transfer';

    export default {
        components: {
            FormInput,
        },
       
        data() {

            return {
                date: moment().format('YYYY-MM-DD'),
                payeeName: '',
                payeeEmail: '',
                payeeMobile: '',
                payeeBank: '',
                payeeBranch: '',
                payeeAccountId: '',
                payeeTransferAmount: '',
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
                    this.myId = payee.myId

                });

        },
        methods: {
            transfer() {

                createTransfer(this.$data)
                    .then((response) => {

                        console.log(response);
                        this.$router.push('/transferlist');

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
