"use strict";(self.webpackChunkanimal_home_beta=self.webpackChunkanimal_home_beta||[]).push([[1067,3968],{94027:function(e,t,a){a.r(t),a.d(t,{default:function(){return K}});var i=a(21914),l=a(14367),s=a(4367),r=a(42284),n=a(73281),o=a(92827),c=a(51174),d={name:"Casitem",components:{Icon:c.Z},props:{data:Object,prefixCls:String,tmpItem:Object},computed:{classes(){return[`${this.prefixCls}-menu-item`,{[`${this.prefixCls}-menu-item-active`]:this.tmpItem.value===this.data.value,[`${this.prefixCls}-menu-item-disabled`]:this.data.disabled}]},showArrow(){return this.data.children&&this.data.children.length||"loading"in this.data&&!this.data.loading},showLoading(){return"loading"in this.data&&this.data.loading},arrowType(){let e="ios-arrow-forward";return this.$IVIEW&&(this.$IVIEW.cascader.customItemArrow?e="":this.$IVIEW.cascader.itemArrow&&(e=this.$IVIEW.cascader.itemArrow)),e},customArrowType(){let e="";return this.$IVIEW&&this.$IVIEW.cascader.customItemArrow&&(e=this.$IVIEW.cascader.customItemArrow),e},arrowSize(){let e="";return this.$IVIEW&&this.$IVIEW.cascader.itemArrowSize&&(e=this.$IVIEW.cascader.itemArrowSize),e}}},u=a(1001),h=(0,u.Z)(d,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("li",{class:e.classes},[e._v(" "+e._s(e.data.label)+" "),e.showArrow?a("Icon",{attrs:{type:e.arrowType,custom:e.customArrowType,size:e.arrowSize}}):e._e(),e.showLoading?a("i",{staticClass:"ivu-icon ivu-icon-ios-loading ivu-load-loop ivu-cascader-menu-item-loading"}):e._e()],1)}),[],!1,null,null,null).exports,p=a(81716),m=a(80100);let v=1;var f={name:"Caspanel",mixins:[p.Z],components:{Casitem:h},props:{data:{type:Array,default:()=>[]},disabled:Boolean,changeOnSelect:Boolean,trigger:String,prefixCls:String},data:()=>({tmpItem:{},result:[],sublist:[]}),watch:{data(){this.sublist=[]}},methods:{handleClickItem(e){"click"!==this.trigger&&e.children&&e.children.length||this.handleTriggerItem(e,!1,!0)},handleHoverItem(e){"hover"===this.trigger&&e.children&&e.children.length&&this.handleTriggerItem(e,!1,!0)},handleTriggerItem(e,t=!1,a=!1){if(e.disabled)return;const i=(0,m.ah)(this,"Cascader");if(void 0!==e.loading&&!e.children.length&&i&&i.loadData)return void i.loadData(e,(()=>{a&&(i.isLoadedChildren=!0),e.children.length&&this.handleTriggerItem(e)}));const l=this.getBaseItem(e);if((this.changeOnSelect||l.label!==this.tmpItem.label||l.value!==this.tmpItem.value||l.label===this.tmpItem.label&&l.value===this.tmpItem.value)&&(this.tmpItem=l,this.emitUpdate([l])),e.children&&e.children.length){if(this.sublist=e.children,this.dispatch("Cascader","on-result-change",{lastValue:!1,changeOnSelect:this.changeOnSelect,fromInit:t}),this.changeOnSelect){const e=(0,m.Ok)(this,"Caspanel");e&&e.$emit("on-clear",!0)}}else this.sublist=[],this.dispatch("Cascader","on-result-change",{lastValue:!0,changeOnSelect:this.changeOnSelect,fromInit:t});i&&i.$refs.drop.update()},updateResult(e){this.result=[this.tmpItem].concat(e),this.emitUpdate(this.result)},getBaseItem(e){let t=Object.assign({},e);return t.children&&delete t.children,t},emitUpdate(e){"Caspanel"===this.$parent.$options.name?this.$parent.updateResult(e):this.$parent.$parent.updateResult(e)},getKey:()=>v++},mounted(){this.$on("on-find-selected",(e=>{let t=[...e.value];for(let e=0;e<t.length;e++)for(let a=0;a<this.data.length;a++)if(t[e]===this.data[a].value)return this.handleTriggerItem(this.data[a],!0),t.splice(0,1),this.$nextTick((()=>{this.broadcast("Caspanel","on-find-selected",{value:t})})),!1})),this.$on("on-clear",((e=!1)=>{if(this.sublist=[],this.tmpItem={},e){const e=(0,m.Ok)(this,"Caspanel");e&&e.$emit("on-clear",!0)}}))}},b=f,g=(0,u.Z)(b,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("span",[e.data&&e.data.length?a("ul",{class:[e.prefixCls+"-menu"]},e._l(e.data,(function(t){return a("Casitem",{key:e.getKey(),attrs:{"prefix-cls":e.prefixCls,data:t,"tmp-item":e.tmpItem},nativeOn:{click:function(a){return a.stopPropagation(),e.handleClickItem(t)},mouseenter:function(a){return a.stopPropagation(),e.handleHoverItem(t)}}})})),1):e._e(),e.sublist&&e.sublist.length?a("Caspanel",{attrs:{"prefix-cls":e.prefixCls,data:e.sublist,disabled:e.disabled,trigger:e.trigger,"change-on-select":e.changeOnSelect}}):e._e()],1)}),[],!1,null,null,null).exports,w={bind(e,t,a){function i(a){if(e.contains(a.target))return!1;t.expression&&t.value(a)}e.__vueClickOutside__=i,document.addEventListener("click",i)},update(){},unbind(e,t){document.removeEventListener("click",e.__vueClickOutside__),delete e.__vueClickOutside__}},y=a(43336),I=a(77234),T=a(35405);const x="ivu-cascader";var V={name:"Cascader",mixins:[p.Z,I.Z,T.Z],components:{iInput:n.Z,Drop:o.Z,Icon:c.Z,Caspanel:g},directives:{clickOutside:w,TransferDom:y.Z},props:{data:{type:Array,default:()=>[]},value:{type:Array,default:()=>[]},disabled:{type:Boolean,default:!1},clearable:{type:Boolean,default:!0},placeholder:{type:String},size:{validator:e=>(0,m.kw)(e,["small","large","default"]),default(){return this.$IVIEW&&""!==this.$IVIEW.size?this.$IVIEW.size:"default"}},trigger:{validator:e=>(0,m.kw)(e,["click","hover"]),default:"click"},changeOnSelect:{type:Boolean,default:!1},renderFormat:{type:Function,default:e=>e.join(" / ")},loadData:{type:Function},filterable:{type:Boolean,default:!1},notFoundText:{type:String},transfer:{type:Boolean,default(){return!(!this.$IVIEW||""===this.$IVIEW.transfer)&&this.$IVIEW.transfer}},name:{type:String},elementId:{type:String},capture:{type:Boolean,default(){return!this.$IVIEW||this.$IVIEW.capture}},transferClassName:{type:String},eventsEnabled:{type:Boolean,default:!1}},data(){return{prefixCls:x,selectPrefixCls:"ivu-select",visible:!1,selected:[],tmpSelected:[],updatingValue:!1,currentValue:this.value||[],query:"",validDataStr:"",isLoadedChildren:!1,isValueNull:!1}},computed:{classes(){return["ivu-cascader",{"ivu-cascader-show-clear":this.showCloseIcon,[`ivu-cascader-size-${this.size}`]:!!this.size,"ivu-cascader-visible":this.visible,"ivu-cascader-disabled":this.itemDisabled,"ivu-cascader-not-found":this.filterable&&""!==this.query&&!this.querySelections.length}]},showCloseIcon(){return this.currentValue&&this.currentValue.length&&this.clearable&&!this.itemDisabled},displayRender(){let e=[];for(let t=0;t<this.selected.length;t++)e.push(this.selected[t].label);return this.renderFormat(e,this.selected)},displayInputRender(){return this.filterable?"":this.displayRender},localePlaceholder(){return void 0===this.placeholder?this.t("i.select.placeholder"):this.placeholder},inputPlaceholder(){return this.filterable&&this.currentValue.length?null:this.localePlaceholder},localeNotFoundText(){return void 0===this.notFoundText?this.t("i.select.noMatch"):this.notFoundText},querySelections(){let e=[];return function t(a,i,l){for(let s=0;s<a.length;s++){let r=a[s];r.__label=i?i+" / "+r.label:r.label,r.__value=l?l+","+r.value:r.value,r.children&&r.children.length?(t(r.children,r.__label,r.__value),delete r.__label,delete r.__value):e.push({label:r.__label,value:r.__value,display:r.__label,item:r,disabled:!!r.disabled})}}(this.data),e=e.filter((e=>!!e.label&&e.label.indexOf(this.query)>-1)).map((e=>(e.display=e.display.replace(new RegExp(this.query,"g"),`<span>${this.query}</span>`),e))),e},arrowType(){let e="ios-arrow-down";return this.$IVIEW&&(this.$IVIEW.cascader.customArrow?e="":this.$IVIEW.cascader.arrow&&(e=this.$IVIEW.cascader.arrow)),e},customArrowType(){let e="";return this.$IVIEW&&this.$IVIEW.cascader.customArrow&&(e=this.$IVIEW.cascader.customArrow),e},arrowSize(){let e="";return this.$IVIEW&&this.$IVIEW.cascader.arrowSize&&(e=this.$IVIEW.cascader.arrowSize),e},dropdownCls(){return{[x+"-transfer"]:this.transfer,[this.transferClassName]:this.transferClassName}}},methods:{clearSelect(){if(this.itemDisabled)return!1;const e=JSON.stringify(this.currentValue);this.currentValue=this.selected=this.tmpSelected=[],this.handleClose(),this.emitValue(this.currentValue,e),this.broadcast("Caspanel","on-clear")},handleClose(){this.visible=!1},toggleOpen(){if(this.itemDisabled)return!1;this.visible?this.filterable||this.handleClose():this.onFocus()},onFocus(){this.visible=!0,this.currentValue.length||this.broadcast("Caspanel","on-clear")},updateResult(e){this.tmpSelected=e},updateSelected(e=!1,t=!1){(!this.changeOnSelect||e||t)&&this.broadcast("Caspanel","on-find-selected",{value:this.currentValue})},emitValue(e,t){JSON.stringify(e)!==t&&(this.$emit("on-change",this.currentValue,JSON.parse(JSON.stringify(this.selected))),this.$nextTick((()=>{this.dispatch("FormItem","on-form-change",{value:this.currentValue,selected:JSON.parse(JSON.stringify(this.selected))})})))},handleInput(e){this.query=e.target.value},handleSelectItem(e){const t=this.querySelections[e];if(t.item.disabled)return!1;this.query="",this.$refs.input.currentValue="";const a=JSON.stringify(this.currentValue);this.currentValue=t.value.split(","),setTimeout((()=>{this.emitValue(this.currentValue,a),this.handleClose()}),0)},handleFocus(){this.$refs.input.focus()},getValidData(e){function t(e){const a=Object.assign({},e);return"loading"in a&&delete a.loading,"__value"in a&&delete a.__value,"__label"in a&&delete a.__label,"children"in a&&a.children.length&&(a.children=a.children.map((e=>t(e)))),a}return e.map((e=>t(e)))}},created(){this.validDataStr=JSON.stringify(this.getValidData(this.data)),this.$on("on-result-change",(e=>{const t=e.lastValue,a=e.changeOnSelect,i=e.fromInit;if(t||a){const e=JSON.stringify(this.currentValue);this.selected=this.tmpSelected;let t=[];this.selected.forEach((e=>{t.push(e.value)})),i||(this.updatingValue=!0,this.currentValue=t,this.emitValue(this.currentValue,e))}t&&!i&&this.handleClose()}))},mounted(){this.updateSelected(!0)},watch:{visible(e){e?(this.currentValue.length&&this.updateSelected(),this.transfer&&this.$refs.drop.update(),this.broadcast("Drop","on-update-popper")):(this.filterable&&(this.query="",this.$refs.input.currentValue=""),this.transfer&&this.$refs.drop.destroy(),this.broadcast("Drop","on-destroy-popper")),this.$emit("on-visible-change",e)},value(e){null===e&&(this.isValueNull=!0),this.currentValue=e||[],null!==e&&e.length||(this.selected=[])},currentValue(){this.isValueNull?(this.isValueNull=!1,this.$emit("input",null)):this.$emit("input",this.currentValue),this.updatingValue?this.updatingValue=!1:this.updateSelected(!0)},data:{deep:!0,handler(){const e=JSON.stringify(this.getValidData(this.data));e!==this.validDataStr&&(this.validDataStr=e,this.isLoadedChildren||this.$nextTick((()=>this.updateSelected(!1,this.changeOnSelect))),this.isLoadedChildren=!1)}}}},$=a(76392),C=a.n($),S=a(45600),_=(0,u.Z)(V,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{directives:[{name:"click-outside",rawName:"v-click-outside",value:e.handleClose,expression:"handleClose"}],class:e.classes},[a("div",{ref:"reference",class:[e.prefixCls+"-rel"],on:{click:e.toggleOpen}},[a("input",{attrs:{type:"hidden",name:e.name},domProps:{value:e.currentValue}}),e._t("default",(function(){return[a("i-input",{ref:"input",attrs:{"element-id":e.elementId,readonly:!e.filterable,disabled:e.itemDisabled,value:e.displayInputRender,size:e.size,placeholder:e.inputPlaceholder},on:{"on-change":e.handleInput}}),a("div",{directives:[{name:"show",rawName:"v-show",value:e.filterable&&""===e.query,expression:"filterable && query === ''"}],class:[e.prefixCls+"-label"],on:{click:e.handleFocus}},[e._v(e._s(e.displayRender))]),a("Icon",{directives:[{name:"show",rawName:"v-show",value:e.showCloseIcon,expression:"showCloseIcon"}],class:[e.prefixCls+"-arrow"],attrs:{type:"ios-close-circle"},nativeOn:{click:function(t){return t.stopPropagation(),e.clearSelect.apply(null,arguments)}}}),a("Icon",{class:[e.prefixCls+"-arrow"],attrs:{type:e.arrowType,custom:e.customArrowType,size:e.arrowSize}})]}))],2),a("transition",{attrs:{name:"transition-drop"}},[a("Drop",{directives:[{name:"show",rawName:"v-show",value:e.visible,expression:"visible"},{name:"transfer-dom",rawName:"v-transfer-dom"}],ref:"drop",class:e.dropdownCls,attrs:{eventsEnabled:e.eventsEnabled,"data-transfer":e.transfer,transfer:e.transfer}},[a("div",[a("Caspanel",{directives:[{name:"show",rawName:"v-show",value:!e.filterable||e.filterable&&""===e.query,expression:"!filterable || (filterable && query === '')"}],ref:"caspanel",attrs:{"prefix-cls":e.prefixCls,data:e.data,disabled:e.itemDisabled,"change-on-select":e.changeOnSelect,trigger:e.trigger}}),a("div",{directives:[{name:"show",rawName:"v-show",value:e.filterable&&""!==e.query&&e.querySelections.length,expression:"filterable && query !== '' && querySelections.length"}],class:[e.prefixCls+"-dropdown"]},[a("ul",{class:[e.selectPrefixCls+"-dropdown-list"]},e._l(e.querySelections,(function(t,i){var l;return a("li",{class:[e.selectPrefixCls+"-item",(l={},l[e.selectPrefixCls+"-item-disabled"]=t.disabled,l)],domProps:{innerHTML:e._s(t.display)},on:{click:function(t){return e.handleSelectItem(i)}}})})),0)]),a("ul",{directives:[{name:"show",rawName:"v-show",value:e.filterable&&""!==e.query&&!e.querySelections.length||!e.data.length,expression:"(filterable && query !== '' && !querySelections.length) || !data.length"}],class:[e.prefixCls+"-not-found-tip"]},[a("li",[e._v(e._s(e.localeNotFoundText))])])],1)])],1)],1)}),[],!1,null,null,null),k=_.exports;C()(_,{ClickOutside:S.Z});var O=k,E=(a(69600),a(74916),a(15306),a(10311)),L=a.n(E),A=a(20629),W=a(98761),N=a(72217);L().component("Cascader",O),L().component("TimePicker",r.Z);var D={name:"TradeAdd",data:function(){return{valid:!1,newTrade:{user:"",exchangeTypeArray:[],exchangeType:"",chooseTime:"",validTime:"",isLineup:!0,isPublic:!0,isAuto:!0,maxPeople:2,maxTime:10,contact:"SW",contactDetail:"",detail:"",psw:""},formRules:{require:[function(e){return!!e||"不能为空！"}]},exchangeOption:[{value:"交易",label:"交易",children:[{value:"家具相关",label:"家具相关"},{value:"服饰相关",label:"服饰相关"},{value:"材料相关",label:"材料相关"},{value:"DIY手册相关",label:"DIY手册相关"},{value:"活动相关",label:"活动相关"},{value:"花卉相关",label:"花卉相关"},{value:"其他",label:"其他"}]},{value:"特殊NPC",label:"特殊NPC",children:[{value:"傅珂(妹妹)",label:"傅珂(妹妹)"},{value:"骆岚(壁纸地板)",label:"骆岚(壁纸地板)"},{value:"薛革(鞋袜包包)",label:"薛革(鞋袜包包)"},{value:"绢儿(服装)",label:"绢儿(服装)"},{value:"狐利(艺术品)",label:"狐利(艺术品)"},{value:"然然(园艺)",label:"然然(园艺)"},{value:"其他",label:"其他"}]}],breadNav:[{text:"首页",disabled:!1,href:"/"},{text:"社区",disabled:!0,href:"/community"},{text:"交易区",disabled:!1,href:"/community/trade"},{text:"发布我的交易信息",disabled:!0,href:"/community/trade/add"}],tips:"交易区禁止发布虚假信息，禁止现金交易，拉私群，违规者永久封禁账号。望发布信息的各位森友遵守规则。"}},computed:(0,s.Z)((0,s.Z)({},(0,A.Se)(["userId"])),{},{isLineBL:function(){return!0===this.newTrade.isLineup},isAutoBL:function(){return!0===this.newTrade.isAuto},contact:function(){var e="直接输入12位好友编号(无需-分割)";return"SW"===this.newTrade.contact||(e="联系方式"),e}}),methods:{submit:function(){var e=this;if(this.getTimeVal(),!this.newTrade.validTime)return $Vue.$dialogLoader.showSnackbar("请选择截止时间",{color:"error"});this.$refs.addForm.validate()?(this.newTrade.user=this.userId,!1===this.newTrade.isLineup&&(this.newTrade.isPublic=!1,this.newTrade.isAuto=!1),this.newTrade.exchangeType=this.newTrade.exchangeTypeArray.join("-"),(0,W.Nq)(this.newTrade).then((function(t){$Vue.$dialogLoader.showSnackbar(t.message,{color:"success"}),e.commonApi.resetForm(e),e.$router.push("/community/trade")})).catch((function(e){return $Vue.$dialogLoader.showSnackbar(e.message,{color:"error"})}))):(this.valid=!1,$Vue.$dialogLoader.showSnackbar("信息有误，请重新填写！",{color:"error"}))},getTimeVal:function(){var e=new Date,t=(e.getHours,e.getMinutes(),e.getSeconds(),(0,N.TD)(e));if(this.newTrade.chooseTime){var a=this.newTrade.chooseTime.replace("点",":");a=(a=a.replace("分",":")).replace("秒",""),t=t.substring(0,11)+a,this.newTrade.validTime=(0,N.AB)(t)}}}},q=a(43453),P=a.n(q),Z=a(63150),B=a(82102),F=a(99846),z=a(46232),R=a(68978),J=a(74739),j=a(62877),H=a(61328),Q=a(40314),M=a(34350),U=(0,u.Z)(D,(function(){var e=this,t=this,a=t.$createElement,s=t._self._c||a;return s("v-container",{staticClass:"bgWht",attrs:{"elevation-4":""}},[s(l.default,{attrs:{"bread-nav":t.breadNav}}),s(i.default,{attrs:{title:"发布我的交易信息",tips:t.tips,hasTip:""}}),s("v-form",{ref:"addForm",staticClass:"turnip-form pa-16",attrs:{"lazy-validation":""},model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[s("v-row",[s("v-col",{attrs:{cols:"4"}},[s("Cascader",{attrs:{data:t.exchangeOption,placeholder:"请选择交易类型"},model:{value:t.newTrade.exchangeTypeArray,callback:function(e){t.$set(t.newTrade,"exchangeTypeArray",e)},expression:"newTrade.exchangeTypeArray"}})],1),s("v-col",{attrs:{cols:"4"}},[s("TimePicker",{staticStyle:{width:"100%"},attrs:{type:"time",format:"HH点mm分ss秒",steps:[1,15,15],placeholder:"请选择截止时间"},model:{value:t.newTrade.chooseTime,callback:function(e){t.$set(t.newTrade,"chooseTime",e)},expression:"newTrade.chooseTime"}})],1)],1),s("v-row",[s("v-col",{attrs:{cols:"4"}},[s("v-switch",{staticClass:"mt-0 pt-0",attrs:{label:"排队模式："+(t.newTrade.isLineup?"是":"否"),color:"primary"},model:{value:t.newTrade.isLineup,callback:function(e){t.$set(t.newTrade,"isLineup",e)},expression:"newTrade.isLineup"}})],1),t.isLineBL?s("v-col",{attrs:{cols:"4"}},[s("v-switch",{staticClass:"mt-0 pt-0",attrs:{label:"是否公开："+(t.newTrade.isPublic?"是":"否"),color:"primary","hide-details":""},model:{value:t.newTrade.isPublic,callback:function(e){t.$set(t.newTrade,"isPublic",e)},expression:"newTrade.isPublic"}})],1):t._e(),t.isLineBL?s("v-col",{attrs:{cols:"4"}},[s("v-switch",{staticClass:"mt-0 pt-0",attrs:{label:"是否自动叫号："+(t.newTrade.isAuto?"是":"否"),color:"primary","hide-details":""},model:{value:t.newTrade.isAuto,callback:function(e){t.$set(t.newTrade,"isAuto",e)},expression:"newTrade.isAuto"}})],1):t._e()],1),s("v-row",[t.isLineBL&&t.isAutoBL?s("v-col",{attrs:{cols:"4"}},[s("v-text-field",{attrs:{label:"最大登岛人数限制",type:"number"},model:{value:t.newTrade.maxPeople,callback:function(e){t.$set(t.newTrade,"maxPeople",e)},expression:"newTrade.maxPeople"}})],1):t._e(),t.isLineBL&&t.isAutoBL?s("v-col",{attrs:{cols:"4"}},[s("v-text-field",{attrs:{label:"登岛超时时间(分钟)",type:"number"},model:{value:t.newTrade.maxTime,callback:function(e){t.$set(t.newTrade,"maxTime",e)},expression:"newTrade.maxTime"}})],1):t._e(),t.isLineBL?t._e():s("v-col",{attrs:{cols:"4"}},[s("v-radio-group",{attrs:{label:"联系方式",row:""},model:{value:t.newTrade.contact,callback:function(e){t.$set(t.newTrade,"contact",e)},expression:"newTrade.contact"}},[s("v-radio",{attrs:{label:"SW",value:"SW"}}),s("v-radio",{attrs:{label:"微信",value:"微信"}}),s("v-radio",{attrs:{label:"QQ",value:"QQ"}}),s("v-radio",{attrs:{label:"开岛密码",value:"开岛密码"}})],1)],1),t.isLineBL?t._e():s("v-col",{attrs:{cols:"4"}},[s("v-text-field",{attrs:{label:t.newTrade.contact,placeholder:"请输人"+t.contact,required:""},model:{value:t.newTrade.contactDetail,callback:function(e){t.$set(t.newTrade,"contactDetail",e)},expression:"newTrade.contactDetail"}})],1),t.isLineBL?s("v-col",{attrs:{cols:"4"}},[s("v-text-field",{attrs:{label:"开岛密码",placeholder:"请输入",required:""},model:{value:t.newTrade.psw,callback:function(e){t.$set(t.newTrade,"psw",e)},expression:"newTrade.psw"}})],1):t._e()],1),s("v-row",[s("v-col",{attrs:{cols:"12"}},[s("v-textarea",{attrs:{height:"100",label:"上岛说明",hint:"门票、报酬等等，需要补充的内容都填这里",placeholder:"请输入"},model:{value:t.newTrade.detail,callback:function(e){t.$set(t.newTrade,"detail",e)},expression:"newTrade.detail"}})],1)],1),s("div",{staticClass:"form-btns d-flex justify-lg-space-between mt-4 mx-auto"},[s("v-btn",{staticClass:"mr-4",attrs:{disabled:!t.valid,color:"primary",large:""},on:{click:t.submit}},[t._v(" 提交 ")]),s("v-btn",{attrs:{color:"secondary",large:""},on:{click:function(){return t.commonApi.resetForm(e)}}},[t._v(" 重置 ")])],1)],1)],1)}),[],!1,null,"540f5a68",null),K=U.exports;P()(U,{VBtn:Z.Z,VCol:B.Z,VContainer:F.Z,VForm:z.Z,VRadio:R.Z,VRadioGroup:J.Z,VRow:j.Z,VSwitch:H.Z,VTextField:Q.Z,VTextarea:M.Z})}}]);