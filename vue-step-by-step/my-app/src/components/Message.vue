<template>
<div class="box is-info">
  <p><slot></slot></p>
</div>
</template>

<script>
export default {
  name: "Message"
}
</script>

<style scoped>
  .box {
    background: #e3e3e3;
    padding: 10px;
    border: 1px solid #c5c5c5;
  }
</style>
