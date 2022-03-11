$(document).ready(function () {
  var trigger = $(".hamburger"),
    overlay = $(".overlay"),
    isClosed = false;

  trigger.click(function () {
    hamburger_cross();
  });

  function hamburger_cross() {
    if (isClosed == true) {
      overlay.hide();
      trigger.removeClass("is-open");
      trigger.addClass("is-closed");
      isClosed = false;
    } else {
      overlay.show();
      trigger.removeClass("is-closed");
      trigger.addClass("is-open");
      isClosed = true;
    }
  }

  $('[data-toggle="offcanvas"]').click(function () {
    $("#wrapper").toggleClass("toggled");
  });

  $('#order_nav li').click(function () {
    console.log(this);
    $('#order_nav li').removeClass();

    $(this).addClass("active");
  });
});

$(function(){
  $('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {

    var href = $(e.target).attr('href');
    var $curr = $(".process-model  a[href='" + href + "']").parent();

    $('.process-model li').removeClass();

    $curr.addClass("active");
    $curr.prevAll().addClass("visited");
  });
});

function resizePageCom() {
  var reuslt = '';
  var windowInH = window.innerHeight;
  var navH = $('#mainNav').height();

  reuslt = windowInH - navH - 200;

  return reuslt
}