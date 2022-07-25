<template>
  <div class="container mx-auto my-5 p-5">
    <div v-if="!result">
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
export default {
  name: "WriterView",
  data: () => ({
    content: "",
    result: "",
  }),
  methods: {
    async handleSubmit() {
      const form = new URLSearchParams();
      form.set("content", this.content);
      form.set("doc_type", "plaintext");
      const xhr = await this.$axios.post("/anonymous", form);
      this.result = xhr.data;
    },
  },
};
</script>
