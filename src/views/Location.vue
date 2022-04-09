<template>
    <div class="location pa-9">
        <h1> Location </h1>
        <Helper />
        <HeadBlock />
        <FooterBlock />
    </div>
</template> 

<script>
import Helper from '@/components/Helper.vue'
import HeadBlock from '@/components/HeadBlock.vue'
import FooterBlock from '@/components/FooterBlock.vue'
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
    name: 'location',
    components: { Helper },
    components: { HeadBlock },
    components: { FooterBlock },
    setup() {      
    },
})
</script>

<style scoped>

</style>
