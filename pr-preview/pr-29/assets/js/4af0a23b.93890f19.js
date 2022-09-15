"use strict";(self.webpackChunkuppy_io=self.webpackChunkuppy_io||[]).push([[2731],{5162:(e,t,a)=>{a.d(t,{Z:()=>o});var n=a(7294),r=a(6010);const i="tabItem_Ymn6";function o(e){let{children:t,hidden:a,className:o}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(i,o),hidden:a},t)}},5488:(e,t,a)=>{a.d(t,{Z:()=>m});var n=a(7462),r=a(7294),i=a(6010),o=a(2389),l=a(7392),s=a(7094),p=a(2466);const d="tabList__CuJ",u="tabItem_LNqP";function c(e){var t;const{lazy:a,block:o,defaultValue:c,values:m,groupId:h,className:k}=e,f=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),g=m??f.map((e=>{let{props:{value:t,label:a,attributes:n}}=e;return{value:t,label:a,attributes:n}})),v=(0,l.l)(g,((e,t)=>e.value===t.value));if(v.length>0)throw new Error(`Docusaurus error: Duplicate values "${v.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const y=null===c?c:c??(null==(t=f.find((e=>e.props.default)))?void 0:t.props.value)??f[0].props.value;if(null!==y&&!g.some((e=>e.value===y)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${y}" but none of its children has the corresponding value. Available values are: ${g.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:b,setTabGroupChoices:N}=(0,s.U)(),[w,C]=(0,r.useState)(y),x=[],{blockElementScrollPositionUntilNextRender:E}=(0,p.o5)();if(null!=h){const e=b[h];null!=e&&e!==w&&g.some((t=>t.value===e))&&C(e)}const I=e=>{const t=e.currentTarget,a=x.indexOf(t),n=g[a].value;n!==w&&(E(t),C(n),null!=h&&N(h,String(n)))},D=e=>{var t;let a=null;switch(e.key){case"ArrowRight":{const t=x.indexOf(e.currentTarget)+1;a=x[t]??x[0];break}case"ArrowLeft":{const t=x.indexOf(e.currentTarget)-1;a=x[t]??x[x.length-1];break}}null==(t=a)||t.focus()};return r.createElement("div",{className:(0,i.Z)("tabs-container",d)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":o},k)},g.map((e=>{let{value:t,label:a,attributes:o}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:w===t?0:-1,"aria-selected":w===t,key:t,ref:e=>x.push(e),onKeyDown:D,onFocus:I,onClick:I},o,{className:(0,i.Z)("tabs__item",u,null==o?void 0:o.className,{"tabs__item--active":w===t})}),a??t)}))),a?(0,r.cloneElement)(f.filter((e=>e.props.value===w))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},f.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==w})))))}function m(e){const t=(0,o.Z)();return r.createElement(c,(0,n.Z)({key:String(t)},e))}},3068:(e,t,a)=>{a.d(t,{Z:()=>s});var n=a(7294),r=a(814),i=a(3612);const o=JSON.parse('{"name":"uppy-io","version":"0.0.0","private":true,"scripts":{"build":"docusaurus build","clear":"docusaurus clear","deploy":"docusaurus deploy","docusaurus":"docusaurus","eslint":"eslint . --cache ","lint":"run-s --continue-on-error eslint remark","prepare":"husky install","remark":"run-s --continue-on-error remark:md remark:mdx","remark:md":"remark docs -qf","remark:mdx":"remark docs -e mdx -u mdx -qf","serve":"docusaurus serve","dev":"docusaurus start","swizzle":"docusaurus swizzle","typecheck":"tsc","write-heading-ids":"docusaurus write-heading-ids","write-translations":"docusaurus write-translations"},"lint-staged":{"*.js":"eslint --fix --cache","*.{css,html,json,js,jsx,ts,tsx,yml}":["prettier --write"],"docs/*.md":["remark -qf --"],"docs/*.mdx":["remark -u mdx -qf --"]},"browserslist":{"production":[">0.5%","not dead","not op_mini all"],"development":["last 1 chrome version","last 1 firefox version","last 1 safari version"]},"dependencies":{"@docusaurus/core":"^2.0.1","@docusaurus/preset-classic":"^2.0.1","@mdx-js/react":"^1.6.22","clsx":"^1.1.1","prism-react-renderer":"^1.2.1","react":"^17.0.1","react-dom":"^17.0.1"},"devDependencies":{"@docusaurus/eslint-plugin":"^2.0.1","@docusaurus/module-type-aliases":"^2.0.1","@tsconfig/docusaurus":"^1.0.4","eslint":"^8.19.0","eslint-config-prettier":"^8.5.0","husky":"^8.0.1","lint-staged":"^13.0.3","mdast-comment-marker":"^2.1.0","npm-run-all":"^4.1.5","prettier":"2.7.1","remark-cli":"^11.0.0","remark-directive":"^2.0.1","remark-frontmatter":"^4.0.0","remark-gfm":"^3.0.1","remark-mdx":"^2.1.2","remark-preset-lint-consistent":"^5.1.1","remark-preset-lint-markdown-style-guide":"^5.1.2","remark-preset-lint-recommended":"^6.1.2","remark-preset-prettier":"^1.0.1","remark-retext":"^5.0.0","retext-english":"^4.0.0","retext-equality":"^6.2.0","retext-profanities":"^7.1.0","retext-quotes":"^5.0.0","retext-simplify":"^7.0.0","retext-syntax-mentions":"^3.1.0","typescript":"^4.6.2","unified":"^10.0.0","unified-message-control":"^4.0.0"},"packageManager":"yarn@3.2.3+sha224.953c8233f7a92884eee2de69a1b92d1f2ec1655e66d08071ba9a02fa"}'),{version:l}=o;function s(e){let{children:t,uppyCssName:a="uppy.min.css",uppyJsName:o="uppy.min.js"}=e,s=[];n.Children.toArray(t).forEach((e=>{s=[...s,...String(e).trim().split("\n").map((e=>e.trim()))]}));const p=s.map((e=>`  ${e}`)).join("\n"),d=`https://releases.transloadit.com/uppy/v${l}/${o}`,u=`\x3c!-- 1. Add CSS to \`<head>\` --\x3e\n<link href="https://releases.transloadit.com/uppy/v${l}/${a}" rel="stylesheet">\n\n\x3c!-- 2. Initialize --\x3e\n<div id="uppy"></div>\n\n<script type="module">\n${p.replace(/{{UPPY_JS_URL}}/g,d)}\n<\/script>\n`;return n.createElement(n.Fragment,null,n.createElement(i.Z,{type:"caution"},n.createElement("p",null,"The bundle consists of most Uppy plugins, so this method is not recommended for production, as your users will have to download all plugins when you are likely using only a few.")),n.createElement(r.Z,{language:"html"},u))}},8665:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>p,default:()=>h,frontMatter:()=>s,metadata:()=>d,toc:()=>c});var n=a(7462),r=(a(7294),a(3905)),i=a(5488),o=a(5162),l=a(3068);const s={sidebar_position:1},p="Image editor",d={unversionedId:"user-interfaces/elements/image-editor",id:"user-interfaces/elements/image-editor",title:"Image editor",description:"Image editor. Designed to be used with the Dashboard UI.",source:"@site/docs/user-interfaces/elements/image-editor.mdx",sourceDirName:"user-interfaces/elements",slug:"/user-interfaces/elements/image-editor",permalink:"/uppy.io/pr-preview/pr-29/docs/user-interfaces/elements/image-editor",draft:!1,editUrl:"https://github.com/transloadit/uppy.io/tree/main/docs/user-interfaces/elements/image-editor.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Drag & Drop",permalink:"/uppy.io/pr-preview/pr-29/docs/user-interfaces/drag-drop"},next:{title:"Thumbnail generator",permalink:"/uppy.io/pr-preview/pr-29/docs/user-interfaces/elements/thumbnail-generator"}},u={},c=[{value:"When should I use this?",id:"when-should-i-use-this",level:2},{value:"Install",id:"install",level:2},{value:"API",id:"api",level:2},{value:"Options",id:"options",level:3},{value:"<code>id</code>",id:"id",level:4},{value:"<code>quality</code>",id:"quality",level:4},{value:"<code>cropperOptions</code>",id:"cropperoptions",level:4},{value:"<code>actions</code>",id:"actions",level:4},{value:"<code>locale: {}</code>",id:"locale-",level:4},{value:"Events",id:"events",level:3},{value:"<code>file-editor:start</code>",id:"file-editorstart",level:4},{value:"<code>file-editor:complete</code>",id:"file-editorcomplete",level:4},{value:"<code>file-editor:cancel</code>",id:"file-editorcancel",level:4}],m={toc:c};function h(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"image-editor"},"Image editor"),(0,r.kt)("p",null,"Image editor. Designed to be used with the Dashboard UI."),(0,r.kt)("div",{style:{maxWidth:500}},(0,r.kt)("p",null,"  ",(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/1199054/87208710-654db400-c307-11ea-9471-6e3c6582d2a5.png",alt:"Screenshot of the Image Editor plugin UI in Dashboard"}))),(0,r.kt)("h2",{id:"when-should-i-use-this"},"When should I use this?"),(0,r.kt)("p",null,"When you want to allow users to crop, rotate, zoom and flip images that are added to Uppy."),(0,r.kt)("h2",{id:"install"},"Install"),(0,r.kt)(i.Z,{mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"npm",label:"NPM",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"npm install @uppy/core @uppy/dashboard @uppy/image-editor\n"))),(0,r.kt)(o.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"yarn add @uppy/core @uppy/dashboard @uppy/image-editor\n"))),(0,r.kt)(o.Z,{value:"cdn",label:"CDN",mdxType:"TabItem"},(0,r.kt)(l.Z,{mdxType:"UppyCdnExample"},"\n        import { Uppy, Dashboard, ImageEditor } from \"{{UPPY_JS_URL}}\"\n        const uppy = new Uppy()\n        uppy.use(Dashboard, { target: '#uppy', inline: true })\n        uppy.use(ImageEditor, { target: Uppy.Dashboard })\n      "))),(0,r.kt)("h2",{id:"api"},"API"),(0,r.kt)("h3",{id:"options"},"Options"),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"If you automatically want to open the image editor when an image is added,\nsee the ",(0,r.kt)("a",{parentName:"p",href:"/docs/user-interfaces/dashboard#autoOpenFileEditor"},(0,r.kt)("inlineCode",{parentName:"a"},"autoOpenFileEditor"))," Dashboard option.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"import Uppy from '@uppy/core'\nimport Dashboard from '@uppy/dashboard'\nimport ImageEditor from '@uppy/image-editor'\n\nimport '@uppy/core/dist/style.min.css'\nimport '@uppy/dashboard/dist/style.min.css'\nimport '@uppy/image-editor/dist/style.css'\n\nnew Uppy()\n  .use(Dashboard, { inline: true })\n  // Example of setting all the options to their defaults.\n  // Not passing anything to `ImageEditor` is therefor the same as the example below.\n  .use(ImageEditor, {\n    id: 'ImageEditor',\n    target: null,\n    quality: 0.8,\n    cropperOptions: {\n      viewMode: 1,\n      background: false,\n      autoCropArea: 1,\n      responsive: true,\n      croppedCanvasOptions: {},\n    },\n    actions: {\n      revert: true,\n      rotate: true,\n      granularRotate: true,\n      flip: true,\n      zoomIn: true,\n      zoomOut: true,\n      cropSquare: true,\n      cropWidescreen: true,\n      cropWidescreenVertical: true,\n    },\n  })\n")),(0,r.kt)("h4",{id:"id"},(0,r.kt)("inlineCode",{parentName:"h4"},"id")),(0,r.kt)("p",null,"A unique identifier for this plugin (",(0,r.kt)("inlineCode",{parentName:"p"},"String"),", default: ",(0,r.kt)("inlineCode",{parentName:"p"},"'ImageEditor'"),")."),(0,r.kt)("h4",{id:"quality"},(0,r.kt)("inlineCode",{parentName:"h4"},"quality")),(0,r.kt)("p",null,"Quality Of the resulting blob that will be saved in Uppy after editing/cropping (",(0,r.kt)("inlineCode",{parentName:"p"},"Number"),", default: ",(0,r.kt)("inlineCode",{parentName:"p"},"0.8"),")."),(0,r.kt)("h4",{id:"cropperoptions"},(0,r.kt)("inlineCode",{parentName:"h4"},"cropperOptions")),(0,r.kt)("p",null,"Image Editor is using the excellent ",(0,r.kt)("a",{parentName:"p",href:"https://fengyuanchen.github.io/cropperjs/"},"Cropper.js"),".\n",(0,r.kt)("inlineCode",{parentName:"p"},"cropperOptions")," will be directly passed to ",(0,r.kt)("inlineCode",{parentName:"p"},"Cropper")," and therefor can expect the same values as documented\nin their ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/fengyuanchen/cropperjs/blob/HEAD/README.md#options"},"README"),",\nwith the addition of ",(0,r.kt)("inlineCode",{parentName:"p"},"croppedCanvasOptions"),", which will be passed to ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/fengyuanchen/cropperjs/blob/HEAD/README.md#getcroppedcanvasoptions"},(0,r.kt)("inlineCode",{parentName:"a"},"getCroppedCanvas")),"."),(0,r.kt)("h4",{id:"actions"},(0,r.kt)("inlineCode",{parentName:"h4"},"actions")),(0,r.kt)("p",null,"Shown action buttons (",(0,r.kt)("inlineCode",{parentName:"p"},"Object")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"Boolean"),")."),(0,r.kt)("p",null,"If you you\u2019d like to hide all actions, pass ",(0,r.kt)("inlineCode",{parentName:"p"},"false")," to it. By default all the actions are visible.\nOr enable/disable them individually:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"{\n  revert: true,\n  rotate: true,\n  granularRotate: true,\n  flip: true,\n  zoomIn: true,\n  zoomOut: true,\n  cropSquare: true,\n  cropWidescreen: true,\n  cropWidescreenVertical: true,\n}\n")),(0,r.kt)("h4",{id:"locale-"},(0,r.kt)("inlineCode",{parentName:"h4"},"locale: {}")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"export default {\n  strings: {\n    revert: 'Revert',\n    rotate: 'Rotate',\n    zoomIn: 'Zoom in',\n    zoomOut: 'Zoom out',\n    flipHorizontal: 'Flip horizontal',\n    aspectRatioSquare: 'Crop square',\n    aspectRatioLandscape: 'Crop landscape (16:9)',\n    aspectRatioPortrait: 'Crop portrait (9:16)',\n  },\n}\n")),(0,r.kt)("h3",{id:"events"},"Events"),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"You can use ",(0,r.kt)("a",{parentName:"p",href:"/docs/uppy-core#onevent-action"},(0,r.kt)("inlineCode",{parentName:"a"},"on"))," and ",(0,r.kt)("a",{parentName:"p",href:"/docs/uppy-core#onceevent-action"},(0,r.kt)("inlineCode",{parentName:"a"},"once"))," to listen to these events.")),(0,r.kt)("h4",{id:"file-editorstart"},(0,r.kt)("inlineCode",{parentName:"h4"},"file-editor:start")),(0,r.kt)("p",null,"Emitted when ",(0,r.kt)("inlineCode",{parentName:"p"},"selectFile(file)")," is called."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"uppy.on('file-editor:start', (file) => {\n  console.log(file)\n})\n")),(0,r.kt)("h4",{id:"file-editorcomplete"},(0,r.kt)("inlineCode",{parentName:"h4"},"file-editor:complete")),(0,r.kt)("p",null,"Emitted after ",(0,r.kt)("inlineCode",{parentName:"p"},"save(blob)")," is called."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"uppy.on('file-editor:complete', (updatedFile) => {\n  console.log(updatedFile)\n})\n")),(0,r.kt)("h4",{id:"file-editorcancel"},(0,r.kt)("inlineCode",{parentName:"h4"},"file-editor:cancel")),(0,r.kt)("p",null,"Emitted when ",(0,r.kt)("inlineCode",{parentName:"p"},"uninstall")," is called or when the current image editing changes are discarded."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"uppy.on('file-editor:cancel', (file) => {\n  console.log(file)\n})\n")))}h.isMDXComponent=!0}}]);