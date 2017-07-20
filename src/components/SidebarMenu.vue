<template>
  <ul class="sidebar-menu">
    <li class="active pageLink" v-on:click="toggleMenu">
      <router-link to="/"><i class="fa fa-desktop"></i>
        <span class="page">首页</span>
      </router-link>
    </li>
    

    <li class="pageLink" v-on:click="toggleMenu">
      <router-link to="/organization">
        <i class="fa fa-tasks"></i>
        <span class="page">组织机构</span>
      </router-link>
    </li>
     <li class="treeview">
          <a href="#">
            <i class="fa fa-share"></i> <span>系统设置</span>
            <span class="pull-right-container">
              <i class="fa fa-angle-left pull-right"></i>
            </span>
          </a>
          <ul class="treeview-menu">
            <li> <router-link to="/rolepermset"><i class="fa fa-circle-o"></i>角色权限设置</router-link></li>
            <li><router-link to="/awardauthoset"><i class="fa fa-circle-o"></i>奖扣权限设置</router-link></li>
            <li><router-link to="/globalparamset"><i class="fa fa-circle-o"></i>全局参数设置</router-link></li>
            <li><a href="#"><i class="fa fa-circle-o"></i>员工考勤配置</a></li>
            <li class="treeview">
              <a href="#"><i class="fa fa-circle-o"></i> 报表设置
                <span class="pull-right-container">
                  <i class="fa fa-angle-left pull-right"></i>
                </span>
              </a>
              <ul class="treeview-menu">
                <li><a href="#"><i class="fa fa-circle-o"></i>自定义分组</a></li>
                <li><a href="#"><i class="fa fa-circle-o"></i>自定义报表</a></li>
              </ul>
            </li>
          </ul>
        </li>

    <li class="treeview">
      <a href="#">
        <i class="fa fa-folder-o"></i>
        <span>任务大厅</span>
        <span class="pull-right-container">
          <i class="fa fa-angle-left fa-fw pull-right"></i>
        </span>
      </a>
      <ul class="treeview-menu">
        <li>
          <router-link to="/mymission">
            <i class="fa fa-circle-o"></i> 我的任务
          </router-link>
        </li>
        <li>
          <router-link to="/myaudit">
            <i class="fa fa-circle-o"></i> 我的审核

          </router-link>
        </li>
        <li>
          <router-link to="/ECharts">
            <i class="fa fa-file-pdf-o"></i> ECharts图表
          </router-link>
        </li>
        <li>
          <router-link to="/files/item4">
            <i class="fa fa-file-pdf-o"></i> 任务/公告大厅
          </router-link>
        </li>
      </ul>
    </li>
      <li class="pageLink" v-on:click="toggleMenu">
      <router-link to="/calendar"><i class="fa fa-table"></i>
        <span class="page">Tables</span>
      </router-link>
    </li>
  </ul>
</template>
<script>
export default {
  name: 'SidebarName',
  methods: {
    toggleMenu (event) {
      // remove active from li
      var active = document.querySelector('li.pageLink.active')
      if (active) {
        active.classList.remove('active')
      }
      // window.$('li.pageLink.active').removeClass('active')
      // Add it to the item that was clicked
      event.toElement.parentElement.className = 'pageLink active'
    }
  }
}
</script>
<style>
  /* override default */

  .sidebar-menu>li>a {
    padding: 12px 15px 12px 15px;
  }
  .sidebar-menu li.active>a>.fa-angle-left, .sidebar-menu li.active>a>.pull-right-container>.fa-angle-left {
    animation-name: rotate;
    animation-duration: .2s;
    animation-fill-mode: forwards;
  }
  @keyframes rotate {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(-90deg);
    }
  }
</style>
