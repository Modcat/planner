<template>
  <section class="projects">
    <div class="top">
      <input type="search" class="outline">
      <button>+</button>
    </div>
    <section class="grid">
      <div
        v-for="(project, index) in [1,2,3,4,5,6,7,8,9,1,2,3,4,5,6,7,8,9]"
        :key="index"
        @click="$router.push('/project/')"
        :class="['project', { 'more-info': moreInfo }]">
        <h3>Project Title</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a varius augue.</p>
        <div class="progress">
          <span/>
        </div>
        <button @click="moreInfo = !moreInfo"></button>
      </div>
    </section>
  </section>
</template>

<script>
export default {
  data() {
    return {
      moreInfo: false
    }
  }
}
</script>


<style lang="scss" scoped>
.projects {
  margin: 0 32px;
}
.top {
  display: flex;

  input {
    border-radius: 5px 0px 0px 5px;
  }
  button {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.2em;
    font-weight: 900;
    border: 2px solid #333;
    border-left: none;
    border-radius: 0px 5px 5px 0px;
    width: 40px;
  }
}
.grid {
  align-self: flex-start;
  display: inline-grid;
  grid-gap: 15px;
  grid-template-columns: auto auto auto;
  padding-top: 15px;
  padding-bottom: 32px;
  
  /* move this to block */

  .project {
    border-radius: 3px;
    box-shadow: 0px 0px 5px 1px rgba(0,0,0,.05);
    padding: 15px;
  }
}
</style>
