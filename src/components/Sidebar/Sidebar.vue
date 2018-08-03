<template>

  <aside class='main-sidebar sidebar-dark-primary elevation-4'>
    <!-- Brand Logo -->
    <a href='../../index3.html' class='brand-link'>
      <img src='../../assets/logo.png'
           alt='AdminLTE Logo'
           class='brand-image img-circle elevation-3'
           style='opacity: .8'>
      <span class='brand-text font-weight-light'>AdminLTE 3</span>
    </a>

    <!-- Sidebar -->
    <div class='sidebar'>
      <!-- Sidebar user (optional) -->
      <div class='user-panel mt-3 pb-3 mb-3 d-flex'>
        <div class='image'>
          <img src='../../assets/img/user2-160x160.jpg' class='img-circle elevation-2' alt='User Image'>
        </div>
        <div class='info'>
          <a href='#' class='d-block'>Alexander Pierce</a>
        </div>
      </div>

      <!-- Sidebar Menu -->
      <nav class='mt-2'>
        <ul class='nav nav-pills nav-sidebar flex-column' data-widget='treeview' role='menu' data-accordion='false'>
          <!-- Add icons to the links using the .nav-icon class
               with font-awesome or any other icon font library -->
          <li id='menu' class='nav-item has-treeview'>
            <a id='test'  href='#' class='nav-link'>
              <i class='nav-icon fa fa-dashboard'/>
              <p>
                Dashboard
                <i class='right fa fa-angle-left'/>
              </p>
            </a>
            <ul class='nav nav-treeview'>
              <li class='nav-item'>
                <router-link class='nav-link'  to='/'> <i class='fa fa-circle-o nav-icon'/> <p>Home</p></router-link> 
              </li>
              <li class='nav-item'>
                <router-link class='nav-link'  to='/about'> <i class='fa fa-circle-o nav-icon'/> <p>About</p></router-link> 
              </li>
              <li class='nav-item'>
                <router-link class='nav-link'  to='/bank'> <i class='fa fa-circle-o nav-icon'/> <p>Bank</p> </router-link> 
              </li>
            </ul>
          </li>
         
          <li id='menu1' class='nav-item has-treeview'>
            <a id='test1' href='#' class='nav-link'>
              <i class='nav-icon fa fa-user'/>
              <p>
                Test
                <i class='right fa fa-angle-left'/>
              </p>
            </a>
            <ul class='nav nav-treeview'>
              <li class='nav-item'>
                <router-link id='list'  class='nav-link'  to='/testview/listview'> <i class='fa fa-circle-o nav-icon'/> <p>Test Page</p></router-link> 
              </li>
            </ul>
          </li>
        </ul>
      </nav>
      <!-- /.sidebar-menu -->
    </div>
    <!-- /.sidebar -->
  </aside>
</template>

<script>
export default {
  name: "appSidebar"
};
</script>
