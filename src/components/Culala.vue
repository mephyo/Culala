<template>
    <div class="culala">
        <switcher v-model="activeTab"></switcher>
        <div class="table-wrapper">
            <visitors v-if="activeTab === 'visitors'"></visitors>
            <locations v-if="activeTab === 'locations'"></locations>
            <appliers v-if="activeTab === 'appliers'"></appliers>
            <contracts v-if="activeTab === 'contracts'"></contracts>
        </div>
    </div>
</template>

<script>
    import Switcher from "@/components/Switcher";
    import Visitors from "@/components/Visitors";
    import Locations from "@/components/Locations";
    import Appliers from "@/components/Appliers";
    import Contracts from "@/components/Contracts";

    export default {
        name: 'Culala',
        components: {
            Switcher,
            Visitors,
            Locations,
            Appliers,
            Contracts
        },
        data() {
            return {
                activeTab: "visitors"
            }
        }
    }
</script>

<style lang="less">
    @import "../style/variables.less";
    .table-wrapper {
        margin: 8px 8px 8px 46px;
        table {
            width: 100%;
            border-collapse: collapse;
            border: 1px solid @white3;
            color: @black1;
            tbody tr {
                &:nth-child(odd) {
                    background-color: @white1;
                }

                &:nth-child(even) {
                    background-color: @white2;
                }
                &:hover {
                    background-color: @white3;
                }
            }
            th,
            td {
                border: 1px solid @white3;
                min-width: 24px;
                .cell-inline {
                    display: flex;
                    align-items: center;
                    .naked-icon-black {
                        fill: @black3;
                        flex-shrink: 0;
                    }
                    .naked-icon-white {
                        fill: @white3;
                        flex-shrink: 0;
                    }
                    .span-fixed {
                        min-width: 40px;
                    }
                }
            }
        }
    }
</style>