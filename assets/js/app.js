// appear search bar on small screen
$('.search-btn').on('click',function(){
    $('.nav-input input').css('display','block');
    $('.cross').css('display','block');
    
})
$('.cross').on('click',function(){
    $('.nav-input input').css('display','none');
    $(this).css('display','none');
    
})
// Side-Bar//Filter Bar
function openNav() {
    document.getElementById("mySidenav").style.width = "240px";
    document.getElementById("close").style.display = 'block';
    document.getElementById("backdrop2").style.display = 'block';
    document.getElementById("side-btn").style.width = "260px";
    document.getElementById("account-body").style.overflowY = 'hidden';
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("close").style.display = 'none';
    document.getElementById("backdrop2").style.display = 'none';
    document.getElementById("side-btn").style.width = "0";
    document.getElementById("account-body").style.overflowY = 'scroll';
}
// mobile sidear header
function openHeadNav() {
    document.getElementById("HeadSidebar").style.width = "240px";
    document.getElementById("backdrop").style.display = 'block';
    document.getElementById("account-body").style.overflowY = 'hidden';
  }
  
  function closeHeadNav() {
    document.getElementById("HeadSidebar").style.width = "0";
    document.getElementById("backdrop").style.display = 'none';
    document.getElementById("account-body").style.overflowY = 'scroll';
  }


  $('.owl-carousel').owlCarousel({
    margin: 10,
    slideBy: 1,
    dots: false,
    center: false,
    responsiveClass: true,
    nav: true,
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    autoplay: true,
    autoplay: true,
    autoplayTimeout: 1600,
    autoplayHoverPause: true,
    // merge:true,
    responsive: {
        0: {
            items: 1
        },

        380: {
            items: 1.2
        },
        425: {
            items: 1.5
        },
        540: {
            items: 2.2
        },

        660: {
            items: 2.4
        },
        900: {
            items: 3.6
        },
        1024: {
            items: 4.6
        },

    }
});

// the selector will match all input controls of type :checkbox
// and attach a click event handler 
$("input:checkbox").on('click', function() {
    var $box = $(this);
    if ($box.is(":checked")) {
      var group = "input:checkbox[name='" + $box.attr("name") + "']";
      $(group).prop("checked", false);
      $box.prop("checked", true);
    } else {
      $box.prop("checked", false);
    }
  });

var coll = document.getElementsByClassName("collapsible__div");
var i;
for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function () {
        this.classList.toggle("active__div");
        var content = this.nextElementSibling;
        if (content.style.maxHeight && content.style.maxHeight!='0px') {
            content.style.maxHeight = null;
        } else {
            content.style.maxHeight = content.scrollHeight + "px";
        }
    });
}


$('.checked').each(function() {
    $(this).change(function() {
        if($(this).prop('checked')) {
            var main = $(this).parents().eq(3)
            main.prev().toggleClass('active__div')
            main.css('maxHeight', '0px')
            var selected = main.prev().find('small').text('\n['+$(this).parents().eq(0).text()+']')
            selected.html(selected.html().replace('\n', '<br>'))
            
            var main2 = main.parents().eq(0).next()
            main2.children().eq(0).toggleClass('active__div')
            var content = main2.find('.content__div')
            content.css('maxHeight', content.prop('scrollHeight') + "px")
        }
    })
})

// market Filter Fixed
$(window).scroll(function(e){ 
    var $el = $('.fixed-filter'); 
    var $acc=$('#account-id');
    var isPositionFixed = ($el.css('position') == 'fixed');
    if ($(this).scrollTop() >= 65 && !isPositionFixed){ 
      $el.css({'position': 'fixed', 'top': '0px'}); 
      $el.css({'box-shadow':'0 0 5px #cccc'});
      $el.css({'padding':'3px 10px'});
      $acc.css({'margin-top':'40px'});
    }
    if ($(this).scrollTop() <= 65 && isPositionFixed){
      $el.css({'position': 'static', 'top': '0px'}); 
      $el.css({'box-shadow':'none'});
      $el.css({'padding':'0px 10px'});
      $acc.css({'margin-top':'0px'});
    } 
  });

