<template>
  <!-- Content Wrapper. Contains page content -->
  <div class='content-wrapper'>
    <!-- Content Header (Page header) -->
    <section class='content-header'>
      <div class='container-fluid'>
        <div class='row mb-2'>
          <div class='col-sm-6'>
            <h1>About</h1>
          </div>
          <div class='col-sm-6'>
            <ol class='breadcrumb float-sm-right'>
              <li class='breadcrumb-item'><a href='#'>Home</a></li>
              <li class='breadcrumb-item active'>About</li>
            </ol>
          </div>
        </div>
      </div><!-- /.container-fluid -->
    </section>

    <!-- Main content -->
    <section class='content'>
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
          <div class='about'>
            <h1>h1 สวัสดี ชาวโลก</h1>
            <h2>h2 สวัสดี ชาวโลก</h2>
            <h3>h3 สวัสดี ชาวโลก</h3>
            <h4>h4 สวัสดี ชาวโลก</h4>
            <h5>h5 สวัสดี ชาวโลก</h5>
            <h6>h6 สวัสดี ชาวโลก</h6>
            <p>p สวัสดี ชาวโลก</p>
            <hr>


            <h1>Kanit Font <br><small>OpenType Feature Test</small></h1>

            <hr>

            <p>Kanit is a formal loopless Thai and Sans Latin typeface. It is a combination of Humanist Sans Serif with a curve of Capsulated Geometric style that suits for various usage in the present or even in the future. It was designed to have a 90 degree terminal in order to decrease spacing between each letter, but preserve readability and legibility even in a small point size.</p>
            <p>Kanit means methametics.</p>
            <p>The Kanit project is led by Cadson Demak, a type foundry in Thailand. To contribute, see <a href='//github.com/cadsondemak/kanit'>github.com/cadsondemak/kanit</a></p>

            <hr>

            <section id='thai'>
              <h4>ภาษาไทย (Standard Thai)</h4>

              <div class='test-text'>
                <p>พี่ป๋ำฎูนู๋น้ำเป่าฝุ่นหญู่ก้นปี่</p>
                <p>ฝุ่น<span style='color:red;'>น้ำ</span>ท้องฟ้า ทุ่งหญ้า<span style='color:red;'>ป้ำ</span>เป๋อ ชนชั้นกระฎุมพี เป่าปี่กตัญญู ดูนาฬิกา<span style='color:red;'>ซ้ำ</span>ซ้อน</p>
              </div>
            </section>

            <hr>

            <section id='pal-san'>
              <h4>ภาษาบาลี/สันสกฤต (Pali/Sanskrit)</h4>

              <div class='test-text'>
                <p lang='pi-Thai'>ฐาตุํ ญาติํ อุปฺปฏฺฐานํ ปุํลิงฺคํ วาปิํ ปํสุํ วฏฺฏุํ</p>
              </div>

              <p><small>Descenderless of “ญ” &amp; “ฐ” are preferable forms when specify <code>lang=pi</code> or <code>lang=sa</code> in HTML elements.</small></p>

              <pre class='html'><code>&lt;p lang=&quot;pi-Thai&quot;&gt;ฐาตุํ ญาติํ อุปฺปฏฺฐานํ ปุํลิงฺคํ วาปิํ ปํสุํ วฏฺฏุํ&lt;/p&gt;</code></pre>
              <pre class='css'><code>body { font-feature-settings: &quot;locl&quot;; }</code></pre>
            </section>

            <hr>

            <section id='minority-languages'>
              <h4>ภาษาชาติพันธุ์ (Minority languages)</h4>
              <div class='test-text'>
                <p>ปะเฺติ็ลฺ โฺญฺ็จฺ ปั็วฮฺ ทฺ็อง เปฺิ็ว มูํย แต็่ง เจฺํอ<br>เปรฺิ่ห์ โจ๊่ เปฺี่ย โฺทร ม็่อง เติ็ง อาื ยาึ จือรฺุ การฺู</p>
              </div>
            </section>

            <hr>

            <section id='localized-forms'>
              <h4>Localized forms</h4>
              <div class='test-text'>
                <p lang='ro'>Gheorghe, obezul, a reuşit să obţină jucându-se un flux în Quebec de o mie kilowaţioră.</p>
                <p lang='ca'>COL&middot;LEGI cel&middot;la paral&middot;lelo col&middot;lecció</p>
              </div>
              <pre class='html'><code>&lt;p lang=&quot;ro&quot;&gt;Gheorghe, obezul, a reuşit să obţină jucându-se un flux în Quebec de o mie kilowaţioră.&lt;/p&gt;</code></pre>
              <pre class='html'><code>&lt;p lang=&quot;ca&quot;&gt;COL·LEGI cel·la paral·lelo col·lecció&lt;/p&gt;</code></pre>
            </section>

            <hr>

            <section id='ligatures'>
              <h4>ligatures</h4>
              <div class='test-text'>
                <p>ฤๅษีมีข่าวฦๅ five flowers</p>
              </div>
              <pre class='css'><code>body { font-variant: common-ligatures; }</code></pre>
            </section>

            <hr>

            <section id='fractions'>
              <h4>Fractions</h4>
              <div class='test-text'>
                <p class='frac'>12345/67890</p>
              </div>
              <pre class='html'><code>1&amp;thinsp;&amp;frac14; 5&amp;thinsp;&amp;frac12; 9&amp;thinsp;&amp;frac34; &lt;span class=&quot;frac&quot;&gt;1/3 2/3 1/8 3/8 5/8 7/8&lt;/span&gt;
              &lt;span class=&quot;frac&quot;&gt;12345/67890&lt;/span&gt;</code></pre>
              <pre class='css'><code>.frac { font-feature-settings: &quot;frac&quot;; }</code></pre>
            </section>

            <hr>

            <section id='sub-supe'>
              <h4>Subscripts &amp; Superscripts</h4>
              <div class='test-text'>
                <p>H<sub>2</sub>O × 9.87<sup>654</sup> ≠ √π ÷ World<sup>3</sup>!</p>
              </div>

              <pre class='html'><code>H&lt;sub&gt;2&lt;/sub&gt;O &amp;times; 9.87&lt;sup&gt;654&lt;/sup&gt; &amp;#x2260; &amp;radic;&amp;pi; &amp;divide; World&lt;sup&gt;3&lt;/sup&gt;!</code></pre>
              <pre class='css'><code>sub { font-feature-settings: &quot;subs&quot;; }
              sup { font-feature-settings: &quot;sups&quot;; }</code></pre>
            </section>

            <hr>

            <section id='ordinal'>
              <h4>Ordinal indicator</h4>
              <div class='test-text'>
                <p class='ordn'>9o 5a 7O 3A</p>
              </div>

              <pre class='html'><code>&lt;p class=&quot;ordn&quot;&gt;9o 5a 7O 3A&lt;/p&gt;</code></pre>
              <pre class='css'><code>.ordn { font-feature-settings: &quot;ordn&quot;; }</code></pre>
            </section>

          </div>
        </div>



      </div>
    </section>
  </div>

</template>

<script>
export default {
  name: "listview",
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
