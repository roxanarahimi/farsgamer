"use strict";(self["webpackChunkfars_gamer"]=self["webpackChunkfars_gamer"]||[]).push([[966],{7693:function(e,t,o){o.r(t),o.d(t,{default:function(){return J}});var s=o(3396),l=o(7139);const a=(0,s._)("div",{class:"d-flex justify-content-between"},[(0,s._)("h3",{class:"fw-bold mb-0",style:{"line-height":"50px"}},"داشبورد")],-1),d=(0,s._)("hr",{class:"text-muted mb-5 mt-2"},null,-1),r={class:"row px-3 flex-row-reverse"},c={class:"col-lg-3 px-0"},n={class:"card h-100 border-0 mx-0 px-0 px-lg-3"},i={class:"card-body p-0 pt-0"},u={class:"row p-0 m-0"},p={class:"col-lg-12 px-0 m-0 mb-3"},h={class:"mx-auto rounded p-3",style:{overflow:"hidden","background-color":"#eeeeee"}},g=(0,s._)("div",{class:"rounded",style:{width:"60px",height:"60px","background-color":"rgba(149,69,255,0.55)"}},null,-1),b={class:"fw-bold text-center"},x=(0,s._)("p",{class:"fw-bold text-center"},"تعداد آگهی",-1),_={class:"col-lg-12 px-0 m-0 mb-3"},m={class:"mx-auto rounded p-3",style:{overflow:"hidden","background-color":"#eeeeee"}},f=(0,s._)("div",{class:"rounded",style:{width:"60px",height:"60px","background-color":"rgba(149,69,255,0.55)"}},null,-1),v={class:"fw-bold text-center"},w=(0,s._)("p",{class:"fw-bold text-center"},"تعداد بازدید آگهی ها",-1),k={class:"col-lg-12 px-0 m-0 mb-3"},y={class:"mx-auto rounded p-3",style:{overflow:"hidden","background-color":"#eeeeee"}},z=(0,s._)("div",{class:"rounded",style:{width:"60px",height:"60px","background-color":"rgba(149,69,255,0.55)"}},null,-1),S={class:"fw-bold text-center"},j=(0,s._)("p",{class:"fw-bold text-center"},"تعداد آگهی های در حال معامله",-1),C={key:0,class:"col-lg-9 p-0 m-0 border rounded",style:{"min-height":"600px"}},D=(0,s.uE)('<table class="table mb-0 rounded-top text-muted"><thead class="bg-light rounded-top"><tr class="rounded-top"><th class="rounded-top">پیام های اخیر</th></tr></thead><tbody class="rounded-top"></tbody></table>',1),I=[D];function A(e,t,o,D,A,B){return(0,s.wg)(),(0,s.iD)(s.HY,null,[a,d,(0,s._)("div",r,[(0,s._)("div",c,[(0,s._)("div",n,[(0,s._)("div",i,[(0,s._)("div",u,[(0,s._)("div",p,[(0,s._)("div",h,[g,(0,s._)("h2",b,(0,l.zw)(A.info?.details?.orders),1),x])]),(0,s._)("div",_,[(0,s._)("div",m,[f,(0,s._)("h2",v,(0,l.zw)(A.info?.details?.orders_views_count),1),w])]),(0,s._)("div",k,[(0,s._)("div",y,[z,(0,s._)("h2",S,(0,l.zw)(A.info?.details?.orders_has_transaction),1),j])])])])])]),((0,s.wg)(),(0,s.iD)("div",C,I))])],64)}var B={name:"Dashboard",data(){return{user:JSON.parse(localStorage.getItem("user")),token:localStorage.getItem("token"),info:{}}},mounted(){this.getdata()},methods:{getdata(){axios.create({headers:{"Content-Type":"application/json",Accept:"application/json",Authorization:"Bearer "+localStorage.getItem("token")}}).get("https://server.elfiro.com/api/v1/client/dashboard").then((e=>{this.info=e.data.data,console.log(e)})).catch((e=>{console.log(e)}))}}},E=o(89);const H=(0,E.Z)(B,[["render",A]]);var J=H}}]);
//# sourceMappingURL=dashboard.3b590274.js.map