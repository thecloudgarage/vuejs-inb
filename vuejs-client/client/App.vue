<template>

    <div id="app">
        <DevelopmentBanner v-if="development && authenticated"/>
        <TheNavigation/>
        <router-view/>
    </div>

</template>


<script>
    import TheNavigation from './components/navigation/TheNavigation.vue';
    import DevelopmentBanner from './components/DevelopmentBanner.vue';
    import { bus } from './index';
    import { isDevelopment } from './utils/environment';
    import { isAuthenticated } from './utils/authentication';

    export default {
        components: {
            TheNavigation,
            DevelopmentBanner,
        },
        created() {

            bus.$on('login', () => {

                this.development = isDevelopment();
                this.authenticated = isAuthenticated();

            });

            bus.$on('logout', () => {

                this.development = isDevelopment();
                this.authenticated = isAuthenticated();

            });

        },
        data() {

            return {
                development: isDevelopment(),
                authenticated: isAuthenticated(),
            };

        },
    };
</script>


<style>
</style>
