;(function($){
  var iHeight=$(window).height();
  var headerHeight = $('header').height();
  var aImg= ["img/wall.jpg","img/wall2.jpg","img/wall3.jpg","img/wall4.jpg"];

  $('.bulle>figure').hide();

  if($('.image > img').attr("src"))
  {
    resizeImage();
  }
  else
  {
    addImage();
  }
  function addImage()
  {
    if($('.ban:visible'))
    {
     $('.image').css({
      backgroundImage:'url('+aImg[Math.floor(Math.random()*4)]+')',
      backgroundSize:"cover", 

    });
   }
   else{
    $('.image').css({
      backgroundColor:"white",

    });
  }
  $('.image>img').remove();
  resizeImage();

};
function resizeImage()
{
  if($('.image').size())
  {
    $('.image').css({
      height:iHeight,
      width:'100%',
      backgroundRepeat:'no-repeat',
    });
  }
};
function dontOver(height)
{
  var height = $(window).height();
  if((height-300)<150)
  {
    $('.image>ul').css({
      top:180,
    });

  }

};
function hideLogo()
{
  var logo = $('.logo');
  if(iHeight<=350)
  {
    logo.hide();
  }
  else
  {
    logo.show();
  }

};
function ShowHideNavBar()
{
  $(document).load()
  {
    if($('#accueil').size())
    {
      var nHeightMenuAccueil = ($('ul.mainMenu p').height())*2;
      if($(window).scrollTop()<=iHeight-nHeightMenuAccueil)
      {
        $('.top-bar').hide();
      }
      else
      {
        $('.top-bar').show();
      }
      $(window).scroll(function(){

        if($(window).scrollTop()<=iHeight-nHeightMenuAccueil)
        {
          $('.top-bar').fadeOut('fast');
        }
        else
        {
          $('.top-bar').fadeIn('normal');
        }

      });
    }
  }
};


$('#imgTracker a').hover(function(){
 var oP =  $(this).attr('href');
 $('.track').css({
  backgroundImage:"url("+oP+")",
  backgroundRepeat:"no-repeat",
  backgroundPosition:'center 20px',
  overflow:"hidden",
});
});
$.fn.goTo =function()
{
  $('html, body').animate({
    scrollTop: $(this).offset().top + 'px'
  }, 'normal');
  return this;
  
};
var sLink = $('img.voir').attr('href');
$('img.voir').css({
  backgroundImage:"url("+sLink+")",
  backgroundRepeat:"no-repeat",
  backgroundPosition:'center 20px',
  overflow:"hidden",
});
/*if($('#container').size()&&!$('#accueil').size())
{

  $('#container').css({
    minHeight:iHeight,
    display:"block",
  }).goTo();
  $('.ban,.ban>ul').css({
    maxHeight:iHeight/2,
    margin:0,
  });
  $('.ban li>a>i').css({
    fontSize:(iHeight/100)*35,
  });

}*/

if($('#container').size()&&$('#accueil').size())
{
  $('.ban li:first-child').click(function(e){
   e.preventDefault();
   $('#container').css({
    minHeight:iHeight,
    display:"block",
  }).goTo();
 });
}
if($('#container').size()&&!$('#accueil').size())
{
  $('a[href="#accueil"]').click(function(e){
   $('#container').css({
    minHeight:iHeight,
    display:"block",
  }).goTo();
 });
  $('a[href="#top"]').click(function(e){
   e.preventDefault();
   $('#top').goTo();
 });
  $('a[href="#down"]').click(function(e){
    e.preventDefault;
    $('#down').goTo();
  });
}
$('.main').css({
  minHeight:iHeight,
});

$('a[href~="index"]').on("click",function(e){
  $('#container').goTo();

});

function orbit(){
  var iHeight=$(window).height();
  if(!$('.ban:visible')){
    var oSlider=  $('.orbit-container>ul');
    oSlider.show().css({  
      top:0,
      right:0,
      left:0,
      bottom:0,
      margin:"auto",
      overflow:"hidden",
    });
  }
  else
  {
    var oSlider=  $('.orbit-container>ul');
    oSlider.hide();
  }

};
$(window).resize(function()
{
  var iHeight=$(window).height();
  var logo = $('.logo');
  $('.image').css({
    height:iHeight,
    width:'100%',
  });
  $('.ban,.ban>ul').css({
    maxHeight:iHeight/2,
    margin:0,
  });
  $('.ban li>a>i').css({
    fontSize:(iHeight/100)*30,
  });

  if(iHeight<=350)
  {
    logo.hide();
    $('header>nav, header>ul').css({
      height:45,
    });
  }
  else
  {
    logo.show(); 
    $('header>nav, header>ul').css({
      height:0,
    });

  }
  if($('#container').size())
  {

    $('#container').css({
      minHeight:iHeight,
    });
    $('.ban').hide();
  }
  dontOver(iHeight);

});   


dontOver();
orbit();
ShowHideNavBar();


}).call(this,jQuery);


