$(function () {
    $.messager.defaults={
        ok:'yes',
        cancel:'no'
    };
    //$.messager.alert('警示框','这是一个提示','info',function(){
    //    alert('警示框');
    //});
    //$.messager.confirm('确认框','你真的要删除吗？', function (flag) {
    //    if (flag){
    //        alert('删除成功！');
    //    }
    //
    //});
    //$.messager.progress({
    //    title:'执行中',
    //    msg:'努力上传',
    //    text:'{value}%',
    //    interval:1000,
    //});
    $.messager.show({
        title:'my msg',
        timeout:'5000',//5s
        showType:'fade',
        style:{
            top:0,
            left:100,
        }
    });
});













