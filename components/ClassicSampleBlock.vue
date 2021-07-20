<template>
    <div>
        <SectionTitle :titleText="'經典範例'"/>
        <template v-for="(dialogWithPhotoBody, dialogBlockIndex) in dialogWithPhotoBodys">
            <DialogWithPhoto
                :key="`dialog-with-photo-component-${dialogBlockIndex}`"
                :dialogBlockIndex="dialogBlockIndex"
                v-bind="dialogWithPhotoBody"
            />
        </template>
    </div>
</template>
<script>
import SectionTitle from './baseComponents/SectionTitle.vue'
import DialogWithPhoto from './DialogWithPhoto.vue'

const PHOTO_TYPE_WOMAN_FACE_RIGHT = 'WOMAN_FACE_RIGHT'
const PHOTO_TYPE_MAN_FACE_LEFT = 'MAN_FACE_LEFT'

const PLACE_TYPE_LEFT = 'LEFT'
const PLACE_TYPE_RIGHT = 'RIGHT'

export default {
    components: {
        SectionTitle,
        DialogWithPhoto
    },
    data() {
        return {
            dialogWithPhotoBodys: [
                {
                    placeType: PLACE_TYPE_LEFT,
                    photoType: PHOTO_TYPE_WOMAN_FACE_RIGHT,
                    photoText: '雨耕書堂製作專員',
                    dialogTexts: [
                        '之前在擔任採編助理時有沒有遇到什麼困難呢？', 
                        '為了解決這個困難，你運用什麼方法去克服？', 
                        '因為這次的經歷，你獲得甚麼樣的成長？',
                    ]
                },
                {
                    placeType: PLACE_TYPE_RIGHT,
                    photoType: PHOTO_TYPE_MAN_FACE_LEFT,
                    photoText: '想要上榜的小明',
                    dialogTexts: [
                        '一開始我會抓不到文章重點，導致稿件常常被退件', 
                        '後來在不斷學習跟向老師請教下，學會猜測讀者的心境', 
                        '最後除了在稿件的進步外，我自己在處理事情、與同事溝通上面都有大幅的進步！',
                    ]
                },
                {
                    placeType: PLACE_TYPE_LEFT,
                    photoType: PHOTO_TYPE_WOMAN_FACE_RIGHT,
                    photoText: '雨耕書堂製作專員',
                    dialogTexts: [
                        '在2020年7月25日到2020年8月24日期間，我於「某某某」公司實習，並擔任採編助理。實習期間，我跟著報社編輯和記者，進行新聞採訪、稿件撰寫以及版面編輯等工作，其中，我認為最困難，也是讓我磨練最多的，便是撰寫新聞稿件。一開始，我時常抓不到一篇文章的主題，也容易放錯重點，更不清楚讀者想要看的是什麼，也因為如此，導致稿件常常被退件，但是在我努力不懈的學習和報社老師們的指導下，我慢慢開始掌握一些寫作的技巧，並且會去揣摩讀者的心境，去思考他們會對什麼樣的內容有興趣，同時，在閱讀他人的文章後，也會去分析文章內容和寫作的優劣之處，並且向其學習。此外，每當我撰寫完一篇新聞稿時，我會請老師們指點我的不足，並反覆修改，且謹記這次犯的錯誤，讓每次都比前一次更進步。經過一段時間後，我的撰寫能力大幅提升，且對於如何引起讀者的興趣，也有了更多的心得和體悟。除此之外，我也必須處理報社相關業務，並進行人員的對接等相關事宜，在這過程中，也逐漸培養了我處理事情的能力以及溝通表達能力，同時，也因為工作內容事務眾多，讓我學會如何妥善的分配時間和規畫行程，讓我能在期限內完成分內的事。'
                    ]
                },
            ]
        }
    }
}
</script>