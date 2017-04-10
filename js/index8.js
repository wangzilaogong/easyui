/**
 * Created by wk on 2017-04-06.
 */
$(function(){

    $('#box').layout({
        fit : true//布局组件适应父容器
    });
    //树形结构单击添加tabs
    $('#tt1').tree({
        onClick: function (node) {
            if(!$('#tabs').tabs('exists',node.text)){
                $('#tabs').tabs('add',{
                    title:node.text,
                    content:'aaa',
                    href:'droppable.html',
                    closable:true
                });
            }
        }
    });

    $('#tt2').tree({
        onClick: function (node) {
            if(!$('#tabs').tabs('exists',node.text)){
            $('#tabs').tabs('add',{
                title:node.text,
                content:'aaa',
                href:'log.html',
                closable:true
            });}
        }
    });
    $('#tabs').tabs({
        fit:true,
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
                } }
        ]});

    $('#mainPanle').panel({
        tools:[{
            iconCls:'icon-add',
            handler:function(){alert('new')}
        },{
            iconCls:'icon-save',
            handler:function(){alert('save')}
        }]
    });
});
