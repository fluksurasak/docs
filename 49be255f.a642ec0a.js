(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{176:function(e,t,a){"use strict";a.d(t,"a",(function(){return u})),a.d(t,"b",(function(){return b}));var n=a(0),r=a.n(n);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=r.a.createContext({}),c=function(e){var t=r.a.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},u=function(e){var t=c(e.components);return r.a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},h=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(a),h=n,b=u["".concat(i,".").concat(h)]||u[h]||d[h]||o;return a?r.a.createElement(b,s(s({ref:t},p),{},{components:a})):r.a.createElement(b,s({ref:t},p))}));function b(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var p=2;p<o;p++)i[p]=a[p];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,a)}h.displayName="MDXCreateElement"},86:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return s})),a.d(t,"rightToc",(function(){return l})),a.d(t,"default",(function(){return c}));var n=a(2),r=a(6),o=(a(0),a(176)),i={title:"Overview",slug:"/api/start"},s={unversionedId:"api/start/intro",id:"api/start/intro",isDocsHomePage:!1,title:"Overview",description:'These sections should provide you with all the information needed to install the @polkadot/api package, understand the structure of the interfaces and allow you to start using it. For existing users this really should be titled "Things I wish I knew before I started using the api" - it really aims to close the gap to allow anybody to get to grips with using the packages.',source:"@site/docs/api/start/intro.md",slug:"/api/start",permalink:"/docs/api/start",editUrl:"https://github.com/polkadot-js/docs/edit/master/docs/api/start/intro.md",version:"current",sidebar:"reference",previous:{title:"Overview",permalink:"/docs/api"},next:{title:"Installation",permalink:"/docs/api/start/install"}},l=[{value:"ES2015 Usage and examples",id:"es2015-usage-and-examples",children:[]},{value:"What this is not",id:"what-this-is-not",children:[]},{value:"Help us help others",id:"help-us-help-others",children:[]},{value:"Ready? Steady? Go!",id:"ready-steady-go",children:[]}],p={rightToc:l};function c(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},p,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"These sections should provide you with all the information needed to install the ",Object(o.b)("inlineCode",{parentName:"p"},"@polkadot/api"),' package, understand the structure of the interfaces and allow you to start using it. For existing users this really should be titled "Things I wish I knew before I started using the api" - it really aims to close the gap to allow anybody to get to grips with using the packages.'),Object(o.b)("p",null,"We are basing all our examples on the ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"../examples/promise"}),"ApiPromise")," version of the API, however there is also an RxJS version available. Since Promises are a part of the ES2015 specification, it covers the greater amount of use and is the one that will be used in 95% of the cases and should be familiar to 100% of all developers. However if you are in an environment where RxJs is recommended or your have a great affinity ot it, you could take a look at the ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"../examples/rx"}),"RxJS examples")," once you are familiar with the base concepts introduced here."),Object(o.b)("p",null,"For now... just ignore the various flavors and focus on understanding the concepts."),Object(o.b)("h2",{id:"es2015-usage-and-examples"},"ES2015 Usage and examples"),Object(o.b)("p",null,"Before we jump into the guide, be aware that in all cases we are using ES2015, including using things like ",Object(o.b)("inlineCode",{parentName:"p"},"async"),"/",Object(o.b)("inlineCode",{parentName:"p"},"await"),", ",Object(o.b)("inlineCode",{parentName:"p"},"import")," and others. Depending on your environment, this may require some adjustments."),Object(o.b)("p",null,"While we are using the ",Object(o.b)("inlineCode",{parentName:"p"},"await")," naked in all examples (this removes boilerplate and allows us to focus on the actual libraries), and unless your environment supports top-level await, it will need to be wrapped in an ",Object(o.b)("inlineCode",{parentName:"p"},"async")," block. So basically to make in run-able we sould wrap all samples inside a ",Object(o.b)("inlineCode",{parentName:"p"},"async function main () { ... }")," and then just call ",Object(o.b)("inlineCode",{parentName:"p"},"main().then(() => console.log('completed'))"),"."),Object(o.b)("p",null,"In the case of Node.js you would change the ",Object(o.b)("inlineCode",{parentName:"p"},"import")," into ",Object(o.b)("inlineCode",{parentName:"p"},"require"),", i.e."),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"// Import\nconst { ApiPromise, WsProvider } = require('@polkadot/api');\n...\n")),Object(o.b)("p",null,"While Node.js as of later versions supports the ",Object(o.b)("inlineCode",{parentName:"p"},"import")," syntax, we are only exporting CommonJS modules, hence the need for require."),Object(o.b)("h2",{id:"what-this-is-not"},"What this is not"),Object(o.b)("p",null,"This is not line-by-line documentation of all the existing function calls available, nor it is tied to a specific chain. (Although the examples do refer to the base Polkadot & Substrate chains). There will be some things in the API that are probably not covered, which brings us to the next point..."),Object(o.b)("h2",{id:"help-us-help-others"},"Help us help others"),Object(o.b)("p",null,"If you spot gaps in the information provided, or are uncertain about any specific area, please do ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/polkadot-js/docs/issues"}),"log an issue")," or if you are that way inclined, make a pull-request. We really want to have good documentation in these areas and allow people to be productive right from the start."),Object(o.b)("h2",{id:"ready-steady-go"},"Ready? Steady? Go!"),Object(o.b)("p",null,"If you already have a good grasp on the API and are just looking for a specific answer, you may want to take a look at the ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/api/FAQ"}),"Frequently Asked Questions"),". With all that said, let's get started... ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/api/start/install"}),"What should be installed, and how should we do it?")))}c.isMDXComponent=!0}}]);