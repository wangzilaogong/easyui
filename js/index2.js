/**
 * Created by wk on 2017-04-06.
 */
$(function(){
    $.parser.parse("#box");
});
$.parser.auto = false;
$.parser.onComplete= function () {
    alert("UI解析完毕");
};