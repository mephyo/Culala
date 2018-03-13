<template>
    <div>
        <table>
            <thead>
                <tr>
                    <th>
                        <div class="cell-inline">
                            <svg class="naked-icon-white" style="width:24px;height:24px" viewBox="0 0 24 24">
                                <path d="M15,13H16.5V15.82L18.94,17.23L18.19,18.53L15,16.69V13M19,8H5V19H9.67C9.24,18.09 9,17.07 9,16A7,7 0 0,1 16,9C17.07,9 18.09,9.24 19,9.67V8M5,21C3.89,21 3,20.1 3,19V5C3,3.89 3.89,3 5,3H6V1H8V3H16V1H18V3H19A2,2 0 0,1 21,5V11.1C22.24,12.36 23,14.09 23,16A7,7 0 0,1 16,23C14.09,23 12.36,22.24 11.1,21H5M16,11.15A4.85,4.85 0 0,0 11.15,16C11.15,18.68 13.32,20.85 16,20.85A4.85,4.85 0 0,0 20.85,16C20.85,13.32 18.68,11.15 16,11.15Z" />
                            </svg>
                        </div>
                    </th>
                    <th>
                        <div class="cell-inline">
                            <svg class="naked-icon-white" style="width:24px;height:24px" viewBox="0 0 24 24">
                                <path d="M15,19L9,16.89V5L15,7.11M20.5,3C20.44,3 20.39,3 20.34,3L15,5.1L9,3L3.36,4.9C3.15,4.97 3,5.15 3,5.38V20.5A0.5,0.5 0 0,0 3.5,21C3.55,21 3.61,21 3.66,20.97L9,18.9L15,21L20.64,19.1C20.85,19 21,18.85 21,18.62V3.5A0.5,0.5 0 0,0 20.5,3Z" />
                            </svg>
                        </div>
                    </th>
                    <th>
                        <div class="cell-inline">
                            <svg class="naked-icon-white" style="width:24px;height:24px" viewBox="0 0 24 24">
                                <path d="M13,14H11V10H13M13,18H11V16H13M1,21H23L12,2L1,21Z" />
                            </svg>
                        </div>
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="v in locations" :key="v._id">
                    <td>{{v.time}}</td>
                    <td>
                        <div class="cell-inline">
                            <div class="icon-button-white" @click="openMap(v.position)" title="Open Map">
                                <svg style="width:24px;height:24px" viewBox="0 0 24 24">
                                    <path d="M12,11.5A2.5,2.5 0 0,1 9.5,9A2.5,2.5 0 0,1 12,6.5A2.5,2.5 0 0,1 14.5,9A2.5,2.5 0 0,1 12,11.5M12,2A7,7 0 0,0 5,9C5,14.25 12,22 12,22C12,22 19,14.25 19,9A7,7 0 0,0 12,2Z" />
                                </svg>
                            </div>
                        </div>
                    </td>
                    <td>
                        <div class="cell-inline">
                            <div class="icon-button-black" @click="deleteMe(v._id)" title="Delete This Record">
                                <svg style="width:24px;height:24px" viewBox="0 0 24 24">
                                    <path d="M19.36,2.72L20.78,4.14L15.06,9.85C16.13,11.39 16.28,13.24 15.38,14.44L9.06,8.12C10.26,7.22 12.11,7.37 13.65,8.44L19.36,2.72M5.93,17.57C3.92,15.56 2.69,13.16 2.35,10.92L7.23,8.83L14.67,16.27L12.58,21.15C10.34,20.81 7.94,19.58 5.93,17.57Z" />
                                </svg>
                            </div>
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>
        <b-map :cord="cord" @closeMe="showMap=false" v-if="showMap" />
    </div>
</template>

<script>
    import Time from "@/mixins/Time";
    import BMap from "@/components/BMap";

    export default {
        name: 'Locations',
        mixins: [Time],
        components: {
            BMap
        },
        data() {
            return {
                locations: [],
            }
        },
        methods: {
            getLocations() {
                this.$http.get("listLocation").then(response => {
                    let data = response.body
                    data.forEach(item => {
                        item.position = JSON.parse(item.position)
                        item.order = Date.parse(item.time)
                        item.time = this.formatTime(item.order)
                    });
                    data.sort(function (a, b) {
                        return (b.order - a.order)
                    });
                    this.locations = data
                })
            },
            deleteMe(id) {
                this.$http.post("delLocation", {
                    id: id
                }).then(response => {
                    this.getLocations()
                }, response => {
                    alert('FATAL ERROR')
                });

            }
        },
        mounted() {
            this.getLocations()
        }
    }
</script>