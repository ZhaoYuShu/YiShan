

$(function(){

    // 点击下单须知弹出信息和遮罩层
    $(".note").on("click",function(){
        $(".information").show();
        $(".mask").show();
    });

    // 点击遮罩层隐藏遮罩层和信息
    $(".mask").on("click",function(){
        $(".information").hide();
        $(".mask").hide();
        $(".usedAddress").hide();
        $(".dialog").hide();
        $(".choose").hide();
    });


    //选择取件类别
    $(".type span").on("click",function(e){

        $(this).addClass("active").siblings().removeClass("active");
        if(e.currentTarget.innerHTML == "其他"){
            $(".others").show();
        }else{
            $(".others").hide();
        }
    });

    //点击图片弹出对话框询问用户是否可以调用通讯录
    $(".person").on("click",function(){
        $(".dialog").show();
        $(".mask").show();
    });
    //点击取消按钮关闭对话框，隐藏遮罩层
    $(".dialog .cancel").on("click",function(){
        $(".dialog").hide();
        $(".mask").hide();
    });

    //选择常用地址
    $(".used").on("click",function(){
        $(".usedAddress").show();
        $(".mask").show();
    });


    //选择默认地址
    $(".default").on("click",function(e){
        $(this).addClass("defaultActive").parent().siblings().find("button").removeClass("defaultActive");
    });


    $(".ui-switch input").on("click",function(e){
        if(e.currentTarget.checked){
            $(".weights").prop("disabled",false);
        }else{
            $(".weights").prop("disabled",true);
        }
    });

    //下一步，选择物流
    $(".next").on("click",function(){
        $(".choose").show();
        $(".mask").show();
    });


    // 点击关闭按钮隐藏物流选择框和遮罩层
    $(".choose .close").on("click",function(){
        $(".choose").hide();
        $(".mask").hide();
    });

    // 选择物流公司
    $(".choose .bottom span").on("click",function(){
        $(this).addClass("chosed").siblings().removeClass("chosed");
    });


    // 点击下一步按钮进入帮我送支付详情页面
    $(".nextStep").on("click",function(){
        location.href = "pay2.html";
    });
});
