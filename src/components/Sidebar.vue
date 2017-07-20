<template>
  <aside class="main-sidebar">
    <!-- Inner sidebar -->
    <section class="sidebar">
      <!-- user panel (Optional) -->
      <div class="user-panel">
        <div class="pull-left image">
          <img src="static/avatar.png" class="img-circle" alt="User Image">
        </div>
        <div class="pull-left info">
          <p>{{ getUsername.userName}}</p>

          <a href="#"><i class="fa fa-circle text-success"></i> Online</a>
        </div>
      </div><!-- /.user-panel -->

      <!-- Search Form (Optional) -->
      <form action="#" method="get" class="sidebar-form">
        <div class="input-group">
          <input type="text" name="q" class="form-control" placeholder="菜单查询...">
          <span class="input-group-btn">
            <button type="submit" name="search" id="search-btn" class="btn btn-flat"><i class="fa fa-search"></i></button>
          </span>
        </div>
      </form><!-- /.sidebar-form -->

      <!-- Sidebar Menu -->
        <SidebarMenu></SidebarMenu>
      <!-- /.sidebar-menu -->

    </section><!-- /.sidebar -->
  </aside><!-- /.main-sidebar -->

</template>

<script>
import { mapGetters } from 'vuex'
import SidebarMenu from './SidebarMenu'
export default {
  data () {
    return {}
  },
  computed: {
    ...mapGetters([
      'getUsername'
    ])
  },
  mounted(){
    
  },
  components: {
    SidebarMenu
  }
}
</script>
<style scope>
 
</style>