var v=Object.defineProperty;var r=Object.getOwnPropertySymbols;var b=Object.prototype.hasOwnProperty,x=Object.prototype.propertyIsEnumerable;var l=(e,t,a)=>t in e?v(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,i=(e,t)=>{for(var a in t||(t={}))b.call(t,a)&&l(e,a,t[a]);if(r)for(var a of r(t))x.call(t,a)&&l(e,a,t[a]);return e};import{t as C}from"./data-CNsUcL2x.js";import{p as u,x as p,y,a3 as f,aY as z}from"./index-BbxVbw8z.js";function A(){const e=u([]),t=u(!0),a=[{label:"日期",prop:"date"},{label:"姓名",prop:"name"},{label:"地址",prop:"address"}],o=p({pageSize:20,currentPage:1,pageSizes:[20,40,60],total:0,align:"right",background:!0,size:"default"}),s=p({text:"正在加载第一页...",viewBox:"-10, -10, 50, 50",spinner:`
        <path class="path" d="
          M 30 15
          L 28 17
          M 25.61 25.61
          A 15 15, 0, 0, 1, 15 30
          A 15 15, 0, 1, 1, 27.99 7.5
          L 15 15
        " style="stroke-width: 4px; fill: rgba(0, 0, 0, 0)"/>
      `}),c={offsetBottom:110};function g(n){}function h(n){s.text=`正在加载第${n}页...`,t.value=!0,f(600).then(()=>{t.value=!1})}return y(()=>{f(600).then(()=>{const n=[];Array.from({length:6}).forEach(()=>{n.push(z(C,!0))}),n.flat(1/0).forEach((d,m)=>{e.value.push(i({id:m},d))}),o.total=e.value.length,t.value=!1})}),{loading:t,columns:a,dataList:e,pagination:o,loadingConfig:s,adaptiveConfig:c,onSizeChange:g,onCurrentChange:h}}export{A as useColumns};
