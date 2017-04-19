$.language = {
     navtitle : {"en":"navtitle","zh":"后台管理"},
     Chiness:{"en":"Chiness","zh":"English"},
     logout:{"en":"logout","zh":"退出"},
     mainnav:{"en":"mainnav","zh":"主导航"},
     sysManage:{"en":"sysManage","zh":"系统管理","icon":"icon-sys3"},
     baseInfoManage:{"en":"baseInfoManage","zh":"基础信息管理","icon":"icon-logg5"},
     personnelState:{"en":"personnelState","zh":"人员状态","icon":"icon-accessibility"},
     alarmManage:{"en":"alarmManage","zh":"报警管理","icon":"icon-alert2"},
     msgPush:{"en":"msgPush","zh":"消息推送","icon":"icon-msgsend"},
     sysLog:{"en":"sysLog","zh":"系统日志","icon":"icon-log3"},
     department:{"en":"department","zh":"部门管理","icon":"icon-dept2","url":"../template/deptment.html"},
     user:{"en":"user","zh":"用户管理","icon":"icon-dept3","url":"../template/user.html"},
     role:{"en":"role","zh":"角色管理","icon":"icon-role4","url":"../template/role.html"},
     resource:{"en":"resource",'zh':"资源管理","icon":"icon-quill","url":"../template/resource.html"},
     equipmentManage:{"en":"equipmentManage","zh":"设备管理","icon":"icon-shebei2","url":"../template/equipment.html"},
     personnelManage:{"en":"personnelManage","zh":"人员管理","icon":"icon-person4","url":"../template/personne.html"},
     tieHis:{"en":"tieHis","zh":"绑定历史","icon":"icon-history","url":"../template/tiehis.html"},
     equipmentScene:{"en":"equipmentScene","zh":"设备场景","icon":"icon-changjing3","url":"../template/equipmentscene.html"},
     cabinManage:{"en":"cabinManage","zh":"舱室管理","icon":"icon-door5","url":"../template/cabin.html"},
     mapManage:{"en":"mapManage","zh":"地图管理","icon":"icon-area8","url":"../template/map.html"},
     personnelLocation:{"en":"personnelLocation","zh":"人员定位","icon":"icon-area9","url":"../template/personnellocation.html"},
     healthyReport:{"en":"healthyReport","zh":"健康报表","icon":"icon-table3","url":"../template/healthyreport.html"},
     personnelAlarm:{"en":"personnelAlarm","zh":"人员报警","icon":"icon-alarm1","url":"../template/personnelalarm.html"},
     personnelCourse:{"en":"personnelCourse","zh":"人员轨迹","icon":"icon-guiji3","url":"../template/personnelcourse.html"},
     overworked:{"en":"overworked","zh":"过劳度","icon":"icon-guo2","url":"../template/overworked.html"},
     alarmParameter:{"en":"alarmParameter","zh":"报警参数","icon":"icon-parameter","url":"../template/alarmparameter.html"},
     YLScope:{"en":"YLScope","zh":"YL预设","icon":"icon-area","url":"../template/ylscope.html"},
     pushHis:{"en":"pushHis","zh":"推送历史","icon":"icon-msg2","url":"../template/pushhis.html"},
     makePush:{"en":"makePush","zh":"发送推送","icon":"icon-msgsend2","url":"../template/makepush.html"},
     Log:{"en":"Log","zh":"日志","icon":"icon-log4","url":"../template/log.html"},
};
$.language.i18n = function (str) {
    if($.language[str]){
        return $.language[str][langStore];
    }else {
        return str;
    }
};
$.language.updateDom = function (dom) {
          $(dom).find("[data-localize]").each(function() {
                var elem = $(this);
                var  localizedValue = $.language[elem.data("localize")][langStore];
                if (elem.is("input[type=text]") || elem.is("input[type=password]") || elem.is("input[type=email]")) {
                    elem.attr("placeholder", localizedValue);
                } else if (elem.is("input[type=button]") || elem.is("input[type=submit]")) {
                    elem.attr("value", localizedValue);
                } else {
                    elem.text(localizedValue);
                }
            });
};
$.language.icon = function (str) {
    if($.language[str]){
        if($.language[str].icon){
            return $.language[str].icon;
        }
    }
    return 'nan';
};
$.language.url = function (str) {
    if($.language[str]){
        if($.language[str].url){
            return $.language[str].url;
        }
    }
    return '';
};

//当前语言
var langStore = null;
var swichLanguage = function () {
  var deslang = langStore == "zh"?"en":"zh";
  storeData({"langStore":deslang});
  //刷新index界面
  setTimeout(function () {
          window.location = "../template/index.html"
  },1000);
};
var storeData = function(data){
            if(!data){
                data = {"langStore":'en'};
            }
            if(!data) return;
            if(window.localStorage) {
                localStorage.setItem( "langStore", JSON.stringify(data) );
                langStore = data.langStore;
            } else {
                langStore = data.langStore;
            }
};

$.language.lang = function () {
  if(window.localStorage) {
            var localLangStore = localStorage.getItem("langStore");
            if(localLangStore==null){
                var a = false;
            }else {
                var a = JSON.parse(localLangStore).langStore;
            }
            if(!a){
                localLangStore = 'zh';
                storeData({"langStore":localLangStore});
            }else {
                langStore = a;
            }
            return langStore;
  }
};

$.language.lang();

$(function () {
     $("[data-localize]").each(function() {
                var elem = $(this);
                var  localizedValue = $.language[elem.data("localize")][langStore];
                if (elem.is("input[type=text]") || elem.is("input[type=password]") || elem.is("input[type=email]")) {
                    elem.attr("placeholder", localizedValue);
                } else if (elem.is("input[type=button]") || elem.is("input[type=submit]")) {
                    elem.attr("value", localizedValue);
                } else {
                    elem.text(localizedValue);
                }
            });
});
