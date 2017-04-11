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
    $('#tt3').tree({
        url:'tree_data3.json'
    });
    $('#tabs').tabs({
        fit:true,
        tools:[
            {
                iconCls:'icon-home3',
                handler:function(){
                    $('#tabs').tabs('add',{
                        title:'home',
                        content:'aaa',
                        href:'home.html',
                        closable:true
                    });


                },
            },{
                iconCls:'icon-loop2',
                handler:function(){//刷新当前页面
                    var currentTab = $('#tabs').tabs('getSelected');
                    var url = $(currentTab.panel('options')).attr('href');
                    $('#tabs').tabs('update', {
                        tab: currentTab,
                        options: {
                        href: url
                    }
                           });
                    currentTab.panel('refresh');
                }},
            {
                iconCls:'icon-cross',
                handler:function() {//关闭当前选择的tabs
                                    //var tab = $('#tabs').tabs('getSelected');
                                    //if (tab){
                                    //    var index = $('#tabs').tabs('getTabIndex', tab);
                                    //    $('#tabs').tabs('close', index);
                    $("#tabs li").each(function(index, obj) {
                         //获取所有可关闭的选项卡
                     var tab = $(".tabs-closable", this).text();
                         $("#tabs").tabs('close', tab);
                });
                    }
                }

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
