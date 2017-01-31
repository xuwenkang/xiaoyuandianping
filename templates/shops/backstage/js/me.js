/*
监听键盘输入
*/
document.onkeydown=function(event){
    var e = event || window.event || arguments.callee.caller.arguments[0];
    if(e && e.keyCode==27){ // 按 Esc 
        //要做的事情
    }
    if(e && e.keyCode==113){ // 按 F2 
            //要做的事情
        }            
    if(e && e.keyCode==13){ // enter 键
        //要做的事情
        login();
    }
}; 

/*
	登录信息验证
*/
function login_validate(){
	if (!validate_string('name', 4, 16, false, "账户")){
		$("input[name='name']").focus();
		return false;
	}
	if (!validate_string('password', 4, 16, false, "密码")){
		$("input[name='password']").focus();
		return false;
	}
	return true;
}

/*
	登录
*/
function login(){
	ajax_post();
	/*
	if (login_validate()){
		alert("登录成功");
	}else{
		alert("登录失败");
	}*/
}

/*
	验证信息接口
*/
/*
	验证字符串
	parmas:
	name		字符串名字
	min_length	最短长度
	max_length	最长长度
	isEmpty		是否可以为空
	ch_name		中文名字
*/
function validate_string(name, min_length, max_length, isEmpty, ch_name){
	var value = $("input[name='"+name+"']").val();
	if (value == "" && !isEmpty){
		alert(ch_name + "不能为空!");
		return false;
	}
	if (value.length < min_length){
		alert(ch_name + "的长度不能小于!" + min_length);
		return false;
	}
	if (value.length > max_length){
		alert(ch_name + "的长度不能大于!" + max_length);
		return false;
	}
	return true;
}
/*
	ajax 传输数据
*/
function ajax_post(){
    user_name = $("input[name='name']").val()
    password = $("input[name='password']").val()

	var url = "/shops/backstage_login";
    $.ajax({
        type: "POST",
        url: url,
        async:false,//同步
        cache:false,//debug的时候设置为false
        data:{'user_name': user_name, 'password': password},
        dataType: "json",
        success: function(data){
            //var userName = data.userName;
            if (data.status == 200)
                window.location = "index.html";
            else
                alert(data.msg)
            //window.location = "bfrontstage/front_personal_info.jsp?userId="+userId+"&userName="+userName+"&sid="+sid;
        }
	});
}