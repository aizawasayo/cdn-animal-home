(self.webpackChunkanimal_home_beta=self.webpackChunkanimal_home_beta||[]).push([[6976,3968],{81150:function(t){t.exports=Object.is||function(t,e){return t===e?0!==t||1/t==1/e:t!=t&&e!=e}},43304:function(t,e,a){a(82109)({target:"Object",stat:!0},{is:a(81150)})},29061:function(t,e,a){"use strict";a.r(e),a.d(e,{default:function(){return g}});var i=a(19326),n=a(83660),s=a(21914),l=a(14367),r=(a(41539),a(54747),a(69600),a(92014)),c={name:"Tool",components:{ListToolbar:n.Z},data:function(){return{getListApi:r.$,tab:null,tabOptions:[{tab:"可以DIY制作",val:!0},{tab:"不可以DIY制作",val:!1}],query:"",filters:{activity:"",channels:[]},breadNav:[{text:"首页",disabled:!1,href:"/"},{text:"工具图鉴",disabled:!0,href:"/archive/clothing"}],tips:"鼠标移到列表表头的列名上如果出现箭头，就说明该项可以排序。向上箭头是顺序（从小到大），向下箭头是倒序（从大到小）。",configObj:{filtersArr:[{key:"activity",text:"所属活动",multiple:!0},{key:"channels",text:"购买渠道"}],getOptionKeys:[{filterKey:"activity"},{requestKey:"toolChannels",filterKey:"channels"}],selectLists:{activityList:[],channelsList:[]},headers:[{text:"主图",value:"photoSrc",align:"center",width:"12%",sortable:!1},{text:"名称",value:"name",width:"14%"},{text:"英文名",value:"engName",align:"center",width:"16%",sortable:!1},{text:"日文名",value:"jpnName",align:"center",width:"18%",sortable:!1},{text:"价格",value:"price",align:"center",width:"10%"},{text:"耐久度",value:"durability",align:"center",width:"10%"},{text:"来源",value:"channels",align:"center",width:"20%",sortable:!1}]}}},methods:{listDataProcess:function(t){t.forEach((function(t){var e=t.activity?t.activity+"/":"";t.channels=e+t.channels.join("/")}))}}},o=a(1001),u=a(43453),b=a.n(u),f=a(99846),h=a(94227),v=a(54584),d=a(38697),p=a(96480),y=(0,o.Z)(c,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{staticClass:"bgWht",attrs:{"elevation-4":""}},[a(l.default,{attrs:{"bread-nav":t.breadNav}}),a(s.default,{attrs:{title:"工具图鉴",tips:t.tips,hasTip:""}}),a(n.Z,{attrs:{typeName:"工具","config-obj":t.configObj,search:t.query,listFilters:t.filters,"search-width":"400px",disableSortBtn:""},on:{"update:search":function(e){t.query=e},"update:listFilters":function(e){t.filters=e},"update:list-filters":function(e){t.filters=e}}}),a("v-tabs",{staticClass:"elevation-0 table-tab",attrs:{"background-color":"transparent"},model:{value:t.tab,callback:function(e){t.tab=e},expression:"tab"}},t._l(t.tabOptions,(function(e){return a("v-tab",{key:e.tab},[t._v(" "+t._s(e.tab)+" ")])})),1),a("v-tabs-items",{model:{value:t.tab,callback:function(e){t.tab=e},expression:"tab"}},t._l(t.tabOptions,(function(e,n){return a("v-tab-item",{key:e.tab+n},[a(i.Z,{ref:"dataLists",refInFor:!0,attrs:{type:"tool",query:t.query,queryParams:{isDIY:e.val},filters:t.filters,configObj:t.configObj,getListApi:t.getListApi,listDataProcess:t.listDataProcess}})],1)})),1)],1)}),[],!1,null,"45183fcb",null),g=y.exports;b()(y,{VContainer:f.Z,VTab:h.Z,VTabItem:v.Z,VTabs:d.Z,VTabsItems:p.Z})}}]);