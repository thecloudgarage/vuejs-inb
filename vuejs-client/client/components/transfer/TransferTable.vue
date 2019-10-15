<template>
    <table class="table table-bordered">
        <tbody>

            <tr>
                <th class="text-center">Date</th>
                <th class="text-center">Payee Name</th>
		<th class="text-center">Payee Email</th>
		<th class="text-center">Payee Mobile</th>
		<th class="text-center">Payee Bank</th>
		<th class="text-center">Payee Branch</th>
		<th class="text-center">Payee Account ID</th>
                <th class="text-center">Transfer Amount</th>
            </tr>

            <template v-for="transfer in transfers">
                <TransferTableEntry
                    v-bind:key="transfer._id"
                    v-bind:id="transfer._id"
                    v-bind:date="transfer.date"
                    v-bind:payeeName="transfer.payeeName"
                    v-bind:payeeEmail="transfer.payeeEmail"
		    v-bind:payeeMobile="transfer.payeeMobile"
		    v-bind:payeeBank="transfer.payeeBank"
		    v-bind:payeeBranch="transfer.payeeBranch"
		    v-bind:payeeAccountId="transfer.payeeAccountId"
                    v-bind:payeeTransferAmount="transfer.payeeTransferAmount"/>
            </template>

        </tbody>
    </table>
</template>


<script>
    import TransferTableEntry from './TransferTableEntry.vue';
    import { getTransfers } from '../../api/transfer';
    import { bus } from '../../index';

    export default {
        components: {
            TransferTableEntry,
        },
        created() {

            this.refresh();

            bus.$on('transferAdded', () => {

                this.refresh();

            });

        },
        data() {

            return {
                transfers: [],
            };

        },
        methods: {
            refresh() {

                getTransfers()
                    .then((response) => {

                        console.log(response);
                        const transfers = response.body;
                        this.transfers = transfers;

                    });

            },
        },
    };
</script>


<style>
</style>
