$(function(){
    slide = setInterval(function(){ 
              $('.notice_list >li:nth-child(1)').animate({ 
                  'margin-top':(-2)+'em' },600,function(){ 
                      $('.notice_list').append($('.notice_list >li:nth-child(1)')); 
                      $('.notice_list > li:nth-child(3)').css('margin-top','0px'); 
                      });
               },2500);
               
    slide = setInterval(function(){ 
                $('.purp_list >li:nth-child(1)').animate({ 
                    'margin-top':(-2)+'em' },600,function(){ 
                        $('.purp_list').append($('.purp_list >li:nth-child(1)')); 
                        $('.purp_list > li:nth-child(3)').css('margin-top','0px'); 
                        });
                 },2500); 
  
  })