/**
 * Created by Administrator on 2016/6/24.
 */
window.onload = function(){
    // 当整个页面元素都渲染或是加载 完毕 的时候触发
    //alert(123);
    //1. 获得要操作的对象
    var wrap= document.getElementById("wrap");
    var slide = document.getElementById("slide");
    var ul = slide.children[0];
    var lis = ul.children;
    var arrow = document.getElementById("arrow");
    var left = document.getElementById("arrLeft");
    var right = document.getElementById("arrRight");
    var config = [
        {
            "width": 400,
            "top": 20,
            "left": 50,
            "opacity": 0.2,
            "zIndex": 2
        },//0
        {
            "width": 600,
            "top": 70,
            "left": 0,
            "opacity": 0.8,
            "zIndex": 3
        },//1
        {
            "width": 800,
            "top": 100,
            "left": 200,
            "opacity": 1,
            "zIndex": 4
        },//2
        {
            "width": 600,
            "top": 70,
            "left": 600,
            "opacity": 0.8,
            "zIndex": 3
        },//3
        {
            "width": 400,
            "top": 20,
            "left": 750,
            "opacity": 0.2,
            "zIndex": 2
        }//4
    ];//其实就是一个配置单 规定了每张图片的大小位置层级透明度

    //2. 当鼠标移入的时候，显示左右按钮
    wrap.onmouseover = function(){
        animate(arrow,{"opacity":1});
    }
    wrap.onmouseout = function(){
        animate(arrow,{"opacity":0});
    }

    // 一开始打开页面的时候，让对应的li走到对应的配置文件的样式
        for(var i=0;i<lis.length;i++){
            animate(lis[i],config[i]);
        }

    // 3. 点击右侧按钮的时候
    right.onclick = function(){
        config.push(config.shift());//将数组中的每一项删除，添加到数组的最后
        for(var i=0;i<lis.length;i++){
            animate(lis[i],config[i]);
        } // 代码冗余了，需要进行一下封装
    }
}