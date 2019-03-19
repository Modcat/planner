<template>
  <section class="gantt">
    <aside>
      <div class="person materialize">
        <span class="profile profile--medium tooltipped"
          data-position="right"
          data-tooltip="Joe Jackson"
          data-src="url(../img/profile/lawrence_turton.jpg)">
          <div class="tooltip">Joe Jackson</div>
        </span>
      </div>
    </aside>
    <div class="task">
      <div class="row">
        <span class="ticket smi-1">SMI
          <span class="overtime">Warning</span>
        </span>
        <span class="break">Break</span>
        <span class="meeting">Meeting</span>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Activity'
}
</script>

<style lang="scss" scoped>
.gantt {
  display: flex;
  white-space: nowrap;
  justify-content: flex-start;
  width: 100%;

  aside {
    position: relative;
    border-right: 1px solid #eee;
    z-index: 2;
    background: white;
    
    .person {
      position: relative;
      float: left;
      width: 100%;
      padding: 15px;
      border-bottom: 1px solid #eee;

      .tooltip {
        display: none;
      }

      span:hover .tooltip {
        display: inline-flex;
        flex-direction: column;
        position: absolute;
        z-index: 2;
        left: 90%;
        top: 30px;
        color: white;
        background: #404242;
        padding: 7px 10px;
        border-radius: 2px;
      }
      .contact-info {
        height: 17px;
        position: absolute;
        right: 15px;
        bottom: 15px;
        padding: 0;
      }
    }
  }

  .task {
    flex-grow: 1;

    .row {
      height: 94px;
      width: 100%;
      overflow-y: auto;
      border-bottom: 1px solid #eee;
    }
    span {
      display: inline-flex;
      align-items: center;
      height: 20px;
      border-radius: 2px;
      box-shadow: 0px 1px 2px rgba(0,0,0,.05);
      padding: 0 10px;
      
      &.ticket {
        background: rgb(36, 219, 171);
        color: #42AA71;
        margin: 10px 5px 0px 10px;

        .overtime {
          position: relative;
          right: -10px;
          background: rgb(254, 214, 105);
          color: #BF9431;
        }
      }

      &.break {
        background: rgb(230, 230, 230);
        color: #aaa;
        margin: 10px 5px;
      }

      &.meeting {
        background: #6FDAFD;
        color: #8E9C9E;
        margin: 10px 5px;
      }
    }
  }
}
</style>