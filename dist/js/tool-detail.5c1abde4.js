(self.webpackChunkanimal_home_beta=self.webpackChunkanimal_home_beta||[]).push([[8295,1847,7772,3968],{81150:function(t){t.exports=Object.is||function(t,s){return t===s?0!==t||1/t==1/s:t!=t&&s!=s}},43304:function(t,s,a){a(82109)({target:"Object",stat:!0},{is:a(81150)})},20198:function(t,s,a){"use strict";a.r(s),a.d(s,{default:function(){return f}});var i=a(21914),e=a(35593),l=(a(69600),a(92014)),n={name:"ToolDetail",data:function(){return{getDetailApi:l.R,breadNav:[{text:"首页",disabled:!1,href:"/"},{text:"工具图鉴",href:"/archive/tool"}]}},methods:{dataProcess:function(t){var s=t.activity?"["+t.activity+"期间] ":"";t.channelInfo=s+t.channels.join("/")}}},c=a(1001),o=a(43453),v=a.n(o),r=a(82102),m=a(97047),_=a(16816),C=a(97620),p=a(93816),d=a(62877),u=(0,c.Z)(n,(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a(e.Z,{attrs:{breadNav:t.breadNav,getDetailApi:t.getDetailApi,dataProcess:t.dataProcess,type:"tool"},scopedSlots:t._u([{key:"title",fn:function(t){var s=t.title;return[a(i.default,{attrs:{title:s,"has-tip":!1}})]}},{key:"default",fn:function(s){var i=s.detailInfo;return s.morePhoto,[a("v-list",{staticClass:"pt-8 pb-16",attrs:{dense:""}},[a("v-row",[a("v-col",{staticClass:"py-8",attrs:{cols:"12"}},[a("v-list-item",[a("v-list-item-content",[a("v-img",{attrs:{src:t.realUrl+i.photoSrc,height:"160",contain:""}})],1)],1)],1),a("v-col",{staticClass:"py-2",attrs:{cols:"4"}},[a("v-list-item",[a("v-list-item-content",{staticClass:"label"},[t._v("英文名：")]),a("v-list-item-content",{staticClass:"align-end"},[t._v(t._s(i.engName))])],1)],1),i.jpnName?a("v-col",{staticClass:"py-2",attrs:{cols:"4"}},[a("v-list-item",[a("v-list-item-content",{staticClass:"label"},[t._v("日文名：")]),a("v-list-item-content",{staticClass:"align-end"},[t._v(t._s(i.jpnName))])],1)],1):t._e(),a("v-col",{staticClass:"py-2",attrs:{cols:"4"}},[a("v-list-item",[a("v-list-item-content",{staticClass:"label"},[t._v("能否DIY：")]),a("v-list-item-content",{staticClass:"align-end"},[t._v(t._s(i.isDIY?"可以DIY制作":"不可以DIY制作"))])],1)],1),a("v-col",{staticClass:"py-2",attrs:{cols:"4"}},[a("v-list-item",[a("v-list-item-content",{staticClass:"label"},[t._v("价格：")]),a("v-list-item-content",{staticClass:"align-end"},[t._v(t._s(i.price))])],1)],1),a("v-col",{staticClass:"py-2",attrs:{cols:"4"}},[a("v-list-item",[a("v-list-item-content",{staticClass:"label"},[t._v("豆狸回收价格：")]),a("v-list-item-content",{staticClass:"align-end"},[t._v(t._s(.25*i.price))])],1)],1),a("v-col",{staticClass:"py-2",attrs:{cols:"4"}},[a("v-list-item",[a("v-list-item-content",{staticClass:"label"},[t._v("箱子回收价格：")]),a("v-list-item-content",{staticClass:"align-end"},[t._v(t._s(.2*i.price))])],1)],1),i.durability?a("v-col",{staticClass:"py-2",attrs:{cols:"8"}},[a("v-list-item",[a("v-list-item-content",{staticClass:"label"},[t._v("耐久度：")]),a("v-list-item-content",{staticClass:"align-end"},[t._v(" "+t._s(i.durability)+" ")])],1)],1):t._e(),a("v-col",{staticClass:"py-2",attrs:{cols:"6"}},[a("v-list-item",[a("v-list-item-content",{staticClass:"label"},[t._v("获取途径：")]),a("v-list-item-content",{staticClass:"align-end"},[t._v(t._s(i.channelInfo))])],1)],1),a("v-col",{staticClass:"py-2",attrs:{cols:"12"}},[a("v-list-item",[a("v-list-item-content",{staticClass:"label"},[t._v("途径详情：")])],1)],1),a("v-col",{staticClass:"pt-2 pb-8",attrs:{cols:"12"}},[a("v-list-item",[a("v-list-item-content",{staticClass:"align-end"},[t._v(t._s(i.channelDetail?i.channelDetail:"暂无"))])],1)],1)],1)],1)]}}])})}),[],!1,null,"1c4fd125",null),f=u.exports;v()(u,{VCol:r.Z,VImg:m.Z,VList:_.Z,VListItem:C.Z,VListItemContent:p.km,VRow:d.Z})}}]);