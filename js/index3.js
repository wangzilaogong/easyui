/**
 * Created by wk on 2017-04-06.
 */
$(function(){
        $("#box").draggable({
           // revert:true,//拖动之后回到起始位置
           // cursor:'text',//css使用样式
          //  handle:'#pox', //固定地点拖动
           //   disabled:true,//默认不能移动
           // edge:50,//上下左右50的距离不能拖
            //proxy:'clone'
            //proxy:function(source){
            //    var p = $('<div style="height: 400px;width: 200px;border: 1px dashed;">');
            //    p.appendTo('body');
            //    return p;
            //}
            //onBeforeDrag:function(){
            //    alert('拖动前');
            //}
            //onStartDrag:function(){
                //    alert('拖动开始');
                //}
            //onDrag:function(){
            //    alert('拖动shi');
            //}
            //onStopDrag:function(){
            //    alert('拖动over');
            //}
        });
        $('#box').draggable('disabled');
        $('#box').draggable('enabled');

    $('#box').draggable('options');//属性值


});