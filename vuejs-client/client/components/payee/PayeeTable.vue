<template>
    <table class="table">
        <tbody>

            <tr>
                <th class="text-center">Payee Name</th>
		<th class="text-center">Payee Email</th>
		<th class="text-center">Payee Mobile</th>
		<th class="text-center">Payee Bank</th>
		<th class="text-center">Payee Branch</th>
		<th class="text-center">Payee Account ID</th>
                <th class="text-center">Delete</th>
                <th class="text-center">Edit</th>
                <th class="text-center">Transfer</th>
            </tr>

            <template v-for="payee in payees">
                <PayeeTableEntry
                    v-bind:key="payee._id"
                    v-bind:id="payee._id"
                    v-bind:payeeName="payee.payeeName"
                    v-bind:payeeEmail="payee.payeeEmail"
		    v-bind:payeeMobile="payee.payeeMobile"
		    v-bind:payeeBank="payee.payeeBank"
		    v-bind:payeeBranch="payee.payeeBranch"
		    v-bind:payeeAccountId="payee.payeeAccountId"
                    v-bind:trash="trash"/>
            </template>

        </tbody>
    </table>
</template>


<script>
    import PayeeTableEntry from './PayeeTableEntry.vue';
    import { getPayees, deletePayee } from '../../api/payee';
    import { bus } from '../../index';

    export default {
        components: {
            PayeeTableEntry,
        },
        created() {

            this.refresh();

            bus.$on('payeeAdded', () => {

                this.refresh();

            });

        },
        data() {

            return {
                payees: [],
            };

        },
        methods: {
            refresh() {

                getPayees()
                    .then((response) => {

                        console.log(response);
                        const payees = response.body;
                        this.payees = payees;

                    });

            },
            trash(id) {

                deletePayee(id)
                    .then(() => {

                        this.refresh();

                    });

            },
        },
    };
</script>


<style>
</style>
