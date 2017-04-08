/**
 * Created by wk on 2017-04-06.
 */
$(function(){
    $('#box').layout({
        fit : true,//布局组件适应父容器
    });
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