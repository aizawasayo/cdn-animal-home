(self.webpackChunkanimal_home_beta=self.webpackChunkanimal_home_beta||[]).push([[6087],{81150:function(t){t.exports=Object.is||function(t,s){return t===s?0!==t||1/t==1/s:t!=t&&s!=s}},43304:function(t,s,e){e(82109)({target:"Object",stat:!0},{is:e(81150)})},7250:function(t,s,e){"use strict";e.r(s),e.d(s,{default:function(){return h}});var i=e(80318),a=e(88857),l={name:"Artwork",data:function(){return{getListApi:a.t,filters:{hasFake:""},sortBy:"name",sortDesc:!1,configObj:{sortKeys:[{text:"名字",value:"name"},{text:"尺寸",value:"size"}],filtersArr:[{key:"hasFake",text:"是否有赝品"}],selectLists:{hasFakeList:[{text:"有赝品",value:"true"},{text:"无赝品",value:"false"}]}}}}},n=e(1001),c=e(43453),o=e.n(c),r=e(37118),v=e(82102),u=e(11418),m=e(97047),f=e(16816),p=e(97620),y=e(93816),d=e(62877),_=(0,n.Z)(l,(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e(i.Z,{attrs:{type:"artwork",typeName:"艺术品","config-obj":t.configObj,getListApi:t.getListApi,listFilters:t.filters,sortKey:t.sortBy,sortVal:t.sortDesc,disableResetBtn:"","search-width":"400px"},on:{"update:listFilters":function(s){t.filters=s},"update:list-filters":function(s){t.filters=s},"update:sortKey":function(s){t.sortBy=s},"update:sort-key":function(s){t.sortBy=s},"update:sortVal":function(s){t.sortDesc=s},"update:sort-val":function(s){t.sortDesc=s}},scopedSlots:t._u([{key:"default",fn:function(s){var i=s.item;return[e("v-card-title",{staticClass:"subheading font-weight-bold white--text"},[t._v(t._s(i.name))]),e("v-divider"),e("v-list",{attrs:{dense:""}},[e("v-list-item",[e("v-list-item-content",[e("v-img",{attrs:{src:t.realUrl+i.photoSrc[0].src,height:"100",contain:""}})],1)],1),e("v-list-item",[e("v-row",[e("v-col",{staticClass:"py-0",attrs:{cols:"5"}},[e("v-list-item-content",{class:{"cyan--text text--lighten-2":"price"===t.sortBy}},[t._v("价格：")])],1),e("v-col",{staticClass:"py-0",attrs:{cols:"7"}},[e("v-list-item-content",{staticClass:"align-end"},[t._v(t._s(i.price))])],1)],1)],1),e("v-list-item",[e("v-row",[e("v-col",{staticClass:"py-0",attrs:{cols:"5"}},[e("v-list-item-content",{class:{"cyan--text text--lighten-2":"salePrice"===t.sortBy}},[t._v("售出价格：")])],1),e("v-col",{staticClass:"py-0",attrs:{cols:"7"}},[e("v-list-item-content",{staticClass:"align-end"},[t._v(t._s(i.salePrice)+"(赝品为0)")])],1)],1)],1),e("v-list-item",[e("v-row",[e("v-col",{staticClass:"py-0",attrs:{cols:"5"}},[e("v-list-item-content",[t._v("真名：")])],1),e("v-col",{staticClass:"py-0",attrs:{cols:"7"}},[e("v-list-item-content",{staticClass:"align-end"},[t._v(" "+t._s(t._f("textFilter")(i.realName,8)))])],1)],1)],1),e("v-list-item",[e("v-row",[e("v-col",{staticClass:"py-0",attrs:{cols:"5"}},[e("v-list-item-content",{class:{"cyan--text text--lighten-2":"size"===t.sortBy}},[t._v("尺寸：")])],1),e("v-col",{staticClass:"py-0",attrs:{cols:"7"}},[e("v-list-item-content",{staticClass:"align-end"},[t._v(t._s(i.size))])],1)],1)],1),e("v-list-item",[e("v-row",[e("v-col",{staticClass:"py-0",attrs:{cols:"5"}},[e("v-list-item-content",[t._v("有无赝品：")])],1),e("v-col",{staticClass:"py-0",attrs:{cols:"7"}},[e("v-list-item-content",{staticClass:"align-end"},[t._v(t._s(!0===i.hasFake?"有":"无"))])],1)],1)],1)],1)]}}])})}),[],!1,null,"65452058",null),h=_.exports;o()(_,{VCardTitle:r.EB,VCol:v.Z,VDivider:u.Z,VImg:m.Z,VList:f.Z,VListItem:p.Z,VListItemContent:y.km,VRow:d.Z})}}]);