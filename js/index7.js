/**
 * Created by wk on 2017-04-06.
 */
$(function(){
    $('#box').tooltip({
      //  position:'right',
          content:'提示内容',
      //  trackMouse:true,//跟随鼠标移动
      //  deltaX:100,
      //  deltaY:100,
      //  showEvent:'click',
      //  hideEvent:'dblclick',
      //  showDelay:'500',
      //  hideDelay:'500',
        onShow :function(e){
            console.log($('#box').tooltip('tip'));
},
onHide :function(e){
    alert("隐藏提示框时触发");
},
onPosition:function(left,top){
    console.log('left'+left +'top'+top);
},
onDestroy : function (none) {
    alert('提示框被销毁的时候触发');
}
});
    $('#box').tooltip('update','更新提示内容123');


});