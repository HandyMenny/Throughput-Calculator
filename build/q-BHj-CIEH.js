function h(t){const{standard:e,subCarriers:n,mimo:r,mod:u,overhead:a,guardInterval:o}=t,s=f(e);return l(r,u.modOrder,u.codeRate,s,o,n,a)}function l(t,e,n,r,u,a,o){const s=e*n,c=a/(r+u),i=1-o;return t*c*s*i}function f(t){switch(t){case"ht":case"vht":return 3.2*10**-6;case"he":case"eht":return 12.8*10**-6}}function b(t,e){const n={20:52,40:108,80:234,160:468},r={26:24,52:48,106:102,242:234,484:468,996:980,1992:1960,2988:2940,3984:3920};if(e=="ht"||e=="vht"){if(Object.keys(n).includes(t.toString()))return n[t]}else if(Object.keys(r).includes(t.toString()))return r[t];return null}function g(t){const e={"2.5":26,5:52,10:106,20:242,40:484,80:996,160:1992,240:2988,320:3984};return Object.keys(e).includes(t)?e[t]:null}function m(t){const e={26:2.5,52:5,106:10,242:20,484:40,996:80,1992:160,2988:240,3984:320};return Object.keys(e).includes(t.toString())?e[t]:null}function S(t){switch(t){case"ht":return[20,40];case"vht":return[20,40,80,160];case"he":return[26,52,106,242,484,996,1992];case"eht":return[26,52,106,242,484,996,1992,2988,3984]}}function d(t){let e;switch(t==0?e=void 0:t<1e6?e="kbps":t<1e10?e="Mbps":e="Gbps",e){case"kbps":t=Math.round(t/1e3);break;case"Mbps":t=Math.round(t/1e5)/10;break;case"Gbps":t=Math.round(t/1e6)/1e3;break}return{value:t,unit:e}}function p(t,e){return t>7||t<0?null:t+(e-1)*8}export{b as a,p as b,d as c,S as g,h as l,g as m,m as t};
