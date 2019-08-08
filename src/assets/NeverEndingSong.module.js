/*
 * NOTE: 
 *  Normally, you'd want to name this file with a .mjs extension, but browsers and web servers 
 *  haven't caught up with recognizing .mjs as a valid JavaScript MIME type.
 */

// Same as <template></template>
const VERSE = document.createElement('template')

// Define template content
VERSE.innerHTML = `
  <style>
    .verse {
      font-family: monospace;
      margin: 0 0 1em 1em;
    }
  </style>
  <div class="verse">
    <div class="line">This is the song that doesn't end</div>
    <div class="line">Yes, it goes on and on my friend</div>
    <div class="line">Some people started singing it, not knowing what it was</div>
    <div class="line">And they'll continue singing it forever just because</div>
  </div>
`

class CustomElement extends HTMLElement {
    constructor () {
        super()
        this.attachShadow({ mode: 'open' })
        this.start()
    }

    newVerse () {
        let cloneVerse = VERSE.content.cloneNode(true)
        this.shadowRoot.appendChild(cloneVerse)
    }

    clear () {
        this.shadowRoot.innerHTML = ''
    }

    restart () {
        this.stop()
        this.clear()
        this.start()
    }

    start () {
        this.newVerse()
        this._interval = window.setInterval(this.newVerse.bind(this), 5000)
    }

    stop () {
        window.clearInterval(this._interval)
    }
}

function upgrade () {
    customElements.define('never-ending-song', CustomElement)
}

// This is what we can import in our ES6 JavaScript
export default {
    CustomElement,
    upgrade,
}
