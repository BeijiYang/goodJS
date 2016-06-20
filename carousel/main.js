window.onload = function() {
  var container = document.getElementById("container");
  var list = document.getElementById("list");
  var buttons = document.getElementById("buttons").getElementsByTagName("span");
  var prev = document.getElementById("prev");
  var next = document.getElementById("next");
  var index = 1;
  var animated = false;
  var interval = 2000;
  var timer;
  

  function showButton() {
    for (var i = 0 ; i < buttons.length; i++){
      if(buttons[i].className == 'on'){
        buttons[i].className = "";
        break;
      }
    }
    buttons[index - 1].className = 'on';
  }
  function animate(offset) {
    animated = true;
    var newLeft = parseInt(list.style.left) +offset; //最后的 ＝ 现在的 ＋ 要走的
    var time = 300;
    var interval = 10;
    var speed = offset/(time/interval); //  总路程／移动次数,每次移动的方向与大小

    function go() {
      if((speed<0 && parseInt(list.style.left)>newLeft) || (speed>0 && parseInt(list.style.left)<newLeft)){
        list.style.left = parseInt(list.style.left) + speed + 'px';
        setTimeout(go, interval);  //动画
      }else{                      //跳转以实现无线轮播
        animated = false;
        list.style.left = newLeft + 'px' ; 
            if(newLeft > -500){
               list.style.left = parseInt(-1500) + 'px'; 
            }else if(newLeft < -1500){
              list.style.left = parseInt(-500) + 'px';
        }
      }
    }
    go();  
  }  
  prev.onclick = function() {
    if(animated) {
      return;
    }
    if(index == 1){
      index = 3;
    }else{
    index -= 1;
    }
    showButton();
    animate(+500); 
  }
  next.onclick = function() {
    if(animated) {
      return;
    }
    if(index == 3){
      index = 1;
    }else{
    index += 1;
    }
    showButton();
    animate(-500);
  }
for(var i=0; i<buttons.length; i++){
  buttons[i].onclick = function() {
    if(this.className == "on"){
      return;
    }
    var myIndex = parseInt(this.getAttribute('index'));
    var offset = (myIndex - index) * -500;
    if(!animated){
      animate(offset);
      index = myIndex;
      showButton();
    }
  }
}
function play() {
    timer = setInterval(function() {
      next.onclick();
    }, 2000);
}
function stop() {
  clearInterval(timer);
}
container.onmouseover = stop;
container.onmouseout = play;

play(); //开始的自动播放
}