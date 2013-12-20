require(['../template'], function(template){
  var body = "<div><a <%= data.a %>> <%# 1 %> </a></div>";

  console.log( template.compile(body));

});




