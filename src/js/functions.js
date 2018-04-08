  $(document).ready(function(){

        $(".cta>.arrow").delay(2500)
              .queue(function (next) {
                $(this).css('color', 'black');
                next();
              });

    window.hasRun3 = false;
    window.hasRun4 = false;
    window.hasRun5 = false;



    $(".main").onepage_scroll({
       sectionContainer: "section",
       easing: "ease",

       animationTime: 1000,
       pagination: true,
       updateURL: false,
       beforeMove: function(index) {


       },
       afterMove: function(index) {

          if (index === 3) {

            if (!hasRun3) {

              window.hasRun3 = true;

              var launchImg = $("#launch");
              var list = $("ol.aag-desc");
              var imgContainer = $(".aag-img");
              var step1 = '<li id="launch-txt-1">RECEIVE TEXT FROM DISPATCH</li>';
              var step2 = '<li id="launch-txt-2">SELECT THE TEXT MESSAGE LINK</li>';
              var step3 = '<li id="launch-txt-3">GET DISPATCH INTEL AND MAPPING</li>';
              var step4 = '<div id="get-going">GET MOVING</div>';
              var replay = ['<div id="replay-btn">',
                              '<svg class="replay-arrow" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"',
                            	   'width="16px" height="16px" stroke="1" viewBox="0 0 9.333 9.917" enable-background="new 0 0 9.333 9.917" xml:space="preserve">',
                                 '<path d="M8.233,5.47C8.121,7.341,6.572,8.826,4.672,8.826c-1.972,0-3.571-1.598-3.571-3.571c0-1.703,1.191-3.124,2.785-3.482v0.857',
                            	      'l1.512-0.872l0.321-0.185L4.935,1.12L3.886,0.514v0.668c-1.915,0.368-3.362,2.05-3.362,4.072c0,2.292,1.856,4.149,4.148,4.149',
                            	       'c2.218,0,4.025-1.744,4.138-3.934H8.233z"/>',
                              '</svg>',
                              '<span>Replay</span>',
                            '</div>'].join('');

              var img0 = '<img id="launch-img-0" src="assets/phone.png">';
              var img1 = '<img id="launch-img-1" src="assets/text.png">';
              var img2 = '<img id="launch-img-2" src="assets/text-url.png">';
              var img3 = '<img id="launch-img-3" src="assets/dispatch-scroll.gif">';
              var img4 = '<img id="launch-img-4" src="assets/app.png">';


               list.empty();

               //append img 0
               imgContainer.append(img0)
               imgContainer.append(img1).hide().fadeIn();
               imgContainer.append(img2).hide().fadeIn();
               imgContainer.append(img4).hide().fadeIn();

               setTimeout(runTxt1, 1000);

               function restart() {
                 list.empty();
                 imgContainer.empty();
                 $("#replay-btn").remove();
                 $("#get-going").remove();
                 imgContainer.append(img0)
                 imgContainer.append(img1).hide().fadeIn();
                 imgContainer.append(img2).hide().fadeIn();
                 imgContainer.append(img3).hide().fadeIn();
                 setTimeout(runTxt1, 1000);
               }

               function runTxt1(){
                 list.append(step1)
                 $("#launch-txt-1").fadeIn(500);
                 setTimeout(runImg1, 1000);
               }

               function runImg1(){
                 $("#launch-img-1").fadeIn(500)
                 $("#launch-img-0").animate({ opacity: 0 }, { duration: 600, queue: false });
                 setTimeout(runTxt2, 1000);
               }
               function runTxt2(){
                 list.append(step2)
                 $("#launch-txt-2").fadeIn(500);
                 setTimeout(runImg2, 1000);
               }

               function runImg2(){
                 imgContainer.append(img2)
                 $("#launch-img-2").fadeIn(500)
                 $("#launch-img-1").animate({ opacity: 0 }, { duration: 600, queue: false });
                 setTimeout(runTxt3, 1000);
               }

               function runTxt3(){
                 list.append(step3)
                 $("#launch-txt-3").fadeIn(500);
                 setTimeout(runImg3, 1000);
               }

               function runImg3(){
                imgContainer.append(img3)
                $("#launch-img-3").fadeIn(500);
                $("#launch-img-3").attr('src', "assets/dispatch-scroll.gif");
                $("#launch-img-2").animate({ opacity: 0 }, { duration: 600, queue: false });
                 setTimeout(runTxt4, 1000);
               }

               function runTxt4(){
                 $('.aag-card').append(step4);
                 $("#get-going").fadeIn(1000);
                 setTimeout(runTxt5, 1000);
               }

               function runTxt5(){
                 $('.aag-card').append(replay);
                 $('#replay-btn').on('mouseover',function(){
                   $('.replay-arrow').css({transform: 'rotate(480deg)', fill: 'firebrick'})
                 })
                 $('#replay-btn').on('mouseout',function(){
                   $('.replay-arrow').css({transform: 'rotate(0deg)', fill: 'black'})
                 })
                 $('#replay-btn').on('click',function(){
                   restart();
                 })
                 $("#replay-btn").fadeIn(1000);
                 setTimeout(runImg4, 1000);
               }

               function runImg4(){
                 imgContainer.append(img4)
                 $("#launch-img-4").fadeIn(500);
                 $("#launch-img-3").animate({ opacity: 0 }, { duration: 600, queue: false });
               }
           }//end if

         } else if ( index === 4){

            if (!hasRun4) {

              window.hasRun4 = true;
                $('.txt-app>img').animate({ opacity: 1 }, { duration: 500, queue: false });
                $('.txt-app>img').animate({ paddingTop: "0px" }, { duration: 500, queue: false });
            }

          } else if ( index === 5){
              if (!hasRun5) {

                window.hasRun5 = true;
                $('.gps>.title>.heading').animate({ opacity: 1 }, { duration: 500, queue: false });
                $('.gps>.title>.heading').animate({ paddingLeft: "0px" }, { duration: 500, queue: false });
              }
          } else if ( index === 2){
                // other body logic
          } else if ( index === 2){
                // other body logic
          } else if ( index === 2){
                // other body logic
          }

       },
       loop: false,
       keyboard: true,
       responsiveFallback: false,


       direction: "vertical"
    });

  })
