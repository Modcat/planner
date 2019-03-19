<template>
  <div class="comment">
    <div class="avatar">
      <span class="profile profile--small" data-src="url(../img/profile/lawrence_turton.jpg)"/>
    </div>
    <div class="content">
      <span class="info">
        <!--<img src="@/assets/img/icons/address-card-solid.svg" width="15" alt="Contact Info" title="contact info">-->
        <strong>Lawrence Turton</strong>
        2:44pm
        <span class="right"></span>
      </span>
      <div ref="contentEditable" class="editable-content" editable="true">
        <h1>Markdown</h1>
        <p>Most of the examples from this documentation are in Markdown. Markdown is default parser for GitBook, but one can also opt for the AsciiDoc syntax.</p>
        <h2>Markdown</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vitae aliquet urna. Nunc dictum, odio vehicula elementum tristique, metus nisi convallis leo, sed congue erat tellus eget arcu. Quisque vitae vehicula turpis. Morbi arcu ligula, luctus sit amet nibh eu, tincidunt sagittis erat. Nam suscipit mi laoreet, vulputate urna eget, posuere odio. Pellentesque augue ex, bibendum auctor enim sed, varius elementum enim. Maecenas nec mi in elit laoreet laoreet eu ac odio. Etiam euismod sollicitudin volutpat. Aliquam a purus eget metus vestibulum gravida. Nam nibh libero, luctus a tempor ac, ullamcorper sed velit. Aliquam id lorem in tellus ultrices vulputate. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Cras facilisis quam a nisl imperdiet facilisis.</p>
        <h3>Markdown</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vitae aliquet urna. Nunc dictum, odio vehicula elementum tristique, metus nisi convallis leo, sed congue erat tellus eget arcu. Quisque vitae vehicula turpis. Morbi arcu ligula, luctus sit amet nibh eu, tincidunt sagittis erat. Nam suscipit mi laoreet, vulputate urna eget, posuere odio.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vitae aliquet urna. Nunc dictum, odio vehicula elementum tristique, metus nisi convallis leo, sed congue erat tellus eget arcu. Quisque vitae vehicula turpis. Morbi arcu ligula, luctus sit amet nibh eu, tincidunt sagittis erat. Nam suscipit mi laoreet, vulputate urna eget, posuere odio. Pellentesque augue ex, bibendum auctor enim sed, varius elementum enim. Maecenas nec mi in elit laoreet laoreet eu ac odio. Etiam euismod sollicitudin volutpat.</p>
        <h4>Markdown</h4>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vitae aliquet urna. Nunc dictum, odio vehicula elementum tristique, metus nisi convallis leo, sed congue erat tellus eget arcu. Quisque vitae vehicula turpis. Morbi arcu ligula, luctus sit amet nibh eu, tincidunt sagittis erat. Nam suscipit mi laoreet, vulputate urna eget, posuere odio.</p>
        <h5>Markdown</h5>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vitae aliquet urna. Nunc dictum, odio vehicula elementum tristique, metus nisi convallis leo, sed congue erat tellus eget arcu. Quisque vitae vehicula turpis. Morbi arcu ligula, luctus sit amet nibh eu, tincidunt sagittis erat. Nam suscipit mi laoreet, vulputate urna eget, posuere odio.</p>
        <h6>Markdown</h6>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vitae aliquet urna. Nunc dictum, odio vehicula elementum tristique, metus nisi convallis leo, sed congue erat tellus eget arcu. Quisque vitae vehicula turpis. Morbi arcu ligula, luctus sit amet nibh eu, tincidunt sagittis erat. Nam suscipit mi laoreet, vulputate urna eget, posuere odio.</p>
        <blockquote>Quisque condimentum sollicitudin neque, eu ultrices odio maximus at. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</blockquote>
        <h4>Format Paragraph</h4>
        <p>Quisque condimentum <em>Something emphasized</em>, eu ultrices odio maximus at. Orci varius <a href="#/">This is a link</a> et magnis dis parturient montes,<i>Italics</i>. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, <strong>per inceptos himenaeos</strong>. Aenean varius nisl vitae sapien congue sollicitudin. Suspendisse potenti. Aliquam dignissim purus non tincidunt luctus. Ut posuere vitae metus et aliquet. Lorem ipsum <b>dolor sit</b> amet, consectetur adipiscing elit. Curabitur tincidunt purus eu velit aliquam fermentum. Integer est urna, interdum vel erat nec, rhoncus malesuada libero.</p>
        <h4>Lists</h4>
        <ul>
          <li>Quisque condimentum sollicitudin neque, eu ultrices odio maximus at.</li>
          <li>Quisque condimentum sollicitudin neque, eu ultrices odio maximus at.
              <ul>
                <li>Quisque condimentum sollicitudin neque, eu ultrices odio maximus at.</li>
                <li>Quisque condimentum sollicitudin neque, eu ultrices odio maximus at.</li>
                <li>Quisque condimentum sollicitudin neque, eu ultrices odio maximus at.</li>
              </ul>
          </li>
          <li>Quisque condimentum sollicitudin neque, eu ultrices odio maximus at.</li>
        </ul>
        <ol>
          <li>Quisque condimentum sollicitudin neque, eu ultrices odio maximus at.</li>
          <li>Quisque condimentum sollicitudin neque, eu ultrices odio maximus at.</li>
          <li>Quisque condimentum sollicitudin neque, eu ultrices odio maximus at.</li>
        </ol>
        <h4>Tables</h4>
        <table>
          <tbody>
            <tr class="editable-show" contenteditable="false">
              <td></td>
              <td>
                <img src="~/assets/img/icons/arrow-alt-circle-left-solid.svg" width="15" data-method="moveLeft">
                <img src="~/assets/img/icons/plus-circle-solid.svg" width="15" data-method="addColumnLeft">
                <img src="~/assets/img/icons/times-circle-solid.svg" width="15" data-method="deleteColumn">
                <img src="~/assets/img/icons/plus-circle-solid.svg" width="15" data-method="addColumnRight">
                <img src="~/assets/img/icons/arrow-alt-circle-right-solid.svg" width="15" data-method="moveRight">
              </td>
              <td>
                <button>+</button>
                <button>U</button>
                <button>D</button>
                <button>+</button>
              </td>
              <td>
                <button>+</button>
                <button>U</button>
                <button>D</button>
                <button>+</button>
              </td>
              <td>
                <button>+</button>
                <button>U</button>
                <button>D</button>
                <button>+</button>
              </td>
            </tr>
            <tr>
              <td class="editable-show" contenteditable="false">
                <img src="~/assets/img/icons/arrow-alt-circle-up-solid.svg" data-method="moveUp">
                <br/>
                <img src="~/assets/img/icons/plus-circle-solid.svg" data-method="addRowAbove">
                <br/>
                <img src="~/assets/img/icons/times-circle-solid.svg" data-method="deleteRow">
                <br/>
                <img src="~/assets/img/icons/plus-circle-solid.svg" data-method="addRowBellow">
                <br/>
                <img src="~/assets/img/icons/arrow-alt-circle-down-solid.svg" data-method="moveDown">
              </td>
              <td>is some content</td>
              <td>There is some content</td>
              <td>There is some content</td>
              <td>There is some content</td>
            </tr>
            <tr>
              <td class="editable-show" contenteditable="false">
                <img src="~/assets/img/icons/arrow-alt-circle-up-solid.svg" data-method="moveUp">
                <br/>
                <img src="~/assets/img/icons/plus-circle-solid.svg" data-method="addRowAbove">
                <br/>
                <img src="~/assets/img/icons/times-circle-solid.svg" data-method="deleteRow">
                <br/>
                <img src="~/assets/img/icons/plus-circle-solid.svg" data-method="addRowBellow">
                <br/>
                <img src="~/assets/img/icons/arrow-alt-circle-down-solid.svg" data-method="moveDown">
              </td>
              <td contenteditable="false"><div contenteditable="true"/></td>
              <td contenteditable="false"><div contenteditable="true"/></td>
              <td contenteditable="false"><div contenteditable="true"/></td>
              <td contenteditable="false"><div contenteditable="true"/></td>
            <tr>
              <td class="editable-show" contenteditable="false">
                <img src="~/assets/img/icons/arrow-alt-circle-up-solid.svg" data-method="moveUp">
                <br/>
                <img src="~/assets/img/icons/plus-circle-solid.svg" data-method="addRowAbove">
                <br/>
                <img src="~/assets/img/icons/times-circle-solid.svg" data-method="deleteRow">
                <br/>
                <img src="~/assets/img/icons/plus-circle-solid.svg" data-method="addRowBellow">
                <br/>
                <img src="~/assets/img/icons/arrow-alt-circle-down-solid.svg" data-method="moveDown">
              </td>
              <td contenteditable="false"><div contenteditable="true"/></td>
              <td contenteditable="false"><div contenteditable="true"/></td>
              <td contenteditable="false"><div contenteditable="true"/></td>
              <td contenteditable="false"><div contenteditable="true"/></td>
            </tr>
            <tr>
              <td class="editable-show" contenteditable="false">
                <img src="~/assets/img/icons/arrow-alt-circle-up-solid.svg" data-method="moveUp">
                <br/>
                <img src="~/assets/img/icons/plus-circle-solid.svg" data-method="addRowAbove">
                <br/>
                <img src="~/assets/img/icons/times-circle-solid.svg" data-method="deleteRow">
                <br/>
                <img src="~/assets/img/icons/plus-circle-solid.svg" data-method="addRowBellow">
                <br/>
                <img src="~/assets/img/icons/arrow-alt-circle-down-solid.svg" data-method="moveDown">
              </td>
              <td contenteditable="false"><div contenteditable="true"/></td>
              <td contenteditable="false"><div contenteditable="true"/></td>
              <td contenteditable="false"><div contenteditable="true"/></td>
              <td contenteditable="false"><div contenteditable="true"/></td>
            </tr>
          </tbody>
        </table>

        <h4>Checklist</h4>

        <ul class="checklist" contenteditable="false">
          <li>
            <div class="progress">
              <span/>
            </div>
          </li>
          <li>
            <input type="checkbox" data-method="workout"/>
            <label class="done">
              Item to check
            </label>
          </li>
          <li>
            <input type="checkbox" data-method="workout"/>
            <label>
              Item to check
            </label>
          </li>
          <li>
            <input type="checkbox" data-method="workout"/>
            <label>
              Item to check
            </label>
          </li>
        </ul>

        <ul class="checklist" contenteditable="false">
          <li>
            <div class="progress">
              <span/>
            </div>
          </li>
          <li>
            <input type="checkbox" data-method="workout"/>
            <label class="done">
              Item to check
            </label>
          </li>
          <li>
            <input type="checkbox" data-method="workout"/>
            <label>
              Item to check
            </label>
          </li>
          <li>
            <input type="checkbox" data-method="workout"/>
            <label>
              Item to check
            </label>
          </li>
          <li>
            <input type="checkbox" data-method="workout"/>
            <label>
              Item to check
            </label>
          </li>
        </ul>

        <h4>Social Media Embed</h4>

        <h4>CodeMirror</h4>

        <div contenteditable="false" class="code-mirror-on"/>

        <h4>Graphs Component (todo after UI)</h4>

        <!-- Attachments are always at bottom -->
        <div class="meta-box" contenteditable="false">
          <h6>ATTACHMENTS</h6>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CodeMirror from 'codemirror'
