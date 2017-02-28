/**
 * Created by faraway on 17-1-13.
 */
var URL_base="";

function getOptions(callback){
    reqwest({
        url:URL_base+"get_sub_store_types",
        method:"GET",
        success:function(resp){
            resp.data.unshift("选择店铺分类");
            return(callback("",resp.data));
        }
    });
}
function getOptions_(callback){
    return(callback("",
        [
            "选择店铺类型",
            "餐饮",
            "运动",
            "眼镜店",
            "电子设备"
        ]
    ));
}