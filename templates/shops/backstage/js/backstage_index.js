$("#checkall").click(function(){
  $("input[name='id[]']").each(function(){
	  if (this.checked) {
		  this.checked = false;
	  }
	  else {
		  this.checked = true;
	  }
  });
})
function DelSelect(){
	var Checkbox=false;
	 $("input[name='id[]']").each(function(){
	  if (this.checked==true) {
		Checkbox=true;
	  }
	});
	if (Checkbox){
		var t=confirm("您确认要删除选中的内容吗？");
		if (t==false) return false;
	}
	else{
		alert("请选择您要删除的内容!");
		return false;
	}
}
// 初始化数据
var value;
var link;

var dataSet = [
    ['Trident','Internet Explorer 4.0','Win 95+','4','X', link],
    ['Trident','Internet Explorer 5.0','Win 95+','5','C', link],
  ];

// 初始化数据
function index(url = "/shops/backstage_index"){
    //通过 ajax 获取店铺申请信息
    var url = "/shops/backstage_index";
    $.ajax({
        type: "POST",
        url: url,
        async:false,//同步
        cache:false,//debug的时候设置为false
        data:{},
        dataType: "json",
        success: function(data){
            for(var i = 0; i < data.dataSet.length; i++){
                var value = data.dataSet[i][0];
                var link = '<a class="button border-green" href="javascript:void(0)" onclick="return against_store(\''+value+'\')">' +
                    '<span class="icon-trash-o"></span> 反对</a>' +
                  '&nbsp;&nbsp;' +
                  '<a class="button border-red" href="javascript:void(0)" onclick="return pass_store(\''+value+'\')">' +
                    '<span class="icon-check"></span> 同意 </a>';
                data.dataSet[i].push(link);
            }
            if (data.status == 200){
                $('#example').dataTable({
                    "data": data.dataSet,
                    "columns": [
                        { "title": "店铺名称" },
                        { "title": "描述" },
                        { "title": "地点" },
                        { "title": "分类"},
                        { "title": "申请时间"},
                        { "title": "操作", "sWidth":"16%"}
                    ]
                });
            }
            else{
                alert(data.msg);
            }
        }
    });
}
$(document).ready(function() {
    index();
});
// 审核通过
function pass_store(id){
    if(confirm("您确定要通过吗?")){
        operate_store(id, "/shops/backstage_pass_store");
	}
}
// 审核不通过
function against_store(id){
    if(confirm("您确定要反对吗?")){
        operate_store(id, "/shops/backstage_against_store");
	}
}
// ajax
function operate_store(id, url){
    $.ajax({
        type: "POST",
        url: url,
        async:false,//同步
        cache:false,//debug的时候设置为false
        data:{'store_name': id},
        dataType: "json",
        success: function(data){
            alert(data.msg);
        }
    });
    location.reload();
}

