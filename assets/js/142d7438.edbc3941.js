"use strict";(self.webpackChunkkubewarden_docusaurus=self.webpackChunkkubewarden_docusaurus||[]).push([[5671],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return h}});var i=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,i,o=function(e,n){if(null==e)return{};var t,i,o={},r=Object.keys(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=i.createContext({}),l=function(e){var n=i.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},u=function(e){var n=l(e.components);return i.createElement(c.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},p=i.forwardRef((function(e,n){var t=e.components,o=e.mdxType,r=e.originalType,c=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),p=l(t),h=o,m=p["".concat(c,".").concat(h)]||p[h]||d[h]||r;return t?i.createElement(m,s(s({ref:n},u),{},{components:t})):i.createElement(m,s({ref:n},u))}));function h(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var r=t.length,s=new Array(r);s[0]=p;var a={};for(var c in n)hasOwnProperty.call(n,c)&&(a[c]=n[c]);a.originalType=e,a.mdxType="string"==typeof e?e:o,s[1]=a;for(var l=2;l<r;l++)s[l]=t[l];return i.createElement.apply(null,s)}return i.createElement.apply(null,t)}p.displayName="MDXCreateElement"},9979:function(e,n,t){t.r(n),t.d(n,{assets:function(){return u},contentTitle:function(){return c},default:function(){return h},frontMatter:function(){return a},metadata:function(){return l},toc:function(){return d}});var i=t(3117),o=t(102),r=(t(7294),t(3905)),s=["components"],a={sidebar_label:"Validating Policies",title:""},c="Validating policies",l={unversionedId:"writing-policies/spec/validating-policies",id:"writing-policies/spec/validating-policies",title:"",description:"The Kubewarden policy server receives",source:"@site/docs/writing-policies/spec/03-validating-policies.md",sourceDirName:"writing-policies/spec",slug:"/writing-policies/spec/validating-policies",permalink:"/writing-policies/spec/validating-policies",editUrl:"https://github.com/kubewarden/docs/edit/main/docs/writing-policies/spec/03-validating-policies.md",tags:[],version:"current",lastUpdatedAt:1651837203,formattedLastUpdatedAt:"5/6/2022",sidebarPosition:3,frontMatter:{sidebar_label:"Validating Policies",title:""},sidebar:"docs",previous:{title:"Policy Settings",permalink:"/writing-policies/spec/settings"},next:{title:"Mutating Policies",permalink:"/writing-policies/spec/mutating-policies"}},u={},d=[{value:"The <code>ValidationRequest</code> object",id:"the-validationrequest-object",level:2},{value:"A concrete example",id:"a-concrete-example",level:3},{value:"The <code>ValidationResponse</code> object",id:"the-validationresponse-object",level:2}],p={toc:d};function h(e){var n=e.components,t=(0,o.Z)(e,s);return(0,r.kt)("wrapper",(0,i.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"validating-policies"},"Validating policies"),(0,r.kt)("p",null,"The Kubewarden policy server receives\n",(0,r.kt)("a",{parentName:"p",href:"https://godoc.org/k8s.io/api/admission/v1#AdmissionReview"},(0,r.kt)("inlineCode",{parentName:"a"},"AdmissionReview")),"\nobjects from the Kubernetes API server. It then forwards the value of\nits ",(0,r.kt)("inlineCode",{parentName:"p"},"request")," attribute (of type\n",(0,r.kt)("a",{parentName:"p",href:"https://godoc.org/k8s.io/api/admission/v1#AdmissionRequest"},(0,r.kt)("inlineCode",{parentName:"a"},"AdmissionRequest")),"\nkey to the policy to be evaluated."),(0,r.kt)("p",null,"The policy has to evaluate the ",(0,r.kt)("inlineCode",{parentName:"p"},"request")," and state whether it should be\naccepted or not. When the request is rejected, the policy might provide the\nexplanation message and a specific error code that is going to be shown to the end user."),(0,r.kt)("p",null,"By convention of the ",(0,r.kt)("inlineCode",{parentName:"p"},"policy-server")," project, the guest has to expose\na function named ",(0,r.kt)("inlineCode",{parentName:"p"},"validate"),", exposed through the waPC guest SDK, so\nthat the ",(0,r.kt)("inlineCode",{parentName:"p"},"policy-server")," (waPC host) can invoke it."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"validate")," function receives a ",(0,r.kt)("inlineCode",{parentName:"p"},"ValidationRequest")," object serialized as JSON and\nreturns a ",(0,r.kt)("inlineCode",{parentName:"p"},"ValidationResponse")," object serialized as JSON."),(0,r.kt)("h2",{id:"the-validationrequest-object"},"The ",(0,r.kt)("inlineCode",{parentName:"h2"},"ValidationRequest")," object"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"ValidationRequest")," is a simple JSON object that is received by the\n",(0,r.kt)("inlineCode",{parentName:"p"},"validate")," function. It looks like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "request": <AdmissionReview.request data>,\n  "settings": {\n     // your policy configuration\n  }\n}\n')),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"settings")," key points to a free-form JSON document that can hold the policy\nspecific settings. The previous chapter focused on policies and settings."),(0,r.kt)("h3",{id:"a-concrete-example"},"A concrete example"),(0,r.kt)("p",null,"Given the following Kubernetes ",(0,r.kt)("inlineCode",{parentName:"p"},"AdmissionReview"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "apiVersion": "admission.k8s.io/v1",\n  "kind": "AdmissionReview",\n  "request": {\n    # Random uid uniquely identifying this admission call\n    "uid": "705ab4f5-6393-11e8-b7cc-42010a800002",\n\n    # Fully-qualified group/version/kind of the incoming object\n    "kind": {"group":"autoscaling","version":"v1","kind":"Scale"},\n    # Fully-qualified group/version/kind of the resource being modified\n    "resource": {"group":"apps","version":"v1","resource":"deployments"},\n    # subresource, if the request is to a subresource\n    "subResource": "scale",\n\n    # Fully-qualified group/version/kind of the incoming object in the original request to the API server.\n    # This only differs from `kind` if the webhook specified `matchPolicy: Equivalent` and the\n    # original request to the API server was converted to a version the webhook registered for.\n    "requestKind": {"group":"autoscaling","version":"v1","kind":"Scale"},\n    # Fully-qualified group/version/kind of the resource being modified in the original request to the API server.\n    # This only differs from `resource` if the webhook specified `matchPolicy: Equivalent` and the\n    # original request to the API server was converted to a version the webhook registered for.\n    "requestResource": {"group":"apps","version":"v1","resource":"deployments"},\n    # subresource, if the request is to a subresource\n    # This only differs from `subResource` if the webhook specified `matchPolicy: Equivalent` and the\n    # original request to the API server was converted to a version the webhook registered for.\n    "requestSubResource": "scale",\n\n    # Name of the resource being modified\n    "name": "my-deployment",\n    # Namespace of the resource being modified, if the resource is namespaced (or is a Namespace object)\n    "namespace": "my-namespace",\n\n    # operation can be CREATE, UPDATE, DELETE, or CONNECT\n    "operation": "UPDATE",\n\n    "userInfo": {\n      # Username of the authenticated user making the request to the API server\n      "username": "admin",\n      # UID of the authenticated user making the request to the API server\n      "uid": "014fbff9a07c",\n      # Group memberships of the authenticated user making the request to the API server\n      "groups": ["system:authenticated","my-admin-group"],\n      # Arbitrary extra info associated with the user making the request to the API server.\n      # This is populated by the API server authentication layer and should be included\n      # if any SubjectAccessReview checks are performed by the webhook.\n      "extra": {\n        "some-key":["some-value1", "some-value2"]\n      }\n    },\n\n    # object is the new object being admitted.\n    # It is null for DELETE operations.\n    "object": {"apiVersion":"autoscaling/v1","kind":"Scale",...},\n    # oldObject is the existing object.\n    # It is null for CREATE and CONNECT operations.\n    "oldObject": {"apiVersion":"autoscaling/v1","kind":"Scale",...},\n    # options contains the options for the operation being admitted, like meta.k8s.io/v1 CreateOptions, UpdateOptions, or DeleteOptions.\n    # It is null for CONNECT operations.\n    "options": {"apiVersion":"meta.k8s.io/v1","kind":"UpdateOptions",...},\n\n    # dryRun indicates the API request is running in dry run mode and will not be persisted.\n    # Webhooks with side effects should avoid actuating those side effects when dryRun is true.\n    # See http://k8s.io/docs/reference/using-api/api-concepts/#make-a-dry-run-request for more details.\n    "dryRun": false\n  }\n}\n')),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"ValidationRequest")," object would look like that:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "request": {\n    # Random uid uniquely identifying this admission call\n    "uid": "705ab4f5-6393-11e8-b7cc-42010a800002",\n\n    # Fully-qualified group/version/kind of the incoming object\n    "kind": {"group":"autoscaling","version":"v1","kind":"Scale"},\n    # Fully-qualified group/version/kind of the resource being modified\n    "resource": {"group":"apps","version":"v1","resource":"deployments"},\n    # subresource, if the request is to a subresource\n    "subResource": "scale",\n\n    # Fully-qualified group/version/kind of the incoming object in the original request to the API server.\n    # This only differs from `kind` if the webhook specified `matchPolicy: Equivalent` and the\n    # original request to the API server was converted to a version the webhook registered for.\n    "requestKind": {"group":"autoscaling","version":"v1","kind":"Scale"},\n    # Fully-qualified group/version/kind of the resource being modified in the original request to the API server.\n    # This only differs from `resource` if the webhook specified `matchPolicy: Equivalent` and the\n    # original request to the API server was converted to a version the webhook registered for.\n    "requestResource": {"group":"apps","version":"v1","resource":"deployments"},\n    # subresource, if the request is to a subresource\n    # This only differs from `subResource` if the webhook specified `matchPolicy: Equivalent` and the\n    # original request to the API server was converted to a version the webhook registered for.\n    "requestSubResource": "scale",\n\n    # Name of the resource being modified\n    "name": "my-deployment",\n    # Namespace of the resource being modified, if the resource is namespaced (or is a Namespace object)\n    "namespace": "my-namespace",\n\n    # operation can be CREATE, UPDATE, DELETE, or CONNECT\n    "operation": "UPDATE",\n\n    "userInfo": {\n      # Username of the authenticated user making the request to the API server\n      "username": "admin",\n      # UID of the authenticated user making the request to the API server\n      "uid": "014fbff9a07c",\n      # Group memberships of the authenticated user making the request to the API server\n      "groups": ["system:authenticated","my-admin-group"],\n      # Arbitrary extra info associated with the user making the request to the API server.\n      # This is populated by the API server authentication layer and should be included\n      # if any SubjectAccessReview checks are performed by the webhook.\n      "extra": {\n        "some-key":["some-value1", "some-value2"]\n      }\n    },\n\n    # object is the new object being admitted.\n    # It is null for DELETE operations.\n    "object": {"apiVersion":"autoscaling/v1","kind":"Scale",...},\n    # oldObject is the existing object.\n    # It is null for CREATE and CONNECT operations.\n    "oldObject": {"apiVersion":"autoscaling/v1","kind":"Scale",...},\n    # options contains the options for the operation being admitted, like meta.k8s.io/v1 CreateOptions, UpdateOptions, or DeleteOptions.\n    # It is null for CONNECT operations.\n    "options": {"apiVersion":"meta.k8s.io/v1","kind":"UpdateOptions",...},\n\n    # dryRun indicates the API request is running in dry run mode and will not be persisted.\n    # Webhooks with side effects should avoid actuating those side effects when dryRun is true.\n    # See http://k8s.io/docs/reference/using-api/api-concepts/#make-a-dry-run-request for more details.\n    "dryRun": false\n  },\n  "settings": {\n    # policy settings\n  }\n}\n')),(0,r.kt)("h2",{id:"the-validationresponse-object"},"The ",(0,r.kt)("inlineCode",{parentName:"h2"},"ValidationResponse")," object"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"validate")," function returns the outcome of its validation using a ",(0,r.kt)("inlineCode",{parentName:"p"},"ValidationResponse"),"\nobject."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"ValidationResponse")," is structured in the following way:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  // mandatory\n  "accepted": <boolean>,\n\n  // optional, ignored if accepted - recommended for rejections\n  "message": <string>,\n\n  // optional, ignored if accepted\n  "code": <integer>,\n\n  // optional, used by mutation policies\n  "mutated_object": <string>\n}\n')),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"message")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"code")," attributes can be specified when the request\nis not accepted. ",(0,r.kt)("inlineCode",{parentName:"p"},"message")," is a free form textual error. ",(0,r.kt)("inlineCode",{parentName:"p"},"code"),"\nrepresents an HTTP error code."),(0,r.kt)("p",null,"If the request is accepted, ",(0,r.kt)("inlineCode",{parentName:"p"},"message")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"code"),"\nvalues will be ignored by the Kubernetes API server if they are\npresent."),(0,r.kt)("p",null,"If ",(0,r.kt)("inlineCode",{parentName:"p"},"message")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"code")," are provided, and the request is not\naccepted, the Kubernetes API server will forward this information as\npart of the body of the error returned to the Kubernetes API server\nclient that issued the rejected request."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"mutated_object")," is an optional field used only by mutating policies.\nThis is going to be covered inside of the next chapter."),(0,r.kt)("h1",{id:"recap"},"Recap"),(0,r.kt)("p",null,"These are the functions a validating policy must implement:"))}h.isMDXComponent=!0}}]);