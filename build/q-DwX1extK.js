import{$ as M,u as b,I as x,T as A,E as c,K as t,O as n,e as C,k as m,_,w as O}from"./q-zA1EpTYi.js";import{m as S,f as T}from"./q-Bg2ySBgf.js";import{N as P}from"./q-DhPVO4s0.js";import{S as I}from"./q-DYgUwiv-.js";const V=()=>{const[e]=M(),a=[{label:"QPSK",value:"2"},{label:"16QAM",value:"4"},{label:"64QAM",value:"6"},{label:"256QAM",value:"8"},{label:"MCS index",value:"-1"},{label:"Modulation Order + Code rate",value:"-2"}];if(e.ul){if(e.dft){const s={label:"π/2 BPSK",value:"1"};a.splice(0,0,s)}}else{const s={label:"1024QAM",value:"10"};a.splice(4,0,s)}return a},q=()=>{const[e]=M(),a=e.value;return S[a].map((i,d)=>({label:d+"",value:d+""}))},Q=()=>{const[e]=M(),a=[{label:"2 (QPSK)",value:"2"},{label:"4 (16QAM)",value:"4"},{label:"6 (64QAM)",value:"6"},{label:"8 (256QAM)",value:"8"}];if(e.ul){if(e.dft){const s={label:"1 (π/2 BPSK)",value:"1"};a.splice(0,0,s)}}else{const s={label:"10 (1024QAM)",value:"10"};a.splice(4,0,s)}return a},R=({track:e})=>{const[a,s,r,i,d,v]=M();if(e(()=>d.value),e(()=>i.value),e(()=>r.value),e(()=>v.value),e(()=>s.value),a.selectedValue==null)return;let u;if(d.value=="-1"){const h=i.value;u=T(parseInt(r.value),h)}else d.value=="-2"?u={modOrder:parseInt(v.value),codeRate:s.value}:u={modOrder:parseInt(d.value),codeRate:948/1024};u==null&&(u={modOrder:0,codeRate:0}),a.selectedValue.value=u},E=e=>{const a=b("8"),s=b("qam256"),r=b("0"),i=b("8"),d=b(.92578125),v=x(m(()=>_(()=>Promise.resolve().then(()=>f),void 0),"s_aJJr0IG0n4o",[e])),u=x(m(()=>_(()=>Promise.resolve().then(()=>f),void 0),"s_XRaFyQxRrSw",[e])),h=x(m(()=>_(()=>Promise.resolve().then(()=>f),void 0),"s_I0txglKxT9M",[e])),g=x(m(()=>_(()=>Promise.resolve().then(()=>f),void 0),"s_duH44G97NGg",[s]));return A(m(()=>_(()=>Promise.resolve().then(()=>f),void 0),"s_sdAUSnIP67Q",[e,d,r,s,a,i])),c(C,{children:[c(I,{get label(){return`${e.prefix} Modulation`},labelClass:"text-center",get options(){return u.value},selectedValue:a,get hidden(){return e.hidden},[t]:{label:n(l=>`${l.prefix} Modulation`,[e]),labelClass:t,options:n(l=>l.value,[u]),selectedValue:t,hidden:n(l=>l.hidden,[e])}},3,"A2_0"),c(I,{get label(){return`${e.prefix} MCS Table`},labelClass:"text-center",get options(){return h.value},selectedValue:s,get hidden(){return e.hidden||a.value!=="-1"},[t]:{label:n(l=>`${l.prefix} MCS Table`,[e]),labelClass:t,options:n(l=>l.value,[h]),selectedValue:t,hidden:n((l,o)=>l.hidden||o.value!=="-1",[e,a])}},3,"A2_1"),c(I,{get label(){return`${e.prefix} MCS Index`},labelClass:"text-center",get options(){return g.value},selectedValue:r,get hidden(){return e.hidden||a.value!=="-1"},[t]:{label:n(l=>`${l.prefix} MCS Index`,[e]),labelClass:t,options:n(l=>l.value,[g]),selectedValue:t,hidden:n((l,o)=>l.hidden||o.value!=="-1",[e,a])}},3,"A2_2"),c(I,{get label(){return`${e.prefix} Modulation Order`},labelClass:"text-center",get options(){return v.value},selectedValue:i,get hidden(){return e.hidden||a.value!=="-2"},[t]:{label:n(l=>`${l.prefix} Modulation Order`,[e]),labelClass:t,options:n(l=>l.value,[v]),selectedValue:t,hidden:n((l,o)=>l.hidden||o.value!=="-2",[e,a])}},3,"A2_3"),c(P,{get label(){return`${e.prefix} Code Rate`},labelClass:"text-center",selectedValue:d,get hidden(){return e.hidden||a.value!=="-2"},min:0,max:1,step:.001,[t]:{label:n(l=>`${l.prefix} Code Rate`,[e]),labelClass:t,selectedValue:t,hidden:n((l,o)=>l.hidden||o.value!=="-2",[e,a]),min:t,max:t,step:t}},3,"A2_4")]},1,"A2_5")},$=()=>{const[e]=M();if(e.ul&&e.dft)return[{label:"64qam (6.1.4.1-1)",value:"dftQam64"},{label:"256qam (5.1.3.1-2)",value:"qam256"},{label:"64qam low spectral efficiency (6.1.4.1-2)",value:"dftQam64LowSE"}];const a=[{label:"64qam (5.1.3.1-1)",value:"qam64"},{label:"256qam (5.1.3.1-2)",value:"qam256"},{label:"64qam low spectral efficiency (5.1.3.1-3)",value:"qam64LowSE"}];if(!e.ul){const s={label:"1024qam (5.1.3.1-4)",value:"qam1024"};a.push(s)}return a},f=Object.freeze(Object.defineProperty({__proto__:null,_hW:O,s_308KUYpmhME:E,s_I0txglKxT9M:$,s_XRaFyQxRrSw:V,s_aJJr0IG0n4o:Q,s_duH44G97NGg:q,s_sdAUSnIP67Q:R},Symbol.toStringTag,{value:"Module"}));export{O as _hW,E as s_308KUYpmhME,$ as s_I0txglKxT9M,V as s_XRaFyQxRrSw,Q as s_aJJr0IG0n4o,q as s_duH44G97NGg,R as s_sdAUSnIP67Q};
