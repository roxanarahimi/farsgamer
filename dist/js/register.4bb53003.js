"use strict";(self["webpackChunkfars_gamer"]=self["webpackChunkfars_gamer"]||[]).push([[685],{3216:function(e,t,s){s.d(t,{Z:function(){return v}});var r=s(3396);const n=e=>((0,r.dD)("data-v-c796b372"),e=e(),(0,r.Cn)(),e),l={id:"loginCode",class:"d-none",action:"",style:{"margin-top":"30vh"}},o=(0,r.uE)('<p class="fw-bold mb-5" style="font-size:22px;" data-v-c796b372>کد ارسال شده به شماره <span class="text-primary" data-v-c796b372> 09032313681 </span> را وارد کنید </p><div class="col-xl-12 mb-2" data-v-c796b372><label for="mobile" class="small text-muted mb-4" style="font-size:12px;" data-v-c796b372>کد ارسالی</label><input id="mobile" class="form-control en" type="text" data-v-c796b372></div>',2),a={class:"d-flex justify-content-between mb-5",style:{"font-size":"12px"}},c=n((()=>(0,r._)("p",{class:"small text-muted"},"تصحیح شماره همراه",-1))),d={class:"small text-black-50 d-flex justify-content-between"},i=n((()=>(0,r._)("span",{style:{display:"inline-block",width:"40px"}},[(0,r.Uk)(" (00:"),(0,r._)("span",{id:"time"},"00"),(0,r.Uk)(") ")],-1))),u=(0,r.uE)('<div class="col-xl-12 mb-4" data-v-c796b372><button class="btn btn-primary py-2 px-5" type="submit" data-v-c796b372><p class="my-1" data-v-c796b372>تایید</p></button></div><p class="small" style="font-size:16px;" data-v-c796b372>حساب کاربری ندارید؟ <a class="text-primary" data-v-c796b372>ثبت نام</a></p>',2);function m(e,t,s,n,m,p){return(0,r.wg)(),(0,r.iD)("form",l,[o,(0,r._)("div",a,[c,(0,r._)("p",d,[(0,r._)("span",{onClick:t[0]||(t[0]=(...e)=>this.$parent.reSendCode&&this.$parent.reSendCode(...e)),id:"resend",style:{display:"inline-block"}}," ارسال مجدد کد "),i])]),u])}var p={name:"LoginCode"},b=s(89);const y=(0,b.Z)(p,[["render",m],["__scopeId","data-v-c796b372"]]);var v=y},6918:function(e,t,s){s.r(t),s.d(t,{default:function(){return A}});var r=s(3396);const n={id:"register",class:"container-fluid p-0 m-0"},l={class:"row"},o={class:"col-md-10 col-lg-6 vh-100"},a={class:"row justify-content-center"},c={id:"Form",class:"col-lg-10 col-xxl-6 p-5"},d=(0,r._)("div",{class:"d-none d-lg-block col-lg-6 bg-primary vh-100"},null,-1);function i(e,t,s,i,u,m){const p=(0,r.up)("register-form"),b=(0,r.up)("login-code");return(0,r.wg)(),(0,r.iD)("div",n,[(0,r._)("div",l,[(0,r._)("div",o,[(0,r._)("div",a,[(0,r._)("div",c,[(0,r.Wm)(p),(0,r.Wm)(b)])])]),d])])}var u=s(3216),m=s(7139),p=s(9242);const b={id:"registerForm",class:"",action:"",style:{"margin-top":"30vh"}},y=(0,r.uE)('<p class="fw-bold mb-5" style="font-size:22px;">ثبت نام در <span class="text-primary"> فارس گیمر</span></p><div class="col-xl-12 mb-4"><label for="mobile" class="small text-muted mb-4" style="font-size:12px;">شماره همراه</label><input id="mobile" maxlength="11" class="form-control mb-3 en" type="text"></div>',2),v={class:"col-xl-12 mb-4"},x=(0,r._)("label",{for:"user_name",class:"small text-muted mb-4",style:{"font-size":"12px"}},"نام کاربری",-1),f=(0,r._)("input",{id:"user_name",minlength:"3",class:"form-control mb-5",type:"text"},null,-1),g={class:"text-muted small"},h={class:"col-xl-12 mb-4"},_=(0,r._)("p",{class:"my-1"},"تایید",-1),S=[_],q=(0,r._)("p",{class:"small",style:{"font-size":"16px"}},[(0,r.Uk)("حساب کاربری ندارید؟ "),(0,r._)("a",{class:"text-primary"},"ثبت نام")],-1);function C(e,t,s,n,l,o){return(0,r.wg)(),(0,r.iD)("form",b,[y,(0,r._)("div",v,[x,f,((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(this.$parent.errors,(e=>((0,r.wg)(),(0,r.iD)("li",g,(0,m.zw)(e),1)))),256))]),(0,r._)("div",h,[(0,r._)("button",{onClick:t[0]||(t[0]=(0,p.iM)(((...e)=>this.$parent.sendCode&&this.$parent.sendCode(...e)),["prevent"])),class:"btn btn-primary py-2 px-5",type:"submit"},S)]),q])}var w={name:"RegisterForm"},k=s(89);const L=(0,k.Z)(w,[["render",C]]);var z=L,D={name:"Register",components:{RegisterForm:z,LoginCode:u.Z},data(){return{send:!1,errors:[]}},mounted(){document.querySelector("#registerForm").classList.remove("d-none"),document.querySelector("#loginCode").classList.add("d-none"),document.querySelector("#resend").classList.remove("text-primary"),document.querySelector("#resend").setAttribute("disabled","disabled"),document.querySelector("#resend").style.cursor="none"},methods:{sendCode(){this.errors=[],11!==document.querySelector("#mobile").value.length&&this.errors.push("شماره موبایل باید 11 رقم باشد."),document.querySelector("#mobile").value.toString().startsWith("09")||this.errors.push("شماره موبایل باید با 09 شروع شود."),0===document.querySelector("#user_name").value.length&&this.errors.push("نام کاربری را وارد کنید."),document.querySelector("#user_name").value.length<3&&0!==document.querySelector("#user_name").value.length&&this.errors.push("نام کاربری باید بیش از 2 کاراکتر باشد"),0===this.errors.length&&(document.querySelector("#registerForm").classList.add("d-none"),document.querySelector("#loginCode").classList.remove("d-none"),this.count())},count(){document.querySelector("#resend").classList.remove("text-primary"),document.querySelector("#resend").setAttribute("disabled","disabled"),document.querySelector("#resend").style.cursor="none";let e=60;setInterval((function(){e>0?(e--,document.querySelector("#time").innerText=e<10?"0"+e:e):0==e&&(document.querySelector("#resend").classList.add("text-primary"),document.querySelector("#resend").removeAttribute("disabled"),document.querySelector("#resend").style.cursor="pointer",e=null)}),1e3)},reSendCode(){document.querySelector("#resend").hasAttribute("disabled")||(this.count(),document.querySelector("#resend").setAttribute("disabled","disabled"),document.querySelector("#resend").classList.remove("text-primary"),document.querySelector("#resend").style.cursor="none")}}};const F=(0,k.Z)(D,[["render",i]]);var A=F}}]);
//# sourceMappingURL=register.4bb53003.js.map