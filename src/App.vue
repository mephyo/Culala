<template>
    <div id="app">
        <culala />
    </div>
</template>

<script>
    import Culala from './components/Culala'

    export default {
        name: 'App',
        components: {
            Culala
        }
    }
</script>

<style lang="less">
    body {
        font-family: 'Segoe UI', 'Helvetica Neue', 'Source Han Sans', 'Microsoft Yahei', sans-serif;
        font-size: 14px;
        font-weight: 400;
        color: #333;
        margin: 0;
    }
</style>