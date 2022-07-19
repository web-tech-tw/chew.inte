<template>
  <div class="container mx-auto my-5 p-5">
    <div class="mx-auto max-w-sm rounded overflow-hidden shadow-lg">
      <div class="px-6 py-4">
        <p class="text-gray-700 text-base">
          {{ gum.content }}
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
export default {
  name: "ReaderView",
  props: {
    code: {
      type: String,
      required: true,
    },
  },
  data: () => ({
    gum: {},
  }),
  created() {
    this.$axios.get(`/anonymous/${this.code}`).then((response) => {
      this.gum = response.data;
    });
  },
};
</script>
