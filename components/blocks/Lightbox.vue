<template>
  <div class="overlay">
    <section class="lightbox">
      <slot/>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Lightbox'
}
</script>

<style lang="scss" scoped>
.overlay {
  position: fixed;
  display: flex;
  justify-content: center;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background: hsl(210, 33%, 98%);
  backdrop-filter: blur(5px);
  padding: 40px;
  z-index: 9999;
}
.lightbox {
  height: 2000px;
  background: white;;
  border-radius: 4px;
  box-shadow: rgba(51, 73, 90, 0.2) 0px 20px 150px 0px;
  overflow-x: hidden;
  overflow-y: hidden;
  padding-bottom: 80px;
  min-width:700px;
  max-width: 60%;

  * {
    cursor: initial;
    user-select: initial !important;
  }
}
</style>