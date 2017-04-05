/**
 * Created by wk on 2017-04-06.
 */
$(function(){
    $("#dd").droppable({
        accept:'box',
        onDragEnter:function(e,source){
            $(this).css('background','blue');
        }
    });
    $("#box").draggable();

});