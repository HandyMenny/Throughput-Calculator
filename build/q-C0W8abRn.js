function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = []
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{l as o,I as v,T as g,E as c,K as n,M as d,e as f,q as i,_,$ as m,w as B}from"./q-uIvALmgb.js";import{N as E}from"./q-Bb1tTulN.js";import{S as R}from"./q-BFUzQiD-.js";import{g as w,a as h}from"./q-CFU3JOUe.js";const S=e=>{const t=o(""),s=o(100),a=v(i(()=>_(()=>Promise.resolve().then(()=>b),void 0),"s_jBFD0ZNjzcE",[e]));return g(i(()=>_(()=>Promise.resolve().then(()=>b),void 0),"s_UXJF6JCOu0g",[e,t,s])),c(f,{children:[c(R,{get label(){return`${e.prefix} Bandwdith`},labelClass:"text-center",get options(){return a.value},selectedValue:t,get hidden(){return e.hidden},[n]:{hidden:d(l=>l.hidden,[e]),label:d(l=>`${l.prefix} Bandwdith`,[e]),labelClass:n,options:d(l=>l.value,[a]),selectedValue:n}},3,"ZE_0"),c(E,{get label(){return`${e.prefix} RBs`},labelClass:"text-center",selectedValue:s,get hidden(){return e.hidden||t.value!=="manual"},[n]:{hidden:d((l,u)=>l.hidden||u.value!=="manual",[e,t]),label:d(l=>`${l.prefix} RBs`,[e]),labelClass:n,selectedValue:n}},3,"ZE_1")]},1,"ZE_2")},p=()=>{const[e]=m(),t=e.selectedRange,s=e.selectedScs;if(isNaN(s))return[];const l=w(t,s).map(r=>({label:r+" MHz ("+h(r,s,t,e.dft)+" RB) ",value:r+""})),u={label:"Resource Blocks",value:"manual"};return l.push(u),l},x=({track:e})=>{const[t,s,a]=m();if(e(()=>s.value),e(()=>a.value),e(()=>t.selectedScs),e(()=>t.selectedRange),t.selectedValue==null)return;let l;s.value=="manual"?l=a.value:l=h(parseInt(s.value),t.selectedScs,t.selectedRange,t.dft),t.selectedValue.value=l??0},b=Object.freeze(Object.defineProperty({__proto__:null,_hW:B,s_A6b3xTcSm4I:S,s_UXJF6JCOu0g:x,s_jBFD0ZNjzcE:p},Symbol.toStringTag,{value:"Module"}));export{B as _hW,S as s_A6b3xTcSm4I,x as s_UXJF6JCOu0g,p as s_jBFD0ZNjzcE};
