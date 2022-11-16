/* Otherwise just put the config content (json): */
$(function(){
  
particlesJS('particles-js',
  
  {
    "particles": {
      "number": {
        "value": 90,
        "density": {
          "enable": true,
          "value_area": 800
        }
      },
      "color": {
        "value": "#ffffff"
      },
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 0,
          "color": "#000000"
        },
        "polygon": {
          "nb_sides": 5
        },
        "image": {
          "src": "img/github.svg",
          "width": 100,
          "height": 100
        }
      },
      "opacity": {
        "value": 1.0,
        "random": false,
        "anim": {
          "enable": false,
          "speed": 1,
          "opacity_min": 0.3,
          "sync": false
        }
      },
      "size": {
        "value": 5,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 40,
          "size_min": 0.1,
          "sync": false
        }
      },
      "line_linked": {
        "enable": true,
        "distance": 150,
        "color": "#ffffff",
        "opacity": 1,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 6,
        "direction": "none",
        "random": false,
        "straight": false,
        "out_mode": "out",
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": true,
          "mode": "repulse"
        },
        "onclick": {
          "enable": true,
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 400,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 400,
          "size": 40,
          "duration": 2,
          "opacity": 8,
          "speed": 3
        },
        "repulse": {
          "distance": 200
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true,
    "config_demo": {
      "hide_card": false,
      "background_color": "#b61924",
      "background_image": "",
      "background_position": "50% 50%",
      "background_repeat": "no-repeat",
      "background_size": "cover"
    }
  }

);
///////////////////////////////////////////////
$('#other_page').on('click',function(e){
  e.preventDefault();
  console.log($(this).parentsUntil('body'));
  $(this).parentsUntil('body').fadeOut(5000,function(){
    $('.other_page').fadeIn();
  });
});

// Change pages
$('.other_page #menu .list li').on('click',function(){
  //console.log('...');
  $(this).addClass('active').siblings().removeClass('active');
  var Data = $(this).data('target');
  $($(this).data('target')).fadeIn(5000).siblings().fadeOut(500);
});

//Menu
$('#btn_Toggle_Menu').on('click',function(e){
  e.preventDefault();
  $(this).parentsUntil('.other_page').find('.menu').parent().toggleClass('Toggle_menu')
  .siblings().toggleClass('full_screen');
  $(this).toggleClass('open');
});
///////// show work
$('.my_work_btn').on('click',function(e){
  e.preventDefault();

  var img_src = $(this).parentsUntil('.col-md-4').find('img').attr('src');
  
  var title = $(this).parentsUntil('.col-md-4').find('.title_data').text();

  var body = $(this).parentsUntil('.col-md-4').find('.data_body').text();

  //console.log($(this).parentsUntil('.col-md-4').find('img').attr('src'));
  console.log(title);
  
  $(this).parentsUntil('.se_blog_me').find('.port').fadeIn(500,function(){

    // add data img
    $(this).find('img').attr('src',img_src);

    // add data title
    $(this).find('.title').text(title);

    // add data Body
    $(this).find('.body').text(body);

    // close the tabe
    $('.close_body_post').on('click',function(){
      $(this).parent().fadeOut();
    });

  });
  //console.log( $(this).parentsUntil('.se_blog_me ').find('#data_post').fadeIn());
});
// setInterval(function(){
//   $('#btn_Toggle_Menu').toggleClass('open');
// },1000);
// End
});