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
                <tr v-for="(v, index) in visitors" :key="v._id" :class="{'dead': v.dead}">
                    <td>
                        <div class="cell-inline">
                            <span>{{v.viewTimes}}</span>
                            <drawer v-if="v.viewTimes==='1'" c="b" d="M23,12L20.56,9.22L20.9,5.54L17.29,4.72L15.4,1.54L12,3L8.6,1.54L6.71,4.72L3.1,5.53L3.44,9.21L1,12L3.44,14.78L3.1,18.47L6.71,19.29L8.6,22.47L12,21L15.4,22.46L17.29,19.28L20.9,18.46L20.56,14.78L23,12M13,17H11V15H13V17M13,13H11V7H13V13Z" />
                        </div>
                    </td>
                    <td>{{v.time}}</td>
                    <td>
                        <div class="cell-inline">
                            <drawer v-if="v.lastLocation==='Not Applied.'" c="b" d="M16.37,16.1L11.75,11.47L11.64,11.36L3.27,3L2,4.27L5.18,7.45C5.06,7.95 5,8.46 5,9C5,14.25 12,22 12,22C12,22 13.67,20.15 15.37,17.65L18.73,21L20,19.72M12,6.5A2.5,2.5 0 0,1 14.5,9C14.5,9.73 14.17,10.39 13.67,10.85L17.3,14.5C18.28,12.62 19,10.68 19,9A7,7 0 0,0 12,2C10,2 8.24,2.82 6.96,4.14L10.15,7.33C10.61,6.82 11.26,6.5 12,6.5Z" />
                            <div class="icon-button-white" v-else @click="openMap(v.lastLocation)" title="Open Map">
                                <drawer d="M12,11.5A2.5,2.5 0 0,1 9.5,9A2.5,2.5 0 0,1 12,6.5A2.5,2.5 0 0,1 14.5,9A2.5,2.5 0 0,1 12,11.5M12,2A7,7 0 0,0 5,9C5,14.25 12,22 12,22C12,22 19,14.25 19,9A7,7 0 0,0 12,2Z" />
                            </div>
                            <span>
                                <a target="_blank" :href="'http://www.ip138.com/ips138.asp?ip=' + v.ip + '&action=2'">{{v.ip}}</a>
                            </span>
                        </div>
                    </td>
                    <td :title="v.model.ua">
                        <div class="cell-inline">
                            <template>
                                <drawer v-if="v.model.os.name==='iOS'" c="b" d="M20,9V7H16A2,2 0 0,0 14,9V11A2,2 0 0,0 16,13H18V15H14V17H18A2,2 0 0,0 20,15V13A2,2 0 0,0 18,11H16V9M11,15H9V9H11M11,7H9A2,2 0 0,0 7,9V15A2,2 0 0,0 9,17H11A2,2 0 0,0 13,15V9A2,2 0 0,0 11,7M4,17H6V11H4M4,9H6V7H4V9Z" />
                                <drawer v-else-if="v.model.os.name==='Android'" c="b" d="M15,5H14V4H15M10,5H9V4H10M15.53,2.16L16.84,0.85C17.03,0.66 17.03,0.34 16.84,0.14C16.64,-0.05 16.32,-0.05 16.13,0.14L14.65,1.62C13.85,1.23 12.95,1 12,1C11.04,1 10.14,1.23 9.34,1.63L7.85,0.14C7.66,-0.05 7.34,-0.05 7.15,0.14C6.95,0.34 6.95,0.66 7.15,0.85L8.46,2.16C6.97,3.26 6,5 6,7H18C18,5 17,3.25 15.53,2.16M20.5,8A1.5,1.5 0 0,0 19,9.5V16.5A1.5,1.5 0 0,0 20.5,18A1.5,1.5 0 0,0 22,16.5V9.5A1.5,1.5 0 0,0 20.5,8M3.5,8A1.5,1.5 0 0,0 2,9.5V16.5A1.5,1.5 0 0,0 3.5,18A1.5,1.5 0 0,0 5,16.5V9.5A1.5,1.5 0 0,0 3.5,8M6,18A1,1 0 0,0 7,19H8V22.5A1.5,1.5 0 0,0 9.5,24A1.5,1.5 0 0,0 11,22.5V19H13V22.5A1.5,1.5 0 0,0 14.5,24A1.5,1.5 0 0,0 16,22.5V19H17A1,1 0 0,0 18,18V8H6V18Z" />
                                <drawer v-else-if="v.model.os.name==='Mac OS'" c="b" d="M4,4H11.89C12.46,2.91 13.13,1.88 13.93,1L15.04,2.11C14.61,2.7 14.23,3.34 13.89,4H20A2,2 0 0,1 22,6V19A2,2 0 0,1 20,21H14.93L15.26,22.23L13.43,22.95L12.93,21H4A2,2 0 0,1 2,19V6A2,2 0 0,1 4,4M4,6V19H12.54C12.5,18.67 12.44,18.34 12.4,18C12.27,18 12.13,18 12,18C9.25,18 6.78,17.5 5.13,16.76L6.04,15.12C7,15.64 9.17,16 12,16C12.08,16 12.16,16 12.24,16C12.21,15.33 12.22,14.66 12.27,14H9C9,14 9.4,9.97 11,6H4M20,19V6H13C12.1,8.22 11.58,10.46 11.3,12H14.17C14,13.28 13.97,14.62 14.06,15.93C15.87,15.8 17.25,15.5 17.96,15.12L18.87,16.76C17.69,17.3 16.1,17.7 14.29,17.89C14.35,18.27 14.41,18.64 14.5,19H20M6,8H8V11H6V8M16,8H18V11H16V8Z" />
                                <drawer v-else-if="v.model.os.name==='Windows'" c="b" d="M3,12V6.75L9,5.43V11.91L3,12M20,3V11.75L10,11.9V5.21L20,3M3,13L9,13.09V19.9L3,18.75V13M20,13.25V22L10,20.09V13.1L20,13.25Z" />
                                <drawer v-else-if="v.model.ua.includes('Googlebot')" c="b" d="M21.35,11.1H12.18V13.83H18.69C18.36,17.64 15.19,19.27 12.19,19.27C8.36,19.27 5,16.25 5,12C5,7.9 8.2,4.73 12.2,4.73C15.29,4.73 17.1,6.7 17.1,6.7L19,4.72C19,4.72 16.56,2 12.1,2C6.42,2 2.03,6.8 2.03,12C2.03,17.05 6.16,22 12.25,22C17.6,22 21.5,18.33 21.5,12.91C21.5,11.76 21.35,11.1 21.35,11.1V11.1Z" />
                                <div v-else>
                                    <span v-if="v.model.os.name!=='undefined'">
                                        {{v.model.os.name}}
                                    </span>
                                </div>
                            </template>
                            <template>
                                <drawer v-if="v.model.browser.name==='Chrome'" c="b" d="M12,20L15.46,14H15.45C15.79,13.4 16,12.73 16,12C16,10.8 15.46,9.73 14.62,9H19.41C19.79,9.93 20,10.94 20,12A8,8 0 0,1 12,20M4,12C4,10.54 4.39,9.18 5.07,8L8.54,14H8.55C9.24,15.19 10.5,16 12,16C12.45,16 12.88,15.91 13.29,15.77L10.89,19.91C7,19.37 4,16.04 4,12M15,12A3,3 0 0,1 12,15A3,3 0 0,1 9,12A3,3 0 0,1 12,9A3,3 0 0,1 15,12M12,4C14.96,4 17.54,5.61 18.92,8H12C10.06,8 8.45,9.38 8.08,11.21L5.7,7.08C7.16,5.21 9.44,4 12,4M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z" />
                                <drawer v-else-if="v.model.browser.name==='Safari' || v.model.browser.name==='Mobile Safari'" c="b" d="M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12C4,14.09 4.8,16 6.11,17.41L9.88,9.88L17.41,6.11C16,4.8 14.09,4 12,4M12,20A8,8 0 0,0 20,12C20,9.91 19.2,8 17.89,6.59L14.12,14.12L6.59,17.89C8,19.2 9.91,20 12,20M12,12L11.23,11.23L9.7,14.3L12.77,12.77L12,12M12,17.5H13V19H12V17.5M15.88,15.89L16.59,15.18L17.65,16.24L16.94,16.95L15.88,15.89M17.5,12V11H19V12H17.5M12,6.5H11V5H12V6.5M8.12,8.11L7.41,8.82L6.35,7.76L7.06,7.05L8.12,8.11M6.5,12V13H5V12H6.5Z" />
                                <drawer v-else-if="v.model.browser.name==='WeChat'" c="b" d="M9.5,4C5.36,4 2,6.69 2,10C2,11.89 3.08,13.56 4.78,14.66L4,17L6.5,15.5C7.39,15.81 8.37,16 9.41,16C9.15,15.37 9,14.7 9,14C9,10.69 12.13,8 16,8C16.19,8 16.38,8 16.56,8.03C15.54,5.69 12.78,4 9.5,4M6.5,6.5A1,1 0 0,1 7.5,7.5A1,1 0 0,1 6.5,8.5A1,1 0 0,1 5.5,7.5A1,1 0 0,1 6.5,6.5M11.5,6.5A1,1 0 0,1 12.5,7.5A1,1 0 0,1 11.5,8.5A1,1 0 0,1 10.5,7.5A1,1 0 0,1 11.5,6.5M16,9C12.69,9 10,11.24 10,14C10,16.76 12.69,19 16,19C16.67,19 17.31,18.92 17.91,18.75L20,20L19.38,18.13C20.95,17.22 22,15.71 22,14C22,11.24 19.31,9 16,9M14,11.5A1,1 0 0,1 15,12.5A1,1 0 0,1 14,13.5A1,1 0 0,1 13,12.5A1,1 0 0,1 14,11.5M18,11.5A1,1 0 0,1 19,12.5A1,1 0 0,1 18,13.5A1,1 0 0,1 17,12.5A1,1 0 0,1 18,11.5Z" />
                                <template v-else>
                                    <drawer v-if="v.model.ua.includes('douban')" c="b" d="M20,6H4V4H20V6M20,18V20H4V18H7.33L6.26,14H5V8H19V14H17.74L16.67,18H20M7,12H17V10H7V12M9.4,18H14.6L15.67,14H8.33L9.4,18Z" />
                                    <drawer v-else-if="v.model.ua.includes('BingPreview')" c="b" d="M5,3V19L8.72,21L18,15.82V11.73H18L9.77,8.95L11.38,12.84L13.94,14L8.7,16.92V4.27L5,3" />
                                    <div v-else>
                                        <span v-if="v.model.browser.name!=='undefined'">
                                            {{v.model.browser.name}}
                                        </span>
                                    </div>
                                </template>
                            </template>
                            <span v-if="v.model.device.vendor!=='Apple'&&v.model.device.vendor!=='undefined'">{{v.model.device.vendor}}</span>
                            <span v-if="v.model.device.model!=='iPhone'&&v.model.device.model!=='undefined'">{{v.model.device.model}}</span>
                            <span v-if="v.model.os.version!=='undefined'">{{v.model.os.version}}</span>
                        </div>
                    </td>
                    <td>
                        <div class="cell-inline" v-if="v.navigator">
                            <drawer c="b" d="M19,17H5V7H19M19,5H5A2,2 0 0,0 3,7V17A2,2 0 0,0 5,19H19A2,2 0 0,0 21,17V7C21,5.89 20.1,5 19,5Z" />
                            <span class="span-fixed">{{v.navigator.width}}</span>
                            <drawer c="b" d="M17,19H7V5H17M17,3H7A2,2 0 0,0 5,5V19A2,2 0 0,0 7,21H17A2,2 0 0,0 19,19V5C19,3.89 18.1,3 17,3Z" />
                            <span class="span-fixed">{{v.navigator.height}}</span>
                            <drawer c="b" d="M12.87,15.07L10.33,12.56L10.36,12.53C12.1,10.59 13.34,8.36 14.07,6H17V4H10V2H8V4H1V6H12.17C11.5,7.92 10.44,9.75 9,11.35C8.07,10.32 7.3,9.19 6.69,8H4.69C5.42,9.63 6.42,11.17 7.67,12.56L2.58,17.58L4,19L9,14L12.11,17.11L12.87,15.07M18.5,10H16.5L12,22H14L15.12,19H19.87L21,22H23L18.5,10M15.88,17L17.5,12.67L19.12,17H15.88Z" />
                            <span class="span-fixed">{{v.navigator.language}}</span>
                        </div>
                    </td>
                    <td>
                        <div class="cell-inline cell-fix" v-if="v.navigator && v.navigator.url" :title="v.navigator.url">{{v.navigator.url}}</div>
                    </td>
                    <td>
                        <div class="cell-inline">
                            <div class="icon-button-black" title="Add Note" @click="addNote(v)">
                                <drawer d="M20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18,2.9 17.35,2.9 16.96,3.29L15.12,5.12L18.87,8.87M3,17.25V21H6.75L17.81,9.93L14.06,6.18L3,17.25Z" />
                            </div>
                            <span>&nbsp;{{v.note}}</span>
                        </div>
                    </td>
                    <td>
                        <div class="cell-inline">
                            <div class="icon-button-black" @click="deleteMe(v._id, index)" title="Delete This Record">
                                <drawer d="clear" />
                            </div>
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>
        <b-map :cord="cord" @closeMe="showMap=false" v-if="showMap" />
        <note v-if="editing" v-model="nowEditingRecord.note" @update="updateNote" @kill="editing=false"></note>
    </div>
