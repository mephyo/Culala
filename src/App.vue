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
        font-family: 'Segoe UI', 'Microsoft Yahei', sans-serif;
        font-size: 14px;
        font-weight: 500;
        color: @black1;
    }
</style>