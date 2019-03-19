<template>
  <section>
      <lightbox v-if="lightbox" @closeLightbox="this.lightbox = false"/>
      <div class="meta-box" contenteditable="false">
        <h6>Pinned</h6>
        <div class="meta-content">
          <card v-for="(card, index) in [1,2,3,4,1,2,3,4]" :key="index" :background-color="[146, 82, 95]" class="card" @click="lightbox = true"/>
        </div>
      </div>
      <div class="card-grid">
        <card v-for="(card, index) in [1,2,3,4,5,6,7,8,9,0,1,2,3,4,5,6,7,8]" :key="index" :background-color="[146, 82, 95]" @click="lightbox = true"/>
      </div>
  </section>
</template>

<script>
import Card from '@/components/blocks/Card'
import Lightbox from '@/components/blocks/Lightbox'

export default {
  name: 'Databases',
  components: { Card, Lightbox },
  data() {
    return {
      lightbox: false
    }
  }
}
</script>


<style lang="scss" scoped>
.card:hover {
  transform: scale(1.05);
  box-shadow: 0px 10px 50px rgba(51, 73, 90, 0.25);
}
.card-grid {
  padding: 25px;
  display: grid;
  grid-column-gap: 25px;
  grid-row-gap: 25px;
  grid-template-columns: auto auto auto;
}
.meta-box .card {
  margin-right: 15px;
  min-width: 250px;
  margin-bottom: 5px;
  box-shadow: 2px 2px 20px 3px rgba(51, 73, 90, 0.20);
  
  /deep/ p {
    height: 30px;
    -webkit-line-clamp: 2;
  }
}
</style>
