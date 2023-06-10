<template>
  <router-view />
</template>

<script>
export default {
  name: 'App',
}
</script>

<style>
/* General CSS Styling */
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
body {
  margin: 0;
  padding: 0;
}
* {
  box-sizing: border-box;
}

/* Login and Signup Page CSS Styling */
.login, .signup {
  display: block;
  margin: auto;
  width: 350px;
  padding: 0;
}
.login .logo, .signup .logo {
  width: 150px;
  margin-top: 50px;
}
.login .heading, .signup .heading {
  font-size: 22px;
  font-weight: 600;
}
.login .form input, .login .form button, .signup .form input, .signup .form button {
  width: 100%;
  margin: auto;
  font-size: 14px;
  display: block;
  font-weight: 400;
  padding: 10px 16px;
  margin-top: 20px;
  border: 1px solid #333;
}
.login .form button, .signup .form button {
  color: #fff;
  background-color:dodgerblue;
  border: 1px solid dodgerblue;
}
.login .footer, .signup .footer {
  font-size: small;
}
</style>
