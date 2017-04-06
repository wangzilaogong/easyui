/**
 * Created by wk on 2017-04-06.
 */
$(function(){
    $('#p').panel({
        width:500,
        height:150,
        title:'My Panel',
        tools:[
            {
            iconCls:'icon-add',
            handler:function(){alert('new')}
            },
            {
                iconCls:'icon-save',
                handler:function(){alert('save')}
            }
        ]
    });

});