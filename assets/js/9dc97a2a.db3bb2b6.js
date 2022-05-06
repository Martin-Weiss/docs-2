"use strict";(self.webpackChunkkubewarden_docusaurus=self.webpackChunkkubewarden_docusaurus||[]).push([[7219],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return g}});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(r),g=i,f=d["".concat(p,".").concat(g)]||d[g]||s[g]||o;return r?n.createElement(f,a(a({ref:t},u),{},{components:r})):n.createElement(f,a({ref:t},u))}));function g(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var c=2;c<o;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},6665:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return p},default:function(){return g},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return s}});var n=r(3117),i=r(102),o=(r(7294),r(3905)),a=["components"],l={sidebar_label:"Introduction",title:""},p="Gatekeeper",c={unversionedId:"writing-policies/rego/gatekeeper/intro",id:"writing-policies/rego/gatekeeper/intro",title:"",description:"Note well",source:"@site/docs/writing-policies/rego/gatekeeper/01-intro.md",sourceDirName:"writing-policies/rego/gatekeeper",slug:"/writing-policies/rego/gatekeeper/intro",permalink:"/writing-policies/rego/gatekeeper/intro",editUrl:"https://github.com/kubewarden/docs/edit/main/docs/writing-policies/rego/gatekeeper/01-intro.md",tags:[],version:"current",lastUpdatedAt:1651837203,formattedLastUpdatedAt:"5/6/2022",sidebarPosition:1,frontMatter:{sidebar_label:"Introduction",title:""},sidebar:"docs",previous:{title:"Distribute",permalink:"/writing-policies/rego/open-policy-agent/distribute"},next:{title:"Create a New Policy",permalink:"/writing-policies/rego/gatekeeper/create-policy"}},u={},s=[{value:"Compatibility with existing policies",id:"compatibility-with-existing-policies",level:2}],d={toc:s};function g(e){var t=e.components,r=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"gatekeeper"},"Gatekeeper"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"Note well:")," Gatekeeper support has been introduced starting from these releases:"),(0,o.kt)("ul",{parentName:"blockquote"},(0,o.kt)("li",{parentName:"ul"},"kwctl: v0.2.0"),(0,o.kt)("li",{parentName:"ul"},"policy-server: v0.2.0"))),(0,o.kt)("p",null,"Gatekeeper is a project targeting Kubernetes, and as such, has some\nfeatures that are thought out of the box for being integrated with it."),(0,o.kt)("h2",{id:"compatibility-with-existing-policies"},"Compatibility with existing policies"),(0,o.kt)("p",null,"All the existing Gatekeeper policies should be compatible with\nKubewarden as we will explain during this chapter."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"Note"),": if this is not the case, please report it to us and we\nwill do our best to make sure your policy runs flawlessly with\nKubewarden.")),(0,o.kt)("p",null,"Policies have to be compiled with the ",(0,o.kt)("inlineCode",{parentName:"p"},"opa")," CLI to the ",(0,o.kt)("inlineCode",{parentName:"p"},"wasm")," target."),(0,o.kt)("p",null,"In terms of policy execution, you can read more about the ",(0,o.kt)("a",{parentName:"p",href:"/writing-policies/rego/builtin-support"},"Open Policy\nAgent built-in support that is implemented in\nKubewarden"),"."))}g.isMDXComponent=!0}}]);