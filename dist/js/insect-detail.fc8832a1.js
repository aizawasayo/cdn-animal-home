(self.webpackChunkanimal_home_beta=self.webpackChunkanimal_home_beta||[]).push([[6549,1847,7772,3968],{81150:function(t){t.exports=Object.is||function(t,s){return t===s?0!==t||1/t==1/s:t!=t&&s!=s}},43304:function(t,s,i){i(82109)({target:"Object",stat:!0},{is:i(81150)})},63915:function(t,s,i){"use strict";i.r(s),i.d(s,{default:function(){return f}});var e=i(21914),l=i(84780),a=(i(26699),i(32023),i(69600),i(41539),i(54747),i(55965)),n={name:"InsectDetail",data:function(){return{getDetailApi:a.x,breadNav:[{text:"首页",disabled:!1,href:"/"},{text:"博物馆图鉴",href:"/archive/museum"},{text:"昆虫",href:"/archive/museum/insect"}]}},methods:{dataProcess:function(t){var s,i,e=t.activeTime.north,l=t.activeTime.south;s=e.includes("全年")?"全年":e.join(),i=l.includes("全年")?"全年":l.join(),t.north=s,t.south=i;var a="",n=t.locale;t.elseCondition.forEach((function(t,s){a+="("+t+")"})),t.locale=n.join("、")+a}}},c=i(1001),o=i(43453),v=i.n(o),r=i(82102),m=i(97047),C=i(16816),_=i(97620),d=i(93816),u=i(62877),p=(0,c.Z)(n,(function(){var t=this,s=t.$createElement,i=t._self._c||s;return i(l.Z,{attrs:{breadNav:t.breadNav,getDetailApi:t.getDetailApi,dataProcess:t.dataProcess,type:"insect"},scopedSlots:t._u([{key:"title",fn:function(t){var s=t.title;return[i(e.default,{attrs:{title:s,"has-tip":!1}})]}},{key:"default",fn:function(s){var e=s.detailInfo;return[i("v-list",{staticClass:"pt-8 pb-16",attrs:{dense:""}},[i("v-row",[i("v-col",{staticClass:"py-8",attrs:{cols:"12"}},[i("v-list-item",[i("v-list-item-content",[i("v-img",{attrs:{src:t.realUrl+e.photoSrc,height:"128",contain:""}})],1)],1)],1),i("v-col",{staticClass:"py-2",attrs:{cols:"4"}},[i("v-list-item",[i("v-list-item-content",{staticClass:"label"},[t._v("英文名：")]),i("v-list-item-content",{staticClass:"align-end"},[t._v(t._s(e.engName))])],1)],1),i("v-col",{staticClass:"py-2",attrs:{cols:"4"}},[i("v-list-item",[i("v-list-item-content",{staticClass:"label"},[t._v("日文名：")]),i("v-list-item-content",{staticClass:"align-end"},[t._v(t._s(e.jpnName))])],1)],1),i("v-col",{staticClass:"py-2",attrs:{cols:"4"}},[i("v-list-item",[i("v-list-item-content",{staticClass:"label"},[t._v("价格：")]),i("v-list-item-content",{staticClass:"align-end"},[t._v(t._s(e.price))])],1)],1),i("v-col",{staticClass:"py-2",attrs:{cols:"6"}},[i("v-list-item",[i("v-list-item-content",{staticClass:"label"},[t._v("北半球月份：")]),i("v-list-item-content",{staticClass:"align-end"},[t._v(t._s(e.north))])],1)],1),i("v-col",{staticClass:"py-2",attrs:{cols:"6"}},[i("v-list-item",[i("v-list-item-content",{staticClass:"label"},[t._v("南半球月份：")]),i("v-list-item-content",{staticClass:"align-end"},[t._v(" "+t._s(e.south)+" ")])],1)],1),i("v-col",{staticClass:"py-2",attrs:{cols:"4"}},[i("v-list-item",[i("v-list-item-content",{staticClass:"label"},[t._v("出现场所：")]),i("v-list-item-content",{staticClass:"align-end"},[t._v(t._s(e.locale))])],1)],1),e.unlockCondition?i("v-col",{staticClass:"py-2",attrs:{cols:"4"}},[i("v-list-item",[i("v-list-item-content",{staticClass:"label"},[t._v("解锁条件：")]),i("v-list-item-content",{staticClass:"align-end"},[t._v(t._s(e.unlockCondition))])],1)],1):t._e(),i("v-col",{staticClass:"py-2",attrs:{cols:"4"}},[i("v-list-item",[i("v-list-item-content",{staticClass:"label"},[t._v("稀有度：")]),i("v-list-item-content",{staticClass:"align-end"},[t._v(t._s(e.rarity))])],1)],1),i("v-col",{staticClass:"py-2",attrs:{cols:"3"}},[i("v-list-item",[i("v-list-item-content",{staticClass:"label"},[t._v("出现时间段：")]),i("v-list-item-content",{staticClass:"align-end"},[t._v(t._s("1点-24点"===e.period?"全天":e.period))])],1)],1),e.weatherCondition?i("v-col",{staticClass:"py-2",attrs:{cols:"3"}},[i("v-list-item",[i("v-list-item-content",{staticClass:"label"},[t._v("天气条件：")]),i("v-list-item-content",{staticClass:"align-end"},[t._v(t._s(e.weatherCondition))])],1)],1):t._e(),i("v-col",{staticClass:"py-2",attrs:{cols:"12"}},[i("v-list-item",[i("v-list-item-content",{staticClass:"label"},[t._v("简介：")])],1)],1),i("v-col",{staticClass:"pt-2 pb-8",attrs:{cols:"12"}},[i("v-list-item",[i("v-list-item-content",{staticClass:"align-end"},[t._v(t._s(e.introduction?e.introduction:"暂无"))])],1)],1)],1)],1)]}}])})}),[],!1,null,"dffc5124",null),f=p.exports;v()(p,{VCol:r.Z,VImg:m.Z,VList:C.Z,VListItem:_.Z,VListItemContent:d.km,VRow:u.Z})}}]);