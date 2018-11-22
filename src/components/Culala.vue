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
        margin: 46px 0 0 0;

        table {
            width: 100%;
            border-collapse: collapse;
            border: 1px solid @greyLine;

            tbody tr {
                &:nth-child(odd) {
                    background-color: @greyLine;
                }

                &:nth-child(even) {
                    background-color: @greyFont;
                }

                &:hover {
                    background-color: #455A64;
                }

                &.dead {
                    opacity: 0;
                }
            }

            th,
            td {
                min-width: 24px;

                .cell-inline {
                    display: flex;
                    align-items: center;

                    .span-fixed {
                        min-width: 40px;
                    }
                }

                .cell-fix {
                    max-width: 160px;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                }
            }
        }
    }
</style>