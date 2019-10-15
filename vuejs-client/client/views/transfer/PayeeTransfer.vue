<template>
    <div class="container">
        <h1>Transfer Payee</h1>
        <br>
        <PayeeFormTransfer v-bind:id="id"/>
    </div>
</template>


<script>
    import PayeeFormTransfer from '../../components/transfer/PayeeFormTransfer.vue';

    export default {
        components: {
            PayeeFormTransfer,
        },
        data() {

            return {
                id: this.$route.params.id,
            };

        },
    };
</script>


<style>
</style>
