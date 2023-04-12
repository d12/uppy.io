"use strict";(self.webpackChunkuppy_io=self.webpackChunkuppy_io||[]).push([[2731],{5103:(e,t,n)=>{n.d(t,{Z:()=>p});var a=n(7294),i=n(814),o=n(3612),r=n(6482);const{version:l}=r;function p(e){let{children:t,uppyCssName:n="uppy.min.css",uppyJsName:r="uppy.min.js"}=e,p=[];a.Children.toArray(t).forEach((e=>{p=[...p,...String(e).trim().split("\n").map((e=>e.trim()))]}));const d=p.map((e=>`  ${e}`)).join("\n"),s=`https://releases.transloadit.com/uppy/v${l}/${r}`,u=`\x3c!-- 1. Add CSS to \`<head>\` --\x3e\n<link href="https://releases.transloadit.com/uppy/v${l}/${n}" rel="stylesheet">\n\n\x3c!-- 2. Initialize --\x3e\n<div id="uppy"></div>\n\n<script type="module">\n${d.replace(/{{UPPY_JS_URL}}/g,s)}\n<\/script>\n`;return a.createElement(a.Fragment,null,a.createElement(o.Z,{type:"caution"},a.createElement("p",null,"The bundle consists of most Uppy plugins, so this method is not recommended for production, as your users will have to download all plugins when you are likely using only a few."),a.createElement("p",null,"It can be useful to speed up your development environment, so don't hesitate to use it to get you started.")),a.createElement(i.Z,{language:"html"},u))}},8665:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>d,default:()=>g,frontMatter:()=>p,metadata:()=>s,toc:()=>m});var a=n(7462),i=(n(7294),n(3905)),o=n(4866),r=n(5162),l=n(5103);const p={sidebar_position:1,slug:"/image-editor"},d="Image editor",s={unversionedId:"user-interfaces/elements/image-editor",id:"user-interfaces/elements/image-editor",title:"Image editor",description:"Image editor. Designed to be used with the Dashboard UI.",source:"@site/docs/user-interfaces/elements/image-editor.mdx",sourceDirName:"user-interfaces/elements",slug:"/image-editor",permalink:"/docs/image-editor",draft:!1,editUrl:"https://github.com/transloadit/uppy.io/tree/main/docs/user-interfaces/elements/image-editor.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,slug:"/image-editor"},sidebar:"tutorialSidebar",previous:{title:"Drag & Drop",permalink:"/docs/drag-drop"},next:{title:"Drop target",permalink:"/docs/drop-target"}},u={},m=[{value:"When should I use this?",id:"when-should-i-use-this",level:2},{value:"Install",id:"install",level:2},{value:"Use",id:"use",level:2},{value:"API",id:"api",level:2},{value:"Options",id:"options",level:3},{value:"<code>id</code>",id:"id",level:4},{value:"<code>quality</code>",id:"quality",level:4},{value:"<code>cropperOptions</code>",id:"cropperoptions",level:4},{value:"<code>actions</code>",id:"actions",level:4},{value:"<code>locale: {}</code>",id:"locale-",level:4},{value:"Events",id:"events",level:3},{value:"<code>file-editor:start</code>",id:"file-editorstart",level:4},{value:"<code>file-editor:complete</code>",id:"file-editorcomplete",level:4},{value:"<code>file-editor:cancel</code>",id:"file-editorcancel",level:4}],c={toc:m},h="wrapper";function g(e){let{components:t,...n}=e;return(0,i.kt)(h,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"image-editor"},"Image editor"),(0,i.kt)("p",null,"Image editor. Designed to be used with the Dashboard UI."),(0,i.kt)("div",{style:{maxWidth:500}},(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/1199054/87208710-654db400-c307-11ea-9471-6e3c6582d2a5.png",alt:"Screenshot of the Image Editor plugin UI in Dashboard"}))),(0,i.kt)("h2",{id:"when-should-i-use-this"},"When should I use this?"),(0,i.kt)("p",null,"When you want to allow users to crop, rotate, zoom and flip images that are\nadded to Uppy."),(0,i.kt)("h2",{id:"install"},"Install"),(0,i.kt)(o.Z,{mdxType:"Tabs"},(0,i.kt)(r.Z,{value:"npm",label:"NPM",default:!0,mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"npm install @uppy/core @uppy/dashboard @uppy/image-editor\n"))),(0,i.kt)(r.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"yarn add @uppy/core @uppy/dashboard @uppy/image-editor\n"))),(0,i.kt)(r.Z,{value:"cdn",label:"CDN",mdxType:"TabItem"},(0,i.kt)(l.Z,{mdxType:"UppyCdnExample"},"\n        import { Uppy, Dashboard, ImageEditor } from \"{{UPPY_JS_URL}}\"\n        const uppy = new Uppy()\n        uppy.use(Dashboard, { target: '#uppy', inline: true })\n        uppy.use(ImageEditor, { target: Uppy.Dashboard })\n      "))),(0,i.kt)("h2",{id:"use"},"Use"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:"{3,7,11} showLineNumbers","{3,7,11}":!0,showLineNumbers:!0},"import Uppy from '@uppy/core';\nimport Dashboard from '@uppy/dashboard';\nimport ImageEditor from '@uppy/image-editor';\n\nimport '@uppy/core/dist/style.min.css';\nimport '@uppy/dashboard/dist/style.min.css';\nimport '@uppy/image-editor/dist/style.min.css';\n\nnew Uppy()\n    .use(Dashboard, { inline: true, target: '#dashboard' })\n    .use(ImageEditor, { target: Dashboard });\n")),(0,i.kt)("h2",{id:"api"},"API"),(0,i.kt)("h3",{id:"options"},"Options"),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"If you automatically want to open the image editor when an image is added, see\nthe ",(0,i.kt)("a",{parentName:"p",href:"/docs/dashboard#autoOpenFileEditor"},(0,i.kt)("inlineCode",{parentName:"a"},"autoOpenFileEditor"))," Dashboard option.")),(0,i.kt)("h4",{id:"id"},(0,i.kt)("inlineCode",{parentName:"h4"},"id")),(0,i.kt)("p",null,"A unique identifier for this plugin (",(0,i.kt)("inlineCode",{parentName:"p"},"string"),", default: ",(0,i.kt)("inlineCode",{parentName:"p"},"'ImageEditor'"),")."),(0,i.kt)("h4",{id:"quality"},(0,i.kt)("inlineCode",{parentName:"h4"},"quality")),(0,i.kt)("p",null,"Quality Of the resulting blob that will be saved in Uppy after editing/cropping\n(",(0,i.kt)("inlineCode",{parentName:"p"},"number"),", default: ",(0,i.kt)("inlineCode",{parentName:"p"},"0.8"),")."),(0,i.kt)("h4",{id:"cropperoptions"},(0,i.kt)("inlineCode",{parentName:"h4"},"cropperOptions")),(0,i.kt)("p",null,"Image Editor is using the excellent\n",(0,i.kt)("a",{parentName:"p",href:"https://fengyuanchen.github.io/cropperjs/"},"Cropper.js"),". ",(0,i.kt)("inlineCode",{parentName:"p"},"cropperOptions")," will\nbe directly passed to ",(0,i.kt)("inlineCode",{parentName:"p"},"Cropper")," and therefor can expect the same values as\ndocumented in their\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/fengyuanchen/cropperjs/blob/HEAD/README.md#options"},"README"),",\nwith the addition of ",(0,i.kt)("inlineCode",{parentName:"p"},"croppedCanvasOptions"),", which will be passed to\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/fengyuanchen/cropperjs/blob/HEAD/README.md#getcroppedcanvasoptions"},(0,i.kt)("inlineCode",{parentName:"a"},"getCroppedCanvas")),"."),(0,i.kt)("h4",{id:"actions"},(0,i.kt)("inlineCode",{parentName:"h4"},"actions")),(0,i.kt)("p",null,"Shown action buttons (",(0,i.kt)("inlineCode",{parentName:"p"},"Object")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"boolean"),")."),(0,i.kt)("p",null,"If you you\u2019d like to hide all actions, pass ",(0,i.kt)("inlineCode",{parentName:"p"},"false")," to it. By default all the\nactions are visible. Or enable/disable them individually:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"{\n  revert: true,\n  rotate: true,\n  granularRotate: true,\n  flip: true,\n  zoomIn: true,\n  zoomOut: true,\n  cropSquare: true,\n  cropWidescreen: true,\n  cropWidescreenVertical: true,\n}\n")),(0,i.kt)("h4",{id:"locale-"},(0,i.kt)("inlineCode",{parentName:"h4"},"locale: {}")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"export default {\n    strings: {\n        revert: 'Revert',\n        rotate: 'Rotate',\n        zoomIn: 'Zoom in',\n        zoomOut: 'Zoom out',\n        flipHorizontal: 'Flip horizontal',\n        aspectRatioSquare: 'Crop square',\n        aspectRatioLandscape: 'Crop landscape (16:9)',\n        aspectRatioPortrait: 'Crop portrait (9:16)',\n    },\n};\n")),(0,i.kt)("h3",{id:"events"},"Events"),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"You can use ",(0,i.kt)("a",{parentName:"p",href:"/docs/uppy#onevent-action"},(0,i.kt)("inlineCode",{parentName:"a"},"on"))," and\n",(0,i.kt)("a",{parentName:"p",href:"/docs/uppy#onceevent-action"},(0,i.kt)("inlineCode",{parentName:"a"},"once"))," to listen to these events.")),(0,i.kt)("h4",{id:"file-editorstart"},(0,i.kt)("inlineCode",{parentName:"h4"},"file-editor:start")),(0,i.kt)("p",null,"Emitted when ",(0,i.kt)("inlineCode",{parentName:"p"},"selectFile(file)")," is called."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"uppy.on('file-editor:start', (file) => {\n    console.log(file);\n});\n")),(0,i.kt)("h4",{id:"file-editorcomplete"},(0,i.kt)("inlineCode",{parentName:"h4"},"file-editor:complete")),(0,i.kt)("p",null,"Emitted after ",(0,i.kt)("inlineCode",{parentName:"p"},"save(blob)")," is called."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"uppy.on('file-editor:complete', (updatedFile) => {\n    console.log(updatedFile);\n});\n")),(0,i.kt)("h4",{id:"file-editorcancel"},(0,i.kt)("inlineCode",{parentName:"h4"},"file-editor:cancel")),(0,i.kt)("p",null,"Emitted when ",(0,i.kt)("inlineCode",{parentName:"p"},"uninstall")," is called or when the current image editing changes are\ndiscarded."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"uppy.on('file-editor:cancel', (file) => {\n    console.log(file);\n});\n")))}g.isMDXComponent=!0}}]);