<template>
  <div class="bg-violet-500">
    <div class="container my-5 px-9 py-5">
      <div class="max-w-sm rounded overflow-hidden shadow-lg px-3 py-5 bg-white"></div>
      <div class="mx-3 my-5 text-white">
        或者，將片段代碼傳送給你的朋友，讓他們利用代碼查詢這份的文字片段
      </div>
      <div class="max-w-sm rounded overflow-hidden shadow-lg px-3 py-5 bg-white">
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
          some_code_here
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CodeView",
  props: {
    result: {
      type: Object,
      required: true,
    },
  },
  created() {
    if (!this.result) {
      this.$router.replace("/");
    }
  },
};
</script>
