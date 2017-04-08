$(function () {
    $('#box').tabs({
        width:500,
        height:300,
       // plain:true,//设置为true 时，将不显示控制面板背景。
        fit:true,
        border:true,
        scrollIncrement:1,//选项卡滚动条每次滚动的像素值。默认值
        scrollDuration:1000,//每次滚动动画持续的时间，单位：毫秒。默认值400。
        tools:[
            {
                iconCls:'icon-add',
                handler:function(){
                    alert('添加');
                },
            },{
                iconCls:'icon-edit',
                handler:function(){
                    alert('edit');
            }},
            {
                iconCls:'icon-edit',
                handler:function() {
                    alert('edit');
                } },
        ],



    });
    //$('#box').tabs({
    //    onLoad:function(panel){
    //        alert(panel);
    //    },
    //    onSelect : function (title,index) {
    //        alert(title + '|' + index);
    //    },
    //    onContextMenu : function (e,title, index) {
    //        alert(e.type + '|' + title + '|' + index);
    //    }
    //
    //
    //});
});
