$(document).ready(function () {
  var trigger = $(".cro_hme"),
    overlay = $(".overlay"),
    isClosed = false;

  trigger.click(function () {
    cro_hme_cross();
  });

  function cro_hme_cross() {
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