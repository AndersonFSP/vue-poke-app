<template>
  <div class="login">
    <WallpaperLogin />
    <section class="login-form">
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
  @background-color: #f0f0f0;

  .login {
    display: flex;
  }

  .login-form {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    max-width: 500px;
    min-height: 100vh;
    background-color: @background-color;
    padding: clamp(35px, 8%, 70px);
  }
</style>
