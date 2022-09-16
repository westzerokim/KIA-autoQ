$(".search>a").click(function(){  
    $("#slide_menu").addClass('on'); 
    $(".bg").addClass('on'); 
});
$(".back_num").click(function(){  
  $("#slide_menu").removeClass('on');
  $(".bg").removeClass('on');
});


$(".btnBlueGreen").click(function(){  
  var str  = "";
  str = $(".input_num").val();
  var sentence = str.length;

  //this.innerHTML;

  var btn_num = "";
  btn_num = this.innerHTML;


  $(".input_num").val(str+btn_num);
  if(btn_num == 'close'){
    $(".input_num").val("");
  }else if(btn_num == 'arrow_back'){
    $(".input_num").val(str.substring(0,sentence-1));
  }else{
    var btn_num = "";
    btn_num = this.innerHTML;
  }
});
