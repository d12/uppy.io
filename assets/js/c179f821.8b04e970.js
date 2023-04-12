"use strict";(self.webpackChunkuppy_io=self.webpackChunkuppy_io||[]).push([[3699],{5103:(e,t,a)=>{a.d(t,{Z:()=>p});var n=a(7294),o=a(814),i=a(3612),s=a(6482);const{version:r}=s;function p(e){let{children:t,uppyCssName:a="uppy.min.css",uppyJsName:s="uppy.min.js"}=e,p=[];n.Children.toArray(t).forEach((e=>{p=[...p,...String(e).trim().split("\n").map((e=>e.trim()))]}));const l=p.map((e=>`  ${e}`)).join("\n"),d=`https://releases.transloadit.com/uppy/v${r}/${s}`,u=`\x3c!-- 1. Add CSS to \`<head>\` --\x3e\n<link href="https://releases.transloadit.com/uppy/v${r}/${a}" rel="stylesheet">\n\n\x3c!-- 2. Initialize --\x3e\n<div id="uppy"></div>\n\n<script type="module">\n${l.replace(/{{UPPY_JS_URL}}/g,d)}\n<\/script>\n`;return n.createElement(n.Fragment,null,n.createElement(i.Z,{type:"caution"},n.createElement("p",null,"The bundle consists of most Uppy plugins, so this method is not recommended for production, as your users will have to download all plugins when you are likely using only a few."),n.createElement("p",null,"It can be useful to speed up your development environment, so don't hesitate to use it to get you started.")),n.createElement(o.Z,{language:"html"},u))}},9827:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>m,contentTitle:()=>u,default:()=>g,frontMatter:()=>d,metadata:()=>c,toc:()=>h});var n=a(7462),o=a(7294),i=a(3905),s=(a(4866),a(5162),a(5103),a(9960));const r="section_kw8a",p="item_MAQH",l=e=>o.createElement("section",{className:r},e.items.map((e=>o.createElement(s.Z,{to:e.link},o.createElement("div",{className:p},o.createElement("h2",null,e.name),o.createElement("p",null,e.description)))))),d={sidebar_position:1},u="Quick start",c={unversionedId:"quick-start",id:"quick-start",title:"Quick start",description:"Uppy is a sleek, modular JavaScript file uploader that integrates seamlessly",source:"@site/docs/quick-start.mdx",sourceDirName:".",slug:"/quick-start",permalink:"/docs/quick-start",draft:!1,editUrl:"https://github.com/transloadit/uppy.io/tree/main/docs/quick-start.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",next:{title:"Choosing the uploader you need",permalink:"/docs/guides/choosing-uploader"}},m={},h=[],y={toc:h},k="wrapper";function g(e){let{components:t,...a}=e;return(0,i.kt)(k,(0,n.Z)({},y,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"quick-start"},"Quick start"),(0,i.kt)("p",null,"Uppy is a sleek, modular JavaScript file uploader that integrates seamlessly\nwith any application. It\u2019s fast, has a comprehensible API and lets you worry\nabout more important problems than building a file uploader."),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"You can take Uppy for a walk inside CodeSandbox with a\n",(0,i.kt)("a",{parentName:"p",href:"https://codesandbox.io/s/uppy-drag-drop-gyewzx?file=/src/index.js"},"minimal drag & drop"),"\nexperience or a\n",(0,i.kt)("a",{parentName:"p",href:"https://codesandbox.io/s/uppy-dashboard-xpxuhd"},"full featured dashboard"),".")),(0,i.kt)(l,{items:[{name:"I want a full featured, extendable UI",description:"Learn more about the Dashboard",link:"/docs/dashboard"},{name:"I want a minimal drag & drop UI",description:"We have a lightweight plugin for that",link:"/docs/drag-drop"},{name:"Which uploader do I need?",description:"Choosing the uploader you need",link:"/docs/guides/choosing-uploader"},{name:"I want to add files from remote sources",description:"Such as Google Drive, Dropbox, Instagram",link:"/docs/companion"},{name:"I\u2019d like a project example",description:"Try out one of our extensive example projects",link:"https://github.com/transloadit/uppy/tree/main/examples"},{name:"I have a question",description:"Our community forum is there to help",link:"https://community.transloadit.com/"}],mdxType:"QuickStartLinks"}))}g.isMDXComponent=!0}}]);