</template>

<script>
    import UAParser from "ua-parser-js";
    import Time from "@/mixins/Time";
    import BMap from "@/components/BMap";
    import Note from "@/components/Note";
    import Drawer from "@/components/Drawer";

    export default {
        name: 'Visitors',
        mixins: [Time],
        components: {
            BMap,
            Note,
            Drawer
        },
        data() {
            return {
                visitors: [],
                heads: [
                    "M4,4H20A2,2 0 0,1 22,6V18A2,2 0 0,1 20,20H4A2,2 0 0,1 2,18V6A2,2 0 0,1 4,4M4,6V18H11V6H4M20,18V6H18.76C19,6.54 18.95,7.07 18.95,7.13C18.88,7.8 18.41,8.5 18.24,8.75L15.91,11.3L19.23,11.28L19.24,12.5L14.04,12.47L14,11.47C14,11.47 17.05,8.24 17.2,7.95C17.34,7.67 17.91,6 16.5,6C15.27,6.05 15.41,7.3 15.41,7.3L13.87,7.31C13.87,7.31 13.88,6.65 14.25,6H13V18H15.58L15.57,17.14L16.54,17.13C16.54,17.13 17.45,16.97 17.46,16.08C17.5,15.08 16.65,15.08 16.5,15.08C16.37,15.08 15.43,15.13 15.43,15.95H13.91C13.91,15.95 13.95,13.89 16.5,13.89C19.1,13.89 18.96,15.91 18.96,15.91C18.96,15.91 19,17.16 17.85,17.63L18.37,18H20M8.92,16H7.42V10.2L5.62,10.76V9.53L8.76,8.41H8.92V16Z",
                    "M15,13H16.5V15.82L18.94,17.23L18.19,18.53L15,16.69V13M19,8H5V19H9.67C9.24,18.09 9,17.07 9,16A7,7 0 0,1 16,9C17.07,9 18.09,9.24 19,9.67V8M5,21C3.89,21 3,20.1 3,19V5C3,3.89 3.89,3 5,3H6V1H8V3H16V1H18V3H19A2,2 0 0,1 21,5V11.1C22.24,12.36 23,14.09 23,16A7,7 0 0,1 16,23C14.09,23 12.36,22.24 11.1,21H5M16,11.15A4.85,4.85 0 0,0 11.15,16C11.15,18.68 13.32,20.85 16,20.85A4.85,4.85 0 0,0 20.85,16C20.85,13.32 18.68,11.15 16,11.15Z",
                    "M15,19L9,16.89V5L15,7.11M20.5,3C20.44,3 20.39,3 20.34,3L15,5.1L9,3L3.36,4.9C3.15,4.97 3,5.15 3,5.38V20.5A0.5,0.5 0 0,0 3.5,21C3.55,21 3.61,21 3.66,20.97L9,18.9L15,21L20.64,19.1C20.85,19 21,18.85 21,18.62V3.5A0.5,0.5 0 0,0 20.5,3Z",
                    "M22,17H18V10H22M23,8H17A1,1 0 0,0 16,9V19A1,1 0 0,0 17,20H23A1,1 0 0,0 24,19V9A1,1 0 0,0 23,8M4,6H22V4H4A2,2 0 0,0 2,6V17H0V20H14V17H4V6Z",
                    "M13,4.2V3C13,2.4 12.6,2 12,2V4.2C9.8,4.6 9,5.7 9,7C9,7.8 9.3,8.5 9.8,9L4,19.9V22L6.2,20L11.6,10C11.7,10 11.9,10 12,10C13.7,10 15,8.7 15,7C15,5.7 14.2,4.6 13,4.2M12.9,7.5C12.7,7.8 12.4,8 12,8C11.4,8 11,7.6 11,7C11,6.8 11.1,6.7 11.1,6.5C11.3,6.2 11.6,6 12,6C12.6,6 13,6.4 13,7C13,7.2 12.9,7.3 12.9,7.5M20,19.9V22H20L17.8,20L13.4,11.8C14.1,11.6 14.7,11.3 15.2,10.9L20,19.9Z",
                    'M16,6H13V7.9H16C18.26,7.9 20.1,9.73 20.1,12A4.1,4.1 0 0,1 16,16.1H13V18H16A6,6 0 0,0 22,12C22,8.68 19.31,6 16,6M3.9,12C3.9,9.73 5.74,7.9 8,7.9H11V6H8A6,6 0 0,0 2,12A6,6 0 0,0 8,18H11V16.1H8C5.74,16.1 3.9,14.26 3.9,12M8,13H16V11H8V13Z',
                    "M14,10H19.5L14,4.5V10M5,3H15L21,9V19A2,2 0 0,1 19,21H5C3.89,21 3,20.1 3,19V5C3,3.89 3.89,3 5,3M5,12V14H19V12H5M5,16V18H14V16H5Z",
                    "M13,14H11V10H13M13,18H11V16H13M1,21H23L12,2L1,21Z"
                ],
                nowEditingRecord: {},
                editing: false
            }
        },
        methods: {
            getViewers() {
                this.$http.get("listViewer").then(response => {
                    let data = response.body
                    data.forEach(item => {
                        if (typeof item.model === "string") {
                            item.model = UAParser(item.model)
                        }
                        if (item.lastLocation !== "Not Applied." && typeof item.lastLocation !== "object") {
                            item.lastLocation = JSON.parse(item.lastLocation)
                        }
                        if (!item.order) {
                            item.order = Date.parse(item.time)
                        }
                        if (item.time.length > 20) {
                            item.time = this.formatTime(item.order)
                        }
                    });
                    data.sort(function (a, b) {
                        return (b.order - a.order)
                    });
                    this.visitors = data
                })
            },
            deleteMe(id, index) {
                this.$http.post("delViewer", {
                    id: id
                }).then(response => {
                    let zombie = this.visitors[index]
                    zombie.dead = true
                    this.$set(this.visitors, index, zombie)
                }, response => {
                    alert('FATAL ERROR')
                });
            },
            addNote(record) {
                this.nowEditingRecord = record
                this.editing = true
            },
            updateNote() {
                this.$http.post("editViewer", this.nowEditingRecord).then(response => {
                    this.editing = false
                    this.getViewers()
                }, response => {
                    alert('FATAL ERROR')
                });
            }
        },
        mounted() {
            this.getViewers()
        }
    }
</script>