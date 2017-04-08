/**
 * Created by wk on 2017-04-08.
 */
$(function(){
    $('#box').panel({
        width:500,
        height:150,
        title:'面板',
        closable :true,
        iconCls :'icon-edit',
        cls:'a',//添加的CSS类的ID到面板,默认Null
        headerCls:'b',
        bodyCls:'c',
        style:{//添加一个当前指定样式到面板。默认为{}。
            'min-height':'150px',
        },
        fit:true,
        border:false,
        //noheader:true,
        content:'修改内容',

    });

});