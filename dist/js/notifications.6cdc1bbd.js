"use strict";(self["webpackChunkfars_gamer"]=self["webpackChunkfars_gamer"]||[]).push([[909],{2921:function(t,e,a){a.r(e),a.d(e,{default:function(){return D}});var s=a(3396),c=a(7139);const n=t=>((0,s.dD)("data-v-27efc0a6"),t=t(),(0,s.Cn)(),t),o=n((()=>(0,s._)("h3",{class:"mb-5 fw-bold"},"اعلانات",-1))),i={class:"row px-3"},l=n((()=>(0,s._)("hr",{class:"text-muted mt-2"},null,-1))),d={key:0,class:"col-12"},r={class:"mx-auto row py-5 pt-2"},u={class:"card p-0 mb-3"},m={class:"card-header d-flex justify-content-between d-lg-block"},p={class:"row"},f={class:"d-flex justify-content-between"},v={class:"mb-0 mt-2 ms-lg-5"},g={class:"btn btn-primary py-0 text-light"},h={class:"card-body"},b={class:"row px-3"};function w(t,e,a,n,w,_){return(0,s.wg)(),(0,s.iD)(s.HY,null,[o,(0,s._)("div",i,[l,((0,s.wg)(),(0,s.iD)("div",d,[(0,s._)("div",r,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(w.notifications,(t=>((0,s.wg)(),(0,s.iD)("div",u,[(0,s._)("div",m,[(0,s._)("div",p,[(0,s._)("div",f,[(0,s._)("p",v,(0,c.zw)(t.date),1),(0,s._)("span",g,(0,c.zw)(t.subject),1)])])]),(0,s._)("div",h,[(0,s._)("div",b,(0,c.zw)(t.content),1)])])))),256))])]))])],64)}var _={name:"Dealings",data(){return{notifications:{}}},mounted(){this.getData()},methods:{getData(){axios.create({headers:{"Content-Type":"application/json",Accept:"application/json",Authorization:localStorage.getItem("token")}}).get("https://server.elfiro.com/api/v1/client/dashboard").then((t=>{this.notifications=t.data.data.notification.records,console.log("nn",this.notifications)})).catch((t=>{console.log(t)}))},dealsByType(t){this.getData();let e=document.querySelector(".btn-active");e.classList.remove("btn-active"),e.classList.add("text-muted"),document.querySelector("#"+t).classList.add("btn-active"),document.querySelector("#"+t).classList.remove("text-muted")}}},y=a(89);const x=(0,y.Z)(_,[["render",w],["__scopeId","data-v-27efc0a6"]]);var D=x}}]);
//# sourceMappingURL=notifications.6cdc1bbd.js.map