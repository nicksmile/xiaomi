window.onload=function () {
    let lis=document.querySelectorAll(".imgbox li");
    let bth=document.querySelectorAll(".bth li");
    console.log(lis,bth);

    //当前图片的下标
    let i=0;
    //初始化
    lis[0].style.zIndex=10;
    bth[0].className="hot";
    setInterval(move,2000);
    function move() {
        i++;
        if(i==lis.length){
            i=0
        }
        lis.forEach(function (element,i,obj) {
            element.style.zIndex=5;
        })
        bth.forEach(function (element,i,obj) {
            element.className="";
        })
        lis[i].style.zIndex=10;
        bth[i].className="hot";
    }

}