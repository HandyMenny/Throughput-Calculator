import{$ as c,u as m,t as i,I as v,E as r,K as e,b as u,O as p,k as a,e as T,_ as d}from"./q-DjP29I6Z.js";import{B as f}from"./q-BA2UtO37.js";import{L as x}from"./q-DQ4DU6EX.js";import{T as b}from"./q-D7Gft48l.js";import{T as h}from"./q-BirQflVu.js";const y=()=>{const[s]=c();return console.log("calculate speed"),s.reduce((l,o)=>{const n={dl:0,ul:0};return n.dl=l.dl+o.dl,n.ul=l.ul+o.ul,n})},z=()=>{const s=m(1),l=i([{dl:0,ul:0}]),o=i([]),n=v(a(()=>d(()=>Promise.resolve().then(()=>_),void 0),"s_Ta6VG6Fd53s",[l]));return r(T,{children:[r(h,{text:"LTE Throughput",addClasses:"text-3xl",[e]:{text:e,addClasses:e}},3,"Yz_0"),u("div",null,{class:"p-2"},[r(b,{class:"text-center text-2xl font-bold leading-9",get dl(){return n.value.dl},get ul(){return n.value.ul},dlUlSeparator:"/",iconSize:22,iconStroke:2.4,[e]:{class:e,dl:p(t=>t.value.dl,[n]),ul:p(t=>t.value.ul,[n]),dlUlSeparator:e,iconSize:e,iconStroke:e}},3,"Yz_1"),[...Array(s.value).keys()].filter(t=>!o.includes(t)).map(t=>u("div",null,null,r(x,{speed:l[t],onDelete$:a(()=>d(()=>Promise.resolve().then(()=>_),void 0),"s_isUruCbqYeQ",[o,l,t])},3,"Yz_2"),1,`nr-${t}`)),u("div",null,{class:"flex flex-wrap gap-x-4 px-4"},r(f,{type:"button",label:"Add",onClick$:a(()=>d(()=>Promise.resolve().then(()=>_),void 0),"s_XTNVDJzNj6M",[s,l]),[e]:{type:e,label:e,onClick$:e}},3,"Yz_3"),1,null)],1,null)]},1,"Yz_4")},g=async()=>{const[s,l]=c();s.value++,l.push({dl:0,ul:0})},E=async()=>{const[s,l,o]=c();s.push(o),l[o]={dl:0,ul:0}},_=Object.freeze(Object.defineProperty({__proto__:null,s_Ta6VG6Fd53s:y,s_XPw6bitpRKA:z,s_XTNVDJzNj6M:g,s_isUruCbqYeQ:E},Symbol.toStringTag,{value:"Module"}));export{y as s_Ta6VG6Fd53s,z as s_XPw6bitpRKA,g as s_XTNVDJzNj6M,E as s_isUruCbqYeQ};
