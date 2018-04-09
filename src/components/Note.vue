<template>
    <div class="note-wrapper">
        <div class="note-main">
            <textarea rows="3" v-model="note" @change="input"></textarea>
            <div class="button-group-h">
                <div class="note-button icon-button-black" title="Confirm" @click="updateMe">
                    <svg style="width:24px;height:24px" viewBox="0 0 24 24">
                        <path d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z" />
                    </svg>
                </div>
                <div class="note-button icon-button-white" title="Cancel" @click="killMe">
                    <svg style="width:24px;height:24px" viewBox="0 0 24 24">
                        <path d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z" />
                    </svg>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Note',
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

<style lang="less">
    @import "../style/variables.less";
    .note-wrapper {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: rgba(0, 0, 0, 0.25);
        .note-main {
            .small-shadow;
            background-color: @white1;
            border-radius: 4px;
            box-sizing: border-box;
            overflow: hidden;
            textarea {
                resize: none;
                display: block;
                width: 480px;
                border: none;
                outline: none;
                background-color: @black2;
                color: @white2;
            }
            .button-group-h {
                display: flex;
                .note-button {
                    margin: 8px;
                }
            }
        }
    }
</style>