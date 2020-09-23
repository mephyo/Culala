<template>
    <div class="note-wrapper">
        <div class="note-main">
            <textarea rows="3" v-model="note" @change="input"></textarea>
            <div class="button-group-h">
                <div class="note-button icon-button-black" title="Confirm" @click="updateMe">
                    <drawer d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z" />
                </div>
                <div class="note-button icon-button-white" title="Cancel" @click="killMe">
                    <drawer d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Drawer from "@/components/Drawer";
    export default {
        name: 'Note',
        components: {
            Drawer
        },
        props: {
            value: String
        },
        data() {
            return {
                note: this.value
            }
        },
        methods: {
            input() {
                this.$emit("input", this.note)
            },
            updateMe() {
                this.$emit("update")
            },
            killMe() {
                this.$emit("kill")
            }
        }
    }
</script>