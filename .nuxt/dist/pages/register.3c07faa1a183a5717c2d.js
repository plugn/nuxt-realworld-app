webpackJsonp([4],{"9K+V":function(t,e,r){"use strict";var s=r("fZjL"),a=r.n(s);e.a={name:"ErrorMessages",props:{error:{type:Object,default:function(){return{}}}},computed:{errFormatted:function(){var t=this;return a()(this.error).reduce(function(e,r){var s=t.error[r].map(function(t){return r+" "+t});return e.concat(s)},[])}}}},DMlj:function(t,e,r){"use strict";var s=r("MZAm");e.a={name:"Register",components:{ErrorMessages:s.a},middleware:["auth-forbidden"],data:function(){return{username:"",email:"",password:"",error:{},submitting:!1}},head:function(){return{title:"Sign up - Conduit"}},methods:{onSubmit:function(){var t=this;this.submitting=!0,this.$store.dispatch("api/request",{promise:this.$store.dispatch("auth/register",{username:this.username,email:this.email,password:this.password}),success:function(){t.$router.push({name:"index"})},fail:function(e){t.submitting=!1,t.error=e.response.data.errors}})}}}},MZAm:function(t,e,r){"use strict";var s=r("9K+V"),a=r("QmkN"),n=r("VU/8")(s.a,a.a,!1,null,null,null);e.a=n.exports},QmkN:function(t,e,r){"use strict";var s={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ul",{staticClass:"error-messages"},t._l(t.errFormatted,function(e,s){return r("li",{key:s},[t._v(t._s(e))])}))},staticRenderFns:[]};e.a=s},Y5Gu:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=r("DMlj"),a=r("wpqv"),n=r("VU/8")(s.a,a.a,!1,null,null,null);e.default=n.exports},wpqv:function(t,e,r){"use strict";var s={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"auth-page"},[r("div",{staticClass:"container page"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-md-6 offset-md-3 col-xs-12"},[r("h1",{staticClass:"text-xs-center"},[t._v("Sign up")]),r("p",{staticClass:"text-xs-center"},[r("nuxt-link",{attrs:{to:{name:"login"}}},[t._v("Have an account?")])],1),r("error-messages",{directives:[{name:"show",rawName:"v-show",value:Object.keys(t.error).length,expression:"Object.keys(error).length"}],attrs:{error:t.error}}),r("form",{on:{submit:function(e){return e.preventDefault(),t.onSubmit(e)}}},[r("fieldset",{staticClass:"form-group"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.username,expression:"username"}],staticClass:"form-control form-control-lg",attrs:{type:"text",placeholder:"Your Name",disabled:t.submitting},domProps:{value:t.username},on:{input:function(e){e.target.composing||(t.username=e.target.value)}}})]),r("fieldset",{staticClass:"form-group"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],staticClass:"form-control form-control-lg",attrs:{type:"text",placeholder:"Email",disabled:t.submitting},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}})]),r("fieldset",{staticClass:"form-group"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"form-control form-control-lg",attrs:{type:"password",placeholder:"Password",disabled:t.submitting},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}})]),r("button",{staticClass:"btn btn-lg btn-primary pull-xs-right",attrs:{disabled:t.submitting}},[t._v("Sign up")])])],1)])])])},staticRenderFns:[]};e.a=s}});