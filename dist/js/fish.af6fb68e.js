(self.webpackChunkanimal_home_beta=self.webpackChunkanimal_home_beta||[]).push([[293],{81150:function(t){t.exports=Object.is||function(t,s){return t===s?0!==t||1/t==1/s:t!=t&&s!=s}},43304:function(t,s,e){e(82109)({target:"Object",stat:!0},{is:e(81150)})},89862:function(t,s,e){"use strict";e.r(s),e.d(s,{default:function(){return _}});var i=e(80318),l=e(77e3),a={name:"Fish",data:function(){return{getListApi:l.s,filters:{locale:[],shadow:"",rarity:""},sortBy:"name",sortDesc:!1,configObj:{prominent:!0,sortKeys:[{text:"名字",value:"name"},{text:"价格",value:"price"},{text:"鱼影大小",value:"shadow"},{text:"稀有度",value:"rarity"}],filtersArr:[{key:"locale",text:"场所",multiple:!0},{key:"shadow",text:"鱼影大小",multiple:!0},{key:"rarity",text:"稀有度"}],getOptionKeys:[{requestKey:"fishLocale",filterKey:"locale"},{filterKey:"shadow"},{filterKey:"rarity"}],selectLists:{},resetRight:!0}}}},o=e(1001),n=e(43453),r=e.n(n),c=e(37118),v=e(82102),u=e(11418),y=e(97047),p=e(16816),m=e(97620),f=e(93816),d=e(62877),h=(0,o.Z)(a,(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e(i.Z,{attrs:{type:"fish",typeName:"鱼类","config-obj":t.configObj,getListApi:t.getListApi,listFilters:t.filters,sortKey:t.sortBy,sortVal:t.sortDesc,"search-width":"450px"},on:{"update:listFilters":function(s){t.filters=s},"update:list-filters":function(s){t.filters=s},"update:sortKey":function(s){t.sortBy=s},"update:sort-key":function(s){t.sortBy=s},"update:sortVal":function(s){t.sortDesc=s},"update:sort-val":function(s){t.sortDesc=s}},scopedSlots:t._u([{key:"default",fn:function(s){var i=s.item;return[e("v-card-title",{staticClass:"subheading font-weight-bold white--text"},[t._v(t._s(i.name))]),e("v-divider"),e("v-list",{attrs:{dense:""}},[e("v-list-item",[e("v-list-item-content",[e("v-img",{attrs:{src:t.realUrl+i.photoSrc,height:"100",contain:""}})],1)],1),e("v-list-item",[e("v-row",[e("v-col",{staticClass:"py-0",attrs:{cols:"4"}},[e("v-list-item-content",{class:{"cyan--text text--lighten-2":"price"===t.sortBy}},[t._v("价格：")])],1),e("v-col",{staticClass:"py-0",attrs:{cols:"8"}},[e("v-list-item-content",{staticClass:"align-end"},[t._v(t._s(i.price))])],1)],1)],1),e("v-list-item",[e("v-row",[e("v-col",{staticClass:"py-0",attrs:{cols:"4"}},[e("v-list-item-content",[t._v("场所：")])],1),e("v-col",{staticClass:"py-0",attrs:{cols:"8"}},[e("v-list-item-content",{staticClass:"align-end"},[t._v(" "+t._s(i.locale.join("、")))])],1)],1)],1),e("v-list-item",[e("v-row",[e("v-col",{staticClass:"py-0",attrs:{cols:"4"}},[e("v-list-item-content",[t._v("时间段：")])],1),e("v-col",{staticClass:"py-0",attrs:{cols:"8"}},[e("v-list-item-content",{staticClass:"align-end"},[t._v(t._s("1点-24点"===i.period?"全天":i.period))])],1)],1)],1),e("v-list-item",[e("v-row",[e("v-col",{staticClass:"py-0",attrs:{cols:"4"}},[e("v-list-item-content",{class:{"cyan--text text--lighten-2":"shadow"===t.sortBy}},[t._v("鱼影：")])],1),e("v-col",{staticClass:"py-0",attrs:{cols:"8"}},[e("v-list-item-content",{staticClass:"align-end"},[t._v(t._s(i.shadow))])],1)],1)],1),e("v-list-item",[e("v-row",[e("v-col",{staticClass:"py-0",attrs:{cols:"4"}},[e("v-list-item-content",{class:{"cyan--text text--lighten-2":"rarity"===t.sortBy}},[t._v("稀有度：")])],1),e("v-col",{staticClass:"py-0",attrs:{cols:"8"}},[e("v-list-item-content",{staticClass:"align-end"},[t._v(t._s(i.rarity))])],1)],1)],1)],1)]}}])})}),[],!1,null,"1ab80a5d",null),_=h.exports;r()(h,{VCardTitle:c.EB,VCol:v.Z,VDivider:u.Z,VImg:y.Z,VList:p.Z,VListItem:m.Z,VListItemContent:f.km,VRow:d.Z})}}]);