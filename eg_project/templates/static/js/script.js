
$(document).ready(function(){
  //e.preventDefault();
  alert("sample1")
  $("evbutton").click(function(){
    if($("evaluate_text").value!=""){
      //var input = document.getElementById("evaluate_text").value;
        $.ajax({
          'type': 'POST',
          'url': '/evaluate',
          'data':{
            'text':$("evaluate_text").val(),
            'csrfmiddlewaretoken':csrftoken
          },
          'success':function(data){
            $("#gcheck").prepend(data.value)
          }
        })
    }
  })

})
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

  