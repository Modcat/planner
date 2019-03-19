<template>
  <section class="card">
   
    <div class="content">
      
      <div class="details" v-if="showSection === 'details'">
        <h2>Evolve Retail</h2>
        <p>Full website development using the new Tophat technology for PWA. Including all caching and server setup for development and staging.</p>
      </div>
      
      <div class="overview" v-else-if="showSection === 'overview'">
        <div class="tabs">
          <button @click="showSub = 'overview'">Overview</button>
          <button @click="showSub = 'timespent'">Time Spent</button>
          <button @click="showSub = 'finance'">Finance</button>
        </div>
        <div class="content" v-if="showSub === 'overview'">
          <div class="blocks">
            <div>
              <h2>265</h2>
              <span>Tickets</span>
            </div>
            <div>
              <h2>55%</h2>
              <span>Complete</span>
            </div>
            <div>
              <h2>240</h2>
              <span>Hours</span>
            </div>
          </div>
          <div class="profile-block">
            <span class="profile profile--tiny" data-src="url(../img/profile/lawrence_turton.jpg)"/>
            <div class="progress">
              <span style="width: 50%;"/>
            </div>
            <span>50</span>
          </div>
        </div>
        <div class="content time" v-else-if="showSub === 'timespent'">
          <div class="blocks">
            <div>
              <h2>5d 6h</h2>
              <span>Time</span>
            </div>
            <div>
              <h2>25d 6h</h2>
              <span>Esitmate</span>
            </div>
          </div>
          <div class="profile-block">
            <span class="profile profile--tiny" data-src="url(../img/profile/lawrence_turton.jpg)"/>
            <div class="progress">
              <span style="width: 100%;"/>
            </div>
            <span>1.6d</span>
          </div>
        </div>
        <div class="content finance" v-else-if="showSub === 'finance'">
          <div class="blocks">
            <div>
              <h2>3k</h2>
              <span>Spent</span>
            </div>
            <div>
              <h2>40k</h2>
              <span>Buget</span>
            </div>
            <div>
              <h2>2500k</h2>
              <span>Paid</span>
            </div>
          </div>
          <div class="profile-block">
            <span class="profile profile--tiny" data-src="url(../img/profile/lawrence_turton.jpg)"/>
            <div class="progress">
              <span style="width: 60%;"/>
            </div>
            <span>2.5k</span>
          </div>
          <div class="profile-block">
            <span class="profile profile--tiny" data-src="url(../img/profile/lawrence_turton.jpg)"/>
            <div class="progress">
              <span style="width: 20%;"/>
            </div>
            <span>1.2k</span>
          </div>
        </div>
      </div>
    </div>
    
    <footer>
      <span class="completed">
        <span class="progress"></span>
      </span>
      <pencil class="icon edit-project" width="20" height="20"/>
      <pin class="icon"/>
      <a href="#/" @click="showSection = 'overview'">
        <project-more class="icon project-info"/>
      </a>
    </footer>

  </section>
</template>

<script>
import Pencil from '~/assets/img/icons/pencil.svg?inline'
import ProjectMore from '~/assets/img/icons/ellipsis-h-solid.svg?inline'
import Pin from '~/assets/img/icons/thumbtack-solid.svg?inline'

export default {
  name: 'Card',
  components: {
    Pencil,
    ProjectMore,
    Pin
  },
  data() {
    return {
      showSection: 'details',
      showSub: 'overview'
    }
  }
}
</script>

<style lang="scss" scoped>
.card {
  transform: translate3d(0,0,0);
  background: white;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  // box-shadow: 2px 2px 20px 3px rgba(51, 73, 90, 0.20);
  box-shadow: 0px 20px 60px rgba(51, 73, 90, 0.20);
  color: #000000;
  box-sizing: border-box;
  padding: 0;
  transition: transform 0.1s ease-out, box-shadow 0.2s ease-out;
  overflow: hidden;
}
.content {
  padding: 18px;
}
h2 {
  font-size: 1.2em;
  line-height: 1em;
  margin: 0 0 10px 0;
  white-space: nowrap;
  text-overflow: ellipsis;
  max-width: 100%;
  overflow: hidden;
}
.details p {
  margin: 0;
  padding: 0;
  font-size: 0.85em;
  line-height: 1.4em;
  height: 45px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
}
footer {
  display: flex;
  padding: 0 20px 10px 20px;
  justify-content: flex-end;
}
.icon {
  width: 10px;
  height: 10px;
  margin-right: 10px;
  opacity: .5;
  transition: opacity 0.2s;
  justify-self: flex-end;

  &:last-child {
    margin-right: 0;
  }

  &:hover {
    opacity: 1;
  }
}
.tabs {
  button {
    flex-grow: 1;
    font-weight: bold;
    text-transform: uppercase;
    font-size: 1em;
    color: #333;
  }

  button {
    border-right: 1px solid #eee;
  }

  button:last-child {
    border-right: 0;
  }
}
.overview .content {
  padding: 0;
  margin-top: 5px;
  overflow-x: hidden;
  overflow-y: auto;
  max-height: 60px;

  *:first-child {
    margin-top: 0;
  }
}
.blocks {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 60px;

  div {
    width: 33.333%;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    padding: 10px 5px;
    color: #444;
    text-align: center;
    flex-grow: 1;
    border-radius: 2px;
    background: #f6f6f6;
    margin-right: 5px;
    text-transform: uppercase;
    font-size: 0.8em;
    font-weight: bold;

    h2 {
      margin-bottom: 5px;
    }

    &:last-child {
      margin-right: 0;
    }
  }
}
.profile-block {
  border-radius: 2px;
  background: #f6f6f6;
  padding: 5px;
  display: flex;
  align-items: center;
  margin-top: 5px;
  font-weight: bold;
  text-transform: uppercase;

  span {
    margin-right: 10px;
  }
}
</style>