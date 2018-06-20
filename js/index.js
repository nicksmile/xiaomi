window.onload=function(){
	// 头部开始
	let hright1=document.getElementsByClassName("hright1")[0];
	let hrtbox=document.getElementsByClassName("hrtbox")[0];
	// console.log(hright1,hrtbox);
	// 鼠标移入
	hright1.onmouseenter=function(){
		hrtbox.style.height="98px";
		hrtbox.style.boxShadow="0 2px 10px 2px rgba(0,0,0,0.1)";
	}
	// 鼠标移出
	hright1.onmouseleave=function(){
		hrtbox.style.height="0";
		hrtbox.style.boxShadow="none";
	}
	// let lifts=document.getElementsByClassName("lifts")[0];
	let liftsl=document.getElementsByClassName("liftsl");
	let lifbox=document.getElementsByClassName("lifbox");
	// console.log(liftsl,lifbox);
	for(let i=0;i<liftsl.length;i++){
		liftsl[i].onmouseenter=function(){
			for(let j=0;j<liftsl.length;j++){
				lifbox[j].style.display="none";
			}
			lifbox[i].style.display="block";
		}
	}
	for(let i=0;i<liftsl.length;i++){
		liftsl[i].onmouseleave=function(){
			lifbox[i].style.display="none";
		}
	}




	let xxk=function(tv){
		
		let tv2=tv.getElementsByClassName("tv2")[0];
		let span=tv2.getElementsByTagName("span");
		let tvright=tv.getElementsByClassName("tvright");
		// console.log(tvright);
		for(let i=0;i<span.length;i++){
			span[i].onmouseenter=function(){
				for(let j=0;j<span.length;j++){
					tvright[j].style.display="none";
					span[j].style.borderBottom="none";
					span[j].style.paddingBottom="none";
					span[j].style.color="";
				}
				tvright[i].style.display="block";
				span[i].style.borderBottom="2px solid #ff6700";
				span[i].style.paddingBottom="4px";
				span[i].style.color="#ff6700";
			}
		}
	}
	let tv=document.getElementsByClassName("tv")[0];
	xxk(tv,0);
	let tv1=document.getElementsByClassName("tv")[1];
	xxk(tv1,1);
	let tv2=document.getElementsByClassName("tv")[2];
	xxk(tv2,2);
	let tv3=document.getElementsByClassName("tv")[3];
	xxk(tv3,3);
	let tv4=document.getElementsByClassName("tv")[4];
	xxk(tv4,4);

//
//
//
	let daohang=document.getElementsByClassName("daohang")[0];
	let navs=daohang.getElementsByClassName("navs")[0];
	let a=navs.getElementsByTagName("a");
	let navbox=navs.getElementsByClassName("navbox");
	// console.log(a,navbox);
	for(let i=0;i<a.length-2;i++){
		a[i].onmouseenter=function(){
			for(let j=0;j<a.length-2;j++){
				navbox[j].style.height="0";
			}
			navbox[i].style.height="230px";
			navbox[i].style.boxShadow="0 2px 10px 2px rgba(0,0,0,0.1)";
			navbox[i].style.borderTop="1px solid #cccccc";
		}
	}
	for(let i=0;i<a.length-2;i++){
		a[i].onmouseleave=function(){
			navbox[i].style.height="0";
			navbox[i].style.boxShadow="none";
			navbox[i].style.borderTop="none";
		}
	}

    //轮播图
	let banner=document.querySelector(".banner");
	let lis=document.querySelectorAll(".imgbox li");
	let bth=document.querySelectorAll(".bth li");
	let blts=document.querySelector(".blts");
	let bltss=document.querySelector(".bltss");
	// console.log(banner,lis,bth,blts,bltss);
	
	//当前下标
    let index=0;
    //初始化
    lis[0].style.zIndex=10;
    bth[0].className="hot";
                  //移入的时候添加变量
    let t=setInterval(move,2000);
    banner.onmouseenter=function () {
        clearInterval(t);
    }
    banner.onmouseleave=function () {
        t=setInterval(move,2000);
    }
    //左右按键点击
    blts.onclick=function () {
        movej();
    }
    bltss.onclick=function () {
        move();
    }
    //1-5自动播放
    function move() {
        index++;
        if (index == lis.length) {
            index = 0
        }
        lis.forEach(function (element, i, obj) {
            element.style.zIndex = 5;
        })
        bth.forEach(function (element, i, obj) {
            element.className = "";
        })
        lis[index].style.zIndex = 10;
        bth[index].className = "hot";
    }
    //5-1自动播放，点击左右按钮的时候调用函数
    function movej() {
        index--;
        if(index<0){
            index=lis.length-1;
        }
        lis.forEach(function (element,i,obj) {
            element.style.zIndex=5;
        })
        bth.forEach(function (element,i,obj) {
            element.className="";
        })
        lis[index].style.zIndex=10;
        bth[index].className="hot";
    }
    //点击轮播点
    for(let i=0;i<bth.length;i++){
        bth[i].onclick=function(){
            lis.forEach(function (element) {
                element.style.zIndex=5;
            })
            bth.forEach(function (element) {
                element.className="";
            })
            lis[i].style.zIndex=10;
            bth[i].className="hot";
            index=i;
        }
    }
    //内容轮播点
    function nrbd(num) {
        let childli=document.querySelector(`.content ul li:nth-child(${num})`);
        let conbox=childli.querySelectorAll(".conbox");
        let quan=childli.querySelectorAll(".quan1");
        let letz=childli.querySelector(".letz");
        let righty=childli.querySelector(".righty");
        let width=parseInt(getComputedStyle(conbox[0],null).width);
        // console.log(conbox,letz,width);
        // console.log(conbox,quan,letz,righty,width);
        let flag=true;
        let current=0,next=0;
        conbox[current].style.left=0; 
        quan[current].classList.add("hotee");
        function moveR() {
            next++;
            if(next == conbox.length){
                next=0;
            }
            quan[current].classList.remove("hotee");
            quan[next].classList.add("hotee");
            conbox[next].style.left=width+"px";
            animate(conbox[current],{left:-width});
            animate(conbox[next],{left:0},function () {
                flag=true;
            });
            current=next;
        }
        function moveL(){
            next--;
            if(next < 0){
                next = conbox.length-1;
            }
            quan[current].classList.remove("hotee");
            quan[next].classList.add("hotee");
            conbox[next].style.left=-width+"px";
            animate(conbox[current],{left:width});
            animate(conbox[next],{left:0},function () {
                flag=true;
            });
            current=next;
        }
        letz.onclick=function () {
            if(!flag){
                return;
            }
            if(next==0){
                return;
            }
            flag=false;
            moveL();
        }
        righty.onclick=function () {
            if(!flag){
                return;
            }
            if(next==conbox.length-1){
                return;
            }
            flag=false;
            moveR();
        }
        quan.forEach(function (element,index,obj) {
            quan[index].onclick=function () {
                quan[current].classList.remove("hotee");
                quan[index].classList.add("hotee");
                if(index<current){
                    conbox[index].style.left=-width+"px";
                    animate(conbox[current],{left:width});
                    animate(conbox[index],{left:0});
                }
                if(index>current){
                    conbox[index].style.left=width+"px";
                    animate(conbox[current],{left:-width});
                    animate(conbox[index],{left:0});
                }
                next=current=index;
            }
        })
    }
    nrbd(1);
    nrbd(2);
    nrbd(3);
    nrbd(4);


//    换行轮播图
    let misright1=document.querySelector(".misright1");
    let misright2=document.querySelector(".misright2");
    let potobox=document.querySelector(".potobox");
    let width=parseInt(getComputedStyle(potobox,null).width)/3;
    console.log(misright1,misright2,potobox,width);
    let times=0;
    misright2.onclick=function () {
        times++;
        if(times==3){
            times=2;
        }
        potobox.style.transform=`translateX(${-width*times}px)`;
    }
    misright1.onclick=function () {
        times--;
        if(times<0){
            times=0;
            return;
        }
        potobox.style.transform=`translateX(${-width*times}px)`;
    }
}