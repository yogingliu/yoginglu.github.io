<template>
    <div>
        <div :class="{'d-flex': true, 'my-4': true, 'flex-row-reverse': placeType === PLACE_TYPE_RIGHT}">
            <div class="horizontal-vertical-center-flex">
                <!-- dialog and text -->
                <div class="horizontal-vertical-center-flex flex-column">
                    <div>
                        <component :is="photoComponent" class="dialog-photo" />
                    </div>
                    <div class="mt-2 photo-text">
                        {{photoText}}
                    </div>
                </div>
            </div>
            <div class="d-flex flex-column dialog-content-block-section">
                    <template v-for="(dialogText, dialogIndex) in dialogTexts">
                        <div
                            :key="`dialog-text-${dialogBlockIndex}-${dialogIndex}`"
                            class="dialog-content-block my-2 text-left"
                        >
                            <span>{{dialogText}}</span>
                        </div>
                    </template>
                
            </div>
        </div>
    </div>
</template>
<script>
const PHOTO_TYPE_WOMAN_FACE_RIGHT = 'WOMAN_FACE_RIGHT'
const PHOTO_TYPE_MAN_FACE_LEFT = 'MAN_FACE_LEFT'

const PLACE_TYPE_LEFT = 'LEFT'
const PLACE_TYPE_RIGHT = 'RIGHT'

const photoTypeToComponentUrlConfig = {
    [PHOTO_TYPE_WOMAN_FACE_RIGHT]: `./svgTemplate/SvgWomanFaceRightRound`,
    [PHOTO_TYPE_MAN_FACE_LEFT]: `./svgTemplate/SvgManFaceLeftRound`
}
export default {
    data() {
        return {
            PLACE_TYPE_LEFT,
            PLACE_TYPE_RIGHT
        }
    },
    props: {
        placeType: {
            type: String,
            default: PLACE_TYPE_LEFT
        },
        photoType: {
            type: String,
            default: PHOTO_TYPE_WOMAN_FACE_RIGHT
        },
        photoText: {
            type: String,
            default: ''
        },
        dialogTexts: {
            type: Array,
            default: []
        },
        dialogBlockIndex: {
            type: Number,
            required: true
        },

    },
    computed: {
        photoComponent() {
            // 副檔名可以讓 vue 提前縮小動態的範圍
            return () => import(`${photoTypeToComponentUrlConfig[this.photoType]}.vue`)
        }
    },

}
</script>
<style scoped>
    .dialog-content-block-section {
        margin: 0 3rem;
    }

    @media screen and (max-width: 420px) {
        .dialog-content-block-section {
            margin: 0 1.2rem;
        }
    }

    .dialog-photo {
        width: 225px;
        height: 225px;

    }

    @media screen and (max-width: 576px) {
        .dialog-photo {
            width: 60px;
            height: 60px;
        }

        .photo-text {

        }
    }

    @media screen and (max-width: 576px) {
        .photo-text {
            font-size: 0.5rem;
        }
    }


    .dialog-content-block {
        border-radius: 0.5rem;
        box-shadow: 0px 0.2rem 0.2rem rgba(0, 0, 0, 0.25);
        padding: 0.5rem 1.8rem 0.5rem 1.8rem;
        font-size: .9rem;
        /* font-weight: normal; */
        white-space: pre-line;
    }
</style>