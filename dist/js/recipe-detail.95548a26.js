(self.webpackChunkanimal_home_beta=self.webpackChunkanimal_home_beta||[]).push([[973,1847,7772,3968],{81150:function(t){t.exports=Object.is||function(t,s){return t===s?0!==t||1/t==1/s:t!=t&&s!=s}},43304:function(t,s,e){e(82109)({target:"Object",stat:!0},{is:e(81150)})},73641:function(t,s,e){"use strict";e.r(s),e.d(s,{default:function(){return d}});var a=e(21914),i=e(84780),l=(e(41539),e(54747),e(79718)),n={name:"RecipeDetail",data:function(){return{getDetailApi:l.G,breadNav:[{text:"首页",disabled:!1,href:"/"},{text:"DIY配方图鉴",href:"/archive/recipe"}]}},methods:{dataProcess:function(t){var s="",e=t.season?t.season+"/":"",a=t.activity?t.activity+"/":"",i=t.character?"(".concat(t.character,"性格)"):"",l=t.channels,n=t.npc?"(".concat(t.npc,")"):"";l.forEach((function(t,e){"岛民"!==t&&"NPC"!==t||(t+="赠送"),e===l.length-1?s+=t:s+=t+"/"})),t.channelInfo=e+a+i+s+n}}},c=e(1001),o=e(43453),v=e.n(o),r=e(82102),m=e(97047),p=e(16816),C=e(97620),_=e(93816),u=e(62877),f=(0,c.Z)(n,(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e(i.Z,{attrs:{breadNav:t.breadNav,getDetailApi:t.getDetailApi,dataProcess:t.dataProcess,type:"recipe"},scopedSlots:t._u([{key:"title",fn:function(t){var s=t.title;return[e(a.default,{attrs:{title:s,"has-tip":!1}})]}},{key:"default",fn:function(s){var a=s.detailInfo;return s.morePhoto,[e("v-list",{staticClass:"pt-8 pb-16",attrs:{dense:""}},[e("v-row",[e("v-col",{staticClass:"py-8",attrs:{cols:"12"}},[e("v-list-item",[e("v-list-item-content",[e("v-img",{attrs:{src:t.realUrl+a.photoSrc,height:"160",contain:""}})],1)],1)],1),e("v-col",{staticClass:"py-2",attrs:{cols:"4"}},[e("v-list-item",[e("v-list-item-content",{staticClass:"label"},[t._v("英文名：")]),e("v-list-item-content",{staticClass:"align-end"},[t._v(t._s(a.engName))])],1)],1),a.jpnName?e("v-col",{staticClass:"py-2",attrs:{cols:"4"}},[e("v-list-item",[e("v-list-item-content",{staticClass:"label"},[t._v("日文名：")]),e("v-list-item-content",{staticClass:"align-end"},[t._v(t._s(a.jpnName))])],1)],1):t._e(),e("v-col",{staticClass:"py-2",attrs:{cols:"4"}},[e("v-list-item",[e("v-list-item-content",{staticClass:"label"},[t._v("类型：")]),e("v-list-item-content",{staticClass:"align-end"},[t._v(t._s(a.type.join("/")))])],1)],1),e("v-col",{staticClass:"py-2",attrs:{cols:"4"}},[e("v-list-item",[e("v-list-item-content",{staticClass:"label"},[t._v("占地尺寸：")]),e("v-list-item-content",{staticClass:"align-end"},[t._v(t._s(a.size))])],1)],1),a.unlockCondition?e("v-col",{staticClass:"py-2",attrs:{cols:"4"}},[e("v-list-item",[e("v-list-item-content",{staticClass:"label"},[t._v("解锁条件：")]),e("v-list-item-content",{staticClass:"align-end"},[t._v(t._s("总DIY数量满"+a.unlockCondition+"次"))])],1)],1):t._e(),e("v-col",{staticClass:"py-2",attrs:{cols:"12"}},[e("v-list-item",[e("v-list-item-content",{staticClass:"label"},[t._v("合成材料：")]),e("v-list-item-content",{staticClass:"align-end d-flex py-0"},t._l(a.materials,(function(s,a){return e("span",{staticClass:"d-flex",staticStyle:{flex:"1 0 auto"}},[e("v-img",{staticStyle:{flex:"none",width:"50px"},attrs:{src:t.realUrl+s.photoSrc,height:"40",contain:""}}),e("span",{staticStyle:{flex:"1","line-height":"40px"}},[t._v(t._s(s.name+"×"+s.num))])],1)})),0)],1)],1),e("v-col",{staticClass:"py-2",attrs:{cols:"6"}},[e("v-list-item",[e("v-list-item-content",{staticClass:"label"},[t._v("获取途径：")]),e("v-list-item-content",{staticClass:"align-end"},[t._v(t._s(a.channelInfo))])],1)],1),e("v-col",{staticClass:"py-2",attrs:{cols:"12"}},[e("v-list-item",[e("v-list-item-content",{staticClass:"label"},[t._v("途径详情：")])],1)],1),e("v-col",{staticClass:"pt-2 pb-8",attrs:{cols:"12"}},[e("v-list-item",[e("v-list-item-content",{staticClass:"align-end"},[t._v(t._s(a.channelDetail?a.channelDetail:"暂无"))])],1)],1)],1)],1)]}}])})}),[],!1,null,"65baa07e",null),d=f.exports;v()(f,{VCol:r.Z,VImg:m.Z,VList:p.Z,VListItem:C.Z,VListItemContent:_.km,VRow:u.Z})}}]);