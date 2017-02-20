/**
 * Created by faraway on 17-1-13.
 */
var URL_base="";

function getOptions(callback){
    request({
        url:URL_base+"getOptions",
        method:"GET",
        success:function(resp){
            // json!
            //Such as
            /*resp={
                error:"服务器错误，正在维护中！",
                data:{}
            };*/
            if(!error){
                resp.data.unshift({value:"0",title:"选择店铺分类"});
                return(callback("",resp.data));
            }else{
                return(callback(error,{}));
            }
        }
    });
}
function getOptions_(callback){
    return(callback("",[
            {value:"0",title:"选择店铺类型"},
            {value:"1",title:"餐饮"},//index from 1
            {value:"2",title:"运动"},
            {value:"3",title:"眼镜店"},
            {value:"4",title:"电子设备"}
        ]
    ));
}