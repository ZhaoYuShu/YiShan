

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
        $(".unfound").hide();
        $(".dialog").hide();
    });


    //点击搜索按钮切换页面

    $(".search input").on("blur",function(){
        var _this = $(this);
        $("#search").on("click",function(){
            if(parseInt(_this.val()) == _this.val()){
                $(".page1").hide();
                $(".page2").show();
            }else{
                $(".mask").show();
                $(".unfound").show();
                _this.val("");

                //点击“去选择快递公司”进入快递公司选择页面
                $(".toCompany").on("click",function(){
                    location.href = "express.html";
                });
            }
        });
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


    //点击下单按钮补齐信息
    $(".placeOrder").on("click",function(){
        $(".page1").css("display","block");
        $(".page2").css("display","none");

        // 设置取件类别
        $(".sixth").addClass("active");
        $(".others").show().val("一个钱包");

        // 设置取货模块
        $(".pick .name").val("李宁宁");
        $(".pick .mobile").val("15958664422");
        $(".pick .address").html("沧县大关乡李家湾村");

        // 设置收货模块
        $(".get .name").val("高晓松");
        $(".get .mobile").val("13567894561");
        $(".get .address").html("沧县大关乡松湖村");

        // 设置价钱
        $(".pay .yuan").html("37");
        $(".pay .cents").html(".23");


        // 支付按钮可以点击
        $(".gotoPay").prop("disabled",false).on("click",function(){
            location.href = "pay.html";
        });

        // 点击明细可以查看价格明细
        $(".details").on("click",function(){
            location.href = "priceDetails.html";
        });
    });
});
