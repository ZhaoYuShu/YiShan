
$(function(){


    //地图设置
    var map = new AMap.Map("map");

    AMap.plugin("AMap.Driving",function(){
        var driving= new AMap.Driving({
            map: map
        });
        map.plugin(driving);

        driving.search([{keyword:"沧县高川村",city:"沧州市"},{keyword:"沧县南王村",city:"沧州市"}], function(status, result) {
            //TODO 解析返回结果，自己生成操作界面和地图展示界面

            console.log(result);
        });

    });


    // 点击计价标准弹出遮罩层和弹出层
    $(".note").on("click",function(){
        $(".eject").show();
        $(".mask").show();
    });

    //点击遮罩层隐藏弹出层和遮罩层
    $(".mask").on("click",function(){
        $(".mask").hide();
        $(".eject").hide();
    });
});
