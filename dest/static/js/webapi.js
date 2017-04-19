var apidebug = true;
$.webapi = {
    auth:{

    },
    user:{
         //添加用户
        addUser:'/user/addUser',
        //查询单个用户
        findUserById:apidebug?'../api/oneuser.json':'/user/findById',
        //修改用户信息
        updateUser:'/user/update',
        //删除用户
        deleteUser:'/user/delete',
        //修改密码
        updatePass:'/user/changPwd',
        //根据姓名模糊查询
        findUserByName:apidebug?'../api/user.json':'/user/findByname',
        //根据部门查找用户
        findUserByDept:apidebug?'../api/user.json':'/user/findBydept'
    },
    role:{

    },
    dept:{
        //添加部门
        addDept:'/org/add',
        //查询所有部门
        findAll:apidebug?'../api/dept.json':'/org/find',
        //删除部门
        deleteDept:'org/delete'
    },
    equipment:{

    }


};