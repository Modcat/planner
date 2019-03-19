<template>
  <section class="project-page">
    
    <div class="project">
      
      <h3>Project Name</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent quam ex, tincidunt et turpis at, ullamcorper cursus mauris. Proin elementum feugiat risus, quis tincidunt mauris placerat nec. Cras interdum leo nibh, eu egestas ipsum sodales et. Nullam non blandit libero. Duis tincidunt lacus enim, condimentum pharetra mi vehicula et. Nam id elit sit amet est feugiat cursus. Ut convallis dui at orci mollis, sit amet egestas tortor malesuada.</p>
      
      <h4>Members</h4>
      <div class="materialize members">
        <a href="/profile" class="chip">
          <img src="~assets/img/profile/lawrence_turton.jpg" alt="Contact Person">
          Lawrence Turton
          <close-icon width="20px"/>
        </a>
        <a href="/profile" class="chip">
          <img src="~assets/img/profile/lawrence_turton.jpg" alt="Contact Person">
          John Doe
          <close-icon width="20px"/>
        </a>
        <a href="/profile" class="chip">
          <img src="~assets/img/profile/lawrence_turton.jpg" alt="Contact Person">
          Larry Ellison
          <close-icon width="20px"/>
        </a>
      </div>

      <h4>Workflow</h4>
      <div class="materialize members">
        <div href="/profile" class="chip">
          Backlog
          <close-icon width="20px"/>
        </div>
        <div href="/profile" class="chip">
          Development
          <close-icon width="20px"/>
        </div>
        <div href="/profile" class="chip">
          Review
          <close-icon width="20px"/>
        </div>
        <div href="/profile" class="chip">
          Completed
          <close-icon width="20px"/>
        </div>
      </div>

      <h4>Useful links</h4>
      <div class="materialize members">
        <div href="/profile" class="chip">
          Github repo
          <close-icon width="20px"/>
        </div>
        <div href="/profile" class="chip">
          Email login for team
          <close-icon width="20px"/>
        </div>
        <div href="/profile" class="chip">
          Project spec
          <close-icon width="20px"/>
        </div>
        <div href="/profile" class="chip">
          Invision app
          <close-icon width="20px"/>
        </div>
      </div>
    </div>

    <div class="kanban-section">
      <h4>kandban</h4>
      <aside>
        <div v-for="(value, index) in [1,2,3,4]" :key="index">
          <span class="epic-button">Epic Name</span>
          <!-- <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eu elit diam.</p> -->
        </div>
      </aside>
      <section class="kanban">
        <div v-for="(value, index) in [1,2,3,4]" :key="index"></div>
      </section>
    </div>

    <div class="github">
      <h4>Github</h4>
    </div>

    <div class="finance">
      <h4>Finance</h4>
    </div>

    <!--<div class="timeline-gantt">
      <header>
      </header>
      <section>
        <div class="person">
        </div>
        <div class="task">
          <span>Task name</span>
          <div>
            Coffee Break
          </div>
          <div>
            Meeting Break
          </div>
        </div>
      </section>
    </div>-->
  </section>
</template>

<script>
import CloseIcon from '~/assets/img/icons/times-circle-solid.svg?inline'
export default {
  name: 'Project',
  components: {
    CloseIcon
  }
}
</script>

<style lang="scss" scoped>
.project-page {

  > div {
    padding: 15px;
  }
}
h3 {
  text-align: center;
  margin-top: 15px;
  text-transform: uppercase;
}
h4 {
  text-align: center;
  font-size: 0.8em;
  text-transform: uppercase;
}
.chip {
  display: inline-flex;

  svg {
    width: 15px;
    align-self: center;
    margin-left: 5px;
    margin-right: -5px;
    transition: transform 0.2s;

    &:hover {
      transform: scale(1.2);
    }
  }
}
.project-page > .project {
  p {
    margin: 0;
    padding: 0;
    font-size: 0.95em;
    line-height: 1.4em;
    word-spacing: 0em;
    padding: 15px;
    border-radius: 3px;
    transition: background-color 0.2s;

    &:hover {
      background: #f7f7f7;
    }
  }
}
.kanban-section {
  background: #f0f0f0;

  .epic-button {
    padding: 10px 7px;
    writing-mode: vertical-lr;
    text-orientation: mixed;
    border-radius: 2px;
    background: rgba(0, 0, 0, 0.05);
    font-size: 0.8em;
    text-transform: uppercase;
    font-weight: bold;
    color: #444;
  }
}
</style>