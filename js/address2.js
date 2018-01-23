
$(function(){



    // 清除按钮的显隐控制

    // 姓名
    $(".name input").on("input",function(){
        var nickName = $(this).val();
        console.log(nickName);
        if(nickName){
            $(".name .clear").css("display","inline-block");
        }else{
            $(".name .clear").css("display","none");
        }
    });
    $(".name input").on("focus",function(){
        var nickName = $(this).val();
        console.log(nickName);
        if(nickName){
            $(".name .clear").css("display","inline-block");
        }else{
            $(".name .clear").css("display","none");
        }
    });

    // 电话
    $(".mobile input").on("input",function(){
        var nickName = $(this).val();
        console.log(nickName);
        if(nickName){
            $(".mobile .clear").css("display","inline-block");
        }else{
            $(".mobile .clear").css("display","none");
        }
    });
    $(".mobile input").on("focus",function(){
        var nickName = $(this).val();
        console.log(nickName);
        if(nickName){
            $(".mobile .clear").css("display","inline-block");
        }else{
            $(".mobile .clear").css("display","none");
        }
    });

    //地址
    $(".address input").on("input",function(){
        var nickName = $(this).val();
        console.log(nickName);
        if(nickName){
            $(".address .clear").css("display","inline-block");
        }else{
            $(".address .clear").css("display","none");
        }
    });
    $(".address input").on("focus",function(){
        var nickName = $(this).val();
        console.log(nickName);
        if(nickName){
            $(".address .clear").css("display","inline-block");
        }else{
            $(".address .clear").css("display","none");
        }
    });



    // 清除输入框的内容

    // 姓名

    $(".name .clear").click(function(){
        $(".name input").val("").focus();
        $(".name .clear").css("display","none");
    });

    // 电话
    $(".mobile .clear").click(function(){
        $(".mobile input").val("").focus();
        $(".mobile .clear").css("display","none");
    });

    //地址
    $(".address .clear").click(function(){
        $(".address input").val("").focus();
        $(".address .clear").css("display","none");
    });


    //选择标签
    // 选择家
    $(".home").on("click",function(){
        $(this).css({"background":"#c3c3c3","color":"#fff"});
        $(".company").css({"background":"#fff","color":"#636363"});
    });

    // 选择公司
    $(".company").on("click",function(){
        $(this).css({"background":"#c3c3c3","color":"#fff"});
        $(".home").css({"background":"#fff","color":"#636363"});
    });
});
