window.onload=function(){

	/*实现回到顶部按钮功能*/
	var triangleBtn = document.getElementById("triangleBtn");
	var textContent = document.getElementById("textContent");

	/*当前页面高度大于浏览器高度时，显示按钮*/
    window.onscroll = function(){
    	if((document.documentElement.scrollTop || document.body.scrollTop) == 0){
    		triangleBtn.style.display = "none";
    	}
    	else{
    		triangleBtn.style.display = "block";
    	}
    }

	triangleBtn.onclick = function(){
		scrollback();
	}

	/*实现回到顶部效果，回到顶部过程中，点击屏幕可暂停滚动*/
	function scrollback(){
		var scrollHeight = document.documentElement.scrollTop || document.body.scrollTop;
		if( scrollHeight != 0){
			scrollHeight -= 50;
			document.documentElement.scrollTop = document.body.scrollTop = scrollHeight;
			textContent.onclick = function(){
				clearTimeout(scrolltimer);
			}
			var scrolltimer = setTimeout(scrollback,20);
		}
	}


    /*侧栏按钮功能，点击按钮出现侧栏，再次点击侧栏收回，点击屏幕其它位置也可实现侧栏收回效果*/
	var leftBtn = document.getElementById("leftBtn");
	var maskLayer = document.getElementById("maskLayer");
	var leftBanner = document.getElementById("leftBanner");
	leftBtn.onclick = function(){
		if(parseInt(leftBanner.style.right) == 0){
			maskLayer.classList.remove("mask-layer");	
			back();				
		}
		else{
			maskLayer.classList.add("mask-layer");
			go();			
	    }
	}

	maskLayer.onclick = function(){
		maskLayer.classList.remove("mask-layer");
		// leftBanner.style.right = -300 + 'px';	
		back();	
	}

	function back(){
		if(parseInt(leftBanner.style.right) > -300){
			leftBanner.style.right = parseInt(leftBanner.style.right) - 20 + 'px';	
			setTimeout(back,20);			
		}
	}
	function go(){
		if(parseInt(leftBanner.style.right) < 0){
			leftBanner.style.right = parseInt(leftBanner.style.right) + 20 + 'px';	
			setTimeout(go,20);			
		}

	}
}