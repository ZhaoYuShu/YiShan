


$(function(){

    //点击客服图片弹出客服电话和遮罩层
    $(".hotLineImg").on("click",function(){

        // function handleResponse (res){
        //     console.log(res.data);
        // }
        // var script = document.createElement("script");
        // script.src = "http://47.93.239.113:8888/withoutToken/hotline?callback=handleResponse";
        
        $("body").append(script);
        $(".hotLine").css("display","block");
        $(".mask").css("display","block");
    });

    //点击取消按钮隐藏客服电话和遮罩层
    $(".cancel").on("click",function(){
        $(".hotLine").css("display","none");
        $(".mask").css("display","none");
    });

    //点击地址跳转到更改定位页面
    $(".bottom").on("click",function(){
        location.href = "./html/location.html";
    });


    //点击帮我取进入到帮我取详情页面
    $(".left").on("click",function(){
        location.href = "html/take.html";
    });

    //点击帮我送进入到帮我送详情页面
    $(".right").on("click",function(){
        location.href = "html/send.html";
    });
});
