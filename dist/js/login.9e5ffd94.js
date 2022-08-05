"use strict";(self["webpackChunkfars_gamer"]=self["webpackChunkfars_gamer"]||[]).push([[535],{7951:function(e,t,o){o.r(t),o.d(t,{default:function(){return Z}});var s=o(3396);const n={id:"login ",class:"container-fluid p-0 m-0"},r={class:"row justify-content-center"},l={class:"col-md-10 col-lg-6 vh-100"},a={class:"row justify-content-center"},c={id:"loginForm",class:"col-lg-10 col-xxl-6 p-5"},i=(0,s._)("div",{class:"d-none d-lg-block col-lg-6 bg-primary vh-100"},null,-1);function d(e,t,o,d,u,m){const p=(0,s.up)("login-mobile"),y=(0,s.up)("login-code");return(0,s.wg)(),(0,s.iD)("div",n,[(0,s._)("div",r,[(0,s._)("div",l,[(0,s._)("div",a,[(0,s._)("div",c,[(0,s.Wm)(p),(0,s.Wm)(y)])])]),i])])}var u=o(7139),m=o(9242);const p=e=>((0,s.dD)("data-v-195d3017"),e=e(),(0,s.Cn)(),e),y={id:"loginMobile",class:"",style:{"margin-top":"30vh"}},b=p((()=>(0,s._)("p",{class:"fw-bold mb-5",style:{"font-size":"22px"}},[(0,s.Uk)("ورود به "),(0,s._)("span",{class:"text-primary"}," فارس گیمر")],-1))),g={class:"col-xl-12 mb-4"},f=p((()=>(0,s._)("label",{for:"mobile",class:"small text-muted mb-4",style:{"font-size":"12px"}},"شماره همراه",-1))),v=p((()=>(0,s._)("input",{id:"mobile",maxlength:"11",class:"form-control mb-5 en",type:"text"},null,-1))),h={class:"text-muted small"},x={class:"col-xl-12 mb-4"},S=p((()=>(0,s._)("p",{class:"my-1"},"تایید",-1))),_=[S],q={class:"small",style:{"font-size":"16px"}},k=(0,s.Uk)("حساب کاربری ندارید؟ "),w=(0,s.Uk)("ثبت نام");function C(e,t,o,n,r,l){const a=(0,s.up)("router-link");return(0,s.wg)(),(0,s.iD)("form",y,[b,(0,s._)("div",g,[f,v,((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(this.$parent.errors,(e=>((0,s.wg)(),(0,s.iD)("li",h,(0,u.zw)(e),1)))),256))]),(0,s._)("div",x,[(0,s._)("button",{onClick:t[0]||(t[0]=(0,m.iM)(((...e)=>this.$parent.sendCode&&this.$parent.sendCode(...e)),["prevent"])),class:"btn btn-primary py-2 px-5",type:"submit"},_)]),(0,s._)("p",q,[k,(0,s.Wm)(a,{to:"/register",class:"text-primary"},{default:(0,s.w5)((()=>[w])),_:1})])])}var L=o(6224),D={name:"LoginMobile",components:{loginCode:L.Z}},$=o(89);const z=(0,$.Z)(D,[["render",C],["__scopeId","data-v-195d3017"]]);var M=z,U={name:"Login",components:{LoginMobile:M,LoginCode:L.Z},data(){return{send:!1,errors:[]}},mounted(){localStorage.getItem("token")?this.$router.push({name:"Dashboard"}):localStorage.clear(),document.querySelector("#loginMobile").classList.remove("d-none"),document.querySelector("#loginCode").classList.add("d-none"),document.querySelector("#resend").classList.remove("text-primary"),document.querySelector("#resend").setAttribute("disabled","disabled"),document.querySelector("#resend").style.cursor="none"},methods:{sendCode(){this.errors=[],11!==document.querySelector("#mobile").value.length&&this.errors.push("شماره موبایل باید 11 رقم باشد."),document.querySelector("#mobile").value.toString().startsWith("09")||this.errors.push("شماره موبایل باید با 09 شروع شود."),0===this.errors.length&&axios.post("https://server.elfiro.com/api/v1/auth/send-verification-code",{phone:document.querySelector("#mobile").value}).then((e=>{200===e.status&&(document.querySelector("#sent").value=document.querySelector("#mobile").value,document.querySelector("#loginMobile").classList.add("d-none"),document.querySelector("#loginCode").classList.remove("d-none"),this.count())})).catch((e=>{console.log(e),console.log(e.message),"Request failed with status code 422"===e.message&&this.errors.push("شما عضو نیستید لطفا ابتدا ثبت نام کنید")}))},count(){document.querySelector("#resend").classList.remove("text-primary"),document.querySelector("#resend").setAttribute("disabled","disabled"),document.querySelector("#resend").style.cursor="none";let e=60;setInterval((function(){e>0?(e--,e<10&&document.querySelector("#time")?document.querySelector("#time").innerText="0"+e:e=>document.querySelector("#time")?document.querySelector("#time").innerText=e:document.querySelector("#time")||stop()):0==e&&(document.querySelector("#resend").classList.add("text-primary"),document.querySelector("#resend").removeAttribute("disabled"),document.querySelector("#resend").style.cursor="pointer",e=null)}),1e3)},reSendCode(){document.querySelector("#resend").hasAttribute("disabled")||(this.sendCode(),document.querySelector("#resend").setAttribute("disabled","disabled"),document.querySelector("#resend").classList.remove("text-primary"),document.querySelector("#resend").style.cursor="none")},login(){0===this.errors.length&&axios.post("https://server.elfiro.com/api/v1/auth/login",{phone:document.querySelector("#mobile").value,password:document.querySelector("#code").value}).then((e=>{console.log(e),console.log(e.data.data.login.user.token),localStorage.setItem("token",e.data.data.login.user.token),localStorage.setItem("user",JSON.stringify(e.data.data.login.user)),this.$router.push({name:"Dashboard"})})).catch((e=>{console.log(e),console.log(e.message),"Request failed with status code 429"===e.message&&this.errors.push("کد وارد شده اشتباه است")}))}}};const I=(0,$.Z)(U,[["render",d]]);var Z=I},6224:function(e,t,o){o.d(t,{Z:function(){return x}});var s=o(3396),n=o(9242);const r=e=>((0,s.dD)("data-v-edff02c0"),e=e(),(0,s.Cn)(),e),l={id:"loginCode",class:"d-none",style:{"margin-top":"30vh"}},a=(0,s.uE)('<p class="fw-bold mb-5" style="font-size:22px;" data-v-edff02c0>کد ارسال شده به شماره <span id="sent" class="text-primary mx-2" data-v-edff02c0></span> را وارد کنید </p><div class="col-xl-12 mb-2" data-v-edff02c0><label for="code" class="small text-muted mb-4" style="font-size:12px;" data-v-edff02c0>کد ارسالی</label><input id="code" class="form-control en" type="text" data-v-edff02c0></div>',2),c={class:"d-flex justify-content-between mb-5",style:{"font-size":"12px"}},i=(0,s.Uk)("تصحیح شماره همراه"),d={class:"small text-black-50 d-flex justify-content-between"},u=r((()=>(0,s._)("span",{style:{display:"inline-block",width:"40px"}},[(0,s.Uk)(" (00:"),(0,s._)("span",{id:"time"},"00"),(0,s.Uk)(") ")],-1))),m={class:"col-xl-12 mb-4"},p=r((()=>(0,s._)("p",{class:"my-1"},"تایید",-1))),y=[p],b=r((()=>(0,s._)("p",{class:"small",style:{"font-size":"16px"}},[(0,s.Uk)("حساب کاربری ندارید؟ "),(0,s._)("a",{class:"text-primary"},"ثبت نام")],-1)));function g(e,t,o,r,p,g){const f=(0,s.up)("router-link");return(0,s.wg)(),(0,s.iD)("form",l,[a,(0,s._)("div",c,[(0,s.Wm)(f,{to:"/login",class:"small text-muted"},{default:(0,s.w5)((()=>[i])),_:1}),(0,s._)("p",d,[(0,s._)("span",{onClick:t[0]||(t[0]=(0,n.iM)(((...e)=>this.$parent.reSendCode&&this.$parent.reSendCode(...e)),["prevent"])),id:"resend",style:{display:"inline-block"}}," ارسال مجدد کد "),u])]),(0,s._)("div",m,[(0,s._)("button",{class:"btn btn-primary py-2 px-5",onClick:t[1]||(t[1]=(0,n.iM)(((...e)=>this.$parent.login&&this.$parent.login(...e)),["prevent"])),type:"submit"},y)]),b])}var f={name:"LoginCode"},v=o(89);const h=(0,v.Z)(f,[["render",g],["__scopeId","data-v-edff02c0"]]);var x=h}}]);
//# sourceMappingURL=login.9e5ffd94.js.map