import CodeMirrorMode from 'codemirror/mode/javascript/javascript.js'
import CodeMirrorCSS from 'codemirror/lib/codemirror.css'
import CodeMirrorTheme from 'codemirror/theme/base16-light.css'

export default {
  name: 'Comment',
  mounted() {
    let codeSections = this.$refs.contentEditable.getElementsByClassName('code-mirror-on')
    let codeMirrors = []
    for (let codeSection of codeSections) {
      codeMirrors.push(
        CodeMirror(codeSection, {
          value: "function myScript(){return 100;}\n",
          mode:  "javascript",
          lineNumbers: true
        })
      )
    }
    this.$refs.contentEditable.addEventListener('click', event => {
      event.stopPropagation()
      let method = event.target.dataset.method
      if (this[method]) {
        console.log(method)
        this[method](event)
      }
    })
  },
  methods: {
    // Checklist Section
    workout(event) {
      event.stopPropagation()
      var checklist = event.target.parentNode.parentNode
      let completed = checklist.querySelectorAll('input:checked').length
      checklist.querySelectorAll('.progress span')[0].style.width = (completed / (checklist.childElementCount - 1) * 100) + '%'
    },
    // Table Section
    addTask(event) {

    },
    moveLeft(event) {
      console.log(event.target.parentNode.cellIndex)
    },
    addColumnLeft(event) {

    },
    deleteColumn(event) {

    },
    addColumnRight(event) {

    },
    moveRight(event) {
      console.log(event.target.parentNode.cellIndex)
    },
    moveUp(event) {

    },
    addRowAbove(event) {
      let tableBody = event.target.parentNode.parentNode.parentNode
      let newRow = document.createElement('tr')

      newRow.innerHTML += `<td class="editable-show" contenteditable="false">
                <img src="/_nuxt/assets/img/icons/arrow-alt-circle-up-solid.svg" data-method="moveUp">
                <br/>
                <img src="/_nuxt/assets/img/icons/plus-circle-solid.svg" data-method="addRowAbove">
                <br/>
                <img src="/_nuxt/assets/img/icons/times-circle-solid.svg" data-method="deleteRow">
                <br/>
                <img src="/_nuxt/assets/img/icons/plus-circle-solid.svg" data-method="addRowBellow">
                <br/>
                <img src="/_nuxt/assets/img/icons/arrow-alt-circle-down-solid.svg" data-method="moveDown">
              </td>
              <td contenteditable="false"><div contenteditable="true"/></td>
              <td contenteditable="false"><div contenteditable="true"/></td>
              <td contenteditable="false"><div contenteditable="true"/></td>
              <td contenteditable="false"><div contenteditable="true"/></td>`

      tableBody.insertBefore(newRow, event.target.parentNode.parentNode)
    },
    deleteRow(event) {
      event.target.parentNode.parentNode.remove()
    },
    addRowBellow(event) {
      let newRow = document.createElement('tr')

      newRow.innerHTML += `<td class="editable-show" contenteditable="false">
                <img src="/_nuxt/assets/img/icons/arrow-alt-circle-up-solid.svg" data-method="moveUp">
                <br/>
                <img src="/_nuxt/assets/img/icons/plus-circle-solid.svg" data-method="addRowAbove">
                <br/>
                <img src="/_nuxt/assets/img/icons/times-circle-solid.svg" data-method="deleteRow">
                <br/>
                <img src="/_nuxt/assets/img/icons/plus-circle-solid.svg" data-method="addRowBellow">
                <br/>
                <img src="/_nuxt/assets/img/icons/arrow-alt-circle-down-solid.svg" data-method="moveDown">
              </td>
              <td contenteditable="false"><div contenteditable="true"/></td>
              <td contenteditable="false"><div contenteditable="true"/></td>
              <td contenteditable="false"><div contenteditable="true"/></td>
              <td contenteditable="false"><div contenteditable="true"/></td>`

      let tableBody = event.target.parentNode.parentNode

      tableBody.insertAdjacentElement('afterend', newRow)
    },
    moveDown(event) {

    }
  }
}
</script>

