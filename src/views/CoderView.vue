<template>
  <div>
    <prism-editor
      class="code-editor"
      v-model="content"
      :highlight="highlighter"
      line-numbers
    ></prism-editor>
    <div class="operations">
      <button
        class="
          mt-3
          flex
          items-center
          justify-center
          px-8
          py-3
          border border-transparent
          text-base
          font-medium
          rounded-md
          text-violet-100
          bg-violet-700
          hover:bg-violet-600
          md:py-4 md:text-lg md:px-10
        "
        @click="handleSubmit"
      >
        我打完了
      </button>
      <button
        class="
          mt-3
          flex
          items-center
          justify-center
          px-8
          py-3
          border border-transparent
          text-base
          font-medium
          rounded-md
          text-violet-700
          bg-violet-100
          hover:bg-violet-200
          md:py-4 md:text-lg md:px-10
        "
        @click="goWriter"
      >
        一般模式
      </button>
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
  name: "CoderView",
  components: {
    PrismEditor,
  },
  data: () => ({
    content: "",
  }),
  methods: {
    highlighter(code) {
      return highlight(code, languages.js); // languages.<insert language> to return html with markup
    },
    goWriter() {
      this.$router.push("/writer");
    },
    async handleSubmit() {
      const form = new URLSearchParams();
      form.set("content", this.content);
      form.set("doc_type", "javascript");
      const xhr = await this.$axios.post("/anonymous", form);
      this.$router.push({
        name: "code",
        params: {
          result: xhr.data,
        },
      });
    },
  },
};
</script>

<style>
/* required class */
.code-editor {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

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

.operations {
  min-width: 100px;
  position: absolute;
  top: 0;
  right: 0;
}
</style>
