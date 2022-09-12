$(function() {
    $("#header-leading").load("page/header-leading.html");
    $("#header").load("page/header.html");
    $("#footer").load("page/footer.html");
  });


  $(document).ready(function(){
    //Check to see if the window is top if not then display button
    $(window).scroll(function(){
      if ($(this).scrollTop() > 100) {
        $('.btn-top').fadeIn();
      } else {
        $('.btn-top').fadeOut();
      }
    });
   
    //Click event to scroll to top
    $('.btn-top').click(function(){
      $('html, body').animate({scrollTop : 0},400);
      return false;
    });
// scrollTop() > 100
// 設定捲動多少顯示Top按鈕
// animate({scrollTop : 0},4000);
// 設定捲動到哪個位置&捲動速度


$('[data-toggle="popover"]').popover({ trigger: "hover" })
// 彈出提示框 (Popovers)

$('#myCollapsible').collapse({
  toggle: false
})
// 折疊 (Collapse)

    var nt_checkbox = $('.js-check'),nt_checkbox_ob = $('.js-check-ob');
    nt_checkbox.click(function(){
      if(nt_checkbox.is(":checked")){
        nt_checkbox_ob.prop("disabled", false);
      }else{
        nt_checkbox_ob.prop("disabled", true);
      }
    });
});
// 同意書--確認checkbox 按鈕動作

  function bsStep(i) {
  $('.step').each(function() {
    var a, $this = $(this);
    if(i > $this.find('li').length) {
      console.log('您輸入數值已超過步驟最大數量' + $this.find('li').length + '！！！');
      a=$this.find('li').length;
    } else if(i == undefined && $this.data('step') == undefined) {
      a = 1
    } else if(i == undefined && $this.data('step') != undefined) {
      a = $(this).data('step');
    } else {
      a = i
    }
    $(this).find('li').removeClass('active');
    $(this).find('li:lt(' + a + ')').addClass('active');
  })
}
// 進度條
