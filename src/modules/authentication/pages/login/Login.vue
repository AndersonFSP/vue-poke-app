<template>
  <div class="login">
    <WallpaperLogin />
    <section class="authentication-form">
      <FormLogin />
      <GoogleLogin />
    </section>
  </div>
</template>

<script lang="ts" setup>
import GoogleLogin from '@/modules/authentication/components/GoogleLogin.vue'
import FormLogin from '@/modules/authentication/components/FormLogin.vue'
import WallpaperLogin from '@/modules/authentication/components/WallpaperLogin.vue'
</script>

<style lang="less" scoped>
@import '@/modules/authentication/assets/styles';

.login {
  display: flex;
}
</style>
