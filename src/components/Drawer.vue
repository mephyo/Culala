<template>
    <svg class="icon" :class="iconClass" viewBox="0 0 24 24">
        <path :d="vector" />
    </svg>
</template>

<script>
    export default {
        name: 'Drawer',
        props: {
            c: String,
            d: String
        },
        computed: {
            iconClass() {
                switch (this.c) {
                    case 'b':
                        return 'icon-black'
                        break;
                    case 'w':
                        return 'icon-white'
                        break;
                    default:
                        return ''
                        break;
                }
            },
            vector() {
                switch (this.d) {
                    case "clear":
                        return "M19.36,2.72L20.78,4.14L15.06,9.85C16.13,11.39 16.28,13.24 15.38,14.44L9.06,8.12C10.26,7.22 12.11,7.37 13.65,8.44L19.36,2.72M5.93,17.57C3.92,15.56 2.69,13.16 2.35,10.92L7.23,8.83L14.67,16.27L12.58,21.15C10.34,20.81 7.94,19.58 5.93,17.57Z"
                        break;
                    case "info":
                        return "M13.5,4A1.5,1.5 0 0,0 12,5.5A1.5,1.5 0 0,0 13.5,7A1.5,1.5 0 0,0 15,5.5A1.5,1.5 0 0,0 13.5,4M13.14,8.77C11.95,8.87 8.7,11.46 8.7,11.46C8.5,11.61 8.56,11.6 8.72,11.88C8.88,12.15 8.86,12.17 9.05,12.04C9.25,11.91 9.58,11.7 10.13,11.36C12.25,10 10.47,13.14 9.56,18.43C9.2,21.05 11.56,19.7 12.17,19.3C12.77,18.91 14.38,17.8 14.54,17.69C14.76,17.54 14.6,17.42 14.43,17.17C14.31,17 14.19,17.12 14.19,17.12C13.54,17.55 12.35,18.45 12.19,17.88C12,17.31 13.22,13.4 13.89,10.71C14,10.07 14.3,8.67 13.14,8.77Z"
                        break;
                    default:
                        return this.d
                        break;
                }
            }
        }
    }
</script>

<style lang="less">
    @import "../style/variables.less";

    .icon {
        width: 24px;
        height: 24px;
        display: block;
    }

    .icon-black {
        fill: @greyMain;
        flex-shrink: 0;
    }

    .icon-white {
        fill: @greyLine;
        flex-shrink: 0;
    }
</style>