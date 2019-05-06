webpackJsonp([26],{193:function(e,t,a){"use strict";function n(e){if(Array.isArray(e)){for(var t=0,a=Array(e.length);t<e.length;t++)a[t]=e[t];return a}return Array.from(e)}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function c(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),a.d(t,"attributes",function(){return E});var l=a(0),o=a.n(l),m=a(60),u=a(218),p=a(228),i=(a.n(p),function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}()),E={},k=function(e){function t(e){s(this,t);var a=r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return a.state={},a}return c(t,e),i(t,[{key:"render",value:function(){var e=this;return o.a.createElement("div",null,o.a.createElement("h1",null,"Elevation"),o.a.createElement("blockquote",null,o.a.createElement("p",null,"Objects in material design possess similar qualities to objects in the physical world.")),o.a.createElement("ul",null,o.a.createElement("li",null,"Module ",o.a.createElement("strong",null,"@rmwc/elevation")),o.a.createElement("li",null,"Import styles:",o.a.createElement("ul",null,o.a.createElement("li",null,"import ",o.a.createElement("strong",null,"'@material/elevation/dist/mdc.elevation.css'"),";"))),o.a.createElement("li",null,"MDC Docs: ",o.a.createElement("a",{href:"https://material.io/develop/web/components/elevation/"},"https://material.io/develop/web/components/elevation/"))),o.a.createElement("div",{className:"example render-with-code"},o.a.createElement("div",{className:"run"},[].concat(n(Array(25))).map(function(e,t){return o.a.createElement(m.a,{z:t,key:t},t,"dp")}),o.a.createElement(m.a,{z:this.state.elevation||0,transition:!0,onMouseOver:function(){return e.setState({elevation:24})},onMouseOut:function(){return e.setState({elevation:0})}},"Hover Me ",this.state.elevation||0,"dp")),o.a.createElement("div",{className:"source"},o.a.createElement("pre",{className:"language-jsx"},o.a.createElement("code",{className:"language-jsx"},o.a.createElement("span",{className:"token keyword"},"import")," ",o.a.createElement("span",{className:"token punctuation"},"{")," Elevation ",o.a.createElement("span",{className:"token punctuation"},"}")," ",o.a.createElement("span",{className:"token keyword"},"from")," ",o.a.createElement("span",{className:"token string"},"'@rmwc/elevation'"),o.a.createElement("span",{className:"token punctuation"},";"),"\n","\n",o.a.createElement("span",{className:"token punctuation"},"{"),o.a.createElement("span",{className:"token comment"},"/* Showing the 25 different levels of elevation */"),o.a.createElement("span",{className:"token punctuation"},"}"),"\n",o.a.createElement("span",{className:"token punctuation"},"{"),o.a.createElement("span",{className:"token punctuation"},"["),o.a.createElement("span",{className:"token operator"},"..."),o.a.createElement("span",{className:"token function"},"Array"),o.a.createElement("span",{className:"token punctuation"},"("),o.a.createElement("span",{className:"token number"},"25"),o.a.createElement("span",{className:"token punctuation"},")"),o.a.createElement("span",{className:"token punctuation"},"]"),o.a.createElement("span",{className:"token punctuation"},"."),o.a.createElement("span",{className:"token function"},"map"),o.a.createElement("span",{className:"token punctuation"},"("),o.a.createElement("span",{className:"token punctuation"},"("),"val",o.a.createElement("span",{className:"token punctuation"},",")," i",o.a.createElement("span",{className:"token punctuation"},")")," ",o.a.createElement("span",{className:"token operator"},"="),o.a.createElement("span",{className:"token operator"},">")," ",o.a.createElement("span",{className:"token punctuation"},"("),"\n","  ",o.a.createElement("span",{className:"token tag"},o.a.createElement("span",{className:"token tag"},o.a.createElement("span",{className:"token punctuation"},"<"),"Elevation")," ",o.a.createElement("span",{className:"token attr-name"},"z"),o.a.createElement("span",{className:"token script language-javascript"},o.a.createElement("span",{className:"token punctuation"},"="),o.a.createElement("span",{className:"token punctuation"},"{"),"i",o.a.createElement("span",{className:"token punctuation"},"}"))," ",o.a.createElement("span",{className:"token attr-name"},"key"),o.a.createElement("span",{className:"token script language-javascript"},o.a.createElement("span",{className:"token punctuation"},"="),o.a.createElement("span",{className:"token punctuation"},"{"),"i",o.a.createElement("span",{className:"token punctuation"},"}")),o.a.createElement("span",{className:"token punctuation"},">")),o.a.createElement("span",{className:"token punctuation"},"{"),"i",o.a.createElement("span",{className:"token punctuation"},"}"),"dp",o.a.createElement("span",{className:"token tag"},o.a.createElement("span",{className:"token tag"},o.a.createElement("span",{className:"token punctuation"},"</"),"Elevation"),o.a.createElement("span",{className:"token punctuation"},">")),"\n",o.a.createElement("span",{className:"token punctuation"},")"),o.a.createElement("span",{className:"token punctuation"},")"),o.a.createElement("span",{className:"token punctuation"},"}"),"\n","\n",o.a.createElement("span",{className:"token punctuation"},"{"),o.a.createElement("span",{className:"token comment"},"/* Showing the transition prop */"),o.a.createElement("span",{className:"token punctuation"},"}"),"\n",o.a.createElement("span",{className:"token tag"},o.a.createElement("span",{className:"token tag"},o.a.createElement("span",{className:"token punctuation"},"<"),"Elevation"),"\n","  ",o.a.createElement("span",{className:"token attr-name"},"z"),o.a.createElement("span",{className:"token script language-javascript"},o.a.createElement("span",{className:"token punctuation"},"="),o.a.createElement("span",{className:"token punctuation"},"{"),o.a.createElement("span",{className:"token keyword"},"this"),o.a.createElement("span",{className:"token punctuation"},"."),"state",o.a.createElement("span",{className:"token punctuation"},"."),"elevation ",o.a.createElement("span",{className:"token operator"},"||")," ",o.a.createElement("span",{className:"token number"},"0"),o.a.createElement("span",{className:"token punctuation"},"}")),"\n","  ",o.a.createElement("span",{className:"token attr-name"},"transition"),"\n","  ",o.a.createElement("span",{className:"token attr-name"},"onMouseOver"),o.a.createElement("span",{className:"token script language-javascript"},o.a.createElement("span",{className:"token punctuation"},"="),o.a.createElement("span",{className:"token punctuation"},"{"),o.a.createElement("span",{className:"token punctuation"},"("),o.a.createElement("span",{className:"token punctuation"},")")," ",o.a.createElement("span",{className:"token operator"},"="),o.a.createElement("span",{className:"token operator"},">")," ",o.a.createElement("span",{className:"token keyword"},"this"),o.a.createElement("span",{className:"token punctuation"},"."),o.a.createElement("span",{className:"token function"},"setState"),o.a.createElement("span",{className:"token punctuation"},"("),o.a.createElement("span",{className:"token punctuation"},"{"),"elevation",o.a.createElement("span",{className:"token punctuation"},":")," ",o.a.createElement("span",{className:"token number"},"24"),o.a.createElement("span",{className:"token punctuation"},"}"),o.a.createElement("span",{className:"token punctuation"},")"),o.a.createElement("span",{className:"token punctuation"},"}")),"\n","  ",o.a.createElement("span",{className:"token attr-name"},"onMouseOut"),o.a.createElement("span",{className:"token script language-javascript"},o.a.createElement("span",{className:"token punctuation"},"="),o.a.createElement("span",{className:"token punctuation"},"{"),o.a.createElement("span",{className:"token punctuation"},"("),o.a.createElement("span",{className:"token punctuation"},")")," ",o.a.createElement("span",{className:"token operator"},"="),o.a.createElement("span",{className:"token operator"},">")," ",o.a.createElement("span",{className:"token keyword"},"this"),o.a.createElement("span",{className:"token punctuation"},"."),o.a.createElement("span",{className:"token function"},"setState"),o.a.createElement("span",{className:"token punctuation"},"("),o.a.createElement("span",{className:"token punctuation"},"{"),"elevation",o.a.createElement("span",{className:"token punctuation"},":")," ",o.a.createElement("span",{className:"token number"},"0"),o.a.createElement("span",{className:"token punctuation"},"}"),o.a.createElement("span",{className:"token punctuation"},")"),o.a.createElement("span",{className:"token punctuation"},"}")),"\n",o.a.createElement("span",{className:"token punctuation"},">")),"\n","  Hover Me ",o.a.createElement("span",{className:"token punctuation"},"{"),o.a.createElement("span",{className:"token keyword"},"this"),o.a.createElement("span",{className:"token punctuation"},"."),"state",o.a.createElement("span",{className:"token punctuation"},"."),"elevation ",o.a.createElement("span",{className:"token operator"},"||")," ",o.a.createElement("span",{className:"token number"},"0"),o.a.createElement("span",{className:"token punctuation"},"}"),"dp","\n",o.a.createElement("span",{className:"token tag"},o.a.createElement("span",{className:"token tag"},o.a.createElement("span",{className:"token punctuation"},"</"),"Elevation"),o.a.createElement("span",{className:"token punctuation"},">")),"\n")))),o.a.createElement("div",{className:"example render-only"},o.a.createElement("div",{className:"run"},o.a.createElement(u.a,{docs:p,displayName:"Elevation"}))))}}]),t}(o.a.Component);t.default=k},218:function(e,t,a){"use strict";function n(e){if(Array.isArray(e)){for(var t=0,a=Array(e.length);t<e.length;t++)a[t]=e[t];return a}return Array.from(e)}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function c(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}a.d(t,"a",function(){return u});var l=a(0),o=(a.n(l),function(){function e(e,t){var a=[],n=!0,s=!1,r=void 0;try{for(var c,l=e[Symbol.iterator]();!(n=(c=l.next()).done)&&(a.push(c.value),!t||a.length!==t);n=!0);}catch(e){s=!0,r=e}finally{try{!n&&l.return&&l.return()}finally{if(s)throw r}}return a}return function(t,a){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return e(t,a);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}()),m=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),u=function(e){function t(e){s(this,t);var a=r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return a.flatDocs=Object.values(e.docs).reduce(function(e,t){return e.concat(t)},[]),a}return c(t,e),m(t,[{key:"findDocDef",value:function(e){return this.flatDocs.find(function(t){return t.displayName===e})}},{key:"renderRaw",value:function(e){return e.split("\n").map(function(e,t){return l.createElement(l.Fragment,{key:t},0!==t&&l.createElement("br",null),e.split("  ").map(function(e,t){return l.createElement(l.Fragment,{key:t},0!==t&&l.createElement(l.Fragment,null,"\xa0\xa0"),e)}))})}},{key:"getComposedDefs",value:function(e){var t=this;return e.map(function(e){return t.findDocDef(e)}).filter(Boolean).reduce(function(e,t){return Object.assign({},t,e,{props:t.props||e.props?Object.assign({},t.props||{},e.props||{}):null})},{})}},{key:"render",value:function(){var e=this,t=this.props,a=t.displayName,s=t.composes,r=void 0===s?[]:s,c=this.getComposedDefs([a].concat(n(r)));return l.createElement("div",{className:"document-component"},l.createElement("h2",null,a),c&&!!c.description&&l.createElement("p",null,c.description),c&&c.props&&l.createElement("div",null,l.createElement("h3",null,"Props"),l.createElement("table",null,l.createElement("thead",null,l.createElement("tr",null,l.createElement("th",null,"Name"),l.createElement("th",null,"Type"),l.createElement("th",null,"Default"),l.createElement("th",null,"Description"))),l.createElement("tbody",null,Object.entries(c.props).map(function(t,a){var n=o(t,2),s=n[0],r=n[1];return l.createElement("tr",{key:a},l.createElement("td",{className:r.required?"required":""},l.createElement("code",null,s)),l.createElement("td",null,l.createElement("code",null,r.flowType&&e.renderRaw(r.flowType.raw||r.flowType.name||""))),l.createElement("td",null,r.defaultValue?l.createElement("code",null,r.defaultValue.value):l.createElement("code",null,"undefined")),l.createElement("td",null,r.description||""))})))))}}]),t}(l.Component)},228:function(e,t){e.exports=[{description:"The Elevation Component",displayName:"Elevation",methods:[],props:{z:{flowType:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},required:!0,description:"A number from 0 - 24 for different levels of elevation"},transition:{flowType:{name:"boolean"},required:!1,description:"Allows for smooth transitions between elevations when the z value changes."}}}]}});
//# sourceMappingURL=26.a426d3b7.chunk.js.map