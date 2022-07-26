<template>
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
};
</script>
