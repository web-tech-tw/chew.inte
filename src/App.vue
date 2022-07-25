<template>
  <div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  created() {
    alert('仍在開發階段，無法保證資料能否保留，請勿使用');
  }
}
</script>
