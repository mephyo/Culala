<template>
    <div class="switcher-wrapper">
        <ul class="switcher-group">
            <li v-for="b in btns" :key="b.name" class="switcher" :title="b.name.charAt(0).toUpperCase() + b.name.slice(1)" :class="{'active': value === b.name}" @click="switchTo(b.name)">
                <drawer :d="b.icon" />
            </li>
        </ul>
    </div>
</template>

<script>
    import Drawer from "@/components/Drawer";
    export default {
        name: 'Switcher',
        components: {
            Drawer
        },
        props: {
            value: String
        },
        data() {
            return {
                btns: [{
                        name: "visitors",
                        icon: "M19,10C19,11.38 16.88,12.5 15.5,12.5C14.12,12.5 12.75,11.38 12.75,10H11.25C11.25,11.38 9.88,12.5 8.5,12.5C7.12,12.5 5,11.38 5,10H4.25C4.09,10.64 4,11.31 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12C20,11.31 19.91,10.64 19.75,10H19M12,4C9.04,4 6.45,5.61 5.07,8H18.93C17.55,5.61 14.96,4 12,4M22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2A10,10 0 0,1 22,12M12,17.23C10.25,17.23 8.71,16.5 7.81,15.42L9.23,14C9.68,14.72 10.75,15.23 12,15.23C13.25,15.23 14.32,14.72 14.77,14L16.19,15.42C15.29,16.5 13.75,17.23 12,17.23Z"
                    },
                    {
                        name: "appliers",
                        icon: "M4,4H7L9,2H15L17,4H20A2,2 0 0,1 22,6V18A2,2 0 0,1 20,20H4A2,2 0 0,1 2,18V6A2,2 0 0,1 4,4M12,7A5,5 0 0,0 7,12A5,5 0 0,0 12,17A5,5 0 0,0 17,12A5,5 0 0,0 12,7M12,9A3,3 0 0,1 15,12A3,3 0 0,1 12,15A3,3 0 0,1 9,12A3,3 0 0,1 12,9Z"
                    }
                ]
            }
        },
        methods: {
            switchTo(value) {
                this.$emit("input", value)
            }
        }
    }
</script>