<template>
    <div class="feature pa-9">
        <h1> Test Feature Page </h1>
        <h3> {{ title }} </h3>
        <!-- <Helper : name="" /> -->
        <Helper> Testing Sandy </Helper>
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
    name: 'Feature',
    components: { Helper, HeadBlock },
    // components: { HeadBlock },
    components: { FooterBlock },
    data: () => ({
        
        title :'sandy',
       
    }),
    setup() {
        
    },
})
</script>

<style scoped>

</style>
  