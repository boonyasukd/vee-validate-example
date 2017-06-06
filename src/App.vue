<template>
    <div id="app">
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    // provide: {
    //     rulesets: {
    //         email: 'required|email',
    //         password: 'required',
    //     },
    // },
    name: 'app',
};
</script>

<style>
.grayish {
    color: gray;
    font-size: smaller;
}
</style>
