<template>

  <!-- Content Wrapper. Contains page content -->
  <div class='content-wrapper'>
    <!-- Content Header (Page header) -->
    <section class='content-header'>
      <div class='container-fluid'>
        <div class='row mb-2'>
          <div class='col-sm-6'>
            <h1>Home page</h1>
          </div>
          <div class='col-sm-6'>
            <ol class='breadcrumb float-sm-right'>
              <li class='breadcrumb-item'><a href='#'>Home</a></li>
              <li class='breadcrumb-item active'>Home page</li>
            </ol>
          </div>
        </div>
      </div><!-- /.container-fluid -->
    </section>

    <!-- Main content -->
    <section class='content'>

      <!-- Default box -->
      <div class='card'>
        <div class='card-header'>
          <h3 class='card-title'>Title</h3>

          <div class='card-tools'>
            <button type='button' class='btn btn-tool' data-widget='collapse' data-toggle='tooltip' title='Collapse'>
            <i class='fa fa-minus'/></button>
            <button type='button' class='btn btn-tool' data-widget='remove' data-toggle='tooltip' title='Remove'>
            <i class='fa fa-times'/></button>
          </div>
        </div>
        <div class='card-body'>
          <h1>h1 สวัสดี ชาวโลก</h1>
          <h2>h2 สวัสดี ชาวโลก</h2>
          <h3>h3 สวัสดี ชาวโลก</h3>
          <h4>h4 สวัสดี ชาวโลก</h4>
          <h5>h5 สวัสดี ชาวโลก</h5>
          <h6>h6 สวัสดี ชาวโลก</h6>
          <p>p สวัสดี ชาวโลก</p>
        </div>
        <!-- /.card-body -->
        <div class='card-footer'>
          Footer
        </div>
        <!-- /.card-footer-->
      </div>
      <!-- /.card -->

    </section>
    <!-- /.content -->
  </div>
  <!-- /.content-wrapper -->

</template>


<script>
export default {
  name: "home",
  mounted: function() {
    $("#test1").removeClass("active");
    $("#list").removeClass("active");
    $("#test").addClass("active");
    $("#menu1")
      .removeClass("menu-open")
      .find(".nav-treeview")
      .css("display", "none");
    $("#menu").click(function() {
      $("#menu1")
        .removeClass("menu-open")
        .find(".nav-treeview")
        .css("display", "none");
    });
    $("#menu1").click(function() {
      $("#menu")
        .removeClass("menu-open")
        .find(".nav-treeview")
        .css("display", "none");
    });
  }
};
</script>
