<template>
    <div>
        <textarea class="keeper-area" rows=7 v-model="originalProject"></textarea>
        <textarea class="keeper-area" rows=7 v-model="formattedProject"></textarea>
        <button @click="formatter">Convert</button>
    </div>
</template>

<script>
    export default {
        name: 'Keeper',
        data() {
            return {
                originalProject: '{"name": "Judy","date": "2018 9 28","codeName": "Judy-2018-9-28","coverIds": [5, 10, 19, 22],"photoIds": 25}',
                formattedProject: ""
            }
        },
        methods: {
            formatter() {
                let g = JSON.parse(this.originalProject)
                const prefix = 'https://res.cloudinary.com/mephyo/image/upload/'
                g.cover = []
                g.photos = []
                for (let photoIndex = 1; photoIndex <= g.photoIds; photoIndex++) {
                    const photo = {
                        src: {
                            jpg: prefix + g.codeName + "-" + photoIndex + ".jpg",
                            thumb: prefix + 'c_limit,h_400,q_90:420,w_400/' + g.codeName + "-" + photoIndex + ".jpg"
                        },
                        codeName: g.codeName + "-" + photoIndex
                    }
                    g.photos.push(photo)
                }
                for (let coverIndex = 0; coverIndex < g.coverIds.length; coverIndex++) {
                    const coverId = g.coverIds[coverIndex];
                    g.cover.push(g.photos[coverId - 1])
                }

                this.formattedProject = JSON.stringify(g)
            }
        }
    }
</script>

<style lang="less">
    @import "../style/variables.less";

    .keeper-area {
        display: block;
        width: 400px;
        background-color: @greyMain;
        resize: none;
        outline: 0;
        border: 1px solid @greyLine;
        margin: 8px;
    }
</style>