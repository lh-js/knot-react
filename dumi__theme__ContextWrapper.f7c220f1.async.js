"use strict";(self.webpackChunklh_ui_react=self.webpackChunklh_ui_react||[]).push([[458,739],{61464:function(A,i,t){t.r(i),t.d(i,{default:function(){return v}});var T=t(5574),o=t.n(T),y=t(97857),j=t.n(y),c=t(67294),d=t(14570),S=t(74865),n=t.n(S),s=t(64236),h=t(37505),u=t(90482),e=t(94739),f=t(85893),r=j()({},e);function v(){var l=(0,d.pC)(),m=(0,c.useState)(!0),x=o()(m,2),g=x[0],a=x[1],p=(0,c.useRef)(d.m8.location.pathname);return(0,c.useEffect)(function(){return d.m8.listen(function(C){C.location.pathname!==p.current&&(p.current=C.location.pathname,a(!0),n().start(),document.documentElement.scrollTo(0,0))})},[]),(0,f.jsx)(s.D.Provider,{value:{pkg:{name:"lh-ui-react",description:"A react library developed with dumi",version:"0.0.2-beta.1",license:"MIT",authors:["lh <2731164534@qq.com>"]},historyType:"browser",entryExports:r,demos:h.DE,components:h.wx,locales:u.k,loading:g,setLoading:a,hostname:void 0,themeConfig:{footer:'Copyright \xA9 2023 | Powered by <a href="https://d.umijs.org" target="_blank" rel="noreferrer">dumi</a>',prefersColor:{default:"light",switch:!0},nprogress:!0,name:"lh-ui-react",logo:"https://xh-bot.com/img/lh-ui-react-logo.png",nav:[{title:"\u6307\u5357",link:"/guide"},{title:"\u7EC4\u4EF6",link:"/components/hello"}],socialLinks:{github:"https://github.com/lh-js/lh-ui-react"}},_2_level_nav_available:!0},children:l})}},94739:function(A,i,t){t.r(i),t.d(i,{Hello:function(){return j},Switch:function(){return S}});var T=t(67294),o=t(85893),y=function(s){return(0,o.jsx)("h4",{children:s.title})},j=y,c=t(5574),d=t.n(c),S=function(n){var s=n.isChecked,h=s===void 0?!1:s,u=n.size,e=u===void 0?1:u,f=n.onText,r=f===void 0?"":f,v=n.offText,l=v===void 0?"":v,m=n.onChange,x=(0,T.useState)(h),g=d()(x,2),a=g[0],p=g[1],C=function(){m&&m(!a),p(!a)};return(0,o.jsxs)("div",{className:"switch",style:{"--width":"".concat(e*44,"px"),"--height":"".concat(e*22,"px"),"--circleWidth":"".concat(e*(22-4),"px"),"--circleRight":"".concat(2*e,"px"),"--translateX":a?0:"".concat(-22*e,"px"),"--background":a?"#1677ff":"#888888","--textPadding":"".concat(e*8,"px"),"--textSize":"".concat(e*12,"px"),"--onText":r,"--offText":l},onClick:C,children:[(0,o.jsx)("span",{className:"off-text",children:typeof l=="string"?l.slice(0,1):l}),(0,o.jsx)("div",{className:"switch-label",children:(0,o.jsx)("span",{className:"on-text",children:typeof r=="string"?r.slice(0,1):r})})]})}}}]);