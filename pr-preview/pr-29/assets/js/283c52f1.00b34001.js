"use strict";(self.webpackChunkuppy_io=self.webpackChunkuppy_io||[]).push([[381],{5162:(e,n,t)=>{t.d(n,{Z:()=>i});var a=t(7294),o=t(6010);const r="tabItem_Ymn6";function i(e){let{children:n,hidden:t,className:i}=e;return a.createElement("div",{role:"tabpanel",className:(0,o.Z)(r,i),hidden:t},n)}},5488:(e,n,t)=>{t.d(n,{Z:()=>m});var a=t(7462),o=t(7294),r=t(6010),i=t(2389),l=t(7392),s=t(7094),p=t(2466);const u="tabList__CuJ",d="tabItem_LNqP";function c(e){var n;const{lazy:t,block:i,defaultValue:c,values:m,groupId:h,className:k}=e,f=o.Children.map(e.children,(e=>{if((0,o.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),y=m??f.map((e=>{let{props:{value:n,label:t,attributes:a}}=e;return{value:n,label:t,attributes:a}})),v=(0,l.l)(y,((e,n)=>e.value===n.value));if(v.length>0)throw new Error(`Docusaurus error: Duplicate values "${v.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const g=null===c?c:c??(null==(n=f.find((e=>e.props.default)))?void 0:n.props.value)??f[0].props.value;if(null!==g&&!y.some((e=>e.value===g)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${g}" but none of its children has the corresponding value. Available values are: ${y.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:b,setTabGroupChoices:x}=(0,s.U)(),[N,C]=(0,o.useState)(g),w=[],{blockElementScrollPositionUntilNextRender:T}=(0,p.o5)();if(null!=h){const e=b[h];null!=e&&e!==N&&y.some((n=>n.value===e))&&C(e)}const U=e=>{const n=e.currentTarget,t=w.indexOf(n),a=y[t].value;a!==N&&(T(n),C(a),null!=h&&x(h,String(a)))},A=e=>{var n;let t=null;switch(e.key){case"ArrowRight":{const n=w.indexOf(e.currentTarget)+1;t=w[n]??w[0];break}case"ArrowLeft":{const n=w.indexOf(e.currentTarget)-1;t=w[n]??w[w.length-1];break}}null==(n=t)||n.focus()};return o.createElement("div",{className:(0,r.Z)("tabs-container",u)},o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":i},k)},y.map((e=>{let{value:n,label:t,attributes:i}=e;return o.createElement("li",(0,a.Z)({role:"tab",tabIndex:N===n?0:-1,"aria-selected":N===n,key:n,ref:e=>w.push(e),onKeyDown:A,onFocus:U,onClick:U},i,{className:(0,r.Z)("tabs__item",d,null==i?void 0:i.className,{"tabs__item--active":N===n})}),t??n)}))),t?(0,o.cloneElement)(f.filter((e=>e.props.value===N))[0],{className:"margin-top--md"}):o.createElement("div",{className:"margin-top--md"},f.map(((e,n)=>(0,o.cloneElement)(e,{key:n,hidden:e.props.value!==N})))))}function m(e){const n=(0,i.Z)();return o.createElement(c,(0,a.Z)({key:String(n)},e))}},3068:(e,n,t)=>{t.d(n,{Z:()=>s});var a=t(7294),o=t(814),r=t(3612);const i=JSON.parse('{"name":"uppy-io","version":"0.0.0","private":true,"scripts":{"build":"docusaurus build","clear":"docusaurus clear","deploy":"docusaurus deploy","docusaurus":"docusaurus","eslint":"eslint . --cache ","lint":"run-s --continue-on-error eslint remark","prepare":"husky install","remark":"run-s --continue-on-error remark:md remark:mdx","remark:md":"remark docs -qf","remark:mdx":"remark docs -e mdx -u mdx -qf","serve":"docusaurus serve","dev":"docusaurus start","swizzle":"docusaurus swizzle","typecheck":"tsc","write-heading-ids":"docusaurus write-heading-ids","write-translations":"docusaurus write-translations"},"lint-staged":{"*.js":"eslint --fix --cache","*.{css,html,json,js,jsx,ts,tsx,yml}":["prettier --write"],"docs/*.md":["remark -qf --"],"docs/*.mdx":["remark -u mdx -qf --"]},"browserslist":{"production":[">0.5%","not dead","not op_mini all"],"development":["last 1 chrome version","last 1 firefox version","last 1 safari version"]},"dependencies":{"@docusaurus/core":"^2.0.1","@docusaurus/preset-classic":"^2.0.1","@mdx-js/react":"^1.6.22","clsx":"^1.1.1","prism-react-renderer":"^1.2.1","react":"^17.0.1","react-dom":"^17.0.1"},"devDependencies":{"@docusaurus/eslint-plugin":"^2.0.1","@docusaurus/module-type-aliases":"^2.0.1","@tsconfig/docusaurus":"^1.0.4","eslint":"^8.19.0","eslint-config-prettier":"^8.5.0","husky":"^8.0.1","lint-staged":"^13.0.3","mdast-comment-marker":"^2.1.0","npm-run-all":"^4.1.5","prettier":"2.7.1","remark-cli":"^11.0.0","remark-directive":"^2.0.1","remark-frontmatter":"^4.0.0","remark-gfm":"^3.0.1","remark-mdx":"^2.1.2","remark-preset-lint-consistent":"^5.1.1","remark-preset-lint-markdown-style-guide":"^5.1.2","remark-preset-lint-recommended":"^6.1.2","remark-preset-prettier":"^1.0.1","remark-retext":"^5.0.0","retext-english":"^4.0.0","retext-equality":"^6.2.0","retext-profanities":"^7.1.0","retext-quotes":"^5.0.0","retext-simplify":"^7.0.0","retext-syntax-mentions":"^3.1.0","typescript":"^4.6.2","unified":"^10.0.0","unified-message-control":"^4.0.0"},"packageManager":"yarn@3.2.3+sha224.953c8233f7a92884eee2de69a1b92d1f2ec1655e66d08071ba9a02fa"}'),{version:l}=i;function s(e){let{children:n,uppyCssName:t="uppy.min.css",uppyJsName:i="uppy.min.js"}=e,s=[];a.Children.toArray(n).forEach((e=>{s=[...s,...String(e).trim().split("\n").map((e=>e.trim()))]}));const p=s.map((e=>`  ${e}`)).join("\n"),u=`https://releases.transloadit.com/uppy/v${l}/${i}`,d=`\x3c!-- 1. Add CSS to \`<head>\` --\x3e\n<link href="https://releases.transloadit.com/uppy/v${l}/${t}" rel="stylesheet">\n\n\x3c!-- 2. Initialize --\x3e\n<div id="uppy"></div>\n\n<script type="module">\n${p.replace(/{{UPPY_JS_URL}}/g,u)}\n<\/script>\n`;return a.createElement(a.Fragment,null,a.createElement(r.Z,{type:"caution"},a.createElement("p",null,"The bundle consists of most Uppy plugins, so this method is not recommended for production, as your users will have to download all plugins when you are likely using only a few.")),a.createElement(o.Z,{language:"html"},d))}},473:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>p,default:()=>h,frontMatter:()=>s,metadata:()=>u,toc:()=>c});var a=t(7462),o=(t(7294),t(3905)),r=t(5488),i=t(5162),l=t(3068);const s={},p="Box",u={unversionedId:"sources/companion-plugins/box",id:"sources/companion-plugins/box",title:"Box",description:"The @uppy/box plugin lets users import files from their Box account.",source:"@site/docs/sources/companion-plugins/box.mdx",sourceDirName:"sources/companion-plugins",slug:"/sources/companion-plugins/box",permalink:"/uppy.io/pr-preview/pr-29/docs/sources/companion-plugins/box",draft:!1,editUrl:"https://github.com/transloadit/uppy.io/tree/main/docs/sources/companion-plugins/box.mdx",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Screen capture",permalink:"/uppy.io/pr-preview/pr-29/docs/sources/screen-capture"},next:{title:"Dropbox",permalink:"/uppy.io/pr-preview/pr-29/docs/sources/companion-plugins/dropbox"}},d={},c=[{value:"When should I use this?",id:"when-should-i-use-this",level:2},{value:"Use",id:"use",level:2},{value:"Use in Uppy",id:"use-in-uppy",level:3},{value:"Use in Companion",id:"use-in-companion",level:3},{value:"API",id:"api",level:2},{value:"Options",id:"options",level:3},{value:"<code>id</code>",id:"id",level:4},{value:"<code>title</code>",id:"title",level:4},{value:"<code>target</code>",id:"target",level:4},{value:"<code>companionUrl</code>",id:"companionurl",level:4},{value:"<code>companionHeaders</code>",id:"companionheaders",level:4},{value:"<code>companionAllowedHosts</code>",id:"companionallowedhosts",level:4},{value:"<code>companionCookiesRule</code>",id:"companioncookiesrule",level:4},{value:"<code>locale</code>",id:"locale",level:4}],m={toc:c};function h(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,a.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"box"},"Box"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"@uppy/box")," plugin lets users import files from their ",(0,o.kt)("a",{parentName:"p",href:"https://www.box.com/en-nl/home"},"Box")," account."),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("a",{parentName:"p",href:"/examples"},"Try out the live example")," or take it for a spin in ",(0,o.kt)("a",{parentName:"p",href:"https://codesandbox.io/s/uppy-dashboard-xpxuhd"},"CodeSandbox"),".")),(0,o.kt)("h2",{id:"when-should-i-use-this"},"When should I use this?"),(0,o.kt)("p",null,"When you want to let users import files from their ",(0,o.kt)("a",{parentName:"p",href:"https://www.box.com/en-nl/home"},"Box")," account."),(0,o.kt)("p",null,"A ",(0,o.kt)("a",{parentName:"p",href:"/docs/companion"},"Companion")," instance is required for the Box plugin to work.\nCompanion handles authentication with Box, downloads the files, and uploads them to the destination.\nThis saves the user bandwidth, especially helpful if they are on a mobile connection."),(0,o.kt)("p",null,"You can self-host Companion or get a hosted version with any ",(0,o.kt)("a",{parentName:"p",href:"https://transloadit.com/pricing/"},"Transloadit plan"),"."),(0,o.kt)(r.Z,{mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"npm",label:"NPM",default:!0,mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"npm install @uppy/box\n"))),(0,o.kt)(i.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"yarn add @uppy/box\n"))),(0,o.kt)(i.Z,{value:"cdn",label:"CDN",mdxType:"TabItem"},(0,o.kt)(l.Z,{mdxType:"UppyCdnExample"},'\n        import { Uppy, Box } from "{{UPPY_JS_URL}}"\n        const uppy = new Uppy()\n        uppy.use(Box, {\n          // Options\n        })\n      '))),(0,o.kt)("h2",{id:"use"},"Use"),(0,o.kt)("p",null,"Using Box requires setup in both Uppy and Companion."),(0,o.kt)("h3",{id:"use-in-uppy"},"Use in Uppy"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:"{12-19} showLineNumbers","{12-19}":!0,showLineNumbers:!0},"import Uppy from '@uppy/core'\nimport Dashboard from '@uppy/dashboard'\nimport Box from '@uppy/box'\n\nimport '@uppy/core/dist/style.min.css'\nimport '@uppy/dashboard/dist/style.min.css'\n\nnew Uppy\n  .use(Dashboard, { inline: true, target: 'body' })\n  // Example of setting all the options to their defaults.\n  // Not passing anything to `Box` is therefor the same as the example below.\n  .use(Box, {\n    id: 'Box',\n    title: 'Box',\n    target: null,\n    companionUrl: null,\n    companionHeaders: null,\n    companionAllowedHosts: null,\n  })\n")),(0,o.kt)("h3",{id:"use-in-companion"},"Use in Companion"),(0,o.kt)("p",null,"You can create a Box App on the ",(0,o.kt)("a",{parentName:"p",href:"https://app.box.com/developers/console"},"Box Developers site"),"."),(0,o.kt)("p",null,"Things to note:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Choose ",(0,o.kt)("inlineCode",{parentName:"li"},"Custom App")," and select the ",(0,o.kt)("inlineCode",{parentName:"li"},"Standard OAuth 2.0 (User Authentication)")," app type."),(0,o.kt)("li",{parentName:"ul"},"You must enable full write access, or you will get ",(0,o.kt)("a",{parentName:"li",href:"https://support.box.com/hc/en-us/community/posts/360049195613-403-error-while-file-download-API-Call"},"403 when downloading files"))),(0,o.kt)("p",null,"You\u2019ll be redirected to the app page. This page lists the client ID (app key) and client secret (app secret), which you should use to configure Companion."),(0,o.kt)("p",null,"The app page has a ",(0,o.kt)("inlineCode",{parentName:"p"},'"Redirect URIs"')," field. Here, add:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"https://$YOUR_COMPANION_HOST_NAME/box/redirect\n")),(0,o.kt)("p",null,"You can only use the integration with your own account initially.\nMake sure to apply for production status on the app page before you publish your app, or your users will not be able to sign in!"),(0,o.kt)("p",null,"Configure the Box key and secret. With the standalone Companion server, specify environment variables:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},'export COMPANION_BOX_KEY="Box API key"\nexport COMPANION_BOX_SECRET="Box API secret"\n')),(0,o.kt)("p",null,"When using the Companion Node.js API, configure these options:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"companion.app({\n  providerOptions: {\n    box: {\n      key: 'Box API key',\n      secret: 'Box API secret',\n    },\n  },\n})\n")),(0,o.kt)("h2",{id:"api"},"API"),(0,o.kt)("h3",{id:"options"},"Options"),(0,o.kt)("h4",{id:"id"},(0,o.kt)("inlineCode",{parentName:"h4"},"id")),(0,o.kt)("p",null,"A unique identifier for this plugin (",(0,o.kt)("inlineCode",{parentName:"p"},"String"),", default: ",(0,o.kt)("inlineCode",{parentName:"p"},"'Box'"),")."),(0,o.kt)("h4",{id:"title"},(0,o.kt)("inlineCode",{parentName:"h4"},"title")),(0,o.kt)("p",null,"Title / name shown in the UI, such as Dashboard tabs (",(0,o.kt)("inlineCode",{parentName:"p"},"String"),", default: ",(0,o.kt)("inlineCode",{parentName:"p"},"'Box'"),")."),(0,o.kt)("h4",{id:"target"},(0,o.kt)("inlineCode",{parentName:"h4"},"target")),(0,o.kt)("p",null,"DOM element, CSS selector, or plugin to place the drag and drop area into (",(0,o.kt)("inlineCode",{parentName:"p"},"String")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"Element"),", default: ",(0,o.kt)("inlineCode",{parentName:"p"},"null"),")."),(0,o.kt)("h4",{id:"companionurl"},(0,o.kt)("inlineCode",{parentName:"h4"},"companionUrl")),(0,o.kt)("p",null,"URL to a ",(0,o.kt)("a",{parentName:"p",href:"/docs/companion"},"Companion")," instance (",(0,o.kt)("inlineCode",{parentName:"p"},"String"),", default: ",(0,o.kt)("inlineCode",{parentName:"p"},"null"),")."),(0,o.kt)("h4",{id:"companionheaders"},(0,o.kt)("inlineCode",{parentName:"h4"},"companionHeaders")),(0,o.kt)("p",null,"Custom headers that should be sent along to ",(0,o.kt)("a",{parentName:"p",href:"/docs/companion"},"Companion")," on every request (",(0,o.kt)("inlineCode",{parentName:"p"},"Object"),", default: ",(0,o.kt)("inlineCode",{parentName:"p"},"{}"),")."),(0,o.kt)("h4",{id:"companionallowedhosts"},(0,o.kt)("inlineCode",{parentName:"h4"},"companionAllowedHosts")),(0,o.kt)("p",null,"The valid and authorised URL(s) from which OAuth responses should be accepted (",(0,o.kt)("inlineCode",{parentName:"p"},"String")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"Regex")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"Array"),", default: ",(0,o.kt)("inlineCode",{parentName:"p"},"companionUrl"),")."),(0,o.kt)("p",null,"This value can be a ",(0,o.kt)("inlineCode",{parentName:"p"},"String"),", a ",(0,o.kt)("inlineCode",{parentName:"p"},"Regex")," pattern, or an ",(0,o.kt)("inlineCode",{parentName:"p"},"Array")," of both.\nThis is useful when you have your ",(0,o.kt)("a",{parentName:"p",href:"/docs/companion"},"Companion")," running on several hosts. Otherwise, the default value should do fine."),(0,o.kt)("h4",{id:"companioncookiesrule"},(0,o.kt)("inlineCode",{parentName:"h4"},"companionCookiesRule")),(0,o.kt)("p",null,"This option correlates to the ",(0,o.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/Request/credentials"},"RequestCredentials value")," (",(0,o.kt)("inlineCode",{parentName:"p"},"String"),", default: ",(0,o.kt)("inlineCode",{parentName:"p"},"'same-origin'"),")."),(0,o.kt)("p",null,"This tells the plugin whether to send cookies to ",(0,o.kt)("a",{parentName:"p",href:"/docs/companion"},"Companion"),"."),(0,o.kt)("h4",{id:"locale"},(0,o.kt)("inlineCode",{parentName:"h4"},"locale")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"export default {\n  strings: {\n    pluginNameBox: 'Box',\n  },\n}\n")))}h.isMDXComponent=!0}}]);