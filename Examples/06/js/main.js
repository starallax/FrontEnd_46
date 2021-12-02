$(document).ready(function(){

  function showFlex(){
      switch($('.flex-container').css('flex-direction')){
          case 'row': 
          $('.flex-container').addClass('row')
          break;
          case 'row-reverse': 
          $('.flex-container').addClass('row-reverse')
          break;
          case 'column': 
          $('.flex-container').addClass('column')
          break;
          case 'column-reverse': 
          $('.flex-container').addClass('column-reverse')
          break;
      }
  }
  setTimeout(showFlex(), 100)  

});