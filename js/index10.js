$(function () {

    $('#box').panel({
        //id : 'pox',
        title : '面板',
        width : 500,
        height : 150,
        iconCls : 'icon-search',
        //left : 100,
        //top : 100,
        cls : 'a',
        headerCls : 'b',
        bodyCls : 'c',
        style : {
            'min-height' : '200px',
        },
        //fit : true,
        //border : false,
        //doSize : false,
        //noheader : true,
        //content : '修改了',
        collapsible : true,
        minimizable : true,
        maximizable : true,
        closable : true,
        tools : '#tt',
        tools : [{
            iconCls : 'icon-reload',
            handler : function () {
                //alert('help');
                $('#box').panel('refresh');
            },
        },{
        }],
        //collapsed : true,
        //minimized : true,
        //maximized : true,
        //closed : true,
        href : 'content.php',
        loadingMessage : '加载中...',
        //extractor : function (data) {
        //	return data.substring(0,3);
        //},
        /*
         onBeforeLoad : function () {
         alert('远程加载之前触发！');
         return false;					//取消远程加载
         },
         onLoad : function () {
         alert('远程加载之后触发！');
         },

         onBeforeOpen : function () {
         alert('打开之前触发！');
         return false;					//取消打开
         },
         onOpen : function () {
         alert('打开之后触发！');
         },

         onBeforeClose : function () {
         alert('关闭之前触发！');
         return false;					//取消关闭
         },
         onClose : function () {
         alert('关闭之后触发！');
         },

         onBeforeDestroy : function () {
         alert('销毁之前触发！');
         //return false;					//取消销毁
         },
         onDestroy : function () {
         alert('销毁之后触发！');
         },

         onBeforeCollapse : function () {
         alert('折叠之前触发！');
         //return false;					//取消折叠
         },
         onCollapse : function () {
         alert('折叠之后触发！');
         },

         onBeforeExpand : function () {
         alert('展开之前触发！');
         //return false;					//取消展开
         },
         onExpand : function () {
         alert('展开之后触发！');
         },

         onMaximize : function () {
         alert('窗口最大化时触发！');
         },
         onRestore : function () {
         alert('窗口还原时触发！');
         },

         onMinimize : function () {
         alert('窗口最小化时触发！');
         },

         onResize : function (width, height) {
         alert(width + '|' + height);
         },

         onMove : function (left, top) {
         alert(left + '|' + top);
         },
         */
        //onBeforeOpen : function () {
        //	alert('打开之前触发！');
        //return false;					//取消打开
        //},
    });


    //$('#box').panel('panel').css('position', 'absolute');
    //$('#box').panel('destroy');
    /*
     $(document).click(function () {
     $('#box').panel('resize', {
     'width' : 600,
     'height' : 300,
     });
     });

     $(document).click(function () {
     $('#box').panel('move', {
     'left' : 600,
     'top' : 300,
     });
     });
     */

    //console.log($('#box').panel('options'));
    //console.log($('#box').panel('panel'));
    //console.log($('#box').panel('header'));
    //console.log($('#box').panel('body'));
    //$('#box').panel('setTitle', '标题');
    //$('#box').panel('open', true);
    //$('#box').panel('close');
    //$('#box').panel('destroy');
    //$('#box').panel('maximize');
    //$('#box').panel('restore');
    //$('#box').panel('minimize');
    //$('#box').panel('collapse');
    //$('#box').panel('expand');
});
