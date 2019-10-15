<template>
    <tr>
        <td class="text-center">
            {{date | formatDate}}
        </td>

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
            {{payeeTransferAmount}}
        </td>

    </tr>
</template>


<script>
    import moment from 'moment';
    export default {
        props: {
            id: {
                type: String,
                required: true,
            },
            date: {
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
            payeeTransferAmount: {
                type: Number,
                required: true,
            },
        },
    };
</script>


<style>
</style>
