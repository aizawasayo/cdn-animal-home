(self.webpackChunkanimal_home_beta=self.webpackChunkanimal_home_beta||[]).push([[2435,1847,7772,3968],{81150:function(t){t.exports=Object.is||function(t,s){return t===s?0!==t||1/t==1/s:t!=t&&s!=s}},43304:function(t,s,e){e(82109)({target:"Object",stat:!0},{is:e(81150)})},38443:function(t,s,e){"use strict";e.r(s),e.d(s,{default:function(){return C}});var a=e(21914),i=e(84780),l=(e(69600),e(48986)),n={name:"MaterialDetail",data:function(){return{getDetailApi:l.U,breadNav:[{text:"首页",disabled:!1,href:"/"},{text:"素材",href:"/archive/material"}]}},methods:{dataProcess:function(t){var s=t.activity?t.activity+"/":"";t.source=t.season.join("/")+s+t.channels.join("/")}}},c=e(1001),o=e(43453),r=e.n(o),v=e(82102),m=e(97047),u=e(16816),_=e(97620),p=e(93816),d=e(62877),f=(0,c.Z)(n,(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e(i.Z,{attrs:{breadNav:t.breadNav,getDetailApi:t.getDetailApi,dataProcess:t.dataProcess,type:"material"},scopedSlots:t._u([{key:"title",fn:function(t){var s=t.title;return[e(a.default,{attrs:{title:s,"has-tip":!1}})]}},{key:"default",fn:function(s){var a=s.detailInfo;return[e("v-list",{staticClass:"pt-8 pb-16",attrs:{dense:""}},[e("v-row",[e("v-col",{staticClass:"py-8",attrs:{cols:"12"}},[e("v-list-item",[e("v-list-item-content",[e("v-img",{attrs:{src:t.realUrl+a.photoSrc,height:"128",contain:""}})],1)],1)],1),a.engName?e("v-col",{staticClass:"py-2",attrs:{cols:"4"}},[e("v-list-item",[e("v-list-item-content",{staticClass:"label"},[t._v("英文名：")]),e("v-list-item-content",{staticClass:"align-end"},[t._v(t._s(a.engName))])],1)],1):t._e(),a.jpnName?e("v-col",{staticClass:"py-2",attrs:{cols:"4"}},[e("v-list-item",[e("v-list-item-content",{staticClass:"label"},[t._v("日文名：")]),e("v-list-item-content",{staticClass:"align-end"},[t._v(t._s(a.jpnName))])],1)],1):t._e(),e("v-col",{staticClass:"py-2",attrs:{cols:"4"}},[e("v-list-item",[e("v-list-item-content",{staticClass:"label"},[t._v("价格：")]),e("v-list-item-content",{staticClass:"align-end"},[t._v(t._s(a.price?a.price:"暂无"))])],1)],1),a.maxNum?e("v-col",{staticClass:"py-2",attrs:{cols:"4"}},[e("v-list-item",[e("v-list-item-content",{staticClass:"label"},[t._v("最大堆叠数量：")]),e("v-list-item-content",{staticClass:"align-end"},[t._v(t._s(a.maxNum))])],1)],1):t._e(),e("v-col",{staticClass:"py-2",attrs:{cols:"6"}},[e("v-list-item",[e("v-list-item-content",{staticClass:"label"},[t._v("来源渠道：")]),e("v-list-item-content",{staticClass:"align-end"},[t._v(t._s(a.source))])],1)],1)],1)],1)]}}])})}),[],!1,null,"5c4fc4b8",null),C=f.exports;r()(f,{VCol:v.Z,VImg:m.Z,VList:u.Z,VListItem:_.Z,VListItemContent:p.km,VRow:d.Z})}}]);