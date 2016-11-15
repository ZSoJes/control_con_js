$(function(){

$("form").on("submit",function(event){
    event.preventDefault();
  var selector = $("input:nth-child(1)").val();
  var propiedad = $("input:nth-child(2)").val();
  var valor = $("input:nth-child(3)").val();

  $(selector).css(propiedad,valor);
});

});

