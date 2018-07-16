<template>
    <div>
        <table>
            <thead>
                <tr>
                    <th v-for="(h, index) in heads" :key="index">
                        <div class="cell-inline">
                            <drawer c="w" :d="h" />
                        </div>
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="v in contracts" :key="v._id">
                    <td>{{v.passcode}}</td>
                    <td>
                        <img :src="v.sign" alt="sign" style="height: 60px;">
                    </td>
                    <td>{{v.idNum}}</td>
                    <td>
                        <div class="cell-inline">
                            <div class="icon-button-black" @click="deleteMe(v._id)" title="Delete This Record">
                                <drawer d="clear" />
                            </div>
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    import Drawer from "@/components/Drawer";
    export default {
        name: 'Contracts',
        components: {
            Drawer
        },
        data() {
            return {
                contracts: [],
                heads: [
                    "M14,12A2,2 0 0,1 16,10A2,2 0 0,1 18,12A2,2 0 0,1 16,14A2,2 0 0,1 14,12M8,12A2,2 0 0,1 10,10A2,2 0 0,1 12,12A2,2 0 0,1 10,14A2,2 0 0,1 8,12M2,12A2,2 0 0,1 4,10A2,2 0 0,1 6,12A2,2 0 0,1 4,14A2,2 0 0,1 2,12M22,5H20V19H22V5Z",
                    "M18.62,1.5C18.11,1.5 17.6,1.69 17.21,2.09L10.75,8.55L14.95,12.74L21.41,6.29C22.2,5.5 22.2,4.24 21.41,3.46L20.04,2.09C19.65,1.69 19.14,1.5 18.62,1.5M9.8,9.5L3.23,16.07L3.93,16.77C3.4,17.24 2.89,17.78 2.38,18.29C1.6,19.08 1.6,20.34 2.38,21.12C3.16,21.9 4.42,21.9 5.21,21.12C5.72,20.63 6.25,20.08 6.73,19.58L7.43,20.27L14,13.7",
                    "M2,3H22C23.05,3 24,3.95 24,5V19C24,20.05 23.05,21 22,21H2C0.95,21 0,20.05 0,19V5C0,3.95 0.95,3 2,3M14,6V7H22V6H14M14,8V9H21.5L22,9V8H14M14,10V11H21V10H14M8,13.91C6,13.91 2,15 2,17V18H14V17C14,15 10,13.91 8,13.91M8,6A3,3 0 0,0 5,9A3,3 0 0,0 8,12A3,3 0 0,0 11,9A3,3 0 0,0 8,6Z",
                    "M13,14H11V10H13M13,18H11V16H13M1,21H23L12,2L1,21Z"
                ]
            }
        },
        methods: {
            getContracts() {
                this.$http.get("listContract").then(response => {
                    let data = response.body
                    this.contracts = data
                })
            },
            deleteMe(id) {
                this.$http.post("delContract", {
                    id: id
                }).then(response => {
                    this.getContracts()
                }, response => {
                    alert('FATAL ERROR')
                });

            }
        },
        mounted() {
            this.getContracts()
        }
    }
</script>