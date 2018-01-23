
$(function(){
    //选择支付方式后按钮可以点击
    $(".modes input").on("click",function(e){
        if(e.currentTarget.id){
            $(".payMoney").prop("disabled",false);
        }
    });

    // 点击支付按钮进行支付
    $(".payMoney").on("click",function(){
        console.log("支付成功！");
    });
});
