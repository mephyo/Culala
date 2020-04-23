<template>
    <div class="culala">
        <switcher v-model="activeTab"></switcher>
        <div class="table-wrapper">
            <visitors v-if="activeTab === 'visitors'" />
            <locations v-if="activeTab === 'locations'" />
            <appliers v-if="activeTab === 'appliers'" />
            <contracts v-if="activeTab === 'contracts'" />
            <keeper v-if="activeTab === 'keeper'" />
        </div>
    </div>
</template>

<script>
    import Switcher from "@/components/Switcher";
    import Visitors from "@/components/Visitors";
    import Locations from "@/components/Locations";
    import Appliers from "@/components/Appliers";
    import Contracts from "@/components/Contracts";
    import Keeper from "@/components/Keeper";

    export default {
        name: 'Culala',
        components: {
            Switcher,
            Visitors,
            Locations,
            Appliers,
            Contracts,
            Keeper
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

        table {
            width: 100%;
            border-collapse: collapse;

            tbody tr {
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