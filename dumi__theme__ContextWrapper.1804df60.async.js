"use strict";(self.webpackChunklh_ui_react=self.webpackChunklh_ui_react||[]).push([[458,673],{61464:function(E,l,t){t.r(l),t.d(l,{default:function(){return m}});var C=t(5574),o=t.n(C),T=t(97857),y=t.n(T),i=t(67294),c=t(14570),j=t(74865),S=t.n(j),n=t(64236),a=t(60297),A=t(90482),f=t(78673),e=t(85893),v=y()({},f);function m(){var x=(0,c.pC)(),s=(0,i.useState)(!0),d=o()(s,2),r=d[0],u=d[1],g=(0,i.useRef)(c.m8.location.pathname);return(0,i.useEffect)(function(){return c.m8.listen(function(h){h.location.pathname!==g.current&&(g.current=h.location.pathname,u(!0),S().start(),document.documentElement.scrollTo(0,0))})},[]),(0,e.jsx)(n.D.Provider,{value:{pkg:{name:"lh-ui-react",description:"A react library developed with dumi",version:"0.0.3-beta.1",license:"MIT",authors:["lh <2731164534@qq.com>"]},historyType:"browser",entryExports:v,demos:a.DE,components:a.wx,locales:A.k,loading:r,setLoading:u,hostname:void 0,themeConfig:{footer:'Copyright \xA9 2023 | Powered by <a href="https://d.umijs.org" target="_blank" rel="noreferrer">dumi</a>',prefersColor:{default:"light",switch:!0},nprogress:!0,name:"lh-ui-react",logo:"https://xh-bot.com/img/lh-ui-react-logo.png",nav:[{title:"\u6307\u5357",link:"/guide"},{title:"\u7EC4\u4EF6",link:"/components/hello"}],socialLinks:{github:"https://github.com/lh-js/lh-ui-react"}},_2_level_nav_available:!0},children:x})}},78673:function(E,l,t){t.r(l),t.d(l,{Button:function(){return S},Hello:function(){return y},Switch:function(){return j}});var C=t(67294),o=t(85893),T=function(a){return(0,o.jsx)("h4",{children:a.title})},y=T,i=t(5574),c=t.n(i),j=function(n){var a=n.isChecked,A=a===void 0?!1:a,f=n.size,e=f===void 0?1:f,v=n.disabled,m=v===void 0?!1:v,x=n.onText,s=x===void 0?"":x,d=n.offText,r=d===void 0?"":d,u=n.onChange,g=(0,C.useState)(A),h=c()(g,2),p=h[0],N=h[1],$=function(){m||(u&&u(!p),N(!p))};return(0,o.jsxs)("div",{className:"switch ".concat(m?"disabed":""," ").concat(p?"on-color":"off-color"),style:{"--width":"".concat(e*44,"px"),"--height":"".concat(e*22,"px"),"--circleWidth":"".concat(e*(22-4),"px"),"--circleRight":"".concat(2*e,"px"),"--translateX":p?0:"".concat(-22*e,"px"),"--textPadding":"".concat(e*8,"px"),"--textSize":"".concat(e*12,"px"),"--onText":s,"--offText":r},onClick:$,children:[(0,o.jsx)("span",{className:"off-text",children:typeof r=="string"?r.slice(0,1):r}),(0,o.jsx)("div",{className:"switch-label",children:(0,o.jsx)("span",{className:"on-text",children:typeof s=="string"?s.slice(0,1):s})})]})},S=function(){return(0,o.jsx)("button",{className:"button",children:"Default"})}}}]);
