<template>
  <div class="register">
    <section class="authentication-form">
      <FormRegister />
    </section>
    <section class="wallpaper"></section>
  </div>
</template>

<script lang="ts" setup>
import FormRegister from '@/modules/authentication/components/FormRegister.vue'
</script>

<style lang="less" scoped>
@import '@/modules/authentication/assets/styles';

.register {
  display: flex;
}
.wallpaper {
  width: 100%;
  background-size: cover;
  background-image: url('@/assets/images/register-background.png');
  background-position: right;
  flex: 1;
}
</style>
