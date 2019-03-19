<template>
  <section :class="['meeting-view', {'show-meeting': showMeeting !== false}]">
    
    <div class="filter-meets">
      <input type="text" placeholder="From"/>
      <input type="text" placeholder="To"/>
    </div>

    <div class="meets">

      <section :class="['meeting', {'expand': showMeeting === index}]" v-for="(meet,index) in [1,1,2,3,3,4,4,5,5,5,6,6]" :key="index" @click="showMeeting = index">
        <h2>Name of meeting</h2>
        <div @click="closeMeeting($event)">
          <span>
            10/01/2019
          </span>
        </div>
        <div>
          <span>
            2h Completed 
          </span>
        </div>
      </section>

    </div>

  </section>
</template>

<script>
export default {
  name: 'Meetings',
  data() {
    return {
      showMeeting: false
    }
  },
  methods: {
    closeMeeting(event) {
      event.stopPropagation()
      this.showMeeting = false
    }
  }
}
</script>

<style lang="scss" scoped>
.meeting-view {
  display: block;
  min-height: 100%;
}
.filter-meets {
  opacity: 1;
  max-height: auto;
  overflow: hidden;
  transition: transform 0.2s, opacity 0.2s, max-height 0.2s;
}
.show-meeting {
  .filter-meets {
    opacity: 0;
    max-height: 0px;
  }
  .meeting {
    opacity: 0;
    max-height: 0px;
    padding: 0;
    margin: 0;
  }
}
.meeting {
  box-sizing: border-box;
  align-items: center;
  display: flex;
  padding: 10px 10px;
  background: #f3f3f3;
  border-radius: 3px;
  // box-shadow: 2px 7px 20px rgba(0, 0, 0, 0.12);
  font-size: 0.8em;
  font-weight: bold;
  text-transform: uppercase;
  margin: 0 15px 15px 15px;
  opacity: 1;
  height: auto;
  max-height: auto;
  overflow: hidden;
  transition: background-color 0.2s, opacity 0.05s, max-height 0.1s, height 0.2s, margin 0.2s, padding 0.2s, flex-grow 0.2s;

  &:hover {
    background-color: #e8e7e7;
  }

  > * {
    margin-right: 10px;

    &:last-child {
      margin-right: 0 !important;
    }
  }

  &.expand {
    max-height: initial !important;
    opacity: 1;
    flex-grow: 1;
    align-items: flex-start;
    padding: 35px 15px 15px 15px;
    transform: scale(1) !important;
    background: #f3f3f3 !important;
    min-height: 100vh;
  }
}
h2 {
  margin: 0;
  padding: 0;
  flex-grow: 1;
  font-size: 0.9em;
}
span {
  display: inline-block;
  padding: 5px 15px;
  background: rgba(0,0,0,0.05);
  border-radius: 2px;
}
</style>