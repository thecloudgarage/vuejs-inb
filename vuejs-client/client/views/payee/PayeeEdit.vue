<template>
    <div class="container">
        <h1>Edit Payee</h1>
        <br>
        <PayeeFormEdit v-bind:id="id"/>
    </div>
</template>


<script>
    import PayeeFormEdit from '../../components/payee/PayeeFormEdit.vue';

    export default {
        components: {
            PayeeFormEdit,
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
