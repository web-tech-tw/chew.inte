<template>
  <div class="container mx-auto my-5 p-5">
    <div v-if="!result">
      <div v-if="codeMode">
        <prism-editor
          class="code-editor"
          v-model="content"
          :highlight="highlighter"
          line-numbers
        ></prism-editor>
      </div>
      <div v-else>
        <textarea
          class="
            form-control
            block
            w-full
            px-3
            py-1.5
            text-base
            font-normal
            text-gray-700
            bg-white bg-clip-padding
            border border-solid border-gray-300
            rounded
            transition
            ease-in-out
            m-0
            focus:text-gray-700
            focus:bg-white
            focus:border-blue-600
            focus:outline-none
          "
          v-model="content"
        ></textarea>
      </div>
      <button
        class="
          w-full
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
        @click="handleSubmit"
      >
        我打完了
      </button>
    </div>
    <div v-else>
      <div class="w-64 mx-auto">
        <h4 class="font-semibold text-slate-900">片段代碼：</h4>
        <span
          class="
            rounded-full
            bg-slate-100
            px-2
            py-1
            text-xs
            font-semibold
            text-slate-700
          "
        >
          {{ result._id }}
        </span>
      </div>
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
  name: "WriterView",
  components: {
    PrismEditor,
  },
  data: () => ({
    codeMode: true,
    content: "",
    result: "",
  }),
  methods: {
    highlighter(code) {
      return highlight(code, languages.js); // languages.<insert language> to return html with markup
    },
    async handleSubmit() {
      const form = new URLSearchParams();
      form.append("content", this.content);
      const xhr = await this.$axios.post("/anonymous", form);
      this.result = xhr.data;
    },
  },
};
</script>

<style>
/* required class */
.code-editor {
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
