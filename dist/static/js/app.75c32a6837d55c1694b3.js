webpackJsonp([1],{102:function(e,t){},103:function(e,t){},104:function(e,t){},105:function(e,t){},107:function(e,t,n){n(104);var r=n(5)(null,n(116),null,null);e.exports=r.exports},108:function(e,t,n){var r=n(5)(n(81),n(114),null,null);e.exports=r.exports},109:function(e,t,n){var r=n(5)(n(82),n(115),null,null);e.exports=r.exports},110:function(e,t,n){n(102);var r=n(5)(n(83),n(112),"data-v-00991819",null);e.exports=r.exports},111:function(e,t,n){n(105);var r=n(5)(n(84),n(117),"data-v-560c5e23",null);e.exports=r.exports},112:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"continue"},[n("div",{staticClass:"outsilde-box box-sizing"},[n("div",{staticClass:"user-face-box box-sizing"}),e._v(" "),n("h3",{staticClass:"website-name"},[e._v("影谜")]),e._v(" "),n("p",{staticClass:"page-desc"},[e._v("你回来啦！")]),e._v(" "),n("div",{staticClass:"insilde-box"},[n("lb-input",{ref:"username",staticClass:"margin-bottom-20",attrs:{placeholder:"用户名",id:"username",name:"username",type:"text",required:!0,requiredMessage:"请输入用户名",rangeLen:[6,12],rangeMessage:"6~12位用户名"},on:{setValue:e.getInputValue}}),e._v(" "),n("lb-input",{ref:"userpwd",staticClass:"margin-bottom-20",attrs:{placeholder:"密码",id:"userpwd",name:"userpwd",type:"password",required:!0,requiredMessage:"请输入密码"},on:{setValue:e.getInputValue}}),e._v(" "),n("button",{staticClass:"btn",attrs:{tabindex:"4",onselectstart:"return false"}},[e._v("登陆")]),e._v(" "),n("p",{staticClass:"bottom-p"},[e._v("没有账号，\n        "),n("router-link",{attrs:{to:"/register"}},[e._v("去注册")])],1)],1)])])},staticRenderFns:[]}},113:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("label",{staticClass:"input-bar",class:e.theme},["password"===e.type?n("input",{directives:[{name:"model",rawName:"v-model",value:e.currentValue,expression:"currentValue"}],staticClass:"input-text",attrs:{type:"password",id:e.id,name:e.name,placeholder:e.placeholder},domProps:{value:e.currentValue},on:{input:function(t){t.target.composing||(e.currentValue=t.target.value)}}}):n("input",{directives:[{name:"model",rawName:"v-model",value:e.currentValue,expression:"currentValue"}],staticClass:"input-text",attrs:{type:"text",id:e.id,name:e.name,placeholder:e.placeholder},domProps:{value:e.currentValue},on:{input:function(t){t.target.composing||(e.currentValue=t.target.value)}}}),e._v(" "),null!=e.error_msg?n("span",{staticClass:"input-error"},[e._v(e._s(e.error_msg))]):e._e()])},staticRenderFns:[]}},114:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement;return(e._self._c||t)("div")},staticRenderFns:[]}},115:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"continue"},[n("header-area"),e._v(" "),n("router-view")],1)},staticRenderFns:[]}},116:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement;return(e._self._c||t)("div",{staticClass:"hd-common"})},staticRenderFns:[]}},117:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"continue"},[n("div",{staticClass:"outsilde-box box-sizing"},[n("div",{staticClass:"user-face-box box-sizing"}),e._v(" "),n("h3",{staticClass:"website-name"},[e._v("影谜")]),e._v(" "),n("p",{staticClass:"page-desc"},[e._v("骚年，组织需要你的加入！")]),e._v(" "),n("div",{staticClass:"insilde-box"},[n("lb-input",{ref:"username",staticClass:"margin-bottom-20",attrs:{placeholder:"用户名",id:"username",name:"username",type:"text",required:!0,requiredMessage:"请输入用户名",rangeLen:[6,12],rangeMessage:"6~12位用户名"},on:{setValue:e.getInputValue}}),e._v(" "),n("lb-input",{ref:"userpwd",staticClass:"margin-bottom-20",attrs:{placeholder:"密码",id:"userpwd",name:"userpwd",type:"password",required:!0,requiredMessage:"请输入密码"},on:{setValue:e.getInputValue}}),e._v(" "),n("lb-input",{ref:"reuserpwd",staticClass:"margin-bottom-20",attrs:{placeholder:"重复密码",type:"password",name:"reuserpwd",id:"reuserpwd",required:!0,requiredMessage:"请重复密码",equalTo:e.userpwd}}),e._v(" "),n("button",{staticClass:"btn",attrs:{tabindex:"4",onselectstart:"return false"},on:{click:e.doRegister}},[e._v("注册")]),e._v(" "),n("p",{staticClass:"bottom-p"},[e._v("已有账号，\n              "),n("router-link",{attrs:{to:"/login"}},[e._v("去登录")])],1)],1)])])},staticRenderFns:[]}},118:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},staticRenderFns:[]}},31:function(e,t,n){n(103);var r=n(5)(n(80),n(113),"data-v-23699642",null);e.exports=r.exports},33:function(e,t,n){"use strict";var r=n(2),a=n(119),s=n(78);r.default.use(a.a),t.a=new a.a({linkActiveClass:"active",saveScrollPosition:!0,routes:s.a})},34:function(e,t,n){"use strict";var r=n(2),a=n(9);r.default.use(a.a);var s=new a.a.Store({state:{count:0},mutations:{increment:function(e){e.count++}}});t.a=s},36:function(e,t){},37:function(e,t,n){var r=n(5)(n(79),n(118),null,null);e.exports=r.exports},77:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(2),a=n(9),s=n(32),u=n.n(s),i=n(37),o=n.n(i),l=n(33),c=n(34),d=n(35),p=n.n(d),f=n(36);n.n(f);r.default.use(a.a),r.default.use(p.a),u.a.defaults.baseURL="http://192.168.199.222:3000",u.a.defaults.headers.post["Content-Type"]="http://192.168.199.222:3000/register/submit",r.default.prototype.$http=u.a,r.default.config.productionTip=!1,new r.default({el:"#app",router:l.a,store:c.a,template:"<App/>",components:{App:o.a}})},78:function(e,t,n){"use strict";var r=n(109),a=n.n(r),s=n(111),u=n.n(s),i=n(110),o=n.n(i),l=n(108),c=n.n(l);t.a=[{path:"/",name:"Index",component:a.a,children:[{path:"/",name:"/HomePage",component:c.a}]},{path:"/register",name:"Register",component:u.a},{path:"/login",name:"Login",component:o.a}]},79:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"app"}},80:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"LbInput",componentName:"LbInput",props:{theme:{type:String,default:"loginPage"},type:{type:String,default:"text"},placeholder:String,id:String,name:String,required:{type:Boolean,default:!1},requiredMessage:{type:String,default:"必填"},rangeLen:{type:Array,default:null},rangeMessage:{type:String,default:"长度不对"},equalTo:{type:String,default:null},equalMessage:{type:String,default:"两次输入不一致"}},data:function(){var e=this;return{currentValue:"",error_msg:"",showState:{error:function(t){return e.error_msg=t,!1},success:function(){return e.error_msg=null,!0}}}},computed:{doValue:function(){return this.currentValue}},watch:{currentValue:function(){this.validate(),this.setValue()}},methods:{setValue:function(){this.$emit("setValue")},checkRequired:function(){var e=this;if(e.required){var t=e.currentValue;if(""===t||null==t)return e.showState.error(e.requiredMessage)}return e.showState.success()},checkRangeLen:function(){var e=this,t=e.currentValue.length,n=e.rangeLen;if(null!=n&&0!==t){if(1===n.length&&t<n[0])return e.showState.error(e.rangeMessage);if(t<n[0]||t>n[1])return e.showState.error(e.rangeMessage)}return e.showState.success()},checkEqualTo:function(){var e=this,t=e.equalTo,n=e.currentValue;return null!=t&&n!==t?e.showState.error(e.equalMessage):e.showState.success()},validate:function(){var e=this;return!!e.checkRequired()&&(!!e.checkRangeLen()&&!!e.checkEqualTo())}}}},81:function(e,t){},82:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(107),a=n.n(r);t.default={components:{HeaderArea:a.a},data:function(){return{}}}},83:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(31),a=n.n(r);t.default={name:"login",components:{LbInput:a.a},data:function(){return{}},methods:{}}},84:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(31),a=n.n(r),s=n(9);t.default={name:"register",components:{LbInput:a.a},data:function(){return{username:"",userpwd:"",reuserpwd:""}},computed:n.i(s.b)(["count"]),methods:{getInputValue:function(){var e=this.$refs;for(var t in e)this[t]=this.$refs[t].currentValue},doRegister:function(){if(this.validateForm()){var e=this,t="username="+e.username;this.$http.post("/register/submit",t).then(function(e){console.log(e)}).catch(function(e){console.log("访问异常:"+e)})}else console.log("验证不通过")},validateForm:function(){var e=this.$refs;for(var t in e)if(!e[t].validate())return!1;return!0}}}}},[77]);
//# sourceMappingURL=app.75c32a6837d55c1694b3.js.map