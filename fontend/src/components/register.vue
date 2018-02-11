<template>
  <div class="container reg-container">
    <h4 class="reg-title text-center">注册</h4>
    <div class="field">
      <p class="control has-icons-left has-icons-right">
        <input class="input" type="email" placeholder="邮箱">
        <span class="icon is-small is-left">
          <i class="fas fa-envelope"></i>
        </span>
        <span class="icon is-small is-right">
          <i class="fas fa-check"></i>
        </span>
      </p>
    </div>
    <div class="field">
      <p class="control has-icons-left">
        <input class="input" type="password" placeholder="设置密码">
        <span class="icon is-small is-left">
          <i class="fas fa-lock"></i>
        </span>
      </p>
    </div>
    <div class="field">
      <p class="control has-icons-left">
        <input class="input" type="password" placeholder="确认密码">
        <span class="icon is-small is-left">
          <i class="fas fa-lock"></i>
        </span>
      </p>
    </div>
    <div class="field">
      <p class="control">
        <button class="button is-success register-btn" @click="register">注册</button>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Register',
  data: function () {
    return {
      a: 'a'
    }
  },
  method: {
    register: function (ev) {
      console.log('rem')
      return {
        a: 'a'
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .reg-container {
    width: 18rem;
  }
  /* .r-form-group {
    width: 18rem;
  } */
  .field:not(:last-child) {
      margin-bottom: 1.5rem;
  }
  .register-btn {
    width: 100%;
  }
</style>
