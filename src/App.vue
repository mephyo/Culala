<template>
    <div id="app">
        <culala/>
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
    @import "style/variables.less";
    body {
        font-family: Calibri, sans-serif;
        font-size: 16px;
        color: @black1;
    }
</style>