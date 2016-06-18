window.onload = function() {
  var container = document.getElementById("container");
  var list = document.getElementById("list");
  var buttons = document.getElementById("buttons").getElementsByTagName("span");
  var prev = document.getElementById("prev");
  var next = document.getElementById("next");
  var index = 1;

  function showButton() {
    for (var i = 0 ; i < buttons.length; i++){
      if(buttons[i].className == 'on'){
        buttons[i].className = "";
      }
    }
    buttons[index - 1].className = 'on';
  }
  function animate(offset) {
    var newLeft = parseInt(list.style.left) +offset;
    list.style.left = newLeft + 'px' ; 
    if(newLeft > -500){
      list.style.left = parseInt(-1500) + 'px'; 
    }else if(newLeft < -1500){
      list.style.left = parseInt(-500) + 'px';
    }
  }  //下面两句功能的封装
  prev.onclick = function() {
    if(index == 1){
      index = 3;
    }else{
    index -= 1;
    }
    showButton();
    animate(+500);  
  }
  next.onclick = function() {
    if(index == 3){
      index = 1;
    }else{
    index += 1;
    }
    showButton();
    animate(-500);
  }


}