(self.webpackChunkweb=self.webpackChunkweb||[]).push([[766],{23766:function(e,t,n){"use strict";n.r(t),n.d(t,{ColorControl:function(){return Ee},default:function(){return _e}}),n(92571),n(25901),n(92189),n(63238),n(91047),n(17460),n(5769),n(14078),n(15610),n(23938),n(48410),n(71444),n(1203),n(52077),n(61013),n(95163),n(911),n(90938),n(72482),n(72410),n(98010),n(83352);var r=n(27378);function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function a(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t.indexOf(n=a[r])>=0||(o[n]=e[n]);return o}function l(e){var t=(0,r.useRef)(e),n=(0,r.useRef)((function(e){t.current&&t.current(e)}));return t.current=e,n.current}var c=function(e,t,n){return void 0===t&&(t=0),void 0===n&&(n=1),e>n?n:e<t?t:e},i=function(e){return"touches"in e},u=function(e){return e&&e.ownerDocument.defaultView||self},s=function(e,t,n){var r=e.getBoundingClientRect(),o=i(t)?function(e,t){for(var n=0;n<e.length;n++)if(e[n].identifier===t)return e[n];return e[0]}(t.touches,n):t;return{left:c((o.pageX-(r.left+u(e).pageXOffset))/r.width),top:c((o.pageY-(r.top+u(e).pageYOffset))/r.height)}},f=function(e){!i(e)&&e.preventDefault()},h=r.memo((function(e){var t=e.onMove,n=e.onKey,c=a(e,["onMove","onKey"]),h=(0,r.useRef)(null),d=l(t),g=l(n),v=(0,r.useRef)(null),b=(0,r.useRef)(!1),p=(0,r.useMemo)((function(){var e=function(e){f(e),(i(e)?e.touches.length>0:e.buttons>0)&&h.current?d(s(h.current,e,v.current)):n(!1)},t=function(){return n(!1)};function n(n){var r=b.current,o=u(h.current),a=n?o.addEventListener:o.removeEventListener;a(r?"touchmove":"mousemove",e),a(r?"touchend":"mouseup",t)}return[function(e){var t=e.nativeEvent,r=h.current;if(r&&(f(t),!function(e,t){return t&&!i(e)}(t,b.current)&&r)){if(i(t)){b.current=!0;var o=t.changedTouches||[];o.length&&(v.current=o[0].identifier)}r.focus(),d(s(r,t,v.current)),n(!0)}},function(e){var t=e.which||e.keyCode;t<37||t>40||(e.preventDefault(),g({left:39===t?.05:37===t?-.05:0,top:40===t?.05:38===t?-.05:0}))},n]}),[g,d]),m=p[0],y=p[1],w=p[2];return(0,r.useEffect)((function(){return w}),[w]),r.createElement("div",o({},c,{onTouchStart:m,onMouseDown:m,className:"react-colorful__interactive",ref:h,onKeyDown:y,tabIndex:0,role:"slider"}))})),d=function(e){return e.filter(Boolean).join(" ")},g=function(e){var t=e.color,n=e.left,o=e.top,a=void 0===o?.5:o,l=d(["react-colorful__pointer",e.className]);return r.createElement("div",{className:l,style:{top:100*a+"%",left:100*n+"%"}},r.createElement("div",{className:"react-colorful__pointer-fill",style:{backgroundColor:t}}))},v=function(e,t,n){return void 0===t&&(t=0),void 0===n&&(n=Math.pow(10,t)),Math.round(n*e)/n},b={grad:.9,turn:360,rad:360/(2*Math.PI)},p=function(e){return"#"===e[0]&&(e=e.substr(1)),e.length<6?{r:parseInt(e[0]+e[0],16),g:parseInt(e[1]+e[1],16),b:parseInt(e[2]+e[2],16),a:1}:{r:parseInt(e.substr(0,2),16),g:parseInt(e.substr(2,2),16),b:parseInt(e.substr(4,2),16),a:1}},m=function(e,t){return void 0===t&&(t="deg"),Number(e)*(b[t]||1)},y=function(e){var t=e.s,n=e.l;return{h:e.h,s:(t*=(n<50?n:100-n)/100)>0?2*t/(n+t)*100:0,v:n+t,a:e.a}},w=function(e){var t=e.s,n=e.v,r=e.a,o=(200-t)*n/100;return{h:v(e.h),s:v(o>0&&o<200?t*n/100/(o<=100?o:200-o)*100:0),l:v(o/2),a:v(r,2)}},x=function(e){var t=w(e);return"hsl("+t.h+", "+t.s+"%, "+t.l+"%)"},k=function(e){var t=w(e);return"hsla("+t.h+", "+t.s+"%, "+t.l+"%, "+t.a+")"},M=function(e){var t=e.h,n=e.s,r=e.v,o=e.a;t=t/360*6,n/=100,r/=100;var a=Math.floor(t),l=r*(1-n),c=r*(1-(t-a)*n),i=r*(1-(1-t+a)*n),u=a%6;return{r:v(255*[r,c,l,l,i,r][u]),g:v(255*[i,r,r,c,l,l][u]),b:v(255*[l,l,i,r,r,c][u]),a:v(o,2)}},E=function(e){var t=e.toString(16);return t.length<2?"0"+t:t},_=function(e){var t=e.r,n=e.g,r=e.b,o=e.a,a=Math.max(t,n,r),l=a-Math.min(t,n,r),c=l?a===t?(n-r)/l:a===n?2+(r-t)/l:4+(t-n)/l:0;return{h:v(60*(c<0?c+6:c)),s:v(a?l/a*100:0),v:v(a/255*100),a:o}},C=r.memo((function(e){var t=e.hue,n=e.onChange,o=d(["react-colorful__hue",e.className]);return r.createElement("div",{className:o},r.createElement(h,{onMove:function(e){n({h:360*e.left})},onKey:function(e){n({h:c(t+360*e.left,0,360)})},"aria-label":"Hue","aria-valuetext":v(t)},r.createElement(g,{className:"react-colorful__hue-pointer",left:t/360,color:x({h:t,s:100,v:100,a:1})})))})),O=r.memo((function(e){var t=e.hsva,n=e.onChange,o={backgroundColor:x({h:t.h,s:100,v:100,a:1})};return r.createElement("div",{className:"react-colorful__saturation",style:o},r.createElement(h,{onMove:function(e){n({s:100*e.left,v:100-100*e.top})},onKey:function(e){n({s:c(t.s+100*e.left,0,100),v:c(t.v-100*e.top,0,100)})},"aria-label":"Color","aria-valuetext":"Saturation "+v(t.s)+"%, Brightness "+v(t.v)+"%"},r.createElement(g,{className:"react-colorful__saturation-pointer",top:1-t.v/100,left:t.s/100,color:x(t)})))})),S=function(e,t){if(e===t)return!0;for(var n in e)if(e[n]!==t[n])return!1;return!0},j=function(e,t){return e.replace(/\s/g,"")===t.replace(/\s/g,"")};function N(e,t,n){var o=l(n),a=(0,r.useState)((function(){return e.toHsva(t)})),c=a[0],i=a[1],u=(0,r.useRef)({color:t,hsva:c});(0,r.useEffect)((function(){if(!e.equal(t,u.current.color)){var n=e.toHsva(t);u.current={hsva:n,color:t},i(n)}}),[t,e]),(0,r.useEffect)((function(){var t;S(c,u.current.hsva)||e.equal(t=e.fromHsva(c),u.current.color)||(u.current={hsva:c,color:t},o(t))}),[c,e,o]);var s=(0,r.useCallback)((function(e){i((function(t){return Object.assign({},t,e)}))}),[]);return[c,s]}var H="undefined"!=typeof window?r.useLayoutEffect:r.useEffect,R=new Map,z=function(e){H((function(){var t=e.current?e.current.ownerDocument:document;if(void 0!==t&&!R.has(t)){var r=t.createElement("style");r.innerHTML='.react-colorful{position:relative;display:flex;flex-direction:column;width:200px;height:200px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:default}.react-colorful__saturation{position:relative;flex-grow:1;border-color:transparent;border-bottom:12px solid #000;border-radius:8px 8px 0 0;background-image:linear-gradient(0deg,#000,transparent),linear-gradient(90deg,#fff,hsla(0,0%,100%,0))}.react-colorful__alpha-gradient,.react-colorful__pointer-fill{content:"";position:absolute;left:0;top:0;right:0;bottom:0;pointer-events:none;border-radius:inherit}.react-colorful__alpha-gradient,.react-colorful__saturation{box-shadow:inset 0 0 0 1px rgba(0,0,0,.05)}.react-colorful__alpha,.react-colorful__hue{position:relative;height:24px}.react-colorful__hue{background:linear-gradient(90deg,red 0,#ff0 17%,#0f0 33%,#0ff 50%,#00f 67%,#f0f 83%,red)}.react-colorful__last-control{border-radius:0 0 8px 8px}.react-colorful__interactive{position:absolute;left:0;top:0;right:0;bottom:0;border-radius:inherit;outline:none;touch-action:none}.react-colorful__pointer{position:absolute;z-index:1;box-sizing:border-box;width:28px;height:28px;transform:translate(-50%,-50%);background-color:#fff;border:2px solid #fff;border-radius:50%;box-shadow:0 2px 4px rgba(0,0,0,.2)}.react-colorful__interactive:focus .react-colorful__pointer{transform:translate(-50%,-50%) scale(1.1)}.react-colorful__alpha,.react-colorful__alpha-pointer{background-color:#fff;background-image:url(\'data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill-opacity=".05"><path d="M8 0h8v8H8zM0 8h8v8H0z"/></svg>\')}.react-colorful__saturation-pointer{z-index:3}.react-colorful__hue-pointer{z-index:2}',R.set(t,r);var o=n.nc;o&&r.setAttribute("nonce",o),t.head.appendChild(r)}}),[])},I=function(e){var t=e.className,n=e.colorModel,l=e.color,c=void 0===l?n.defaultColor:l,i=e.onChange,u=a(e,["className","colorModel","color","onChange"]),s=(0,r.useRef)(null);z(s);var f=N(n,c,i),h=f[0],g=f[1],v=d(["react-colorful",t]);return r.createElement("div",o({},u,{ref:s,className:v}),r.createElement(O,{hsva:h,onChange:g}),r.createElement(C,{hue:h.h,onChange:g,className:"react-colorful__last-control"}))},L={defaultColor:"000",toHsva:function(e){return _(p(e))},fromHsva:function(e){return n=(t=M(e)).g,r=t.b,"#"+E(t.r)+E(n)+E(r);var t,n,r},equal:function(e,t){return e.toLowerCase()===t.toLowerCase()||S(p(e),p(t))}},P=function(e){var t=e.className,n=e.hsva,o=e.onChange,a={backgroundImage:"linear-gradient(90deg, "+k(Object.assign({},n,{a:0}))+", "+k(Object.assign({},n,{a:1}))+")"},l=d(["react-colorful__alpha",t]);return r.createElement("div",{className:l},r.createElement("div",{className:"react-colorful__alpha-gradient",style:a}),r.createElement(h,{onMove:function(e){o({a:e.left})},onKey:function(e){o({a:c(n.a+e.left)})},"aria-label":"Alpha","aria-valuetext":v(100*n.a)+"%"},r.createElement(g,{className:"react-colorful__alpha-pointer",left:n.a,color:k(n)})))},B=function(e){var t=e.className,n=e.colorModel,l=e.color,c=void 0===l?n.defaultColor:l,i=e.onChange,u=a(e,["className","colorModel","color","onChange"]),s=(0,r.useRef)(null);z(s);var f=N(n,c,i),h=f[0],g=f[1],v=d(["react-colorful",t]);return r.createElement("div",o({},u,{ref:s,className:v}),r.createElement(O,{hsva:h,onChange:g}),r.createElement(C,{hue:h.h,onChange:g}),r.createElement(P,{hsva:h,onChange:g,className:"react-colorful__last-control"}))},q={defaultColor:"hsla(0, 0%, 0%, 1)",toHsva:function(e){var t=/hsla?\(?\s*(-?\d*\.?\d+)(deg|rad|grad|turn)?[,\s]+(-?\d*\.?\d+)%?[,\s]+(-?\d*\.?\d+)%?,?\s*[/\s]*(-?\d*\.?\d+)?(%)?\s*\)?/i.exec(e);return t?y({h:m(t[1],t[2]),s:Number(t[3]),l:Number(t[4]),a:void 0===t[5]?1:Number(t[5])/(t[6]?100:1)}):{h:0,s:0,v:0,a:1}},fromHsva:k,equal:j},T={defaultColor:"rgba(0, 0, 0, 1)",toHsva:function(e){var t=/rgba?\(?\s*(-?\d*\.?\d+)(%)?[,\s]+(-?\d*\.?\d+)(%)?[,\s]+(-?\d*\.?\d+)(%)?,?\s*[/\s]*(-?\d*\.?\d+)?(%)?\s*\)?/i.exec(e);return t?_({r:Number(t[1])/(t[2]?100/255:1),g:Number(t[3])/(t[4]?100/255:1),b:Number(t[5])/(t[6]?100/255:1),a:void 0===t[7]?1:Number(t[7])/(t[8]?100:1)}):{h:0,s:0,v:0,a:1}},fromHsva:function(e){var t=M(e);return"rgba("+t.r+", "+t.g+", "+t.b+", "+t.a+")"},equal:j},X=n(31642),A=n.n(X),$=n(19783),D=n.n($),G=n(48628);n(61665);var W=G.styled.div((function(e){var t=e.theme;return{padding:"2px 6px",lineHeight:"16px",fontSize:10,fontWeight:t.typography.weight.bold,color:t.color.lightest,boxShadow:"0 0 5px 0 rgba(0, 0, 0, 0.3)",borderRadius:4,whiteSpace:"nowrap",pointerEvents:"none",zIndex:-1,background:"light"===t.base?"rgba(60, 60, 60, 0.9)":"rgba(20, 20, 20, 0.85)",margin:6}})),K=function(e){var t=e.note,n=function(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}(e,["note"]);return r.createElement(W,n,t)};K.displayName="TooltipNote";var V,F,U=n(48238),Y=n(25397),J=n(58759),Q=n(92720);function Z(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var n=[],r=!0,o=!1,a=void 0;try{for(var l,c=e[Symbol.iterator]();!(r=(l=c.next()).done)&&(n.push(l.value),!t||n.length!==t);r=!0);}catch(e){o=!0,a=e}finally{try{r||null==c.return||c.return()}finally{if(o)throw a}}return n}}(e,t)||function(e,t){if(e){if("string"==typeof e)return ee(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?ee(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function ee(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function te(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function ne(){return ne=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ne.apply(this,arguments)}var re=G.styled.div({position:"relative",maxWidth:250}),oe=(0,G.styled)(U.R)({position:"absolute",zIndex:1,top:4,left:4}),ae=G.styled.div({width:200,margin:5,".react-colorful__saturation":{borderRadius:"4px 4px 0 0"},".react-colorful__hue":{boxShadow:"inset 0 0 0 1px rgb(0 0 0 / 5%)"},".react-colorful__last-control":{borderRadius:"0 0 4px 4px"}}),le=(0,G.styled)(K)((function(e){return{fontFamily:e.theme.typography.fonts.base}})),ce=G.styled.div({display:"grid",gridTemplateColumns:"repeat(9, 16px)",gap:6,padding:3,marginTop:5,width:200}),ie=G.styled.div((function(e){var t=e.theme;return{width:16,height:16,boxShadow:e.active?"".concat(t.appBorderColor," 0 0 0 1px inset, ").concat(t.color.mediumdark,"50 0 0 0 4px"):"".concat(t.appBorderColor," 0 0 0 1px inset"),borderRadius:t.appBorderRadius}})),ue=function(e){var t=e.value,n=e.active,o=e.onClick,a=e.style,l=function(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}(e,["value","active","onClick","style"]),c="linear-gradient(".concat(t,", ").concat(t,"), ").concat('url(\'data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill-opacity=".05"><path d="M8 0h8v8H8zM0 8h8v8H0z"/></svg>\')',", linear-gradient(#fff, #fff)");return r.createElement(ie,ne({},l,{active:n,onClick:o,style:Object.assign({},a,{backgroundImage:c})}))};ue.displayName="Swatch";var se,fe=(0,G.styled)(Y.l.Input)((function(e){return{width:"100%",paddingLeft:30,paddingRight:30,boxSizing:"border-box",fontFamily:e.theme.typography.fonts.base}})),he=(0,G.styled)(J.P)((function(e){return{position:"absolute",zIndex:1,top:6,right:7,width:20,height:20,padding:4,boxSizing:"border-box",cursor:"pointer",color:e.theme.input.color}}));!function(e){e.RGB="rgb",e.HSL="hsl",e.HEX="hex"}(se||(se={}));var de=Object.values(se),ge=/\(([0-9]+),\s*([0-9]+)%?,\s*([0-9]+)%?,?\s*([0-9.]+)?\)/,ve=/^\s*rgba?\(([0-9]+),\s*([0-9]+),\s*([0-9]+),?\s*([0-9.]+)?\)\s*$/i,be=/^\s*hsla?\(([0-9]+),\s*([0-9]+)%,\s*([0-9]+)%,?\s*([0-9.]+)?\)\s*$/i,pe=/^\s*#?([0-9a-f]{3}|[0-9a-f]{6})\s*$/i,me=/^\s*#?([0-9a-f]{3})\s*$/i,ye=(te(V={},se.HEX,(function(e){return r.createElement(I,o({},e,{colorModel:L}))})),te(V,se.RGB,(function(e){return r.createElement(B,o({},e,{colorModel:T}))})),te(V,se.HSL,(function(e){return r.createElement(B,o({},e,{colorModel:q}))})),V),we=(te(F={},se.HEX,"transparent"),te(F,se.RGB,"rgba(0, 0, 0, 0)"),te(F,se.HSL,"hsla(0, 0%, 0%, 0)"),F),xe=function(e){var t=null==e?void 0:e.match(ge);if(!t)return[0,0,0,1];var n=Z(t,5),r=n[1],o=n[2],a=n[3],l=n[4];return[r,o,a,void 0===l?1:l].map(Number)},ke=function(e){var t;if(e){var n=!0;if(ve.test(e)){var r,o=Z(xe(e),4),a=o[0],l=o[1],c=o[2],i=o[3],u=Z(A().rgb.hsl([a,l,c])||[0,0,0],3),s=u[0],f=u[1],h=u[2];return te(r={valid:n,value:e,keyword:A().rgb.keyword([a,l,c]),colorSpace:se.RGB},se.RGB,e),te(r,se.HSL,"hsla(".concat(s,", ").concat(f,"%, ").concat(h,"%, ").concat(i,")")),te(r,se.HEX,"#".concat(A().rgb.hex([a,l,c]).toLowerCase())),r}if(be.test(e)){var d,g=Z(xe(e),4),v=g[0],b=g[1],p=g[2],m=g[3],y=Z(A().hsl.rgb([v,b,p])||[0,0,0],3),w=y[0],x=y[1],k=y[2];return te(d={valid:n,value:e,keyword:A().hsl.keyword([v,b,p]),colorSpace:se.HSL},se.RGB,"rgba(".concat(w,", ").concat(x,", ").concat(k,", ").concat(m,")")),te(d,se.HSL,e),te(d,se.HEX,"#".concat(A().hsl.hex([v,b,p]).toLowerCase())),d}var M=e.replace("#",""),E=A().keyword.rgb(M)||A().hex.rgb(M),_=A().rgb.hsl(E),C=e;if(/[^#a-f0-9]/i.test(e)?C=M:pe.test(e)&&(C="#".concat(M)),C.startsWith("#"))n=pe.test(C);else try{A().keyword.hex(C)}catch(e){n=!1}return te(t={valid:n,value:C,keyword:A().rgb.keyword(E),colorSpace:se.HEX},se.RGB,"rgba(".concat(E[0],", ").concat(E[1],", ").concat(E[2],", 1)")),te(t,se.HSL,"hsla(".concat(_[0],", ").concat(_[1],"%, ").concat(_[2],"%, 1)")),te(t,se.HEX,C),t}},Me=function(e){return e.replace(/\s*/,"").toLowerCase()},Ee=function(e){var t=e.name,n=e.value,o=e.onChange,a=e.onFocus,l=e.onBlur,c=e.presetColors,i=e.startOpen,u=function(e,t){var n=Z((0,r.useState)(e||""),2),o=n[0],a=n[1],l=Z((0,r.useState)((function(){return ke(o)})),2),c=l[0],i=l[1],u=Z((0,r.useState)((null==c?void 0:c.colorSpace)||se.HEX),2),s=u[0],f=u[1];(0,r.useEffect)((function(){void 0===e&&(a(""),i(void 0),f(se.HEX))}),[e]);var h=(0,r.useMemo)((function(){return function(e,t,n){if(!e||null==t||!t.valid)return we[n];if(n!==se.HEX)return(null==t?void 0:t[n])||we[n];if(!t.hex.startsWith("#"))try{return"#".concat(A().keyword.hex(t.hex))}catch(e){return we.hex}var r=t.hex.match(me);if(!r)return pe.test(t.hex)?t.hex:we.hex;var o=Z(r[1].split(""),3),a=o[0],l=o[1],c=o[2];return"#".concat(a).concat(a).concat(l).concat(l).concat(c).concat(c)}(o,c,s).toLowerCase()}),[o,c,s]),d=(0,r.useCallback)((function(e){var n=ke(e);a((null==n?void 0:n.value)||e||""),n&&(i(n),f(n.colorSpace),t(n.value))}),[t]),g=(0,r.useCallback)((function(){var e=de.indexOf(s)+1;e>=de.length&&(e=0),f(de[e]);var n=(null==c?void 0:c[de[e]])||"";a(n),t(n)}),[c,s,t]);return{value:o,realValue:h,updateValue:d,color:c,colorSpace:s,cycleColorSpace:g}}(n,D()(o,200)),s=u.value,f=u.realValue,h=u.updateValue,d=u.color,g=u.colorSpace,v=u.cycleColorSpace,b=function(e,t,n){var o=Z((0,r.useState)(null!=t&&t.valid?[t]:[]),2),a=o[0],l=o[1];(0,r.useEffect)((function(){void 0===t&&l([])}),[t]);var c=(0,r.useMemo)((function(){return(e||[]).map((function(e){return"string"==typeof e?ke(e):e.title?Object.assign({},ke(e.color),{keyword:e.title}):ke(e.color)})).concat(a).filter(Boolean).slice(-27)}),[e,a]),i=(0,r.useCallback)((function(e){null!=e&&e.valid&&(c.some((function(t){return Me(t[n])===Me(e[n])}))||l((function(t){return t.concat(e)})))}),[n,c]);return{presets:c,addPreset:i}}(c,d,g),p=b.presets,m=b.addPreset,y=ye[g];return r.createElement(re,null,r.createElement(oe,{trigger:"click",startOpen:i,closeOnClick:!0,onVisibilityChange:function(){return m(d)},tooltip:r.createElement(ae,null,r.createElement(y,{color:"transparent"===f?"#000000":f,onChange:h,onFocus:a,onBlur:l}),p.length>0&&r.createElement(ce,null,p.map((function(e,t){return r.createElement(U.R,{key:"".concat(e.value,"-").concat(t),hasChrome:!1,tooltip:r.createElement(le,{note:e.keyword||e.value})},r.createElement(ue,{value:e[g],active:d&&Me(e[g])===Me(d[g]),onClick:function(){return h(e.value)}}))}))))},r.createElement(ue,{value:f,style:{margin:4}})),r.createElement(fe,{id:(0,Q.d)(t),value:s,onChange:function(e){return h(e.target.value)},onFocus:function(e){return e.target.select()},placeholder:"Choose color..."}),s?r.createElement(he,{icon:"markup",onClick:v}):null)};Ee.displayName="ColorControl";var _e=Ee},47297:function(e,t,n){const r=n(49552),o={};for(const e of Object.keys(r))o[r[e]]=e;const a={rgb:{channels:3,labels:"rgb"},hsl:{channels:3,labels:"hsl"},hsv:{channels:3,labels:"hsv"},hwb:{channels:3,labels:"hwb"},cmyk:{channels:4,labels:"cmyk"},xyz:{channels:3,labels:"xyz"},lab:{channels:3,labels:"lab"},lch:{channels:3,labels:"lch"},hex:{channels:1,labels:["hex"]},keyword:{channels:1,labels:["keyword"]},ansi16:{channels:1,labels:["ansi16"]},ansi256:{channels:1,labels:["ansi256"]},hcg:{channels:3,labels:["h","c","g"]},apple:{channels:3,labels:["r16","g16","b16"]},gray:{channels:1,labels:["gray"]}};e.exports=a;for(const e of Object.keys(a)){if(!("channels"in a[e]))throw new Error("missing channels property: "+e);if(!("labels"in a[e]))throw new Error("missing channel labels property: "+e);if(a[e].labels.length!==a[e].channels)throw new Error("channel and label counts mismatch: "+e);const{channels:t,labels:n}=a[e];delete a[e].channels,delete a[e].labels,Object.defineProperty(a[e],"channels",{value:t}),Object.defineProperty(a[e],"labels",{value:n})}a.rgb.hsl=function(e){const t=e[0]/255,n=e[1]/255,r=e[2]/255,o=Math.min(t,n,r),a=Math.max(t,n,r),l=a-o;let c,i;a===o?c=0:t===a?c=(n-r)/l:n===a?c=2+(r-t)/l:r===a&&(c=4+(t-n)/l),c=Math.min(60*c,360),c<0&&(c+=360);const u=(o+a)/2;return i=a===o?0:u<=.5?l/(a+o):l/(2-a-o),[c,100*i,100*u]},a.rgb.hsv=function(e){let t,n,r,o,a;const l=e[0]/255,c=e[1]/255,i=e[2]/255,u=Math.max(l,c,i),s=u-Math.min(l,c,i),f=function(e){return(u-e)/6/s+.5};return 0===s?(o=0,a=0):(a=s/u,t=f(l),n=f(c),r=f(i),l===u?o=r-n:c===u?o=1/3+t-r:i===u&&(o=2/3+n-t),o<0?o+=1:o>1&&(o-=1)),[360*o,100*a,100*u]},a.rgb.hwb=function(e){const t=e[0],n=e[1];let r=e[2];const o=a.rgb.hsl(e)[0],l=1/255*Math.min(t,Math.min(n,r));return r=1-1/255*Math.max(t,Math.max(n,r)),[o,100*l,100*r]},a.rgb.cmyk=function(e){const t=e[0]/255,n=e[1]/255,r=e[2]/255,o=Math.min(1-t,1-n,1-r);return[100*((1-t-o)/(1-o)||0),100*((1-n-o)/(1-o)||0),100*((1-r-o)/(1-o)||0),100*o]},a.rgb.keyword=function(e){const t=o[e];if(t)return t;let n,a=1/0;for(const t of Object.keys(r)){const o=(c=r[t],((l=e)[0]-c[0])**2+(l[1]-c[1])**2+(l[2]-c[2])**2);o<a&&(a=o,n=t)}var l,c;return n},a.keyword.rgb=function(e){return r[e]},a.rgb.xyz=function(e){let t=e[0]/255,n=e[1]/255,r=e[2]/255;return t=t>.04045?((t+.055)/1.055)**2.4:t/12.92,n=n>.04045?((n+.055)/1.055)**2.4:n/12.92,r=r>.04045?((r+.055)/1.055)**2.4:r/12.92,[100*(.4124*t+.3576*n+.1805*r),100*(.2126*t+.7152*n+.0722*r),100*(.0193*t+.1192*n+.9505*r)]},a.rgb.lab=function(e){const t=a.rgb.xyz(e);let n=t[0],r=t[1],o=t[2];return n/=95.047,r/=100,o/=108.883,n=n>.008856?n**(1/3):7.787*n+16/116,r=r>.008856?r**(1/3):7.787*r+16/116,o=o>.008856?o**(1/3):7.787*o+16/116,[116*r-16,500*(n-r),200*(r-o)]},a.hsl.rgb=function(e){const t=e[0]/360,n=e[1]/100,r=e[2]/100;let o,a,l;if(0===n)return l=255*r,[l,l,l];o=r<.5?r*(1+n):r+n-r*n;const c=2*r-o,i=[0,0,0];for(let e=0;e<3;e++)a=t+1/3*-(e-1),a<0&&a++,a>1&&a--,l=6*a<1?c+6*(o-c)*a:2*a<1?o:3*a<2?c+(o-c)*(2/3-a)*6:c,i[e]=255*l;return i},a.hsl.hsv=function(e){const t=e[0];let n=e[1]/100,r=e[2]/100,o=n;const a=Math.max(r,.01);return r*=2,n*=r<=1?r:2-r,o*=a<=1?a:2-a,[t,100*(0===r?2*o/(a+o):2*n/(r+n)),(r+n)/2*100]},a.hsv.rgb=function(e){const t=e[0]/60,n=e[1]/100;let r=e[2]/100;const o=Math.floor(t)%6,a=t-Math.floor(t),l=255*r*(1-n),c=255*r*(1-n*a),i=255*r*(1-n*(1-a));switch(r*=255,o){case 0:return[r,i,l];case 1:return[c,r,l];case 2:return[l,r,i];case 3:return[l,c,r];case 4:return[i,l,r];case 5:return[r,l,c]}},a.hsv.hsl=function(e){const t=e[0],n=e[1]/100,r=e[2]/100,o=Math.max(r,.01);let a,l;l=(2-n)*r;const c=(2-n)*o;return a=n*o,a/=c<=1?c:2-c,a=a||0,l/=2,[t,100*a,100*l]},a.hwb.rgb=function(e){const t=e[0]/360;let n=e[1]/100,r=e[2]/100;const o=n+r;let a;o>1&&(n/=o,r/=o);const l=Math.floor(6*t),c=1-r;a=6*t-l,0!=(1&l)&&(a=1-a);const i=n+a*(c-n);let u,s,f;switch(l){default:case 6:case 0:u=c,s=i,f=n;break;case 1:u=i,s=c,f=n;break;case 2:u=n,s=c,f=i;break;case 3:u=n,s=i,f=c;break;case 4:u=i,s=n,f=c;break;case 5:u=c,s=n,f=i}return[255*u,255*s,255*f]},a.cmyk.rgb=function(e){const t=e[0]/100,n=e[1]/100,r=e[2]/100,o=e[3]/100;return[255*(1-Math.min(1,t*(1-o)+o)),255*(1-Math.min(1,n*(1-o)+o)),255*(1-Math.min(1,r*(1-o)+o))]},a.xyz.rgb=function(e){const t=e[0]/100,n=e[1]/100,r=e[2]/100;let o,a,l;return o=3.2406*t+-1.5372*n+-.4986*r,a=-.9689*t+1.8758*n+.0415*r,l=.0557*t+-.204*n+1.057*r,o=o>.0031308?1.055*o**(1/2.4)-.055:12.92*o,a=a>.0031308?1.055*a**(1/2.4)-.055:12.92*a,l=l>.0031308?1.055*l**(1/2.4)-.055:12.92*l,o=Math.min(Math.max(0,o),1),a=Math.min(Math.max(0,a),1),l=Math.min(Math.max(0,l),1),[255*o,255*a,255*l]},a.xyz.lab=function(e){let t=e[0],n=e[1],r=e[2];return t/=95.047,n/=100,r/=108.883,t=t>.008856?t**(1/3):7.787*t+16/116,n=n>.008856?n**(1/3):7.787*n+16/116,r=r>.008856?r**(1/3):7.787*r+16/116,[116*n-16,500*(t-n),200*(n-r)]},a.lab.xyz=function(e){let t,n,r;n=(e[0]+16)/116,t=e[1]/500+n,r=n-e[2]/200;const o=n**3,a=t**3,l=r**3;return n=o>.008856?o:(n-16/116)/7.787,t=a>.008856?a:(t-16/116)/7.787,r=l>.008856?l:(r-16/116)/7.787,t*=95.047,n*=100,r*=108.883,[t,n,r]},a.lab.lch=function(e){const t=e[0],n=e[1],r=e[2];let o;return o=360*Math.atan2(r,n)/2/Math.PI,o<0&&(o+=360),[t,Math.sqrt(n*n+r*r),o]},a.lch.lab=function(e){const t=e[0],n=e[1],r=e[2]/360*2*Math.PI;return[t,n*Math.cos(r),n*Math.sin(r)]},a.rgb.ansi16=function(e,t=null){const[n,r,o]=e;let l=null===t?a.rgb.hsv(e)[2]:t;if(l=Math.round(l/50),0===l)return 30;let c=30+(Math.round(o/255)<<2|Math.round(r/255)<<1|Math.round(n/255));return 2===l&&(c+=60),c},a.hsv.ansi16=function(e){return a.rgb.ansi16(a.hsv.rgb(e),e[2])},a.rgb.ansi256=function(e){const t=e[0],n=e[1],r=e[2];return t===n&&n===r?t<8?16:t>248?231:Math.round((t-8)/247*24)+232:16+36*Math.round(t/255*5)+6*Math.round(n/255*5)+Math.round(r/255*5)},a.ansi16.rgb=function(e){let t=e%10;if(0===t||7===t)return e>50&&(t+=3.5),t=t/10.5*255,[t,t,t];const n=.5*(1+~~(e>50));return[(1&t)*n*255,(t>>1&1)*n*255,(t>>2&1)*n*255]},a.ansi256.rgb=function(e){if(e>=232){const t=10*(e-232)+8;return[t,t,t]}let t;return e-=16,[Math.floor(e/36)/5*255,Math.floor((t=e%36)/6)/5*255,t%6/5*255]},a.rgb.hex=function(e){const t=(((255&Math.round(e[0]))<<16)+((255&Math.round(e[1]))<<8)+(255&Math.round(e[2]))).toString(16).toUpperCase();return"000000".substring(t.length)+t},a.hex.rgb=function(e){const t=e.toString(16).match(/[a-f0-9]{6}|[a-f0-9]{3}/i);if(!t)return[0,0,0];let n=t[0];3===t[0].length&&(n=n.split("").map((e=>e+e)).join(""));const r=parseInt(n,16);return[r>>16&255,r>>8&255,255&r]},a.rgb.hcg=function(e){const t=e[0]/255,n=e[1]/255,r=e[2]/255,o=Math.max(Math.max(t,n),r),a=Math.min(Math.min(t,n),r),l=o-a;let c,i;return c=l<1?a/(1-l):0,i=l<=0?0:o===t?(n-r)/l%6:o===n?2+(r-t)/l:4+(t-n)/l,i/=6,i%=1,[360*i,100*l,100*c]},a.hsl.hcg=function(e){const t=e[1]/100,n=e[2]/100,r=n<.5?2*t*n:2*t*(1-n);let o=0;return r<1&&(o=(n-.5*r)/(1-r)),[e[0],100*r,100*o]},a.hsv.hcg=function(e){const t=e[1]/100,n=e[2]/100,r=t*n;let o=0;return r<1&&(o=(n-r)/(1-r)),[e[0],100*r,100*o]},a.hcg.rgb=function(e){const t=e[0]/360,n=e[1]/100,r=e[2]/100;if(0===n)return[255*r,255*r,255*r];const o=[0,0,0],a=t%1*6,l=a%1,c=1-l;let i=0;switch(Math.floor(a)){case 0:o[0]=1,o[1]=l,o[2]=0;break;case 1:o[0]=c,o[1]=1,o[2]=0;break;case 2:o[0]=0,o[1]=1,o[2]=l;break;case 3:o[0]=0,o[1]=c,o[2]=1;break;case 4:o[0]=l,o[1]=0,o[2]=1;break;default:o[0]=1,o[1]=0,o[2]=c}return i=(1-n)*r,[255*(n*o[0]+i),255*(n*o[1]+i),255*(n*o[2]+i)]},a.hcg.hsv=function(e){const t=e[1]/100,n=t+e[2]/100*(1-t);let r=0;return n>0&&(r=t/n),[e[0],100*r,100*n]},a.hcg.hsl=function(e){const t=e[1]/100,n=e[2]/100*(1-t)+.5*t;let r=0;return n>0&&n<.5?r=t/(2*n):n>=.5&&n<1&&(r=t/(2*(1-n))),[e[0],100*r,100*n]},a.hcg.hwb=function(e){const t=e[1]/100,n=t+e[2]/100*(1-t);return[e[0],100*(n-t),100*(1-n)]},a.hwb.hcg=function(e){const t=e[1]/100,n=1-e[2]/100,r=n-t;let o=0;return r<1&&(o=(n-r)/(1-r)),[e[0],100*r,100*o]},a.apple.rgb=function(e){return[e[0]/65535*255,e[1]/65535*255,e[2]/65535*255]},a.rgb.apple=function(e){return[e[0]/255*65535,e[1]/255*65535,e[2]/255*65535]},a.gray.rgb=function(e){return[e[0]/100*255,e[0]/100*255,e[0]/100*255]},a.gray.hsl=function(e){return[0,0,e[0]]},a.gray.hsv=a.gray.hsl,a.gray.hwb=function(e){return[0,100,e[0]]},a.gray.cmyk=function(e){return[0,0,0,e[0]]},a.gray.lab=function(e){return[e[0],0,0]},a.gray.hex=function(e){const t=255&Math.round(e[0]/100*255),n=((t<<16)+(t<<8)+t).toString(16).toUpperCase();return"000000".substring(n.length)+n},a.rgb.gray=function(e){return[(e[0]+e[1]+e[2])/3/255*100]}},31642:function(e,t,n){const r=n(47297),o=n(77971),a={};Object.keys(r).forEach((e=>{a[e]={},Object.defineProperty(a[e],"channels",{value:r[e].channels}),Object.defineProperty(a[e],"labels",{value:r[e].labels});const t=o(e);Object.keys(t).forEach((n=>{const r=t[n];a[e][n]=function(e){const t=function(...t){const n=t[0];if(null==n)return n;n.length>1&&(t=n);const r=e(t);if("object"==typeof r)for(let e=r.length,t=0;t<e;t++)r[t]=Math.round(r[t]);return r};return"conversion"in e&&(t.conversion=e.conversion),t}(r),a[e][n].raw=function(e){const t=function(...t){const n=t[0];return null==n?n:(n.length>1&&(t=n),e(t))};return"conversion"in e&&(t.conversion=e.conversion),t}(r)}))})),e.exports=a},77971:function(e,t,n){const r=n(47297);function o(e,t){return function(n){return t(e(n))}}function a(e,t){const n=[t[e].parent,e];let a=r[t[e].parent][e],l=t[e].parent;for(;t[l].parent;)n.unshift(t[l].parent),a=o(r[t[l].parent][l],a),l=t[l].parent;return a.conversion=n,a}e.exports=function(e){const t=function(e){const t=function(){const e={},t=Object.keys(r);for(let n=t.length,r=0;r<n;r++)e[t[r]]={distance:-1,parent:null};return e}(),n=[e];for(t[e].distance=0;n.length;){const e=n.pop(),o=Object.keys(r[e]);for(let r=o.length,a=0;a<r;a++){const r=o[a],l=t[r];-1===l.distance&&(l.distance=t[e].distance+1,l.parent=e,n.unshift(r))}}return t}(e),n={},o=Object.keys(t);for(let e=o.length,r=0;r<e;r++){const e=o[r];null!==t[e].parent&&(n[e]=a(e,t))}return n}},49552:function(e){"use strict";e.exports={aliceblue:[240,248,255],antiquewhite:[250,235,215],aqua:[0,255,255],aquamarine:[127,255,212],azure:[240,255,255],beige:[245,245,220],bisque:[255,228,196],black:[0,0,0],blanchedalmond:[255,235,205],blue:[0,0,255],blueviolet:[138,43,226],brown:[165,42,42],burlywood:[222,184,135],cadetblue:[95,158,160],chartreuse:[127,255,0],chocolate:[210,105,30],coral:[255,127,80],cornflowerblue:[100,149,237],cornsilk:[255,248,220],crimson:[220,20,60],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgoldenrod:[184,134,11],darkgray:[169,169,169],darkgreen:[0,100,0],darkgrey:[169,169,169],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkseagreen:[143,188,143],darkslateblue:[72,61,139],darkslategray:[47,79,79],darkslategrey:[47,79,79],darkturquoise:[0,206,209],darkviolet:[148,0,211],deeppink:[255,20,147],deepskyblue:[0,191,255],dimgray:[105,105,105],dimgrey:[105,105,105],dodgerblue:[30,144,255],firebrick:[178,34,34],floralwhite:[255,250,240],forestgreen:[34,139,34],fuchsia:[255,0,255],gainsboro:[220,220,220],ghostwhite:[248,248,255],gold:[255,215,0],goldenrod:[218,165,32],gray:[128,128,128],green:[0,128,0],greenyellow:[173,255,47],grey:[128,128,128],honeydew:[240,255,240],hotpink:[255,105,180],indianred:[205,92,92],indigo:[75,0,130],ivory:[255,255,240],khaki:[240,230,140],lavender:[230,230,250],lavenderblush:[255,240,245],lawngreen:[124,252,0],lemonchiffon:[255,250,205],lightblue:[173,216,230],lightcoral:[240,128,128],lightcyan:[224,255,255],lightgoldenrodyellow:[250,250,210],lightgray:[211,211,211],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightsalmon:[255,160,122],lightseagreen:[32,178,170],lightskyblue:[135,206,250],lightslategray:[119,136,153],lightslategrey:[119,136,153],lightsteelblue:[176,196,222],lightyellow:[255,255,224],lime:[0,255,0],limegreen:[50,205,50],linen:[250,240,230],magenta:[255,0,255],maroon:[128,0,0],mediumaquamarine:[102,205,170],mediumblue:[0,0,205],mediumorchid:[186,85,211],mediumpurple:[147,112,219],mediumseagreen:[60,179,113],mediumslateblue:[123,104,238],mediumspringgreen:[0,250,154],mediumturquoise:[72,209,204],mediumvioletred:[199,21,133],midnightblue:[25,25,112],mintcream:[245,255,250],mistyrose:[255,228,225],moccasin:[255,228,181],navajowhite:[255,222,173],navy:[0,0,128],oldlace:[253,245,230],olive:[128,128,0],olivedrab:[107,142,35],orange:[255,165,0],orangered:[255,69,0],orchid:[218,112,214],palegoldenrod:[238,232,170],palegreen:[152,251,152],paleturquoise:[175,238,238],palevioletred:[219,112,147],papayawhip:[255,239,213],peachpuff:[255,218,185],peru:[205,133,63],pink:[255,192,203],plum:[221,160,221],powderblue:[176,224,230],purple:[128,0,128],rebeccapurple:[102,51,153],red:[255,0,0],rosybrown:[188,143,143],royalblue:[65,105,225],saddlebrown:[139,69,19],salmon:[250,128,114],sandybrown:[244,164,96],seagreen:[46,139,87],seashell:[255,245,238],sienna:[160,82,45],silver:[192,192,192],skyblue:[135,206,235],slateblue:[106,90,205],slategray:[112,128,144],slategrey:[112,128,144],snow:[255,250,250],springgreen:[0,255,127],steelblue:[70,130,180],tan:[210,180,140],teal:[0,128,128],thistle:[216,191,216],tomato:[255,99,71],turquoise:[64,224,208],violet:[238,130,238],wheat:[245,222,179],white:[255,255,255],whitesmoke:[245,245,245],yellow:[255,255,0],yellowgreen:[154,205,50]}},74833:function(e,t,n){var r=n(56127),o=/^\s+/;e.exports=function(e){return e?e.slice(0,r(e)+1).replace(o,""):e}},56127:function(e){var t=/\s/;e.exports=function(e){for(var n=e.length;n--&&t.test(e.charAt(n)););return n}},66726:function(e,t,n){var r=n(11611),o=n(82846),a=n(91936),l=Math.max,c=Math.min;e.exports=function(e,t,n){var i,u,s,f,h,d,g=0,v=!1,b=!1,p=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function m(t){var n=i,r=u;return i=u=void 0,g=t,f=e.apply(r,n)}function y(e){return g=e,h=setTimeout(x,t),v?m(e):f}function w(e){var n=e-d;return void 0===d||n>=t||n<0||b&&e-g>=s}function x(){var e=o();if(w(e))return k(e);h=setTimeout(x,function(e){var n=t-(e-d);return b?c(n,s-(e-g)):n}(e))}function k(e){return h=void 0,p&&i?m(e):(i=u=void 0,f)}function M(){var e=o(),n=w(e);if(i=arguments,u=this,d=e,n){if(void 0===h)return y(d);if(b)return clearTimeout(h),h=setTimeout(x,t),m(d)}return void 0===h&&(h=setTimeout(x,t)),f}return t=a(t)||0,r(n)&&(v=!!n.leading,s=(b="maxWait"in n)?l(a(n.maxWait)||0,t):s,p="trailing"in n?!!n.trailing:p),M.cancel=function(){void 0!==h&&clearTimeout(h),g=0,i=d=u=h=void 0},M.flush=function(){return void 0===h?f:k(o())},M}},82846:function(e,t,n){var r=n(77400);e.exports=function(){return r.Date.now()}},19783:function(e,t,n){var r=n(66726),o=n(11611);e.exports=function(e,t,n){var a=!0,l=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return o(n)&&(a="leading"in n?!!n.leading:a,l="trailing"in n?!!n.trailing:l),r(e,t,{leading:a,maxWait:t,trailing:l})}},91936:function(e,t,n){var r=n(74833),o=n(11611),a=n(55193),l=/^[-+]0x[0-9a-f]+$/i,c=/^0b[01]+$/i,i=/^0o[0-7]+$/i,u=parseInt;e.exports=function(e){if("number"==typeof e)return e;if(a(e))return NaN;if(o(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=o(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=r(e);var n=c.test(e);return n||i.test(e)?u(e.slice(2),n?2:8):l.test(e)?NaN:+e}}}]);