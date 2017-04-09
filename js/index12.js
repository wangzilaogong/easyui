$(function () {
    $('#box').accordion({
        width:500,
        height:500,
        fit:true,
        border:false,
        animate:false,//定义在展开和折叠的时候是否显示动画效果。默认值true。
        multiple:true,
        selected:0,
        onSelect : function(title,index){
            console.log(title + '|' + index);
        },
        onUnselect : function (title ,index) {
            console.log(title + '|' + index);
        },
        onAdd :function(title,index){
            //when add behavior happen
        }
    });

});
