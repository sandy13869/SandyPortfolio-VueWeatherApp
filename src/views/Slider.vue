<template>
<div class="Slider pa-9">
<h1>My Buddy Pics....</h1>
    <v-carousel hide-delimiters>
    <v-carousel-item
      v-for="(item,i) in items"
      :key="i"
      :src="item.src"
    ></v-carousel-item>
  </v-carousel>

</div>
</template>


<script>
export default {
    data () {
      return {
        items: [
          {
            src: 'https://1.jpg',
          },
          {
            src: 'https://2.jpg',
          },
          {
            src: 'https://3.jpg',
          },
          {
            src: 'https://4.jpg',
          },
          {
            src: 'https://5.jpg',
          },
          {
            src: 'https://6.jpg',
          },
          {
            src: 'https://7.jpg',
          }
        ],
      }
    },
  }
</script>

<style>

</style>