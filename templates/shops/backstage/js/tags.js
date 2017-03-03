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
        submit_tags();
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
function submit_tags(){
	var title = $("input[name='title']").val();
	var obj = document.getElementById('cate'); //定位id
	var index = obj.selectedIndex; // 选中索引
	var cate = obj.options[index].value; // 选中值
	ajax_post(title, cate);
	return ;
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
function ajax_post(title, cate){
	var url = "/shops/backstage/add_tags";
    $.ajax({
        type: "POST",
        url: url,
        async:false,//同步
        cache:false,//debug的时候设置为false
        data:{'title': title, 'cate': cate},
        dataType: "json",
        success: function(data){
            //var userName = data.userName;
            if (data.status == 200)
                //window.parent.window.location.href = 'add_tags.html';
            	  //alert('添加成功!');
            	  window.location.href = 'tags.html';
            else
                alert(data.msg);
        }
	});
}
// 初始化数据
var value;
var link;

var dataSet = [
    ['Trident','Internet Explorer 4.0','Win 95+','4','X', link],
    ['Trident','Internet Explorer 5.0','Win 95+','5','C', link],
  ];

// 初始化数据
function index(url = "/shops/backstage/backstage_index"){
    //通过 ajax 获取店铺申请信息
    var url = "/shops/backstage/get_tags";
    $.ajax({
        type: "POST",
        url: url,
        async:false,//同步
        cache:false,//debug的时候设置为false
        data:{},
        dataType: "json",
        success: function(data){
            
            if (data.status == 200){
                for(var i = 0; i < data.dataSet.length; i++){
                	 var tag = data.dataSet[i][0];
                    var value = data.dataSet[i][1];
                    var link = '<a class="button border-green" href="javascript:void(0)" onclick="return delete_tags(\''+tag+'\','+'\''+value+'\')">' +
                        '<span class="icon-trash-o"></span> 删除</a>';
                    data.dataSet[i].push(link);
                }
                $('#example').dataTable({
                    "data": data.dataSet,
                    "columns": [
                        { "title": "分类" },
                        { "title": "名称"},
                        { "title": "操作", "sWidth":"10%", 'sClass': "center"}
                    ]
                });
            }else{
                window.parent.window.location.href = 'login.html';
            }
        }
    });
}
$(document).ready(function() {
    index();
});
// 审核通过
function delete_tags(id, value){
    if(confirm("您确定要删除吗?")){
        operate_tags(id, value, "/shops/backstage/delete_tags");
	}
}
// ajax
function operate_tags(id, value, url){
    $.ajax({
        type: "POST",
        url: url,
        async:false,//同步
        cache:false,//debug的时候设置为false
        data:{'type_name': id, 'sub_type':value},
        dataType: "json",
        success: function(data){
            //alert(data.msg);
        }
    });
    location.reload();
}

