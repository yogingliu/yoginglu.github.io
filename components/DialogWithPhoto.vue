<template>
    <div>
        <div class="flex">
            <div class="horizontal-vertical-center-flex">
                <!-- dialog and text -->
                <div>
                    <div>
                        <component :is="photoComponent" />
                    </div>
                    <div>

                    </div>
                </div>
            </div>
            <div>

            </div>
        </div>
    </div>
</template>
<script>
const PHOTO_TYPE_WOMAN_FACE_RIGHT = 'WOMAN_FACE_RIGHT'
const PHOTO_TYPE_MAN_FACE_LEFT = 'MAN_FACE_LEFT'

const photoTypeToComponentUrlConfig = {
    [PHOTO_TYPE_WOMAN_FACE_RIGHT]: `./svgTemplate/SvgWomanFaceRightRound`,
    [PHOTO_TYPE_MAN_FACE_LEFT]: `./svgTemplate/SvgManFaceLeftRound`
}
export default {
    props: {
        photoType: {
            type: String,
            default: PHOTO_TYPE_WOMAN_FACE_RIGHT
        }
    },
    computed: {
        photoComponent() {
            // 副檔名可以讓 vue 提前縮小動態的範圍
            return () => import(`${photoTypeToComponentUrlConfig[this.photoType]}.vue`)
        }
    },

}
</script>