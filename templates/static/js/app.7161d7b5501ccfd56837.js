webpackJsonp([1,0],[function(t,e,s){"use strict";function a(t){return t&&t.__esModule?t:{default:t}}var i=s(71),n=a(i),o=s(72),r=a(o),c=s(49),l=a(c),d=s(56),u=a(d),h=s(54),v=a(h),p=s(50),m=a(p),f=s(57),_=a(f),g=s(59),w=a(g),k=s(58),y=a(k),C=s(51),b=a(C),x=s(55),S=a(x),$=s(53),L=a($),T=s(52),A=a(T);n.default.use(r.default);var M=[{path:"/",component:v.default},{path:"/storeDetail/:id",component:y.default},{path:"/storeList/:type",component:w.default},{path:"/storeList/search/noStore",component:_.default},{path:"/storeList/search/:keyword",component:w.default},{path:"/newStore",component:u.default},{path:"/newStore/addSuccess",component:m.default},{path:"/comment/success/:id",component:L.default},{path:"/comment/failed/:id",component:A.default},{path:"/comment/mark/:id/:title/:tags/:comment",component:S.default},{path:"/comment/:id",component:b.default},{path:"/:type",component:v.default}],R=new r.default({routes:M});new n.default({el:"#app",template:"<App/>",components:{App:l.default},router:R,mounted:function(){}})},,,,,,,,,,function(t,e,s){t.exports=s.p+"static/img/avatar.png"},function(t,e,s){t.exports=s.p+"static/img/no.png"},,,,,,,,,,,,,,,,,,,,function(t,e,s){t.exports=s.p+"static/img/comment_top.png"},function(t,e,s){t.exports=s.p+"static/img/xingxing.png"},function(t,e,s){t.exports=s.p+"static/img/bad.png"},function(t,e,s){t.exports=s.p+"static/img/good.png"},function(t,e,s){t.exports=s.p+"static/img/normal.png"},function(t,e,s){t.exports=s.p+"static/img/header.png"},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e,s){s(44);var a=s(2)(s(75),s(67),null,null);t.exports=a.exports},function(t,e,s){s(41);var a=s(2)(s(76),s(64),"data-v-4834b120",null);t.exports=a.exports},function(t,e,s){s(46);var a=s(2)(s(77),s(69),"data-v-834e30fe",null);t.exports=a.exports},function(t,e,s){s(38);var a=s(2)(s(78),s(61),"data-v-06c7de9e",null);t.exports=a.exports},function(t,e,s){s(45);var a=s(2)(s(79),s(68),"data-v-744d03f2",null);t.exports=a.exports},function(t,e,s){s(47);var a=s(2)(s(80),s(70),null,null);t.exports=a.exports},function(t,e,s){s(39);var a=s(2)(s(81),s(62),null,null);t.exports=a.exports},function(t,e,s){s(42);var a=s(2)(s(82),s(65),"data-v-56f6d06f",null);t.exports=a.exports},function(t,e,s){s(37);var a=s(2)(s(83),s(60),"data-v-035fdc42",null);t.exports=a.exports},function(t,e,s){s(43);var a=s(2)(s(84),s(66),"data-v-585eb998",null);t.exports=a.exports},function(t,e,s){s(40);var a=s(2)(s(85),s(63),"data-v-2557f87e",null);t.exports=a.exports},function(t,e,s){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"add-failed-root",class:{show:t.loaded}},[a("img",{attrs:{src:s(11)},on:{load:t.loadPlus}}),t._v(" "),a("h1",[t._v("没有找到相应的店铺信息哦～")]),t._v(" "),a("p",[t._v("到添加新店里提醒我们吧！")]),t._v(" "),a("button",{on:{click:t.newStore}},[t._v("添加新店")])])},staticRenderFns:[]}},function(t,e,s){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"add-failed-root",class:{show:t.loaded}},[a("img",{attrs:{src:s(11)},on:{load:t.loadPlus}}),t._v(" "),a("h1",[t._v("你已经评价过该店铺了")]),t._v(" "),a("p",[t._v("试着评价其他的页面吧！")]),t._v(" "),a("button",{on:{click:t.newStore}},[t._v("返回")])])},staticRenderFns:[]}},function(t,e,s){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"mark-root",class:{show:t.loaded}},[a("div",{staticClass:"alert",class:{show:t.alertShow}},[a("p",[t._v(t._s(t.alertValue))])]),t._v(" "),a("div",{staticClass:"mark-header"},[a("router-link",{attrs:{to:"/"}},[a("span")]),t._v(" "),a("span",[t._v(t._s(t.$route.params.title))])],1),t._v(" "),a("div",{staticClass:"mark-body"},[a("div",{staticClass:"img"},[a("img",{staticClass:"bad",style:{display:t.score<=5?"block":"none"},attrs:{src:s(33)}}),t._v(" "),a("img",{staticClass:"normal",style:{display:t.score>5&&t.score<=7?"block":"none"},attrs:{src:s(35)}}),t._v(" "),a("img",{staticClass:"good",style:{display:t.score>7?"block":"none"},attrs:{src:s(34)}})]),t._v(" "),a("div",{staticClass:"switcher"},[a("h2",[t._v(t._s(t.score)+"分")]),t._v(" "),a("div",{on:{touchstart:t.touchstart,touchmove:t.touchmove,touchend:t.touchend}},[a("span",[t._v("0 ")]),t._v(" "),a("div",{staticClass:"bar"},[a("div",[a("div",{staticClass:"button",style:{transform:"translateX("+t.offset+"px)"}})])]),t._v(" "),a("span",[t._v("10")])])])]),t._v(" "),a("div",{staticClass:"mark-footer"},[a("div",{staticClass:"buttons"},[a("button",{on:{click:function(e){t.$router.push("storeDetail/"+t.$route.params.title)}}},[t._v("暂不评价")]),t._v(" "),a("button",{on:{click:t.submit}},[t._v("完成")])])])])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"store-list-root",class:{show:t.loaded}},[s("div",{staticClass:"store-list-header"},[s("router-link",{staticClass:"store-list-return",attrs:{to:"/noAnim"}},[s("span")]),t._v(" "),s("h1",[t._v(t._s(t.title))]),t._v(" "),s("div",{staticClass:"tip"}),t._v(" "),s("div",{staticClass:"search",class:{active:t.isSearchActive},on:{click:t.searchActive}},[s("button",{on:{click:t.search}},[t._v("搜索")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.keyword,expression:"keyword"}],attrs:{type:"text",placeholder:"输入搜索内容"},domProps:{value:t._s(t.keyword)},on:{click:t.inputClick,input:function(e){e.target.composing||(t.keyword=e.target.value)}}})]),t._v(" "),s("div",{staticClass:"menu",class:{active:t.isMenuActive},on:{click:t.menuActive}},[s("button",{on:{blur:t.menuActive}},[t._v("菜单")]),t._v(" "),s("ul",{staticClass:"menu"},[s("li",[s("button",{on:{click:t.sort1}},[t._v("综合排序")])]),t._v(" "),s("li"),t._v(" "),s("li",[s("button",{on:{click:t.sort2}},[t._v("高分排序")])]),t._v(" "),s("li"),t._v(" "),s("li",[s("button",{on:{click:t.sort3}},[t._v("低分排序")])])])])],1),t._v(" "),s("div",{staticClass:"store-list-body"},[s("ul",t._l(t.data,function(e){return s("li",{on:{click:function(s){t.$router.push("/storeDetail/"+e.id)}}},[s("div",{staticClass:"title-container"},[s("h2",[t._v(t._s(e.name))]),t._v(" "),s("span",[t._v(t._s(t.convertToFloat(e.score)))])]),t._v(" "),s("ul",{staticClass:"tags"},t._l(e.tags,function(e){return s("li",[t._v(t._s(e[0]))])})),t._v(" "),s("ul",{staticClass:"pic"},t._l(e.picURLs,function(t){return s("li",[s("img",{attrs:{src:t}})])}))])}))]),t._v(" "),s("div",{staticClass:"store-list-footer"},[s("router-link",{attrs:{to:"/newStore"}},[s("span"),t._v("添加新店")])],1)])},staticRenderFns:[]}},function(t,e,s){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"add-success-root",class:{show:t.loaded}},[a("img",{attrs:{src:s(10)},on:{load:t.loadPlus}}),t._v(" "),a("h1",[t._v("感谢您提供的数据")]),t._v(" "),a("p",[t._v("您添加的新店将在审核通过后火速上线哦～")]),t._v(" "),a("button",{on:{click:t.back}},[t._v("返回首页")])])},staticRenderFns:[]}},function(t,e,s){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"new-store-root",class:{show:t.loaded}},[a("div",{staticClass:"new-store-header"},[a("div",{staticClass:"new-store-alert"}),t._v(" "),a("img",{attrs:{src:s(36)},on:{load:function(e){t.n++,t.checkLoad()}}}),t._v(" "),t._m(0)]),t._v(" "),a("div",{staticClass:"new-store-input"},t._l(t.items,function(e){return a("div",{staticClass:"input-item",class:e.inputType,attrs:{"data-necessary":e.necessary}},["select"===e.inputType?[a("h2",[a("span",[t._v(t._s(e.title))])]),t._v(" "),a("div",t._l(e.ops,function(e){return a("button",{staticClass:"select-option",attrs:{"data-id":e.id},on:{click:t.select}},[t._v(t._s(e.name))])}))]:"shortText"===e.inputType?[a("h2",[a("span",[t._v(t._s(e.title))])]),t._v(" "),a("input",{attrs:{placeholder:e.placeholder,id:e.name,type:"text"}})]:"longText"===e.inputType?[a("h2",[a("span",[t._v(t._s(e.title))])]),t._v(" "),a("textarea",{attrs:{placeholder:e.placeholder,id:e.name,type:"text"}})]:t._e()],2)})),t._v(" "),a("button",{staticClass:"submit",on:{click:t.submit}},[t._v("提交")])])},staticRenderFns:[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("h1",[s("span"),s("span",[t._v("添加新店")])])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"store-detail-root",class:{show:t.loaded}},[s("div",{staticClass:"store-detail-header"},[s("a",{on:{click:function(e){t.$router.go(-1)}}},[s("span",{staticClass:"back"})]),t._v(" "),s("h1",[t._v(t._s(t.detail.name))]),t._v(" "),s("div",{staticClass:"tip"})]),t._v(" "),s("div",{staticClass:"store-detail-body"},[s("div",{staticClass:"body-top",class:{low:t.low&&t.detail.comments.length>=5}},[s("div",{staticClass:"addr-time"},[s("h2",{staticClass:"time"},[s("span",{staticClass:"icon-time"},[t._v("营业时间:")]),t._v(t._s(t.detail.openTime))]),t._v(" "),s("h2",{staticClass:"addr"},[s("span",{staticClass:"icon-addr"},[t._v("地址:")]),t._v(t._s(t.detail.address))]),t._v(" "),s("span",{staticClass:"score"},[t._v(t._s(t.convertToFloat(t.detail.score))+"分")])]),t._v(" "),s("div",{staticClass:"container"},[s("div",{staticClass:"tags"},t._l(t.detail.tags,function(e){return s("span",[t._v(t._s(e[0]))])})),t._v(" "),s("div",{staticClass:"pics"},[s("div",{staticClass:"img-con"},t._l(t.detail.picURLs_,function(t,e){return s("img",{attrs:{src:t}})})),t._v(" "),t.detail.picURLs.length>3?s("div",{staticClass:"mask"},[t._v("+"+t._s(t.detail.picURLs.length-t.detail.picURLs_.length))]):t._e()])])]),t._v(" "),s("div",{staticClass:"body-bottom"},[s("div",{staticClass:"tabs"},[s("span",{class:{chosen:t.firstChosen},on:{click:function(e){1!=t.firstChosen?t.firstChosen=!t.firstChosen:0}}},[t._v("最热评论")]),t._v(" "),s("span",{class:{chosen:!t.firstChosen},on:{click:function(e){1==t.firstChosen?t.firstChosen=!t.firstChosen:0}}},[t._v("最新评论")])]),t._v(" "),s("ul",{staticClass:"comments-list",attrs:{id:"comments-list"}},t._l(t.detail.comments,function(e){return s("li",[s("div",[s("span",{staticClass:"date"},[t._v(t._s(new Date(1e3*e.date).toLocaleDateString()))]),t._v(" "),s("span",{staticClass:"dislike",class:{black:e.disliked},attrs:{"data-id":e.id},on:{click:function(s){e.disliked?t.disliked=!1:(t.liked=!1,t.disliked=!0),t.changeLikeStatus(t.liked,t.disliked,e)}}},[s("span",[t._v(t._s(e.dislike))])]),t._v(" "),s("span",{staticClass:"like",class:{black:e.liked},attrs:{"data-id":e.id},on:{click:function(s){e.liked?t.liked=!1:(t.disliked=!1,t.liked=!0),t.changeLikeStatus(t.liked,t.disliked,e)}}},[s("span",[t._v(t._s(e.like))])])]),t._v(" "),s("p",[t._v(t._s(e.value))])])}))])]),t._v(" "),s("div",{staticClass:"store-detail-footer"},[s("router-link",{attrs:{to:"/comment/"+t.$route.params.id}},[s("span"),t._v("我要评价")])],1)])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("router-view")},staticRenderFns:[]}},function(t,e,s){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"add-success-root",class:{show:t.loaded}},[a("img",{attrs:{src:s(10)},on:{load:t.loadPlus}}),t._v(" "),a("h1",[t._v("感谢您的评价")]),t._v(" "),a("p",[t._v("现在大家已经可以看到你的评价了")]),t._v(" "),a("button",{on:{click:t.back}},[t._v("返回")])])},staticRenderFns:[]}},function(t,e,s){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"comment-root",class:{show:t.loaded}},[a("div",{staticClass:"alert",class:{show:t.alertShow}},[a("p",[t._v(t._s(t.alertValue))])]),t._v(" "),a("div",{staticClass:"comment-header"},[a("router-link",{staticClass:"comment-back",attrs:{to:"/"}}),t._v(" "),a("img",{attrs:{src:s(31)},on:{load:function(e){t.n++,t.n>=3?t.loaded=!0:0}}}),t._v(" "),a("div",{staticClass:"comment-float"}),t._v(" "),a("h1",[t._v(t._s(t.data.name))])],1),t._v(" "),a("div",{staticClass:"comment-body"},[a("div",{staticClass:"choose-tags"},[a("div",{staticClass:"width-ruler"}),t._v(" "),a("div",{staticClass:"tags-pre",staticStyle:{display:"block",opacity:"0",position:"absolute","z-index":"-1"}},t._l(t.data.tags,function(e){return a("button",{on:{click:t.select}},[t._v(t._s(e.title))])})),t._v(" "),t.loaded?a("swipe",{attrs:{auto:0,continous:!1}},t._l(t.pages,function(e,s){return a("swipe-item",{staticClass:"tags swiper-slide",style:{width:t.width_+"px"}},[a("div",{staticClass:"button-viewport"},[a("div",{staticClass:"button-wrap",class:{last:s===t.pages.length-1},style:{top:"-"+3.2*s+"rem"}},t._l(t.data.tags,function(e){return a("button",{attrs:{"data-id":e.id},on:{click:t.select}},[t._v(t._s(e.title))])}))])])})):t._e(),t._v(" "),a("div",{staticClass:"dots"})],1),t._v(" "),a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.text,expression:"text"}],attrs:{placeholder:"可选(限200字以内)"},domProps:{value:t._s(t.text)},on:{input:function(e){e.target.composing||(t.text=e.target.value)}}})]),t._v(" "),a("div",{staticClass:"comment-footer"},[a("a",{on:{click:t.next}},[a("span"),t._v("下一步 ")])])])},staticRenderFns:[]}},function(t,e,s){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"mainpage-root",class:{show:t.loaded}},[a("div",{staticClass:"mainpage-header"},[a("img",{staticStyle:{display:"none"},attrs:{src:s(32),id:"xingxing"}}),t._v(" "),a("canvas",{attrs:{width:t.canvasWidth,height:t.canvasHeight}}),t._v(" "),a("h1",[t._v("Upick")]),t._v(" "),a("div",{staticClass:"search"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.keyword,expression:"keyword"}],staticClass:"search-input",attrs:{placeholder:"输入搜索内容"},domProps:{value:t._s(t.keyword)},on:{input:function(e){e.target.composing||(t.keyword=e.target.value)}}}),t._v(" "),a("button",{staticClass:"search-button",on:{click:t.searchClick}},[a("span",{staticClass:"search-button-icon"},[t._v("搜索")])])]),t._v(" "),a("div",{staticClass:"topic"},[a("p",[t._v(t._s(t.data.topic))])])]),t._v(" "),a("div",{staticClass:"mainpage-body"},[a("div",{staticClass:"classify"},[a("h2",[t._v("分类")]),t._v(" "),a("div",{staticClass:"column"},t._l(t.data.list1,function(e,s){return a("div",{staticClass:"column-block",on:{click:t.buttonClick}},[a("div",{staticClass:"back"},[a("ul",t._l(e.subTitle,function(e){return a("li",[a("router-link",{attrs:{to:"storeList/"+e}},[t._v(t._s(e))])],1)})),t._v(" "),a("div",{staticClass:"img-div-a",style:{transform:"scale("+5*t.rem/181+")",backgroundPosition:"-"+181*s+"px -205px"}})]),t._v(" "),a("div",{staticClass:"img-div",style:{transform:"scale("+5*t.rem/181+")",backgroundPosition:"-"+181*s+"px 0"}}),t._v(" "),a("h3",[t._v(t._s(e.title))])])}))])]),t._v(" "),a("div",{staticClass:"hot-store"},[a("h2",[t._v("热门商家")]),t._v(" "),a("div",[a("div",{staticClass:"back"}),t._v(" "),a("div",{staticClass:"mainpage-bottom"},t._l(t.data.list2,function(e){return a("router-link",{attrs:{to:"storeDetail/"+e}},[t._v(t._s(e))])}))])])])},staticRenderFns:[]}},,,,,function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"app",components:{}}},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{loaded:!1,n:0}},methods:{back:function(){this.$router.push("/noAnim")},loadPlus:function(){this.n++,2===this.n&&(this.loaded=!0)}},mounted:function(){this.n++}}},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s(86);s(48);var i=s(3);e.default={components:{swipe:a.Swipe,"swipe-item":a.SwipeItem},data:function(){return{data:{name:"",iconURL:"",tags:[]},width_:0,pages:[""],loaded:!1,text:"",n:0,alertShow:"",alertValue:"",alertTimeout:0}},methods:{select:function(t){var e=t.target;e.classList.contains("active")?e.classList.remove("active"):e.classList.add("active")},next:function(){return 0===document.querySelectorAll(".choose-tags button.active").length?void this.alert_("未选择标签！"):""===this.text?void this.alert_("未填写详情！"):void this.$router.push("/comment/mark/"+this.$route.params.id+"/"+this.data.name+"/"+this.getChosenTags()+"/"+this.text)},getChosenTags:function(){for(var t=document.querySelectorAll(".choose-tags button.active"),e=[],s=0;s<t.length;s++)e.push(t[s].dataset.id);return e.join("&")},alert_:function(t){clearTimeout(this.alertTimeout),this.alertValue=t,this.alertShow=!0;var e=this;this.alertTimeout=setTimeout(function(){e.alertShow=!1},2500)}},watch:{pages:function(){}},mounted:function(){var t=this;i.get("comment_data.php?id="+t.$route.params.id).then(function(e){e=e.data,t.data=e.data,t.n++,t.width_=document.querySelector("div.width-ruler").clientWidth,t.$forceUpdate(),setTimeout(function(){var e=parseInt(document.querySelector("div.tags-pre").clientHeight/(32*document.querySelector("div.choose-tags").clientHeight/47));document.querySelector("div.tags-pre").style.display="none";for(var s=[],a=0;a<e+1;a++)s.push("");t.pages=s,t.n++,t.n>=3?t.loaded=!0:0},200)}).catch(function(e){console.log(e),e&&alert("加载失败！"),t.loaded=!0})}}},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{loaded:!1,n:0}},methods:{newStore:function(){this.$router.push("/comment/"+this.$route.params.id)},loadPlus:function(){this.n++,2===this.n&&(this.loaded=!0)}},mounted:function(){this.n++}}},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{loaded:!1,n:0}},methods:{back:function(){this.$router.push("/storeDetail/"+this.$route.params.id)},loadPlus:function(){this.n++,2===this.n&&(this.loaded=!0)}},mounted:function(){this.n++}}},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a,i,n,o=s(3),r=0,c=0,l=["rgba(255,255,255,1)","rgba(96,119,186, 0.7)","rgba(142,211,227, 0.5)"],d=[],u=[],h=0;window.requestAnimFrame=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(t){window.setTimeout(t,1e3/60)}}(),window.cancelAnimFrame=function(){return window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||window.oCancelAnimationFrame||window.msCancelAnimationFrame||function(t){window.clearTimeout(t)}}(),e.default={data:function(){return{canvasWidth:document.body.clientWidth,canvasHeight:.45*document.body.clientWidth,data:{topic:"这是头条推文这是头条推文",list1:[],list2:[]},loaded:!1,rem:18,keyword:""}},methods:{searchClick:function(t){var e=t.target.parentNode.querySelector("input"),s=t.target.parentNode.parentNode;""===e.value&&s.classList.contains("active")?s.classList.remove("active"):s.classList.contains("active")?this.$router.push("/storeList/search/"+this.keyword):s.classList.add("active")},buttonClick:function(t){0!=document.querySelectorAll(".active").length&&document.querySelector(".active").classList.remove("active"),t.target.parentNode.classList.add("active")},loop:function(){i.clearRect(0,0,n.width,n.height),i.fillStyle="#343856",i.fillRect(0,0,n.width,n.height);var t=document.getElementById("xingxing");i.drawImage(t,0,0,t.width,t.height,0,0,n.width,n.width*t.height/t.width),r+=2;for(var e=n.width/50,s=0;s<d.length;s++)if(d[s].position.x-d[s].length/Math.SQRT2>n.width||d[s].position.y-d[s].length/Math.SQRT2>n.height)d.splice(s,1),d.push({position:{x:Math.random()*n.width*.75,y:0},color:"",length:.5*Math.random()*c+2*c});else{d[s].position.x+=e/2,d[s].position.y+=e/2;var o=i.createRadialGradient(d[s].position.x,d[s].position.y,1,d[s].position.x,d[s].position.y,1.5*e);o.addColorStop(0,"rgba(255,255,255,0.6)"),o.addColorStop(.2,"rgba(255,223,0,0.18)"),o.addColorStop(1,"rgba(0,0,0,0)"),i.fillStyle=o,i.fillRect(d[s].position.x-e/2,d[s].position.y-e/2,e,e),i.moveTo(d[s].position.x,d[s].position.y),i.lineTo(d[s].position.x-d[s].length/Math.SQRT2,d[s].position.y-d[s].length/Math.SQRT2),i.strokeStyle="rgba(255,255,255,0.2)",i.lineWidth="20px",i.stroke()}for(s=l.length-1;s>=0;s--){i.fillStyle=l[s];var u=(r+90*s)*Math.PI/180,h=Math.sin(u)*c*.7,v=Math.cos(u)*c*.7;i.beginPath(),i.moveTo(0,n.height/3*2+h),i.bezierCurveTo(n.width/2,n.height/3*2+h-c,n.width/2,n.height/3*2+v-c,n.width,n.height/3*2+v),i.lineTo(n.width,n.height),i.lineTo(0,n.height),i.lineTo(0,n.height/3*2+h),i.closePath(),i.fill()}a=requestAnimFrame(this.loop)}},created:function(){},mounted:function(){n=document.querySelector("canvas"),i=document.querySelector("canvas").getContext("2d"),c=.08*n.width,d=[],u=[];for(var t=0;t<2;t++)d.push({position:{x:-10*c+30*Math.random()*c,y:-5*c-Math.random()*c},color:"",length:c/2});for(t=0;t<10;t++)u.push({x:c+10*Math.random()*c,y:c+5*Math.random()*c});window.cancelAnimFrame(a);var e=this;document.getElementById("xingxing").onload=function(){e.loop()},e.rem=parseInt(window.getComputedStyle(document.documentElement).fontSize);var s=new Image,r=new Image,l=new Image;s.src="/static/img/bottom.png",s.onload=function(){h++,h>=4&&(e.loaded=!0)},r.src="/static/img/title.png",r.onload=function(){h++,h>=4&&(e.loaded=!0)},l.src="/static/img/columns.png",l.onload=function(){h++,h>=4&&(e.loaded=!0)},s=r=l=null,o.get("index").then(function(t){t=t.data,e.data=t,h++,h>=4&&(e.loaded=!0)}).catch(function(t){console.log(t),t&&alert("主页加载失败！"),e.loaded=!0})}}},function(t,e,s){"use strict";function a(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var i=s(12),n=a(i),o=s(3);e.default={data:function(){return{loaded:!1,title:"aaa",score:"0.0",touched:!1,offset:0,rem:0,startX:0,offset_bak:0,alertShow:"",alertValue:"",alertTimeout:0,hasMarked:!1,n:0}},methods:{touchstart:function(t){if(this.hasMarked=!0,this.touched=!0,1===t.touches.length){var e=t.touches[0];this.startX=e.clientX,this.offset=e.clientX-2.5*this.rem,this.offset_bak=e.clientX-2.5*this.rem,this.score=(this.offset/document.querySelector("div.bar").clientWidth*10).toFixed(1)}},touchmove:function(t){if(1===t.touches.length){var e=t.touches[0];this.touched&&(this.offset=this.offset_bak+e.clientX-this.startX,this.offset>=document.querySelector("div.bar").clientWidth?this.offset=document.querySelector("div.bar").clientWidth:this.offset<=0&&(this.offset=0),this.score=(this.offset/document.querySelector("div.bar").clientWidth*10).toFixed(1))}},touchend:function(t){this.touched&&(this.touched=!1)},convertToFloat:function(t){return"number"==typeof t&&(t=t.toString()),3===t.length?t:t+".0"},submit:function(){var t=this;if(!this.hasMarked)return void this.alert_("您未进行评分！");var e={id:this.$route.params.id,title:this.$route.params.title,tags:this.$route.params.tags.split("&"),text:this.$route.params.comment,score:this.score};e=encodeURIComponent((0,n.default)(e)),o.post("comment.php",{data:e}).then(function(e){e=e.data,e.error?e.error.indexOf("commented")?t.$router.push("/comment/failed"+t.$route.params.id):t.alert_("提交失败：服务器拒绝您的数据！"):t.$router.push("/comment/success/"+t.$route.params.id)}).catch(function(e){e&&t.alert_("网络出错！")})},alert_:function(t){clearTimeout(this.alertTimeout),this.alertValue=t,this.alertShow=!0;var e=this;this.alertTimeout=setTimeout(function(){e.alertShow=!1},2500)}},mounted:function(){for(var t=this,e=document.querySelectorAll("img"),s=0;s<e.length;s++)e[s].onload=function(){++t.n>=e.length&&(t.loaded=!0,t.rem=document.querySelector("div.switcher span").clientWidth/1.5)}}}},function(t,e,s){"use strict";function a(t){return t&&t.__esModule?t:{default:t}}function i(t,e,s,a){"undefined"==typeof e&&(e=2100),"undefined"==typeof s&&(s="crimson"),"undefined"==typeof a&&(a=function(){}),clearInterval(n),l=e;var i=document.querySelector("div.new-store-alert");i.classList.add("show"),i.style.background=s,i.innerHTML="<p>"+t+"</p>",n=setInterval(function(){if(l-=30,l<=0)return i.classList.remove("show"),i.style.background="transparent",clearInterval(n),a()},30)}Object.defineProperty(e,"__esModule",{value:!0});var n,o,r=s(12),c=a(r),l=0,d=s(3);e.default={data:function(){return{items:o,loaded:!1,n:0}},methods:{submit:function(){for(var t=this,e=[],s=document.querySelectorAll("div.input-item"),a=0;a<s.length;a++)if(s[a].classList.contains("select")){var n=s[a].querySelector("h2>span").innerHTML,o=[],r=document.querySelectorAll("button.select-option.active");if(0===r.length&&"true"==s[a].dataset.necessary)return void i("没有选择"+n);for(var l=0;l<r.length;l++)o.push({id:r[l].dataset.id,name:r[l].innerHTML});e.push({name:n,type:"select",ops:o})}else if(s[a].classList.contains("shortText")){var u=s[a].querySelector("input").value,n=s[a].querySelector("h2>span").innerHTML;if(""===u&&"true"==s[a].dataset.necessary)return void i("没有填写"+n);e.push({name:n,type:"shortText",value:u})}else if(s[a].classList.contains("longText")){var u=s[a].querySelector("textarea").value,n=s[a].querySelector("h2>span").innerHTML;if(""===u&&"true"==s[a].dataset.necessary)return void i("没有填写"+n);e.push({name:n,type:"longText",value:u})}e=encodeURIComponent((0,c.default)(e)),d.post("add_store",{data:e}).then(function(e){e=e.data,e.error?i("提交失败：服务器拒绝您的数据！"):t.$router.push("/newStore/addSuccess")}).catch(function(t){t&&i("网络出错！")})},select:function(t){var e=t.target;e.classList.contains("active")?e.classList.remove("active"):e.classList.add("active")},init:function(){var t=this;d.get("storeFormData.php").then(function(e){e=e.data,t.items=e.data,t.n++,t.checkLoad()}).catch(function(t){console.log(t),t&&i("加载表单失败！")})},checkLoad:function(){2===this.n&&(this.loaded=!0)}},mounted:function(){this.init()}}},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{loaded:!1,n:0}},methods:{newStore:function(){this.$router.push("/newStore")},loadPlus:function(){this.n++,2===this.n&&(this.loaded=!0)}},mounted:function(){this.n++}}},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s(3);e.default={data:function(){return{loaded:!1,detail:{name:"A",openTime:"",address:"",picURLs:[],picURLs_:[],tags:[],score:"",comments:[]},low:!1,firstChosen:""}},methods:{convertToFloat:function(t){return"number"==typeof t&&(t=t.toString()),3===t.length?t:t+".0"},changeLikeStatus:function(t,e,s){var i=[s.liked,s.disliked];s.liked=t,s.disliked=e,a.get("changeLikeStatus?mac=12121122112&id="+s.id+"&liked="+(t?"true":"false")+"&disliked="+(e?"true":"false")).then(function(t){var e=t.data.data.result;s.liked=e.liked,s.disliked=e.disliked}).catch(function(t){t&&alert("操作失败！"),s.liked=i[0],s.disliked=i[1]})}},watch:{firstChosen:function(t,e){0!=e?this.detail.comments.sort(function(t,e){return e.date-t.date}):this.detail.comments.sort(function(t,e){return e.like-t.like})}},mounted:function(){var t=this;document.querySelector("ul#comments-list").addEventListener("scroll",function(){t.low=this.scrollTop>=10}),a.get("store_detail?id="+t.$route.params.id).then(function(e){e=e.data,t.detail=e.data,t.detail.picURLs_=t.detail.picURLs.slice(0,3),t.firstChosen=!0,t.detail.comments=[],a.get("comments_list?mac=1232224&id="+t.$route.params.id).then(function(e){e=e.data,t.detail.comments=e.data,t.loaded=!0}).catch(function(e){e&&alert("加载失败！"),t.loaded=!0}),t.loaded=!0}).catch(function(e){e&&alert("加载失败！"),t.loaded=!0})}}},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s(3);e.default={data:function(){return{loaded:!1,data:[],isMenuActive:!1,isSearchActive:!1,title:"",keyword:""}},watch:{$route:function(){var t=this;t.$route.path.includes("storeList")&&t.$route.path.includes("search")?(t.title="搜索: "+t.$route.params.keyword,a.get("store_list_search_data?keyword="+t.$route.params.keyword).then(function(e){e=e.data,0===e.data.length&&t.$router.replace("noStore"),t.data=e.data,t.loaded=!0}).catch(function(e){e&&alert("加载失败！"),t.loaded=!0})):(t.title=t.$route.params.type,a.get("store_list_data?type="+t.$route.params.type).then(function(e){e=e.data,t.data=e.data,console.log(t.$route.path),t.loaded=!0}).catch(function(e){e&&alert("加载失败！"),t.loaded=!0}))}},methods:{convertToFloat:function(t){return"number"==typeof t&&(t=t.toString()),3===t.length?t:t+".0"},menuActive:function(t){this.isMenuActive=!this.isMenuActive},searchActive:function(t){this.isSearchActive=!this.isSearchActive},sort1:function(){this.data.sort(function(t,e){return e.overall-t.overall}),this.isMenuActive=!this.isMenuActive},sort2:function(){this.data.sort(function(t,e){return e.score-t.score}),this.isMenuActive=!this.isMenuActive},sort3:function(){this.data.sort(function(t,e){return t.score-e.score}),this.isMenuActive=!this.isMenuActive},inputClick:function(){this.isSearchActive=!this.isSearchActive},addNewStore:function(){},search:function(){""!=this.keyword&&this.$router.push("/storeList/search/"+this.keyword)}},mounted:function(){var t=this;t.$route.path.includes("storeList")&&t.$route.path.includes("search")?(t.title="搜索: "+t.$route.params.keyword,a.get("store_list_search_data?keyword="+t.$route.params.keyword).then(function(e){e=e.data,t.data=e.data,e.data.length<1&&t.$router.replace("/storeList/search/noStore"),t.loaded=!0}).catch(function(e){e&&alert("加载失败！"),t.loaded=!0})):(t.title=t.$route.params.type,a.get("store_list_data?type="+t.$route.params.type).then(function(e){e=e.data,t.data=e.data,console.log(t.$route.path),t.loaded=!0}).catch(function(e){e&&alert("加载失败！"),t.loaded=!0}))}}}]);
//# sourceMappingURL=app.7161d7b5501ccfd56837.js.map