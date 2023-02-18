document.addEventListener('DOMContentLoaded', function(event)
{
   var OverlayMenu1 = document.querySelector('#wb_OverlayMenu1');
   var bsOverlayMenu1 = new bootstrap.Tooltip(OverlayMenu1, {offset:[0,14],placement:'bottom', html: true, sanitize: false, title: '<span style="color:#F5F5F5;font-family:Arial;font-size:13px;">Click the hamburger icon to open the menu</span>', trigger: 'manual', animation: true, customClass:'ToolTip1'});
   OverlayMenu1.addEventListener('inserted.bs.tooltip', function(e)
   {
      var tooltip = document.getElementById(e.target.getAttribute('aria-describedby'));
      tooltip.classList.add('animate-show');
   });
   OverlayMenu1.addEventListener('hide.bs.tooltip', function(e)
   {
      var tooltip = document.getElementById(e.target.getAttribute('aria-describedby'));
      tooltip.classList.remove('animate-show');
      var forceReflow = e.target.offsetWidth;
   });
   var progressbar_uidesign = document.querySelector('#progressbar_uidesign .progress-bar');
   window.addEventListener('scroll', function(event)
   {
      var bounding = progressbar_uidesign.getBoundingClientRect();
      var current = window.innerHeight - bounding.top;
      var max = window.innerHeight + bounding.height;
      var currentPercent = Math.min(50, Math.max(10, current * 100 / max));
      var val = Math.round(((currentPercent - 10) / (50 - 10)) * 62);
      progressbar_uidesign.style.width = val + '%';
   });
   window.dispatchEvent(new CustomEvent('scroll'));
   var progressbar_jquery = document.querySelector('#progressbar_jquery .progress-bar');
   window.addEventListener('scroll', function(event)
   {
      var bounding = progressbar_jquery.getBoundingClientRect();
      var current = window.innerHeight - bounding.top;
      var max = window.innerHeight + bounding.height;
      var currentPercent = Math.min(50, Math.max(10, current * 100 / max));
      var val = Math.round(((currentPercent - 10) / (50 - 10)) * 79);
      progressbar_jquery.style.width = val + '%';
   });
   window.dispatchEvent(new CustomEvent('scroll'));
   var progressbar_php = document.querySelector('#progressbar_php .progress-bar');
   window.addEventListener('scroll', function(event)
   {
      var bounding = progressbar_php.getBoundingClientRect();
      var current = window.innerHeight - bounding.top;
      var max = window.innerHeight + bounding.height;
      var currentPercent = Math.min(50, Math.max(10, current * 100 / max));
      var val = Math.round(((currentPercent - 10) / (50 - 10)) * 65);
      progressbar_php.style.width = val + '%';
   });
   window.dispatchEvent(new CustomEvent('scroll'));
   var progressbar_html = document.querySelector('#progressbar_html .progress-bar');
   window.addEventListener('scroll', function(event)
   {
      var bounding = progressbar_html.getBoundingClientRect();
      var current = window.innerHeight - bounding.top;
      var max = window.innerHeight + bounding.height;
      var currentPercent = Math.min(50, Math.max(10, current * 100 / max));
      var val = Math.round(((currentPercent - 10) / (50 - 10)) * 83);
      progressbar_html.style.width = val + '%';
   });
   window.dispatchEvent(new CustomEvent('scroll'));
});
$(document).ready(function()
{
   $('#OverlayMenu1-overlay').overlay({hideTransition:true});
   $('#OverlayMenu1').on('click', function(e)
   {
      $.overlay.show($('#OverlayMenu1-overlay'));
      return false;
   });
   function onScrollCard69()
   {
      var $obj = $("#wb_Card69");
      if (!$obj.hasClass("in-viewport") && $obj.inViewPort(false))
      {
         $obj.addClass("in-viewport");
         ShowObjectWithEffect('wb_Card69', 1, 'fade', 1);
      }
   }
   onScrollCard69();
   $(window).scroll(function(event)
   {
      onScrollCard69();
   });
   $("a[href*='#LayoutGrid6']").click(function(event)
   {
      event.preventDefault();
      $('html, body').stop().animate({ scrollTop: $('#wb_LayoutGrid6').offset().top-88 }, 600, 'easeOutCirc');
   });
});
$(document).ready(function()
{
   var $countup = $('#count-up h1');
   
   $countup.each(function() 
   {
     var $obj = $(this);
     $obj.data('value', parseInt($obj.html()));
     $obj.data('done', false);
     $obj.html('0');
   });
   $(window).bind('scroll', function() 
   {
      $countup.each(function() 
      {
         var $obj = $(this);
         if (!$obj.data('done') && $(window).scrollTop() + $(window).height() >= $obj.offset().top) 
         {
            $obj.data('done', true);
            $obj.animate({scroll: 1}, 
            { 
               duration: 3000, 
               step: function(now) 
               {
                  var $obj = $(this);
                  var val = Math.round($obj.data('value') * now);
                  $obj.html(val);
               }
            });
         }
      });
   }).triggerHandler('scroll');
});
var wb_Timer1;
function TimerStartTimer1()
{
   wb_Timer1 = setTimeout(function()
   {
      var event = null;
      bootstrap.Tooltip.getInstance('#wb_OverlayMenu1').show();
   }, 2000);
}
function TimerStopTimer1()
{
   clearTimeout(wb_Timer1);
}
TimerStartTimer1();
