$(function () {
    $('#box').dialog({
        width:400,
        height:250,
        title:'对话框',
        modal:true,
       // toolbar:'#tt',
        toolbar:[{
            text:'编辑',
            iconCls:'icon-edit',
            handler: function () {
                alert('edit');
            }
        }, {
        }],
        buttons:[
            {
                text:'确定',
                plain:true,
                iconCls:'icon-ok',
            },
            {
                text : '取消',
                plain : true,
                iconCls : 'icon-cancel',
            }
        ]

    });
});













