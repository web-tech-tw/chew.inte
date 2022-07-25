<template>
  <div class="relative bg-white">
    <app-header/>
    <router-view/>
    <app-footer/>
  </div>
</template>

<script>
import AppHeader from "./Header"
import AppFooter from "./Footer"

export default {
  name: 'LayoutIndex',
  components: {AppHeader, AppFooter},
}
</script>
