/**
 * Created by wk on 2017-04-06.
 */
$(function(){
     $("#box").resizable({
        maxWidth:800,
         maxHeight:600,
         //onStartResize: function (e) {
         //    console.log('开始改变大小！');
         //}
         //onResize:function(e){
         //    console.log('调整大小时触发！');
         //}
         onStopResize : function (e) {
             console.log('停止调整大小时触发！');
         },
     });
    $("#box").resizable('disable');

});