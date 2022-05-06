"use strict";(self.webpackChunkkubewarden_docusaurus=self.webpackChunkkubewarden_docusaurus||[]).push([[9619],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),d=l(n),m=o,g=d["".concat(c,".").concat(m)]||d[m]||s[m]||i;return n?r.createElement(g,a(a({ref:t},p),{},{components:n})):r.createElement(g,a({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var u={};for(var c in t)hasOwnProperty.call(t,c)&&(u[c]=t[c]);u.originalType=e,u.mdxType="string"==typeof e?e:o,a[1]=u;for(var l=2;l<i;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6004:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return u},metadata:function(){return l},toc:function(){return s}});var r=n(3117),o=n(102),i=(n(7294),n(3905)),a=["components"],u={},c="Contribute to Kubewarden docs",l={unversionedId:"contributing-guide/contributing",id:"contributing-guide/contributing",title:"Contribute to Kubewarden docs",description:"Kubewarden welcomes suggestions for improvement from all contributors, new and experienced!",source:"@site/docs/contributing-guide/contributing.md",sourceDirName:"contributing-guide",slug:"/contributing-guide/contributing",permalink:"/contributing-guide/contributing",editUrl:"https://github.com/kubewarden/docs/edit/main/docs/contributing-guide/contributing.md",tags:[],version:"current",lastUpdatedAt:1651837203,formattedLastUpdatedAt:"5/6/2022",frontMatter:{}},p={},s=[{value:"Getting Started",id:"getting-started",level:2}],d={toc:s};function m(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"contribute-to-kubewarden-docs"},"Contribute to Kubewarden docs"),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Kubewarden welcomes suggestions for improvement from all contributors, new and experienced!")),(0,i.kt)("p",null,"You can contribute to Kubewarden documentation by"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Improving existing content"),(0,i.kt)("li",{parentName:"ul"},"Creating new content"),(0,i.kt)("li",{parentName:"ul"},"(",(0,i.kt)("em",{parentName:"li"},"Upcoming"),") Helping with translation of the documentation")),(0,i.kt)("h2",{id:"getting-started"},"Getting Started"),(0,i.kt)("p",null,"Everybody is welcome to suggest changes by submitting a pull request\nor report a bug/typo with the help of a GitHub issue to the\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/kubewarden/docs"},(0,i.kt)("inlineCode",{parentName:"a"},"kubewarden/docs")," repository"),".\nKnowledge of ",(0,i.kt)("a",{parentName:"p",href:"https://git-scm.com/"},"git")," and ",(0,i.kt)("a",{parentName:"p",href:"https://lab.github.com/"},"GitHub")," is\nan essential pre-requisite to getting started."),(0,i.kt)("p",null,"To get involved with the documentation:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Familiarize yourself with the ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/kubewarden/docs"},"documentation repository"),"\nand the ",(0,i.kt)("a",{parentName:"li",href:"https://rust-lang.github.io/mdBook/"},"static site generator"),"."),(0,i.kt)("li",{parentName:"ul"},"mdBook uses the ",(0,i.kt)("a",{parentName:"li",href:"https://commonmark.org/"},"CommonMark spec")," of Markdown.\nEnsure you're familiar with the Markdown flavour before you begin."),(0,i.kt)("li",{parentName:"ul"},"Understand how to ",(0,i.kt)("a",{parentName:"li",href:"#"},"suggest an improvement")," and ",(0,i.kt)("a",{parentName:"li",href:"#"},"open a pull request"),".")))}m.isMDXComponent=!0}}]);