import{$ as i,r as m,k as r,_ as u,u as f,t as c,I as v,E as d,K as e,b as a,O as p,e as x}from"./q-DjP29I6Z.js";import{B as E}from"./q-BA2UtO37.js";import{T as P}from"./q-jNgRcKcP.js";import{T as h}from"./q-BirQflVu.js";const T=()=>{const[s]=i();return console.log("calculate speed"),s.reduce((l,o)=>{const n={dl:0,ul:0};return n.dl=l.dl+o.dl,n.ul=l.ul+o.ul,n})},y=m(r(()=>u(()=>import("./q-BGogRpKe.js"),[]),"s_hKrYkqxp4bU")),b=()=>{const s=f(1),l=c([{dl:0,ul:0}]),o=c([]),n=v(r(()=>u(()=>Promise.resolve().then(()=>_),void 0),"s_0Pmi8ElZ0mo",[l]));return d(x,{children:[d(h,{text:"WiFi Throughput",addClasses:"text-3xl",[e]:{text:e,addClasses:e}},3,"dd_0"),a("div",null,{class:"p-2"},[d(P,{class:"text-center text-2xl font-bold leading-9",get dl(){return n.value.dl},get ul(){return n.value.ul},dlUlSeparator:"/",iconSize:22,iconStroke:2.4,[e]:{class:e,dl:p(t=>t.value.dl,[n]),ul:p(t=>t.value.ul,[n]),dlUlSeparator:e,iconSize:e,iconStroke:e}},3,"dd_1"),[...Array(s.value).keys()].filter(t=>!o.includes(t)).map(t=>a("div",null,null,d(y,{speed:l[t],onDelete$:r(()=>u(()=>Promise.resolve().then(()=>_),void 0),"s_4HDfIm079fE",[o,l,t])},3,"dd_2"),1,`nr-${t}`)),a("div",null,{class:"flex flex-wrap gap-x-4 px-4"},d(E,{type:"button",label:"Add",onClick$:r(()=>u(()=>Promise.resolve().then(()=>_),void 0),"s_50oRpARMuPY",[s,l]),[e]:{type:e,label:e,onClick$:e}},3,"dd_3"),1,null)],1,null)]},1,"dd_4")},g=async()=>{const[s,l,o]=i();s.push(o),l[o]={dl:0,ul:0}},S=async()=>{const[s,l]=i();s.value++,l.push({dl:0,ul:0})},_=Object.freeze(Object.defineProperty({__proto__:null,s_0Pmi8ElZ0mo:T,s_4HDfIm079fE:g,s_50oRpARMuPY:S,s_nxDlKGExwqs:b},Symbol.toStringTag,{value:"Module"}));export{T as s_0Pmi8ElZ0mo,g as s_4HDfIm079fE,S as s_50oRpARMuPY,b as s_nxDlKGExwqs};
