
$(function(){



    // 清除按钮的显隐控制
    function show(){
        var nickName = $(".name").val();
        console.log(nickName);
        if(nickName){
            $(".clear").css("display","block");
        }else{
            $(".clear").css("display","none");
        }
    }

    $(".name").on("input",function(){
        show();
    });
    $(".name").on("focus",function(){
        show();
    });


    // 清除输入框的内容
    function clear(){
        $(".name").val("").focus();
        $(".clear").css("display","none");

    }
    $(".clear").click(function(){
        clear();
    });

});
