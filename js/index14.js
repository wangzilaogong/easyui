$(function () {

    $('#box').window({
        width : 300,
        height : 250,
        //iconCls : 'icon-add',
        //fit : true,
        /*
         width : 600,
         height : 400,
         title : '窗口',
         collapsible : false,
         minimizable : false,
         maximizable : false,
         closable : false,
         //closed : true,
         zIndex : 9999,
         draggable : false,
         resizable : false,
         shadow : false,
         modal : true,
         inline : true,

         width : 200,
         height : 150,
         inline : true,

         onClose : function () {
         alert('关闭后触发！');
         }*/

    });


    //console.log($('#box').window('window'));
    //console.log($('#box').window('body'));

    $(document).click(function () {
        $('#box').window('move', {
            left : 0,
            top : 0,
        })
    });

    $(document).dblclick(function () {
        $('#box').window('vcenter');
    });

});













