window.onload = function(){
		var getClass = function(className){
				return document.getElementsByClassName(className)[0];
		};
		var getDOM = function(id){
				return document.getElementById(id);
		};
		var addEvent = function(id,event,fn){
				var el = getDOM(id) || document;
				if(el.addEventListener){
						el.addEventListener(event,fn,false);
				}else if(el.attachEvent){
						el.attachEvent('on'+event,fn);
				}
		};
		var container = getClass('swiper');
		var list = getDOM('list');
		var buttons = getDOM('buttons').getElementsByTagName('span');
		var index = 1;
		var animated = false;//性能优化：增加状态，当点击操作已发生，再次点击效果失效，直至第一次点击的行为完全执行完毕
		var timer = null;
		function showButton(){
				for(var i = 0; i < buttons.length;i++){
						if(buttons[i].className == 'on'){
								buttons[i].className = '';
								break;
						}
				}
				buttons[index-1].className = 'on';
		}
		function animate(offset){
				animated = true;
				var newLeft = parseInt(list.style.left)+offset;
				var time = 800;//位移总时间
				var interval = 7;//位移间隔时间
				var speed = offset/(time/interval);//每一次位移量
				(function go(){
						//当位移量小于0，图片组向左移动，且现在的left值大于目标left值时发生移动。同理图片组向右移动。
						//parseInt(list.style.left) >newLeft 《==》offset < 0
						if((speed < 0 && parseInt(list.style.left) > newLeft) || (speed > 0 && parseInt(list.style.left) < newLeft )){
								list.style.left = parseInt(list.style.left) + speed +'px';
								setTimeout(go,interval);
						}
						else{
								animated = false;
								list.style.left = newLeft+'px';
								if(newLeft > -498.29){
										list.style.left = '-1993.16px';
								}
								if(newLeft < -1993.16){
										list.style.left = '-498.29px';
								}
						}
				})();
		}
		var fn = function (){
				if(index == 4){
						index = 1;
				}
				else{
						index += 1;
				}
				showButton();
				if(!animated){
						animate(-498.29);
				}
		};
		function play(){
				timer = setInterval(function(){
						addEvent('next','click',fn());//函数名后加()，可以使函数当即执行，没有()，只是调用了点击有按钮的事件，没有点击不会执行。
						// 有()表达式，实际上模拟了一次点击事件。还有要注意的地方，fn的定义要放在该函数之前，负责无法调用。
//										next.onclick();
				},4000)
		}
//下面的事件定义方式，是有用的，也是最有把握的，但是之前写了addEvent函数，方面调用就使用了它。
//						next.onclick = function(){
//								if(index == 3){
//										index = 1;
//								}
//								else{
//										index += 1;
//								}
//								showButton();
//								if(!animated){
//										animate(-498.29);
//								}
//						};
		function stop(){
				clearInterval(timer);
		}
		addEvent('next','click',fn);
		addEvent('prev','click',function(){
				if(index == 1){
						index = 4;
				}else{
						index -= 1;
				}
				showButton();
				if(!animated){
						animate(498.29);
				}
		});
		for( var i = 0;i < buttons.length;i++){
				buttons[i].onclick = function(){
						var myIndex = parseInt(this.getAttribute('index'));
						var offset = -498.29 * (myIndex - index);
						animate(offset);
						index = myIndex;
						showButton();
				}
		}
		container.onmouseout = function(){
				play();
		};
		container.onmouseover = function(){
				stop();
		};
		play();
		//下面代码无效
//						addEvent('container','onmouseover',function(){
//								stop();
//						});
//						addEvent('container','onmouseout',function(){
//								play();
//						});
//						play();
};