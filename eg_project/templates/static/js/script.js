/*$(document).ready(function(){
  var arrow = $('.arrow-up');
  var form = $('.login-form');
  var status=false;
  $('#login').click(function(event){
    event.preventDefault();
    if(status == false){
      arrow.fadeIn();
      form.fadeIn();
      status=true;
    }else{
      arrow.fadeOut();
      form.fadeOut();
      status=false;
    }
  })
})
*/
function getCookie(name) {
  var cookieValue = null;
  if (document.cookie && document.cookie !== '') {
      var cookies = document.cookie.split(';');
      for (var i = 0; i < cookies.length; i++) {
          var cookie = cookies[i].trim();
          // Does this cookie string begin with the name we want?
          if (cookie.substring(0, name.length + 1) === (name + '=')) {
              cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
              break;
          }
      }
  }
  return cookieValue;
}


var csrftoken = getCookie('csrftoken')
/*
$(document).on('submit','#loginform',function(e){
  e.preventDefault();
  $.ajax({
    'type': 'POST',
    'url': '/dashboard',
    'data':{
      'name': $('#username').val(),
      // 'password': $('#password').val(),
      'csrfmiddlewaretoken': csrftoken
    }, 
    'success':function(data){
      $('#1').text(data.green),
      $('#2').text(data.red),
      $('#3').text(data.blue)
    }
  })
})
*/

$(document).ready(function(e){
  e.preventDefault();
  $("evbutton").click(function(){
    if($("evaluate_text").value!==""){
      //var input = document.getElementById("evaluate_text").value;
        $.ajax({
          'type': 'POST',
          'url': '/evaluate',
          'data':{
            'text':$("evaluate_text").val(),
            'csrfmiddlewaretoken':csrftoken
          }
        })
    }
  })

})
  