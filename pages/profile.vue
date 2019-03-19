<template>
  <section class="profile-overlay">
    <div class="top-profile"/>
    
    <div class="profile">

      <section class="content">
        <h2>profile info</h2>
      </section>
      <div class="side-profile"/>

    </div>
  </section>
</template>

<script>
export default {
  name: ''
}
</script>

<style lang="scss" scoped>
.profile-overlay {
  display: flex;
  flex-direction: column;
  min-height: 100%;
}
.top-profile {
  background: #eee;
  height: 260px;
  width: 100%;
}
.profile {
  display: flex;
  flex-grow: 1;
  flex-wrap: wrap;
  min-height: 100%;
}
.content {
  padding: 15px;
  flex-grow: 1;
  margin-top: 5px;
  align-self: flex-start;
}
.side-profile {
  margin-top: 2px;
  background: #eee;
  width: 40%;
  max-width: 240px;
  min-width: 198px;
}
</style>