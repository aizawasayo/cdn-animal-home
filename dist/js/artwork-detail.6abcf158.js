(self.webpackChunkanimal_home_beta=self.webpackChunkanimal_home_beta||[]).push([[9393,1847,7772,3968],{81150:function(t){t.exports=Object.is||function(t,s){return t===s?0!==t||1/t==1/s:t!=t&&s!=s}},43304:function(t,s,e){e(82109)({target:"Object",stat:!0},{is:e(81150)})},75714:function(t,s,e){"use strict";e.r(s),e.d(s,{default:function(){return h}});var a=e(21914),i=e(84780),l=e(88857),c={name:"ArtworkDetail",data:function(){return{getDetailApi:l.e,breadNav:[{text:"首页",disabled:!1,href:"/"},{text:"博物馆图鉴",href:"/archive/museum"},{text:"艺术品",href:"/archive/museum/artwork"}]}}},n=e(1001),o=e(43453),v=e.n(o),r=e(82102),m=e(97047),_=e(16816),C=e(97620),u=e(93816),p=e(62877),d=(0,n.Z)(c,(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e(i.Z,{attrs:{breadNav:t.breadNav,getDetailApi:t.getDetailApi,dataProcess:t.dataProcess,type:"artwork"},scopedSlots:t._u([{key:"title",fn:function(t){var s=t.title;return[e(a.default,{attrs:{title:s,"has-tip":!1}})]}},{key:"default",fn:function(s){var a=s.detailInfo;return[e("v-list",{staticClass:"pt-8 pb-16",attrs:{dense:""}},[e("v-row",[e("v-col",{staticClass:"py-8",attrs:{cols:a.hasFake?6:12}},[e("v-list-item",[a.hasFake?e("v-list-item-content",{staticClass:"label"},[t._v("真品图片：")]):t._e(),e("v-list-item-content",[e("v-img",{attrs:{src:t.realUrl+a.photoSrc[0].src,height:"160",contain:""}})],1)],1)],1),a.hasFake?e("v-col",{staticClass:"py-8",attrs:{cols:"6"}},[e("v-list-item",[e("v-list-item-content",{staticClass:"label"},[t._v("赝品图片：")]),e("v-list-item-content",[e("v-img",{attrs:{src:t.realUrl+a.photoSrc[1].src,height:"160",contain:""}})],1)],1)],1):t._e(),e("v-col",{staticClass:"py-2",attrs:{cols:"4"}},[e("v-list-item",[e("v-list-item-content",{staticClass:"label"},[t._v("英文名：")]),e("v-list-item-content",{staticClass:"align-end"},[t._v(t._s(a.engName))])],1)],1),e("v-col",{staticClass:"py-2",attrs:{cols:"4"}},[e("v-list-item",[e("v-list-item-content",{staticClass:"label"},[t._v("日文名：")]),e("v-list-item-content",{staticClass:"align-end"},[t._v(t._s(a.jpnName))])],1)],1),e("v-col",{staticClass:"py-2",attrs:{cols:"4"}},[e("v-list-item",[e("v-list-item-content",{staticClass:"label"},[t._v("真实名字：")]),e("v-list-item-content",{staticClass:"align-end"},[t._v(t._s(a.realName))])],1)],1),e("v-col",{staticClass:"py-2",attrs:{cols:"4"}},[e("v-list-item",[e("v-list-item-content",{staticClass:"label"},[t._v("价格：")]),e("v-list-item-content",{staticClass:"align-end"},[t._v(t._s(a.price))])],1)],1),e("v-col",{staticClass:"py-2",attrs:{cols:"4"}},[e("v-list-item",[e("v-list-item-content",{staticClass:"label"},[t._v("售出价格：")]),e("v-list-item-content",{staticClass:"align-end"},[t._v(t._s(a.salePrice))])],1)],1),e("v-col",{staticClass:"py-2",attrs:{cols:"4"}},[e("v-list-item",[e("v-list-item-content",{staticClass:"label"},[t._v("尺寸：")]),e("v-list-item-content",{staticClass:"align-end"},[t._v(t._s(a.size))])],1)],1),e("v-col",{staticClass:"py-2",attrs:{cols:"12"}},[e("v-list-item",[e("v-list-item-content",{staticClass:"label"},[t._v("简介：")])],1)],1),e("v-col",{staticClass:"pt-2 pb-8",attrs:{cols:"12"}},[e("v-list-item",[e("v-list-item-content",{staticClass:"align-end"},[t._v(t._s(a.introduction?a.introduction:"暂无"))])],1)],1),a.hasFake?e("v-col",{staticClass:"py-2",attrs:{cols:"12"}},[e("v-list-item",[e("v-list-item-content",{staticClass:"label"},[t._v("赝品鉴别方法：")]),e("v-list-item-content",{staticClass:"align-end"},[t._v(t._s(a.fakeCharacter))])],1)],1):t._e()],1)],1)]}}])})}),[],!1,null,"068043d2",null),h=d.exports;v()(d,{VCol:r.Z,VImg:m.Z,VList:_.Z,VListItem:C.Z,VListItemContent:u.km,VRow:p.Z})}}]);