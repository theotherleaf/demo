$(document).ready(function() {
    $("#header").load("layout/header.html");
    $("#header_signin").load("layout/header_signin.html");
    $("#header_apply").load("layout/header_apply.html");
    $("#header_site").load("layout/header_site.html");
    $("#header_apply_none").load("layout/header_apply_none.html");
    $("#header_site_none").load("layout/header_site_none.html");
    $("#footer").load("layout/footer.html");
  });

// 字型縮放
  function SetFont(size)
  {
      var divBody = document.getElementById("wrapper");

//文章內容 須放在.wrapper內

      if(!divBody)
      {
          return;
      }
      divBody.style.fontSize = size + "rem";
      var divChildBody = divBody.childNodes;
      for(var i = 0; i < divChildBody.length; i++)
      {
          if (divChildBody[i].nodeType==1)
          {
              divChildBody[i].style.fontSize = size + "rem";
          }
      }
  }

  $(document).ready(function () {
    //Check to see if the window is top if not then display button
    $(window).scroll(function () {
      if ($(this).scrollTop() > 100) {
        $('.btn-top').fadeIn();
      } else {
        $('.btn-top').fadeOut();
      }
    });

    //Click event to scroll to top
    $('.btn-top').click(function () {
      $('html, body').animate({ scrollTop: 0 }, 400);
      return false;
    });
    // scrollTop() > 100
    // 設定捲動多少顯示Top按鈕
    // animate({scrollTop : 0},4000);
    // 設定捲動到哪個位置&捲動速度
  });

  $(function() {
    var len = 23; // 超過23個字以"..."取代
    $(".23ellipsis").each(function(i) {
      if ($(this).text().length > len) {
        $(this).attr("title", $(this).text());
        var text = $(this).text().substring(0, len - 1) + "...";
        $(this).text(text);
      }
    });
  });

// 點擊次選單
$('.nav-link').on('click',function(){
    // 叫js幫你點上面的選單，執行關閉選單
    $('.navbar-toggler.btn').click();
    })