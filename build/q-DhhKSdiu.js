function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = []
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{$ as b,l as c,T as m,E as i,K as s,M as d,e as h,q as v,_ as f,w as g}from"./q-uIvALmgb.js";import{g as o,a as w}from"./q-BRhUxbqg.js";import{N as B}from"./q-Cp8AlWjC.js";import{S as x}from"./q-BuIjMnZU.js";const R=({track:e})=>{const[t,a,n]=b();if(e(()=>a.value),e(()=>n.value),t.selectedValue==null)return;let l;a.value=="manual"?l=n.value:l=o(a.value),t.selectedValue.value=l},S=e=>{const t=c("20"),a=c(100),n=(()=>{const u=w().map(r=>({label:r+" MHz ("+o(r)+" RB) ",value:r+""})),_={label:"Resource Blocks",value:"manual"};return u.push(_),u})();return m(v(()=>f(()=>Promise.resolve().then(()=>V),void 0),"s_ickQXG7XtZA",[e,t,a])),i(h,{children:[i(x,{get label(){return`${e.prefix} Bandwdith`},labelClass:"text-center",options:n,selectedValue:t,get hidden(){return e.hidden},[s]:{hidden:d(l=>l.hidden,[e]),label:d(l=>`${l.prefix} Bandwdith`,[e]),labelClass:s,selectedValue:s}},3,"SJ_0"),i(B,{get label(){return`${e.prefix} RBs`},labelClass:"text-center",selectedValue:a,get hidden(){return e.hidden||t.value!=="manual"},[s]:{hidden:d((l,u)=>l.hidden||u.value!=="manual",[e,t]),label:d(l=>`${l.prefix} RBs`,[e]),labelClass:s,selectedValue:s}},3,"SJ_1")]},1,"SJ_2")},V=Object.freeze(Object.defineProperty({__proto__:null,_hW:g,s_YzFijexl58I:S,s_ickQXG7XtZA:R},Symbol.toStringTag,{value:"Module"}));export{g as _hW,S as s_YzFijexl58I,R as s_ickQXG7XtZA};
