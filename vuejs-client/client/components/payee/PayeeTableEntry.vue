<template>
    <tr>

        <td class="text-center">
            {{payeeName}}
        </td>
		
	<td class="text-center">
            {{payeeEmail}}
        </td>
		
		<td class="text-center">
            {{payeeMobile}}
        </td>
		
		<td class="text-center">
            {{payeeBank}}
        </td>
		
		<td class="text-center">
            {{payeeBranch}}
        </td>
		
		<td class="text-center">
            {{payeeAccountId}}
        </td>

        <td class="text-center">
            <a href="#" v-on:click="trash(id)">
                <span class="glyphicon glyphicon-trash text-danger"></span>
            </a>
        </td>

        <td class="text-center">
            <router-link v-bind:to="`/editpayee/${id}`">
                <span class="glyphicon glyphicon-edit text-info"></span>
            </router-link>
        </td>

        <td class="text-center">
            <router-link v-bind:to="`/transferpayee/${id}`">
                <span class="glyphicon glyphicon-edit text-info"></span>
            </router-link>
        </td>

    </tr>
</template>


<script>

    export default {
        props: {
            id: {
                type: String,
                required: true,
            },
            payeeName: {
                type: String,
                required: true,
            },
            payeeEmail: {
                type: String,
                required: true,
            },
            payeeMobile: {
                type: String,
                required: true,
            },
            payeeBank: {
                type: String,
                required: true,
            },
            payeeBranch: {
                type: String,
                required: true,
            },
            payeeAccountId: {
                type: String,
                required: true,
            },
            trash: {
                type: Function,
                required: true,
            },
        },
        filters: {
            editUrl(id) {

                return `/editpayee/${id}`;

            },
            transferUrl() {

                return `/transferpayee`;

            },
        },
    };
</script>


<style>
</style>
