"use strict";(self.webpackChunkkubewarden_docusaurus=self.webpackChunkkubewarden_docusaurus||[]).push([[5927],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var i=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=i.createContext({}),p=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return i.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(n),h=r,m=u["".concat(s,".").concat(h)]||u[h]||d[h]||a;return n?i.createElement(m,o(o({ref:t},c),{},{components:n})):i.createElement(m,o({ref:t},c))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var p=2;p<a;p++)o[p]=n[p];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}u.displayName="MDXCreateElement"},1527:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var i=n(3117),r=(n(7294),n(3905));const a={sidebar_label:"Architecture",title:""},o="Architecture",l={unversionedId:"architecture",id:"architecture",title:"",description:"Kubewarden is a Kubernetes policy engine that uses policies written using",source:"@site/docs/architecture.md",sourceDirName:".",slug:"/architecture",permalink:"/architecture",draft:!1,editUrl:"https://github.com/kubewarden/docs/edit/main/docs/architecture.md",tags:[],version:"current",lastUpdatedAt:1674808837,formattedLastUpdatedAt:"Jan 27, 2023",frontMatter:{sidebar_label:"Architecture",title:""},sidebar:"docs",previous:{title:"Installation",permalink:"/operator-manual/airgap/install"},next:{title:"Policy Communication Specification",permalink:"/writing-policies/spec/intro-spec"}},s={},p=[{value:"Journey of a Kubewarden policy",id:"journey-of-a-kubewarden-policy",level:2},{value:"Default Policy Server",id:"default-policy-server",level:3},{value:"Defining the first policy",id:"defining-the-first-policy",level:3},{value:"Reconciliation of <code>policy-server</code>",id:"reconciliation-of-policy-server",level:3},{value:"Making Kubernetes aware of the policy",id:"making-kubernetes-aware-of-the-policy",level:3},{value:"Policy in action",id:"policy-in-action",level:3},{value:"How multiple policy servers and policies are handled",id:"how-multiple-policy-servers-and-policies-are-handled",level:2}],c={toc:p};function d(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,i.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"architecture"},"Architecture"),(0,r.kt)("p",null,"Kubewarden is a Kubernetes policy engine that uses policies written using\nWebAssembly."),(0,r.kt)("p",null,"The Kubewarden stack is made by the following components:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Kubewarden Custom Resources: these are ",(0,r.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/extend-kubernetes/api-extension/custom-resources/"},"Kubernetes Custom Resources"),"\nthat simplify the process of managing policies.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"https://github.com/kubewarden/kubewarden-controller"},(0,r.kt)("inlineCode",{parentName:"a"},"kubewarden-controller")),":\nthis is a Kubernetes controller that reconciles Kubewarden's Custom Resources.\nThis component creates parts of the Kubewarden stack and, most important of\nall, translates Kubewarden's concepts into native Kubernetes directives.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Kubewarden policies: these are WebAssembly modules that hold the validation\nor mutation logic. These are covered in depth inside of ",(0,r.kt)("a",{parentName:"p",href:"/writing-policies/"},"this chapter"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"https://github.com/kubewarden/policy-server"},(0,r.kt)("inlineCode",{parentName:"a"},"policy-server")),":\nthis component receives the requests to be validated. It does that\nby executing Kubewarden's policies."))),(0,r.kt)("p",null,"At the bottom of the stack, Kubewarden's integrates with Kubernetes using the\nconcept of ",(0,r.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/reference/access-authn-authz/extensible-admission-controllers/"},"Dynamic Admission Control"),".\nIn particular, Kubewarden operates as a Kubernetes Admission Webhook.\n",(0,r.kt)("inlineCode",{parentName:"p"},"policy-server")," is the actual Webhook endpoint that is reached by Kubernetes\nAPI server to validate relevant requests."),(0,r.kt)("p",null,"Kubernetes is made aware of the existence of Kubewarden's Webhook endpoints by\n",(0,r.kt)("inlineCode",{parentName:"p"},"kubewarden-controller"),". This is done by registering either\na ",(0,r.kt)("inlineCode",{parentName:"p"},"MutatingWebhookConfiguration")," or a ",(0,r.kt)("inlineCode",{parentName:"p"},"ValidatingWebhookConfiguration"),"\nobject."),(0,r.kt)("p",null,"This diagram shows the full architecture overview of a cluster running\nthe Kubewarden stack:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Full architecture",src:n(6373).Z,width:"1387",height:"632"})),(0,r.kt)("h2",{id:"journey-of-a-kubewarden-policy"},"Journey of a Kubewarden policy"),(0,r.kt)("p",null,"The architecture diagram from above can be intimidating at first, this\nsection explains it step by step."),(0,r.kt)("h3",{id:"default-policy-server"},"Default Policy Server"),(0,r.kt)("p",null,"On a fresh new cluster, the Kubewarden components defined are its Custom\nResource Definitions, the ",(0,r.kt)("inlineCode",{parentName:"p"},"kubewarden-controller")," Deployment and a ",(0,r.kt)("inlineCode",{parentName:"p"},"PolicyServer"),"\nCustom Resource named ",(0,r.kt)("inlineCode",{parentName:"p"},"default"),"."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Defining the first ClusterAdmissionPolicy resource",src:n(5535).Z,width:"1123",height:"635"})),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"kubewarden-controller")," notices the default ",(0,r.kt)("inlineCode",{parentName:"p"},"PolicyServer")," resource and, as a result of that,\nit creates a Deployment of the ",(0,r.kt)("inlineCode",{parentName:"p"},"policy-server")," component."),(0,r.kt)("p",null,"As stated above, Kubewarden works as a Kubernetes Admission Webhook. Kubernetes\ndictates that all the Webhook endpoints must be secured with TLS.\n",(0,r.kt)("inlineCode",{parentName:"p"},"kubewarden-controller")," takes care of setting up this secure communication\nby doing these steps:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Generate a self-signed Certificate Authority"),(0,r.kt)("li",{parentName:"ol"},"Use this CA to generate a TLS certificate and a TLS key for the\n",(0,r.kt)("inlineCode",{parentName:"li"},"policy-server")," Service.")),(0,r.kt)("p",null,"All these objects are stored into Kubernetes as Secret resources."),(0,r.kt)("p",null,"Finally, ",(0,r.kt)("inlineCode",{parentName:"p"},"kubewarden-controller")," will create the ",(0,r.kt)("inlineCode",{parentName:"p"},"policy-server"),"\nDeployment and a Kubernetes ClusterIP Service to expose it inside of\nthe cluster network."),(0,r.kt)("h3",{id:"defining-the-first-policy"},"Defining the first policy"),(0,r.kt)("p",null,"This chart shows what happens when the first policy bounded to the default ",(0,r.kt)("inlineCode",{parentName:"p"},"policy-server")," is defined inside of the\ncluster:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Defining the first ClusterAdmissionPolicy resource",src:n(4339).Z,width:"1123",height:"635"})),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"kubewarden-controller")," notices the new ",(0,r.kt)("inlineCode",{parentName:"p"},"ClusterAdmissionPolicy")," resource and,\nas a result of that, it finds the bounded ",(0,r.kt)("inlineCode",{parentName:"p"},"PolicyServer")," and reconciles it."),(0,r.kt)("h3",{id:"reconciliation-of-policy-server"},"Reconciliation of ",(0,r.kt)("inlineCode",{parentName:"h3"},"policy-server")),(0,r.kt)("p",null,"When a ",(0,r.kt)("inlineCode",{parentName:"p"},"ClusterAdmissionPolicy")," is created, modified or deleted a reconciliation loop for the ",(0,r.kt)("inlineCode",{parentName:"p"},"PolicyServer"),"\nthat owns the policy is triggered inside the ",(0,r.kt)("inlineCode",{parentName:"p"},"kubewarden-controller"),".\nIn this reconciliation loop, a ConfigMap with all the polices bounded to\nthe ",(0,r.kt)("inlineCode",{parentName:"p"},"PolicyServer")," is created. Then the a Deployment rollout of the\ninterested ",(0,r.kt)("inlineCode",{parentName:"p"},"policy-server")," is started. As a result of that, the new ",(0,r.kt)("inlineCode",{parentName:"p"},"policy-server"),"\ninstance will be started with the updated configuration."),(0,r.kt)("p",null,"At start time, ",(0,r.kt)("inlineCode",{parentName:"p"},"policy-server")," reads its configuration and downloads\nall the Kubewarden policies. Policies can be downloaded from remote\nendpoints like HTTP(s) servers and container registries."),(0,r.kt)("p",null,"Policies' behaviour can be tuned by users via policy-specific configuration\nparameters. Once all the policies are downloaded, ",(0,r.kt)("inlineCode",{parentName:"p"},"policy-server")," will ensure\nthe policy settings provided by the user are valid."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"policy-server")," performs the validation of policies's settings by\ninvoking the ",(0,r.kt)("inlineCode",{parentName:"p"},"validate_setting")," function exposed by each policy.\nThis topic is covered more in depth inside\nof ",(0,r.kt)("a",{parentName:"p",href:"/writing-policies/spec/intro-spec"},"this section")," of the documentation."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"policy-server")," will exit with an error if one or more policies received wrong\nconfiguration parameters from the end user."),(0,r.kt)("p",null,"If all the policies are properly configured, ",(0,r.kt)("inlineCode",{parentName:"p"},"policy-server")," will spawn a\npool of worker threads to evaluate incoming requests using the Kubewarden\npolicies specified by the user."),(0,r.kt)("p",null,"Finally, ",(0,r.kt)("inlineCode",{parentName:"p"},"policy-server")," will start a HTTPS server that listens to incoming\nvalidation requests. The web server is secured using the TLS key and certificate\nthat have been previously created by ",(0,r.kt)("inlineCode",{parentName:"p"},"kubewarden-controller"),"."),(0,r.kt)("p",null,"Each policy is exposed by the web server via a dedicated path that follows this\nnaming convention: ",(0,r.kt)("inlineCode",{parentName:"p"},"/validate/<policy ID>"),"."),(0,r.kt)("p",null,"This is how the cluster looks like once the initialization of ",(0,r.kt)("inlineCode",{parentName:"p"},"policy-server"),"\nis completed:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"policy-server initialized",src:n(8188).Z,width:"1175",height:"641"})),(0,r.kt)("h3",{id:"making-kubernetes-aware-of-the-policy"},"Making Kubernetes aware of the policy"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"policy-server")," Pods have a\n",(0,r.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/tasks/configure-pod-container/configure-liveness-readiness-startup-probes/"},(0,r.kt)("inlineCode",{parentName:"a"},"Readiness Probe")),",\n",(0,r.kt)("inlineCode",{parentName:"p"},"kubewarden-controller")," relies on that to know when the ",(0,r.kt)("inlineCode",{parentName:"p"},"policy-server")," Deployment\nis ready to evaluate admission reviews."),(0,r.kt)("p",null,"Once the ",(0,r.kt)("inlineCode",{parentName:"p"},"policy-server")," Deployment is marked as ",(0,r.kt)("inlineCode",{parentName:"p"},"Ready"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"kubewarden-controller"),"\nwill make the Kubernetes API server aware of the new policy by creating either a\n",(0,r.kt)("inlineCode",{parentName:"p"},"MutatingWebhookConfiguration")," or a ",(0,r.kt)("inlineCode",{parentName:"p"},"ValidatingWebhookConfiguration"),"\nobject."),(0,r.kt)("p",null,"Each policy has its dedicated ",(0,r.kt)("inlineCode",{parentName:"p"},"MutatingWebhookConfiguration"),"/",(0,r.kt)("inlineCode",{parentName:"p"},"ValidatingWebhookConfiguration"),"\nwhich points to the Webhook endpoint served by ",(0,r.kt)("inlineCode",{parentName:"p"},"policy-server"),". The endpoint\nis reachable by the ",(0,r.kt)("inlineCode",{parentName:"p"},"/validate/<policy ID>")," URL mentioned before."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Kubernetes Webhook endpoint configuration",src:n(9707).Z,width:"1181",height:"624"})),(0,r.kt)("h3",{id:"policy-in-action"},"Policy in action"),(0,r.kt)("p",null,"Now that all the plumbing has been done, Kubernetes will start sending the\nrelevant Admission Review requests to the right ",(0,r.kt)("inlineCode",{parentName:"p"},"policy-server")," endpoint."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Policy in action",src:n(1963).Z,width:"1181",height:"624"})),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"policy-server")," receives the Admission Request object and, based on the\nendpoint that received the request, uses the right policy to evaluate it."),(0,r.kt)("p",null,"Each policy is evaluated inside of its own dedicated WebAssembly sandbox.\nThe communication between ",(0,r.kt)("inlineCode",{parentName:"p"},"policy-server"),' (the "host") and the WebAssembly\npolicy (the "guest") is done using the waPC communication protocol. This is\ncovered in depth inside of ',(0,r.kt)("a",{parentName:"p",href:"/writing-policies/"},"this"),"\nsection of the documentation."),(0,r.kt)("h2",{id:"how-multiple-policy-servers-and-policies-are-handled"},"How multiple policy servers and policies are handled"),(0,r.kt)("p",null,"A cluster can have multiple policy servers and Kubewarden policies defined. "),(0,r.kt)("p",null,"Benefits of having multiple policy servers:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Noisy Namespaces/Tenants generating lots of policy evaluations can be isolated from the rest of the cluster and do not affect other users."),(0,r.kt)("li",{parentName:"ul"},'Mission critical policies can be run inside of a Policy Server "pool", making your whole infrastructure more resilient.')),(0,r.kt)("p",null,"Each ",(0,r.kt)("inlineCode",{parentName:"p"},"policy-server")," is defined via its own ",(0,r.kt)("inlineCode",{parentName:"p"},"PolicyServer")," resource and each policy is defined via its own\n",(0,r.kt)("inlineCode",{parentName:"p"},"ClusterAdmissionPolicy")," resource. "),(0,r.kt)("p",null,"This leads back to the initial diagram:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Full architecture",src:n(6373).Z,width:"1387",height:"632"})),(0,r.kt)("p",null,"A ",(0,r.kt)("inlineCode",{parentName:"p"},"ClusterAdmissionPolicy")," is bounded to a ",(0,r.kt)("inlineCode",{parentName:"p"},"PolicyServer"),". ",(0,r.kt)("inlineCode",{parentName:"p"},"ClusterAdmissionPolicies")," that don't specify any ",(0,r.kt)("inlineCode",{parentName:"p"},"PolicyServer"),"\nwill be bounded to the ",(0,r.kt)("inlineCode",{parentName:"p"},"PolicyServer")," named ",(0,r.kt)("inlineCode",{parentName:"p"},"default"),". If a ",(0,r.kt)("inlineCode",{parentName:"p"},"ClusterAdmissionPolicy")," references a ",(0,r.kt)("inlineCode",{parentName:"p"},"PolicyServer")," that doesn't\nexist, it will be in an ",(0,r.kt)("inlineCode",{parentName:"p"},"unschedulable")," state."),(0,r.kt)("p",null,"Each ",(0,r.kt)("inlineCode",{parentName:"p"},"policy-server")," defines multiple validation endpoints, one per policy defined\ninside of its configuration file. It's also possible to load the same policy\nmultiple times, just with different configuration parameters."),(0,r.kt)("p",null,"The Kubernetes API server is made aware of these policy via the\n",(0,r.kt)("inlineCode",{parentName:"p"},"ValidatingWebhookConfiguration")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"MutatingWebhookConfiguration")," resources\nthat are kept in sync by ",(0,r.kt)("inlineCode",{parentName:"p"},"kubewarden-controller"),"."),(0,r.kt)("p",null,"Finally, the incoming admission requests are then dispatched by the Kubernetes\nAPI server to the right validation endpoint exposed by ",(0,r.kt)("inlineCode",{parentName:"p"},"policy-server"),"."))}d.isMDXComponent=!0},6373:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/architecture-59488ce36b12f13c779fe02a35bb1ffb.png"},5535:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/architecture_sequence_01-4f634ca9150b2d99a07dd0d4a2624b5f.png"},4339:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/architecture_sequence_02-9f94d02c0a9e42b25bccae6aada0a2bd.png"},8188:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/architecture_sequence_03-b601f6352389dcc81dad199af0e0c87a.png"},9707:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/architecture_sequence_04-615e4e3f91682b0a5a52382f45e5803b.png"},1963:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/architecture_sequence_05-c8eae1426a3086cdb921feda111ff30d.png"}}]);