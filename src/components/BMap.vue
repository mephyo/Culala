<template>
    <div class="map-wrapper">
        <baidu-map class="bm-view" :center="cord" :zoom=14 :scroll-wheel-zoom=true>
            <bm-marker :position="cord"></bm-marker>
            <div class="icon-button-black" @click="closeMe">
                <drawer d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z" />
            </div>
        </baidu-map>
    </div>
</template>

<script>
    import Drawer from "@/components/Drawer";
    export default {
        name: 'BMap',
        components: {
            Drawer
        },
        props: {
            cord: Object
        },
        methods: {
            closeMe() {
                this.$emit("closeMe")
            }
        }
    }
</script>

<style lang="less">
    @import "../style/variables.less";
    .map-wrapper {
        position: fixed;
        bottom: 8px;
        left: 8px;
        width: 400px;
        height: 400px;
        border-radius: 4px;
        overflow: hidden;
        .small-shadow;
        .bm-view {
            width: 100%;
            height: 100%;
        }
        .icon-button-black {
            position: absolute;
            top: 8px;
            right: 8px;
        }
    }
</style>