<style lang="scss" scoped>
.comment {
  max-width: 800px;
  padding: 32px 32px 0 32px;
  display: flex;
  -webkit-font-smoothing:antialiased;
  color:rgb(51, 51, 51);

  .avatar {
    padding-right: 15px;
  }
  .info {
    display: flex;
    align-items: center;
    margin-right: 10px;

    * {
      margin-right: 10px;
    }
  }

  /* Main content styling */
  .content > *:nth-child(2) {
    margin-top: 20px !important;
  }
  .content > * {
    display: block;
    width: 100%;
    letter-spacing: 0.3px;
    margin-top: 0;
    margin-left: 0px;
    margin-right: 0px;
    margin-top: 0px;
    overflow-wrap: break-word;
    text-rendering: optimizeLegibility ;
    text-size-adjust: 100%;
  }

  /deep/ {
    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      margin-block-end: 23.8px;
      margin-block-start: 0px;
      margin-bottom: 23.8px;
      margin-inline-end: 0px;
      margin-inline-start: 0px;
      break-after: avoid;
      font-weight: 700;
      width: 100%;
    }
    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      margin-top: 1.275em !important;
    }
    h1 {
      line-height: 30.8px;
      font-size: 28px;
    }
    h2 {
      line-height: 26.95px;
      font-size: 24.5px;
    }
    h3 {
      line-height: 23.1px;
      font-size: 21px;
    }
    h4 {
      line-height: 19.25px;
      font-size: 17.5px;
    }
    h5 {
      line-height: 15.4px;
      font-size: 14px;
    }
    h6 {
      line-height: 15.4px;
      color: rgb(119, 119, 119);
      font-size: 14px;
    }
    p {
      margin-top: 0;
      line-height: 23.8px;
      margin-block-end: 11.9px;
      font-size: 14px;
    }
    em {
      text-transform: uppercase;
      font-weight: 700;
      font-style: normal;
    }
    a {
        background-origin: padding-box;
        background-size: auto;
        box-sizing: border-box;
        color: rgb(65, 131, 196);
        cursor: pointer;
        display: inline;
        font-size: 14px;
        font-weight: 400;
        height: auto;
        letter-spacing: 0.3px;
        line-height: 23.8px;
        orphans: 3;
        overflow-wrap: break-word;
        text-decoration-color: rgb(65, 131, 196);
        text-decoration-line: none;
        text-decoration-style: solid;
        widows: 3;
    }
    blockquote {
      border-left-color: rgb(229, 229, 229) ;
      border-left-style: solid ;
      border-left-width: 4px ;
      box-sizing: border-box ;
      break-inside: avoid ;
      color: rgb(133, 133, 133) ;
      display: block ;
      font-size: 14px ;
      font-weight: 400 ;
      letter-spacing: 0.3px ;
      line-height: 23.8px ;
      margin-block-end: 11.9px ;
      margin-block-start: 0px ;
      margin-bottom: 11.9px ;
      margin-inline-end: 0px ;
      margin-inline-start: 0px ;
      width: 100%;
      padding-bottom: 0px ;
      padding-left: 15px ;
      padding-right: 15px ;
      padding-top: 0px ;
    }
  }
  /deep/ table {
    width: 100%;
    border-top: 1px solid #ccc;
    border-right: 1px solid #ccc;
    border-spacing: 0;
    font-size: 16px;
    letter-spacing: 0.2px;
    line-height: 27.2px;
    overflow-wrap: break-word;

    td {
      position: relative;
    }

    .editable-show td,
    td.editable-show {
      background: #eee;
      border: none !important;
      text-align: center;
      padding: 0;

      /deep/ a {
        display: inline-block;
        padding: 0 5px;
      }
    }

    .editable-show {
      min-width: 20px;
      padding: 4px !important;
    }

    tbody tr:nth-child(even) {
      background-color: #f8f8f8;
    }
  }
  /deep/ table td,
  /deep/ table th {
    padding: 6px 13px;
    border-left: 1px solid #ccc;
    border-bottom: 1px solid #ccc;
  }
  /deep/ table th *,
  /deep/ table td * {
    margin: 0;
    padding: 0;
  }
  /deep/ .editable-content > ul,
  /deep/ .editable-content > ol {
    padding-left: 9px;
    margin-left: 9px;
  }
  /deep/ li {
    box-sizing: border-box;
    font-size: 16px;
    letter-spacing: 0.2px;
    line-height: 27.2px;
    overflow-wrap: break-word;
  }
  /deep/ .code-mirror-on {
    .CodeMirror {
      height: auto !important;
    }
  }
}
.checklist {
  background: rgba(0, 0, 0, 0.04);
  border-radius: 2px;
  list-style-type: none;
  margin: 20px 0 0 0 !important;

  li {
    align-items: center;
    display: flex;
    flex-direction: row;
  }

  .progress {
    margin: 10px 10px 0 0;
    background: rgba(0,0,0,0.03);
  }

  input {
    float: left;
    width: auto;
    margin-right: 7px;

    &:checked ~ label {
      text-decoration: line-through;
      opacity: 0.5;
    }
  }

  label {
    font-size: 0.8em;
    flex-grow: 1;
  }
}
</style>
