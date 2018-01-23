

$(function(){

    //点击退出登录弹出弹出层和遮罩层
    $(".quitBtn").on("click",function(){
        $(".modal").css("display","block");
        $(".mask").css("display","block");
    });

    //点击弹出层的取消
    $(".cancel").on("click",function(){
        $(".modal").css("display","none");
        $(".mask").css("display","none");
    });
});
