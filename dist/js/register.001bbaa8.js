(self.webpackChunkanimal_home_beta=self.webpackChunkanimal_home_beta||[]).push([[685,3968],{81150:function(e){e.exports=Object.is||function(e,r){return e===r?0!==e||1/e==1/r:e!=e&&r!=r}},43304:function(e,r,t){t(82109)({target:"Object",stat:!0},{is:t(81150)})},97462:function(e,r,t){"use strict";t.r(r),t.d(r,{default:function(){return x}});var a=t(21914),s=t(14367),n=t(16198),o=(t(35666),t(74916),t(77601),t(16165)),i={name:"Register",data:function(){return{valid:!1,userInfo:{email:"",username:"",password:"",state:0},formRules:{require:[function(e){return!!e||"不能为空！"}],email:[function(e){return!!e||"邮箱不能为空！"},function(e){return/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(e)||"邮箱不符合规则！"}]},breadNav:[{text:"首页",disabled:!1,href:"/"},{text:"用户中心",disabled:!1,href:"/user"},{text:"注册用户",disabled:!0,href:"/user/register"}],tips:""}},created:function(){},methods:{submit:function(){var e=this;this.$refs.addForm.validate()?(0,o.cn)(this.userInfo).then(function(){var r=(0,n.Z)(regeneratorRuntime.mark((function r(t){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return e.commonApi.resetForm(e),r.next=3,$Vue.$confirm("提示","账号注册成功！是否需要马上登录并将个人信息补充完整？",{color:"warning"});case 3:if(!r.sent){r.next=7;break}e.$router.push("/login?redirect=/user/edit"),r.next=8;break;case 7:e.$router.push("/login?redirect=/");case 8:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}()).catch((function(e){$Vue.$dialogLoader.showSnackbar(e.message,{color:"error"})})):(this.valid=!1,$Vue.$dialogLoader.showSnackbar("信息有误，请重新填写！",{color:"error"}))}}},l=i,u=t(1001),c=t(43453),d=t.n(c),f=t(63150),m=t(82102),p=t(99846),v=t(46232),b=t(62877),h=t(40314),w=(0,u.Z)(l,(function(){var e=this,r=this,t=r.$createElement,n=r._self._c||t;return n("v-container",{staticClass:"bgWht",attrs:{"elevation-4":""}},[n(s.default,{attrs:{"bread-nav":r.breadNav}}),n(a.default,{attrs:{title:"注册新用户",tips:r.tips,"has-tip":!1}}),n("v-form",{ref:"addForm",staticClass:"pa-16 addForm mx-auto",attrs:{"lazy-validation":""},model:{value:r.valid,callback:function(e){r.valid=e},expression:"valid"}},[n("v-row",[n("v-col",{attrs:{cols:"12"}},[n("v-text-field",{attrs:{type:"email",rules:r.formRules.email,label:"邮箱",placeholder:"请输入",required:""},model:{value:r.userInfo.email,callback:function(e){r.$set(r.userInfo,"email",e)},expression:"userInfo.email"}})],1),n("v-col",{attrs:{cols:"12"}},[n("v-text-field",{attrs:{rules:r.formRules.require,label:"用户名",placeholder:"请输入",required:""},model:{value:r.userInfo.username,callback:function(e){r.$set(r.userInfo,"username",e)},expression:"userInfo.username"}})],1),n("v-col",{attrs:{cols:"12"}},[n("v-text-field",{attrs:{type:"password",rules:r.formRules.require,label:"密码",placeholder:"请输入",required:""},model:{value:r.userInfo.password,callback:function(e){r.$set(r.userInfo,"password",e)},expression:"userInfo.password"}})],1)],1),n("div",{staticClass:"form-btns d-flex justify-lg-space-between mt-4 mx-auto"},[n("v-btn",{staticClass:"mr-4",attrs:{disabled:!r.valid,color:"primary",large:""},on:{click:r.submit}},[r._v(" 提交 ")]),n("v-btn",{attrs:{color:"secondary",large:""},on:{click:function(){return r.commonApi.resetForm(e)}}},[r._v(" 重置 ")])],1)],1)],1)}),[],!1,null,"7b7f9216",null),x=w.exports;d()(w,{VBtn:f.Z,VCol:m.Z,VContainer:p.Z,VForm:v.Z,VRow:b.Z,VTextField:h.Z})}}]);