import{$ as l,M as w,u as h,T as m,P as S,E as p,k as s,_ as r,H as P,w as R}from"./q-wS8-6zKl.js";import{C as O}from"./q-pyMCkchf.js";const D=({track:t})=>{const[e,n]=l();t(()=>e.isDraggingSig.value),n.value=e.numSlidesSig.value*e.slideRefsArray.value[0].value.offsetWidth*-1},E=t=>{const[e]=l();if(e.isDraggingSig.value){if(!e.containerRef.value)return;e.transitionDurationSig.value=0;const n=t.clientX-e.initialX.value,i=e.initialTransformX.value+n;if(i>50)return;e.slideOffsetSig.value=i;for(let o=0;o<e.slideRefsArray.value.length;o++){const u=e.slideRefsArray.value[o];if(!e.containerRef.value||!u.value)return;const _=window.getComputedStyle(e.containerRef.value),d=new DOMMatrix(_.transform).m41,v=Math.abs(d);if(!e.viewportRef.value)return;const c=u.value.offsetLeft,g=c+u.value.offsetWidth+e.spaceBetweenSlides,f=e.viewportRef.value.offsetWidth/2;if(v>c-f&&v<g-f){e.currentIndexSig.value=o||0;break}}}},T=t=>{const[e,n]=l();if(!(t.pointerType==="mouse"&&t.button!==0)){if(e.initialX.value=t.clientX,e.containerRef.value){const i=window.getComputedStyle(e.containerRef.value),o=new DOMMatrix(i.transform);e.initialTransformX.value=o.m41,e.isDraggingSig.value=!0}window.addEventListener("pointermove",n)}},x=()=>{const[t]=l();return t.transitionDurationSig.value=0},y=()=>{const[t]=l();return window.removeEventListener("pointermove",t)},M=t=>{const e=w(O),n=h(0);m(s(()=>r(()=>Promise.resolve().then(()=>a),void 0),"s_MK7ZeF7gIg0",[e,n]));const i=s(()=>r(()=>Promise.resolve().then(()=>a),void 0),"s_iTqga1uhyo4",[e]);return S("div",{ref:e.viewportRef,...t,children:p(P,null,3,"zZ_0"),onPointerDown$:s(()=>r(()=>Promise.resolve().then(()=>a),void 0),"s_LwiHS8URHVA",[e,i]),onTransitionEnd$:s(()=>r(()=>Promise.resolve().then(()=>a),void 0),"s_AOuM7nDGOUU",[e]),"window:onPointerUp$":s(()=>r(()=>Promise.resolve().then(()=>a),void 0),"s_xwB8On0SKlk",[i])},{style:{overflowX:"visible",position:"relative"}},0,"zZ_1")},a=Object.freeze(Object.defineProperty({__proto__:null,_hW:R,s_70GSGy0IKDw:M,s_AOuM7nDGOUU:x,s_LwiHS8URHVA:T,s_MK7ZeF7gIg0:D,s_iTqga1uhyo4:E,s_xwB8On0SKlk:y},Symbol.toStringTag,{value:"Module"}));export{R as _hW,M as s_70GSGy0IKDw,x as s_AOuM7nDGOUU,T as s_LwiHS8URHVA,D as s_MK7ZeF7gIg0,E as s_iTqga1uhyo4,y as s_xwB8On0SKlk};
