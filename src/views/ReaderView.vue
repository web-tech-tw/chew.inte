<template>
  <div class="container mx-auto my-5 p-5">
    <div class="mx-auto max-w-sm rounded overflow-hidden shadow-lg">
      <div class="px-6 py-4">
        <div v-if="codeMode">
          <prism-editor
            class="code-editor"
            v-model="content"
            ref="codeEditor"
            :highlight="highlighter"
            line-numbers
          ></prism-editor>
        </div>
        <p v-else class="text-gray-700 text-base">
          {{ content }}
        </p>
      </div>
      <div v-if="gum.tags" class="px-6 pt-4 pb-2">
        <span
          v-for="(tag, index) in gum.tags"
          :key="index"
          class="
            inline-block
            bg-gray-200
            rounded-full
            px-3
            py-1
            text-sm
            font-semibold
            text-gray-700
            mr-2
            mb-2
          "
        >
          #{{ tag }}
        </span>
      </div>
    </div>
    <div>
      {{ new Date(gum.created_at * 1000) }}<br />
      {{ new Date(gum.updated_at * 1000) }}
    </div>
  </div>
</template>

<script>
// import Prism Editor
import { PrismEditor } from "vue-prism-editor";
import "vue-prism-editor/dist/prismeditor.min.css"; // import the styles somewhere

// import highlighting library (you can use any library you want just return html string)
import { highlight, languages } from "prismjs/components/prism-core";
import "prismjs/components/prism-clike";
import "prismjs/components/prism-javascript";
import "prismjs/themes/prism-tomorrow.css"; // import syntax highlighting styles

export default {
  name: "ReaderView",
  components: {
    PrismEditor,
  },
  props: {
    code: {
      type: String,
      required: true,
    },
  },
  computed: {
    content() {
      return this.gum.content || "";
    },
    codeMode() {
      return this.gum.doc_type !== "plaintext";
    }
  },
  data: () => ({
    gum: {},
  }),
  methods: {
    highlighter(code) {
      return highlight(code, languages.js); // languages.<insert language> to return html with markup
    },
  },
  created() {
    // Fetch data
    this.$axios.get(`/anonymous/${this.code}`).then((response) => {
      this.gum = response.data;
    });
  },
  mounted() {
    // Disable edit mode
    const editorTextarea = this.$refs.codeEditor?.$el?.children[1]?.children[0];
    if (editorTextarea) {
      editorTextarea.setAttribute("disabled", true);
    } else {
      console.error("editorTextarea is not found.");
    }
  },
};
</script>

<style>
/* required class */
.code-editor {
  min-height: 300px;

  /* we dont use `language-` classes anymore so thats why we need to add background and text color manually */
  background: #2d2d2d;
  color: #ccc;

  /* you must provide font-family font-size line-height. Example: */
  font-family: Fira code, Fira Mono, Consolas, Menlo, Courier, monospace;
  font-size: 14px;
  line-height: 1.5;
  padding: 5px;
}

/* optional class for removing the outline */
.prism-editor__textarea:focus {
  outline: none;
}
</style>
