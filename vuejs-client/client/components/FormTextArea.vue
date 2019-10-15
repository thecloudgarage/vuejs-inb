<template>

    <div class="form-group" v-bind:class="{'has-error': error}">

        <label class="control-label">
            {{label}}
        </label>

        <textarea
            class="form-control"
            v-bind:placeholder="placeholder"
            v-bind:rows="rows"
            v-bind:value="value"
            v-on:input="onInput($event.target.value)"
        />

        <span class="help-block" v-if="error">{{error.msg}}</span>

    </div>

</template>


<script>
    export default {
        props: {
            label: {
                type: String,
                required: true,
            },
            placeholder: {
                type: String,
                required: false,
            },
            rows: {
                type: String,
                required: false,
            },
            value: {
                type: String,
                required: true,
            },
            error: {
                type: Object,
                required: false,
            },
        },
        methods: {
            onInput(value) {

                this.$emit('input', value);

            },
        },
    };
</script>


<style>
</style>
