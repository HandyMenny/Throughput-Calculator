import{$ as _,u as m,T as v,E as r,K as a,O as i,e as R,k as B,_ as f,w as g}from"./q-zA1EpTYi.js";import{g as o,a as x}from"./q-BhVKwnRt.js";import{N as b}from"./q-DhPVO4s0.js";import{S}from"./q-DYgUwiv-.js";const w=({track:l})=>{const[t,s,u,d]=_();l(()=>d.value),l(()=>t.value),l(()=>s.value);const e={dl:0,ul:0};d.value=="manual"?(e.dl=t.value,e.ul=s.value):e.dl=e.ul=o(d.value),u.selectedRBsDl.value=e.dl,u.selectedRBsUl.value=e.ul},D=l=>{const t=m("20"),s=m(100),u=m(100),d=(()=>{const n=x().map(c=>({label:c+" MHz ("+o(c)+" RB) ",value:c+""})),h={label:"Resource Blocks",value:"manual"};return n.push(h),n})();return v(B(()=>f(()=>Promise.resolve().then(()=>U),void 0),"s_ickQXG7XtZA",[s,u,l,t])),r(R,{children:[r(S,{label:"Bandwdith",labelClass:"text-center",options:d,selectedValue:t,get hidden(){return l.hidden},[a]:{label:a,labelClass:a,selectedValue:a,hidden:i(e=>e.hidden,[l])}},3,"SJ_0"),r(b,{get label(){return`${l.prefixDl} RBs`},labelClass:"text-center",selectedValue:s,get hidden(){return l.hidden||t.value!=="manual"||l.hideDl},min:0,[a]:{label:i(e=>`${e.prefixDl} RBs`,[l]),labelClass:a,selectedValue:a,hidden:i((e,n)=>e.hidden||n.value!=="manual"||e.hideDl,[l,t]),min:a}},3,"SJ_1"),r(b,{get label(){return`${l.prefixUl} RBs`},labelClass:"text-center",selectedValue:u,get hidden(){return l.hidden||t.value!=="manual"||l.hideUl},min:0,[a]:{label:i(e=>`${e.prefixUl} RBs`,[l]),labelClass:a,selectedValue:a,hidden:i((e,n)=>e.hidden||n.value!=="manual"||e.hideUl,[l,t]),min:a}},3,"SJ_2")]},1,"SJ_3")},U=Object.freeze(Object.defineProperty({__proto__:null,_hW:g,s_YzFijexl58I:D,s_ickQXG7XtZA:w},Symbol.toStringTag,{value:"Module"}));export{g as _hW,D as s_YzFijexl58I,w as s_ickQXG7XtZA};
