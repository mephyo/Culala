<template>
    <div class="culala">
        <switcher v-model="activeTab"></switcher>
        <div class="table-wrapper">
            <visitors v-if="activeTab === 'visitors'" />
            <appliers v-if="activeTab === 'appliers'" />
        </div>
    </div>
</template>

<script>
    import Switcher from "@/components/Switcher";
    import Visitors from "@/components/Visitors";
    import Appliers from "@/components/Appliers";

    export default {
        name: 'Culala',
        components: {
            Switcher,
            Visitors,
            Appliers
        },
        data() {
            return {
                activeTab: "visitors"
            }
        }
    }
</script>