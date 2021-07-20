<template>
    <div>
        <SectionTitle :titleText="'經典範例'"/>
        <DialogWithPhoto
        
        />
    </div>
</template>
<script>
import SectionTitle from './baseComponents/SectionTitle.vue'
import DialogWithPhoto from './DialogWithPhoto.vue'

export default {
    components: {
        SectionTitle,
        DialogWithPhoto
    },
}
</script>