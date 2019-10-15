<template>
    <div class="container">
        <h1>Login</h1>
        <br>
        <LoginForm/>
    </div>
</template>


<script>
    import LoginForm from '../../components/user/LoginForm.vue';

    export default {
        components: {
            LoginForm,
        },
    };
</script>


<style>
</style>
