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
    @import "style/variables.less";

    body {
        font-family: 'Calibri', 'Microsoft Yahei', sans-serif;
        font-size: 14px;
        font-weight: 400;
        color: @greyMain;
        background-color: @greyFont;
        margin: 0;
    }
    a {
        color: @greyMain;
        &:visited {
            color: #78909C;
        }
    }
</style>