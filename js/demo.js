/**
 * Created by Administrator on 2016/6/24.
 */
window.onload = function(){
    // ������ҳ��Ԫ�ض���Ⱦ���Ǽ��� ��� ��ʱ�򴥷�
    //alert(123);
    //1. ���Ҫ�����Ķ���
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
            "top": 120,
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
    ];//��ʵ����һ�����õ� �涨��ÿ��ͼƬ�Ĵ�Сλ�ò㼶͸����

    //2. ����������ʱ����ʾ���Ұ�ť
    wrap.onmouseover = function(){
        animate(arrow,{"opacity":1});
    }
    wrap.onmouseout = function(){
        animate(arrow,{"opacity":0});
    }

    // һ��ʼ��ҳ���ʱ���ö�Ӧ��li�ߵ���Ӧ�������ļ�����ʽ
    assign();//�ȵ���һ�£���ԭ����ÿ��li�ߵ�ָ����λ��
    function assign(){
        for(var i=0;i<lis.length;i++){
            animate(lis[i],config[i],function(){
                flag = true;//��������true��Ҳ����˵ǰ���li��ɨ����� �ˣ����ߵ��������ļ��е�ָ��λ��
            });
        }
    }

    var flag = true;//�ͱ�ʾ��ǰ�����е�li���ߵ���ָ����λ��
    // 3. ����Ҳఴť��ʱ��
    right.onclick = function(){
        if(flag){
            flag =false;//
            config.push(config.shift());//�������еĵ�һ��ɾ������ӵ���������
            assign();// ���������ɵ����������ļ�������Ⱦÿ��li
        }

    }
    left.onclick = function(){
        config.unshift(config.pop());// ɾ�������е����һ���ӵ��������ǰ��
        assign();//���������ɵ������ļ����飬������li�ߵ�ָ����λ��
    }

    // 4. ��ӽ�����
}