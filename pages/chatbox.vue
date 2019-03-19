<template>
  <section>
    <header>
      <button @click="sidebarOpen = !sidebarOpen">+</button>
    </header>
    <div class="comments">
      <comment/>
      <comment/>
      <comment/>
      <comment/>
      <comment/>
      <comment/>
      <comment/>
      <comment/>
      <comment/>
      <comment/>
    </div>
  </section>
</template>

<script>
import MediumEditor from 'medium-editor'
import MediumDefault from 'medium-editor/dist/css/medium-editor.min.css'
import MediumTheme from 'medium-editor/dist/css/themes/beagle.css'
import Comment from '@/components/blocks/Comment'

export default {
  name: 'comments',
  components: {
    Comment
  },
  data() {
    return {
      sidebarOpen: false
    }
  },
	mounted() {
		var editor = new MediumEditor('.editable-content', {
      //buttonLabels: 'fontawesome',
      toolbar: {
        buttons: [
          'anchor',
          'unorderedlist',
          'orderedlist',
          'quote',
          'h1',
          'h2',
          'h3',
          'h4',
          'h5',
          'h6',
          'bold',
          'italic'
        ],
        static: false,
        sticky: true
      }
    });
	}
}
</script>

<style lang="scss" scoped>
.sidebar {
  background: white;
}
section {
  padding-right: 40px;
  width: 100%;
}
.comments {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  /deep/ .comment {
    &:first-child {
      padding-top: 0;
    }
    > *:last-child {
      padding-bottom: 64px;
    }
    *:last-child * {
      user-select: initial;
      cursor: initial;
    }
  }
}
</style>

