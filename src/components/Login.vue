<template>
<section class="login-page">
  <div class="login-box ">
    <div class="login-logo">
      <a href="../../index2.html"><b>Admin</b>LTE</a>
    </div>
    <!-- /.login-logo -->
    <div class="login-box-body">
      <p class="login-box-msg">Sign in to start your session</p>
      <form v-on:submit.prevent = "login">
        <div class="form-group has-feedback">
          <input type="text" class="form-control" placeholder="Username" v-model="username">
          <span class="glyphicon glyphicon-envelope form-control-feedback"></span>
        </div>
        <div class="form-group has-feedback">
          <input type="password" class="form-control" placeholder="Password" v-model="password">
          <span class="glyphicon glyphicon-lock form-control-feedback"></span>
        </div>
        <div class="row">
          <div class="col-xs-8">
            <div class="checkbox icheck">
              <label>
                <div class="icheckbox_square-blue" aria-checked="false" aria-disabled="false" style="position: relative;"><input type="checkbox" style="position: absolute; top: -20%; left: -20%; display: block; width: 140%; height: 140%; margin: 0px; padding: 0px; background: rgb(255, 255, 255); border: 0px; opacity: 0;"><ins class="iCheck-helper" style="position: absolute; top: -20%; left: -20%; display: block; width: 140%; height: 140%; margin: 0px; padding: 0px; background: rgb(255, 255, 255); border: 0px; opacity: 0;"></ins></div> Remember Me
              </label>
            </div>
          </div>
          <!-- /.col -->
          <div class="col-xs-4">
            <button type="submit" class="btn btn-primary btn-block btn-flat">Sign In</button>
          </div>
          <!-- /.col -->
        </div>
      </form>

      <a href="#">I forgot my password</a><br>
      <a href="register.html" class="text-center">Register a new membership</a>

    </div>
    <!-- /.login-box-body -->
  </div>
  </section>
</template>

<script>
  import login from '@/api/login'
  import {mapGetters,mapActions} from 'vuex'
  export default {
    name: 'Login',
    data: function () {
      return {
        section: 'Login',
        loading: '',
        username: '',
        password: '',
        response: ''
      }
    },
    methods: {
      login () {
        login.userlogin({
          username: this.username,
          password: this.password,
          rememberMe: true
        }).then((res) => {
          this.store.dispatch("setusername",this.username)
          $.cookie("token",this.username);
          this.$router.push({path:"/"});
        }
        ).catch(error => console.error('error', error));

      }
    },
    mounted(){
      
    }
  
  }
 
</script>

<style>
  .login-page{
    height: 100%;
    overflow: hidden;
  }
  .login-box{
    height: 100%;
    overflow: hidden;
  }
</style>
<style>
  body{
    background: #d2d6de;
  }
</style>
