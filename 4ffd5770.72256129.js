(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{163:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return h}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),p=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=p(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},b=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=p(n),b=a,h=d["".concat(o,".").concat(b)]||d[b]||u[b]||i;return n?r.a.createElement(h,s(s({ref:t},l),{},{components:n})):r.a.createElement(h,s({ref:t},l))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=b;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var l=2;l<i;l++)o[l]=n[l];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},86:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return p}));var a=n(2),r=n(6),i=(n(0),n(163)),o={title:"Create an instance"},s={unversionedId:"api/start/create",id:"api/start/create",isDocsHomePage:!1,title:"Create an instance",description:"We have the API installed, we have an understanding of what will actually be exposed and how the API knows what to expose. So down the rabbit hole we go - let's create an actual API instance, and then take it from there -",source:"@site/docs/api/start/create.md",slug:"/api/start/create",permalink:"/docs/api/start/create",editUrl:"https://github.com/polkadot-js/docs/edit/master/docs/api/start/create.md",version:"current",sidebar:"reference",previous:{title:"Basics & Metadata",permalink:"/docs/api/start/basics"},next:{title:"Runtime constants",permalink:"/docs/api/start/api.consts"}},c=[{value:"Providers",id:"providers",children:[]},{value:"API Instance",id:"api-instance",children:[]},{value:"Failures",id:"failures",children:[]},{value:"Advanced creation",id:"advanced-creation",children:[]},{value:"Do something",id:"do-something",children:[]}],l={rightToc:c};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"We have the API installed, we have an understanding of what will actually be exposed and how the API knows what to expose. So down the rabbit hole we go - let's create an actual API instance, and then take it from there -"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"// Import\nimport { ApiPromise, WsProvider } from '@polkadot/api';\n\n...\n// Construct\nconst wsProvider = new WsProvider('wss://rpc.polkadot.io');\nconst api = await ApiPromise.create({ provider: wsProvider });\n\n// Do something\nconsole.log(api.genesisHash.toHex());\n")),Object(i.b)("p",null,"Where other code is included (or just some previous boilerplate is used), you will see ",Object(i.b)("inlineCode",{parentName:"p"},"...")," in most of the examples. This is not due to laziness, but rather just to keep things straight and to the point."),Object(i.b)("h2",{id:"providers"},"Providers"),Object(i.b)("p",null,"Focusing on the construction, any API requires a provider and we create one via the ",Object(i.b)("inlineCode",{parentName:"p"},"const wsProvider = new WsProvider(...)"),". By default, if none is provided to the API it will construct a default ",Object(i.b)("inlineCode",{parentName:"p"},"WsProvider")," instance to connect to ",Object(i.b)("inlineCode",{parentName:"p"},"ws://127.0.0.1:9944"),"."),Object(i.b)("p",null,"We generally recommend always specifying the endpoint since in most cases we want to connect to an external node and even for local nodes, it is always better being explicit, less magic that can make you wonder in the future."),Object(i.b)("p",null,'At this time the only provider type that is fully supported by the API is the WebSocket version. Polkadot/Substrate really comes alive with possibilities once you have access to bi-directional RPCs such as what WebSockets provide. (It is technically possible to have some limited capability via bare-HTTP, but at this point WebSockets is the only fully-operational and supported version - always remember that it is just "upgraded HTTP".)'),Object(i.b)("h2",{id:"api-instance"},"API Instance"),Object(i.b)("p",null,"The API creation is done via the ",Object(i.b)("inlineCode",{parentName:"p"},"ApiPromise.create")," interface which is a shortcut version for calling ",Object(i.b)("inlineCode",{parentName:"p"},"new")," and then waiting until the API is connected. Without the ",Object(i.b)("inlineCode",{parentName:"p"},"async")," syntax, this would be,"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"ApiPromise\n  .create({ provider: wsProvider }).isReady\n  .then((api) =>\n    console.log(api.genesisHash.toHex())\n  );\n")),Object(i.b)("p",null,"In most cases we would suggest using the ",Object(i.b)("inlineCode",{parentName:"p"},".create")," shortcut, which really just takes care of the following boilerplate that otherwise needs to be provided -"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"// Create the instance\nconst api = new ApiPromise({ provider: wsProvider });\n\n// Wait until we are ready and connected\nawait api.isReady;\n\n// Do something\nconsole.log(api.genesisHash.toHex());\n")),Object(i.b)("h2",{id:"failures"},"Failures"),Object(i.b)("p",null,"In all cases the API will handle reconnecting automatically. This means that when you connect and the endpoint is not (yet) ready, the promise will not resolve immediately, but rather when connected. The same applies to when connection is lost, the API will manage re-connections."),Object(i.b)("p",null,"In cases where the API does not support the chain being connected to, such as it using an unknown metadata version, the ready promise will fail to resolve and instead reject."),Object(i.b)("h2",{id:"advanced-creation"},"Advanced creation"),Object(i.b)("p",null,"There are more advanced cases where you would prefer to use the longer version, for instance: if you want to explicitly listen to events emitted, you probably want to attach to the API even before connecting to the chain. All API instances implement an ",Object(i.b)("inlineCode",{parentName:"p"},"EventEmitter")," interface, with ",Object(i.b)("inlineCode",{parentName:"p"},"on")," handlers, which emit ",Object(i.b)("inlineCode",{parentName:"p"},"connected"),", ",Object(i.b)("inlineCode",{parentName:"p"},"disconnected"),", ",Object(i.b)("inlineCode",{parentName:"p"},"ready")," and ",Object(i.b)("inlineCode",{parentName:"p"},"error")," events, allowing you to listen to events on the transport layer."),Object(i.b)("p",null,"In these cases, create via ",Object(i.b)("inlineCode",{parentName:"p"},"new"),", attach listeners and then wait for the ",Object(i.b)("inlineCode",{parentName:"p"},"isReady"),"."),Object(i.b)("h2",{id:"do-something"},"Do something"),Object(i.b)("p",null,"Now that we have the API initialized, the next step would be to start using it to interact and extract data ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/api/start/api.consts"}),"starting with chain constants"),"."))}p.isMDXComponent=!0}}]);