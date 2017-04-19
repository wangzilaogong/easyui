/**
 * token cache管理工具 must import jquery before
 * @type {{_token: null, _user: null, token, token, user, user}}
 */

//获取user或者token时 如果不存在 就会跳转到登陆
//ajax 401->跳转到登陆
//loginout ->  跳转到登陆

var debug = true;

//测试的时候在自己对应的html里重写该变量
var remoteBaseUrl = "http://192.168.0.151:8080";

//测试localstorage user数据
// {"roles":["admin"],"perms":["urlFilter:*","orgnization:*","mapManage:*","personnelAlarm:*","makePush:*","tieHis:*","overworked:*","alarmParameter:*","equipmentScene:*","personnelLocation:*","pushHis:*","user:*","role:*","cabinManage:*","healthyReport:*","resource:*","Log:*","personnelCourse:*","equipmentManage:*","YLScope:*","personnelManage:*"],"id":1,"username":"admin"}

//调试时设置为一天
var expiredtime = 3600*1000*24;
$.mkUtil;
if(parent.$.mkUtil){
    $.mkUtil = parent.$.mkUtil;
    console.log("parent");
}else {
    console.log("self");
    $.mkUtil={
    _token : null,
    _user : null,
    _perms :null,
    set token(token){
        this._token = token;
        if(window.localStorage){
            localStorage.setItem('token',token);
            localStorage.setItem('expiredtime',new Date());
         }
    },

    get token(){
        if(this._token==null){
           if(window.localStorage){
               var token = localStorage.getItem('token');
               if(token&&token!=null&&token!='null'){ //return token;
                  var expired = localStorage.getItem("expiredtime");
                  if(expired){
                      var date1 = new Date(expired);
                      var date2 = new Date();
                      var date3 = date2-date1;
                      if(date3<=expiredtime){
                          // this._token = token;
                          return token;//localStorage.getItem('token');
                      }
                  }
               }
          }
        }
        $.mkUtil.redirectToLogin();
        return this._token;
    },


    set user(user){
        this._user = user;
        if(window.localStorage){
            localStorage.setItem('user',JSON.stringify(user));
        }
    },

    get user(){
      if(this._user==null){
          if(window.localStorage){
              var a = localStorage.getItem('user');
              if(a&&a!=null&&a!='null'){
                  this._user = JSON.parse(a);
                  return this._user;
              }
          }
      }else {
          return this._user;
      }
      $.mkUtil.redirectToLogin();
      return this._user;
    },

    get perms() {
        if (this.user == null)return false;
        if(this._perms) return this._perms;
        var perArr = this.user.perms;
        if (perArr.length<1) return;

        /**
         * dataArr 数结构
         * allItems ={perm:{}}权限结构
         */
        this._perms = {};


        //菜单栏
        var dataArr = [];

        //这里更改后 下面的归类也需相应更改
        var allPermType = ['orgnization',"user","role","resource"
                            ,"equipmentManage","personnelManage","tieHis","equipmentScene","cabinManage","mapManage"
                            ,"personnelLocation","healthyReport","personnelAlarm","personnelCourse","overworked"
                            ,"alarmParameter","YLScope"
                            ,"pushHis","makePush"
                            ,"Log"];

        var allOperaType = [':*',":view",":update",":delete",":create"];


        var keyArr = ['orgnization',"user","role","resource"
                            ,"equipmentManage","personnelManage","tieHis","equipmentScene","cabinManage","mapManage"
                            ,"personnelLocation","healthyReport","personnelAlarm","personnelCourse","overworked"
                            ,"alarmParameter","YLScope"
                            ,"pushHis","makePush"
                            ,"Log"];//预留为前端权限协议 防止后台作出更改
        var permsUtil = function (perm,index) {
            var dic = {
                view: false,
                update: false,
                delete: false,
                create: false
            };
            for (var i = 0; i < allOperaType.length; i++) {
                var match = perm + allOperaType[i];
                if (perArr.indexOf(match) != -1) {
                    if (i == 0) {
                        //全部权限
                        for (var k in dic) {
                            dic[k] = true;
                        }
                        break;
                    } else if (i == 1) {
                        dic.view = true;
                    } else if (i == 2) {
                        dic.update = true;
                    } else if (i == 3) {
                        dic.delete = true;
                    } else if (i == 4) {
                        dic.create = true;
                    }
                }
            }
            var res = [];
            res.push(keyArr[index]);
            res.push(dic);
            return res;
        };

        //所有权限
        this._perms.allitems = {};
        for(var i=0;i<allPermType.length;i++){
            var res = permsUtil(allPermType[i],i);
            this._perms.allitems[res[0]] = res[1];
        }

        //系统管理
        var sysManage = [];
        //orgnization视为有全部权限
        var flag = 0;
        if(this._perms.allitems[keyArr[flag++]].view){
            sysManage.push("department")
        }
        if(this._perms.allitems[keyArr[flag++]].view){
            sysManage.push("user")
        }
        if(this._perms.allitems[keyArr[flag++]].view){
            sysManage.push("role")
        }
        if(this._perms.allitems[keyArr[flag++]].view){
            sysManage.push("resource")
        }
        dataArr.push({sysManage:sysManage});

        //基础信息管理
        var baseInfoManage = [];
        if(this._perms.allitems[keyArr[flag++]].view){
            baseInfoManage.push("equipmentManage")
        }
        if(this._perms.allitems[keyArr[flag++]].view){
            baseInfoManage.push("personnelManage")
        }
        if(this._perms.allitems[keyArr[flag++]].view){
            baseInfoManage.push("tieHis")
        }
        if(this._perms.allitems[keyArr[flag++]].view){
            baseInfoManage.push("equipmentScene")
        }
        if(this._perms.allitems[keyArr[flag++]].view){
            baseInfoManage.push("cabinManage")
        }
        if(this._perms.allitems[keyArr[flag++]].view){
            baseInfoManage.push("mapManage")
        }
        dataArr.push({baseInfoManage:baseInfoManage});

        //人员状态
        var personnelState = [];
        if(this._perms.allitems[keyArr[flag++]].view){
            personnelState.push("personnelLocation")
        }
        if(this._perms.allitems[keyArr[flag++]].view){
            personnelState.push("healthyReport")
        }
        if(this._perms.allitems[keyArr[flag++]].view){
            personnelState.push("personnelAlarm")
        }
        if(this._perms.allitems[keyArr[flag++]].view){
            personnelState.push("personnelCourse")
        }
        if(this._perms.allitems[keyArr[flag++]].view){
            personnelState.push("overworked")
        }
        dataArr.push({personnelState:personnelState});

        //报警管理
        var alarmManage = [];
         if(this._perms.allitems[keyArr[flag++]].view){
            alarmManage.push("alarmParameter")
        }
         if(this._perms.allitems[keyArr[flag++]].view){
            alarmManage.push("YLScope")
        }
        dataArr.push({alarmManage:alarmManage});

        //消息推送
        var msgPush = [];
         if(this._perms.allitems[keyArr[flag++]].view){
            msgPush.push("pushHis")
        }
         if(this._perms.allitems[keyArr[flag++]].view){
            msgPush.push("makePush")
        }
        dataArr.push({msgPush:msgPush});


        //系统日志
        var sysLog = [];
          if(this._perms.allitems[keyArr[flag++]].view){
            sysLog.push("Log")
        }
        dataArr.push({sysLog:sysLog});

        this._perms.dataArr = dataArr;
        return this._perms;
    }

};


/**
 * console
 */
$.mkUtil.console = function (obj) {
    if(debug){
        if(window.console&&window.console.log){
        console.log(obj);
    }
    }
};

/**
 * redirectToLogin
 */
$.mkUtil.redirectToLogin = function () {
    $.mkUtil.clearCache();
    window.top.location = $.mkUtil.loginUrl;
};


/**
 * login url
 * @type {string}
 */
$.mkUtil.loginUrl = '../template/login.html';

$.mkUtil.isLogin = function () {
    if($.mkUtil.token==null){
        $.mkUtil.redirectToLogin();
    }
};

/**
 * login
 * @param var param =  {username:"root",password:"u12345",remember:"Remember Me"};
 */
$.mkUtil.doLogin = function (param) {
     $.ajax({
            type:'POST',
            url:remoteBaseUrl+'/login',//?username=admin&password=admin
            cache:false,
            dataType:"json",
            contentType:"application/json",
            data:JSON.stringify(param),
            success:function (data) {
                console.log(data);
                if(data.access_token){
                    $.mkUtil.token= data.access_token;
                    $.mkUtil.user = data.user;
                    window.top.location = '../template/index.html';
                }
            },
            error:function () {

            }
        });
};



/**
 * logout
 */
$.mkUtil.logout = function () {
    $.mkUtil.clearCache();
    $.mkUtil.redirectToLogin();
};

/**
 * 清除缓存
 */
$.mkUtil.clearCache = function () {
    if(window.localStorage){
        localStorage.clear();
    }
    $.mkUtil.user = null;
    $.mkUtil.token = null;
};


/**
 *mk ajax
 */
$.mkUtil.ajax = function (opts) {
      var error;
      opts.timeout = 3000;
      if(!debug&&!opts.beforeSend){
          opts.beforeSend = function (xhr,request) {
               xhr.setRequestHeader("Authorization",'Bearer '+ $.mkUtil.token);
          };
      }
      if(!debug&&opts.url){
          if(opts.url.indexOf("http")==-1){
              opts.url = remoteBaseUrl +opts.url;
          }
      }
      if(!opts.contentType){
          opts.contentType = "application/json";
      }
      if(!opts.dataType){
          opts.dataType = 'json';
      }
      if(!opts.cache){
          opts.cache = false;
      }
      if(opts.error){
          error = opts.error;
          opts.error = function (a,b) {
              if(a.status==401){
                  $.mkUtil.clearCache();
                  $.mkUtil.redirectToLogin();
              }else {
                  if(error){
                      error(a,b)
                  }
              }
          };
      }
      $.ajax(opts);
};

    /**
     * 获取用户信息
     */
    $.mkUtil.getUserInfo = function (success,error) {
      $.mkUtil.ajax(
          {
            type:'GET',
            url:'/user/findUsers?idOrUsername=admin',
            cache:false,
            dataType:'json',
            success:function (data) {
                if(success){
                    success(data);
                }
            },
            error: function (xhr) {
                if(error){
                    error(xhr);
                }
            }
          }
      );
    };

}


// //判断是否登陆
//
// $.mkUtil.isLogin();
