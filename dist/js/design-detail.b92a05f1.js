(self.webpackChunkanimal_home_beta=self.webpackChunkanimal_home_beta||[]).push([[1197,1847,7772,3968],{81150:function(t){t.exports=Object.is||function(t,e){return t===e?0!==t||1/t==1/e:t!=t&&e!=e}},43304:function(t,e,s){s(82109)({target:"Object",stat:!0},{is:s(81150)})},35830:function(t,e,s){"use strict";s.r(e),s.d(e,{default:function(){return C}});var a=s(21914),i=s(35593),l=s(4191),n={name:"DesignDetail",data:function(){return{getDetailApi:l.Ec,breadNav:[{text:"首页",disabled:!1,href:"/"},{text:"设计分享",href:"/design/"}]}}},c=s(1001),r=s(43453),o=s.n(r),v=s(26370),m=s(82102),u=s(97047),f=s(16816),d=s(97620),_=s(93816),p=s(62877),h=(0,c.Z)(n,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s(i.Z,{attrs:{breadNav:t.breadNav,getDetailApi:t.getDetailApi,type:"design",hasInteract:""},scopedSlots:t._u([{key:"title",fn:function(t){var e=t.title;return[s(a.default,{attrs:{title:e,"has-tip":!1}})]}},{key:"default",fn:function(e){var a=e.detailInfo;return[s("v-list",{staticClass:"py-16",attrs:{dense:""}},[s("v-row",[t._l(a.photoSrc,(function(e,a){return s("v-col",{key:e+a,staticClass:"py-8",attrs:{cols:"12"}},[s("v-list-item",[s("v-list-item-content",[s("v-img",{attrs:{src:t.realUrl+e.src,height:"450",contain:""}})],1)],1)],1)})),s("v-col",{staticClass:"py-2",attrs:{cols:"4"}},[s("v-list-item",[s("v-list-item-content",{staticClass:"label"},[t._v("设计名称：")]),s("v-list-item-content",{staticClass:"align-end"},[t._v(t._s(a.name))])],1)],1),s("v-col",{staticClass:"py-2",attrs:{cols:"4"}},[s("v-list-item",[s("v-list-item-content",{staticClass:"label"},[t._v("上传时间：")]),s("v-list-item-content",{staticClass:"align-end"},[t._v(t._s(t._f("parseTime")(a.created_time,"{y}-{m}-{d} {h}:{i}")))])],1)],1),s("v-col",{staticClass:"py-2",attrs:{cols:"4"}},[s("v-list-item",[s("v-list-item-content",{staticClass:"label"},[t._v("作者：")]),a.user?s("v-list-item-content",{staticClass:"align-end d-flex py-0"},[s("v-avatar",{staticClass:"mr-2",staticStyle:{flex:"none"},attrs:{width:"40",height:"40"}},[s("img",{attrs:{src:t.realUrl+a.user.avatar,alt:a.user.username}})]),s("span",{staticStyle:{flex:"1","line-height":"40px"}},[t._v(t._s(a.user.username))])],1):t._e()],1)],1),s("v-col",{staticClass:"py-2",attrs:{cols:"12"}},[s("v-list-item",[s("v-list-item-content",{staticClass:"label"},[t._v("详细说明：")]),s("v-list-item-content",{staticClass:"align-end"},[t._v(t._s(a.content))])],1)],1)],2)],1)]}}])})}),[],!1,null,"14770d78",null),C=h.exports;o()(h,{VAvatar:v.Z,VCol:m.Z,VImg:u.Z,VList:f.Z,VListItem:d.Z,VListItemContent:_.km,VRow:p.Z})}}]);