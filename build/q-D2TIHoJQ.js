import{u as o,T as _,E as s,K as l,O as a,e as f,k as v,_ as S,$ as h,w as y}from"./q-zA1EpTYi.js";import{N as c}from"./q-DhPVO4s0.js";import{S as x}from"./q-DYgUwiv-.js";const g=e=>{const d=o("5"),n=o(7),i=o(2),u=o(6),b=o(4),m=[{label:"0.5 ms",value:"0.5"},{label:"0.625 ms",value:"0.625"},{label:"1 ms",value:"1"},{label:"1.25 ms",value:"1.25"},{label:"2 ms",value:"2"},{label:"2.5 ms",value:"2.5"},{label:"3 ms",value:"3"},{label:"4 ms",value:"4"},{label:"5 ms",value:"5"},{label:"10 ms",value:"10"}];return _(v(()=>S(()=>Promise.resolve().then(()=>$),void 0),"s_dPiencF2kJQ",[n,u,e,d,i,b])),s(f,{children:[s(x,{get label(){return`Periodicity ${e.suffix}`},labelClass:"text-center",options:m,selectedValue:d,get hidden(){return e.hidden},[l]:{label:a(t=>`Periodicity ${t.suffix}`,[e]),labelClass:l,selectedValue:l,hidden:a(t=>t.hidden,[e])}},3,"XH_0"),s(c,{get label(){return`Slots DL ${e.suffix}`},labelClass:"text-center",selectedValue:n,get hidden(){return e.hidden},min:0,[l]:{label:a(t=>`Slots DL ${t.suffix}`,[e]),labelClass:l,selectedValue:l,hidden:a(t=>t.hidden,[e]),min:l}},3,"XH_1"),s(c,{get label(){return`Slots UL ${e.suffix}`},labelClass:"text-center",selectedValue:i,get hidden(){return e.hidden},min:0,[l]:{label:a(t=>`Slots UL ${t.suffix}`,[e]),labelClass:l,selectedValue:l,hidden:a(t=>t.hidden,[e]),min:l}},3,"XH_2"),s(c,{get label(){return`Symbols DL ${e.suffix}`},labelClass:"text-center",selectedValue:u,get hidden(){return e.hidden},min:0,max:14,[l]:{label:a(t=>`Symbols DL ${t.suffix}`,[e]),labelClass:l,selectedValue:l,hidden:a(t=>t.hidden,[e]),min:l,max:l}},3,"XH_3"),s(c,{get label(){return`Symbols UL ${e.suffix}`},labelClass:"text-center",selectedValue:b,get hidden(){return e.hidden},min:0,max:14,[l]:{label:a(t=>`Symbols UL ${t.suffix}`,[e]),labelClass:l,selectedValue:l,hidden:a(t=>t.hidden,[e]),min:l,max:l}},3,"XH_4")]},1,"XH_5")},V=({track:e})=>{const[d,n,i,u,b,m]=h();if(e(()=>u.value),e(()=>d.value),e(()=>b.value),e(()=>n.value),e(()=>m.value),i.selectedValue==null)return;const r={periodicity:parseFloat(u.value),dlSlots:d.value,dlSymbols:n.value,ulSlots:b.value,ulSymbols:m.value};i.selectedValue.value=r},$=Object.freeze(Object.defineProperty({__proto__:null,_hW:y,s_FrTSgj3HbX8:g,s_dPiencF2kJQ:V},Symbol.toStringTag,{value:"Module"}));export{y as _hW,g as s_FrTSgj3HbX8,V as s_dPiencF2kJQ};
