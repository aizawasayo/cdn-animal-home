"use strict";(self.webpackChunkanimal_home_beta=self.webpackChunkanimal_home_beta||[]).push([[5151,3968],{93595:function(t,a,e){e.r(a),e.d(a,{default:function(){return d}});var i=e(21914),s=e(14367),n=(e(57327),e(41539),{name:"Museum",data:function(){return{tab:"/archive/museum/fish",tabName:"鱼类",tabOptions:[{text:"鱼类",value:"/archive/museum/fish",icon:"fish"},{text:"昆虫",value:"/archive/museum/insect",icon:"bee"},{text:"化石",value:"/archive/museum/fossil",icon:"google-downasaur"},{text:"艺术品",value:"/archive/museum/artwork",icon:"brush"},{text:"海洋生物",value:"/archive/museum/halobios",icon:"jellyfish"}],breadNav:[{text:"首页",disabled:!1,href:"/"},{text:"博物馆图鉴",disabled:!0,href:"/archive/museum"}],tips:"博物馆可接纳的藏品图鉴目前有五个类别，请点击下面选项卡进行切换。下方工具栏的箭头按钮是根据左侧选择的属性对信息进行排序。向上箭头是顺序（从小到大），向下箭头是倒序（从大到小）。"}},computed:{},watch:{},methods:{activeTab:function(){var t=this.$route.fullPath,a=this.tabOptions.filter((function(a){return a.value===t}));this.tabName=a[0].text,3===this.breadNav.length?(this.breadNav.pop(),this.addBreadNav()):this.addBreadNav()},addBreadNav:function(){this.breadNav.push({text:this.tabName,disabled:!0,href:this.$route.fullPath})}}}),r=e(1001),u=e(43453),o=e.n(u),l=e(99846),c=e(96428),h=e(94227),v=e(38697),b=(0,r.Z)(n,(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-container",{staticClass:"bgWht picList",attrs:{"elevation-4":""}},[e(s.default,{attrs:{"bread-nav":t.breadNav}}),e(i.default,{attrs:{title:"博物馆",tips:t.tips,hasTip:""}}),e("v-tabs",{staticClass:"elevation-0 table-tab picList",attrs:{"background-color":"transparent",centered:"",optional:""},on:{change:function(a){return t.activeTab()}},model:{value:t.tab,callback:function(a){t.tab=a},expression:"tab"}},t._l(t.tabOptions,(function(a,i){return e("v-tab",{key:a.value+i,attrs:{to:""+a.value}},[e("v-icon",[t._v(t._s("mdi-"+a.icon))]),t._v(" "+t._s(a.text)+" ")],1)})),1),e("router-view")],1)}),[],!1,null,"9f3c33a6",null),d=b.exports;o()(b,{VContainer:l.Z,VIcon:c.Z,VTab:h.Z,VTabs:v.Z})}}]);