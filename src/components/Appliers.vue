<template>
    <div lang="zh-cn">

        <ul class="applier-list">
            <li v-for="a in appliers" :key="a._id">
                <dl v-for="(value, name) in a" :key="name">
                    <dt>{{name}}</dt>
                    <dd>{{value}}</dd>
                </dl>
                <button @click="deleteMe(a._id)">DEL IT</button>
            </li>
        </ul>
    </div>
</template>

<script>
    import Drawer from "@/components/Drawer";
    export default {
        name: 'Appliers',
        components: {
            Drawer
        },
        data() {
            return {
                appliers: []
            }
        },
        methods: {
            getAppliers() {
                this.$http.get("listApplier").then(response => {
                    let data = response.body
                    this.appliers = data.reverse()
                })
            },
            deleteMe(id) {
                this.$http.post("delApplier", {
                    id: id
                }).then(response => {
                    this.getAppliers()
                }, response => {
                    alert('FATAL ERROR')
                });

            }
        },
        mounted() {
            this.getAppliers()
        }
    }
</script>