function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = []
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{x as b,P as O,l as h,I,T as f,O as P,M as u,E as S,q as s,_ as d,U as E,$ as r,w as m}from"./q-_JLpC6VS.js";import{a1 as p}from"./q-MUbwB9EZ.js";const R=e=>{const t=b(e,["_index","disabled"]),i=O(p),l=h(),c=h(null),_=`${i.localId}-${e._index}`,o=I(s(()=>d(()=>Promise.resolve().then(()=>a),void 0),"s_rR04GIi30QM",[i,e])),v=I(s(()=>d(()=>Promise.resolve().then(()=>a),void 0),"s_CfWxBB5qa04",[i,e]));f(s(()=>d(()=>Promise.resolve().then(()=>a),void 0),"s_UWukd0CJqlM",[c,e])),f(s(()=>d(()=>Promise.resolve().then(()=>a),void 0),"s_9G07dudi6Ro",[i,v,l]));const x=s(()=>d(()=>Promise.resolve().then(()=>a),void 0),"s_mx102rKB52g",[i,c,e]),g=s(()=>d(()=>Promise.resolve().then(()=>a),void 0),"s_AlFOEYXyc6s",[i,c,e]);return P("li",{...t,children:S(E,null,3,"jc_0"),id:_,onClick$:[x,e.onClick$],onPointerOver$:[g,e.onPointerOver$],ref:l},{"aria-disabled":u(n=>n.disabled===!0?"true":"false",[e],'p0.disabled===true?"true":"false"'),"aria-selected":u(n=>n.value,[o],"p0.value"),"data-disabled":u(n=>n.disabled?"":void 0,[e],'p0.disabled?"":undefined'),"data-highlighted":u(n=>n.value?"":void 0,[v],'p0.value?"":undefined'),"data-selected":u(n=>n.value?"":void 0,[o],'p0.value?"":undefined'),role:"option",tabIndex:-1},0,"jc_1")},T=()=>{const[e,t]=r();return!t.disabled&&e.selectedIndexSig.value===t._index},$=()=>{const[e,t]=r();return!t.disabled&&e.highlightedIndexSig.value===t._index},k=function(){const[t,i]=r();if(i._index===void 0)throw Error("Qwik UI: Select component option cannot find its proper index.");t.value=i._index},C=function({track:t,cleanup:i}){const[l,c,_]=r();t(()=>l.highlightedIndexSig.value);let o;const v=x=>{var n;const[g]=x;c.value&&!g.isIntersecting&&((n=_.value)==null||n.scrollIntoView(l.scrollOptions))};i(()=>o==null?void 0:o.disconnect()),o=new IntersectionObserver(v,{root:l.listboxRef.value,threshold:1}),_.value&&o.observe(_.value)},A=()=>{const[e,t,i]=r();i.disabled||(e.selectedIndexSig.value=t.value,e.isListboxOpenSig.value=!1)},V=()=>{const[e,t,i]=r();i.disabled||t.value!==null&&(e.highlightedIndexSig.value=t.value)},a=Object.freeze(Object.defineProperty({__proto__:null,_hW:m,s_9G07dudi6Ro:C,s_AlFOEYXyc6s:V,s_CfWxBB5qa04:$,s_CfpmGeuNdpE:R,s_UWukd0CJqlM:k,s_mx102rKB52g:A,s_rR04GIi30QM:T},Symbol.toStringTag,{value:"Module"}));export{m as _hW,C as s_9G07dudi6Ro,V as s_AlFOEYXyc6s,$ as s_CfWxBB5qa04,R as s_CfpmGeuNdpE,k as s_UWukd0CJqlM,A as s_mx102rKB52g,T as s_rR04GIi30QM};
