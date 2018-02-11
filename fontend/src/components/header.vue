<template>
  <header class="container">
      <div class="header-banner"></div>
      <div class="columns nav">
        <div class="column is-2">
          logo
        </div>
        <div class="column text-right nav-link">
          <router-link to='/'>首页</router-link>
          <router-link to='/register'>注册</router-link>
          <router-link to='/login'>登录</router-link>
          <router-link to=''>个人中心</router-link>
          <a href="javascript:;">登出</a>
        </div>
      </div>
    </header>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.nav {
  height: 80px;
}
.nav-link {
  padding-top: 30px;
}
.nav-link a{
  margin-left: 30px;
  color: #000;
}
.nav-link a:hover{
  color:#f1343a;
}
.router-link-exact-active {
  color:#f1343a !important;
}
</style>
