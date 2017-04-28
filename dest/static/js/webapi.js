var apidebug = false;
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
        deleteDept:'/org/delete',
        //更新部门
        updateDept:'/org/update'
    },
    equipment:{
        //添加设备
        addEquipment:'/watch/add',
        //查询所有设备
        findAll:apidebug?'../api/equipment.json':'/watch/findAll',
        //删除设备
        deleteEquipment:'/watch/delete',
        //编辑设备
        updateEquipment:'/watch/update',
        //根据卡号，编号，MAC地址模糊查询
        findEquipment:apidebug?'../api/equipment.json':'/watch/findAll',
        //根据id查询设备
        findEquipmentById:apidebug?'../api/equipment.json':'/watch/getById',
        //分页
        paginationEquipment:'/watch/findAllByPage'
    },
    color:{
        //查找颜色(包括条件查询和无条件查询)
        findColor:apidebug?'../api/equipment.json':'/color/find'
    },
    scene:{
        //添加设备场景
        addEquipmentScene:'/scene/add',
        //编辑设备场景
        updateEquipmentScene:'/scene/update',
        //删除设备场景
        deleteEquipmentScene:'/scene/delete',
        //查询所有场景
        findEquipmentScene:'/scene/findAll',
        //根据id查询场景
        findEquipmentSceneById:'/scene/get'

    }


};