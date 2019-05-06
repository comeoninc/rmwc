webpackJsonp([5],{212:function(e,a,t){"use strict";function n(e,a){if(!(e instanceof a))throw new TypeError("Cannot call a class as a function")}function s(e,a){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!a||"object"!==typeof a&&"function"!==typeof a?e:a}function l(e,a){if("function"!==typeof a&&null!==a)throw new TypeError("Super expression must either be null or a function, not "+typeof a);e.prototype=Object.create(a&&a.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),a&&(Object.setPrototypeOf?Object.setPrototypeOf(e,a):e.__proto__=a)}Object.defineProperty(a,"__esModule",{value:!0}),t.d(a,"attributes",function(){return N});var c=t(0),r=t.n(c),o=t(19),m=t(7),u=t(53),p=t(57),i=t(218),k=t(248),E=(t.n(k),function(){function e(e,a){for(var t=0;t<a.length;t++){var n=a[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(a,t,n){return t&&e(a.prototype,t),n&&e(a,n),a}}()),N={},d=function(e){function a(e){n(this,a);var t=s(this,(a.__proto__||Object.getPrototypeOf(a)).call(this,e));return t.state={},t}return l(a,e),E(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Theme"),r.a.createElement("blockquote",null,r.a.createElement("p",null,"MDC Theme is a foundational module that themes MDC Web components.")),r.a.createElement("ul",null,r.a.createElement("li",null,"Module ",r.a.createElement("strong",null,"@rmwc/theme")),r.a.createElement("li",null,"Import styles:",r.a.createElement("ul",null,r.a.createElement("li",null,"import ",r.a.createElement("strong",null,"'@material/theme/dist/mdc.theme.css'"),";"))),r.a.createElement("li",null,"MDC Docs: ",r.a.createElement("a",{href:"https://material.io/develop/web/components/theme/"},"https://material.io/develop/web/components/theme/"))),r.a.createElement("h2",null,"Theme Options"),r.a.createElement("div",{className:"example render-only"},r.a.createElement("div",{className:"run"},r.a.createElement("div",null,r.a.createElement("div",{style:{backgroundColor:"#ddd"}},["primary","secondary","background","primaryBg","secondaryBg","textPrimaryOnBackground","textSecondaryOnBackground","textHintOnBackground","textDisabledOnBackground","textIconOnBackground","textPrimaryOnLight","textSecondaryOnLight","textHintOnLight","textDisabledOnLight","textIconOnLight"].map(function(e,a){return r.a.createElement(o.a,{use:e,key:a},e)})),r.a.createElement("div",{style:{backgroundColor:"#333"}},["onPrimary","onSecondary","textPrimaryOnDark","textSecondaryOnDark","textHintOnDark","textDisabledOnDark","textIconOnDark"].map(function(e,a){return r.a.createElement(o.a,{use:e,key:a},e)}))))),r.a.createElement("h2",null,"ThemeProvider"),r.a.createElement("p",null,"The ",r.a.createElement("code",null,"ThemeProvider")," is an optional component that allows you to specify theme colors and settings for all of its subtree. This is useful to use once at the top of your app, or in parts of your app where the styles or color scheme differ."),r.a.createElement("p",null,"You don't have to pass in all options. The ",r.a.createElement("code",null,"ThemeProvider")," will automatically adjust some of the values like ",r.a.createElement("code",null,"onSurface")," white or black text depending on colors contrast ratio."),r.a.createElement("p",null,"Theming in ",r.a.createElement("code",null,"material-components-web")," isn't perfect, but a few basic options will get you most of the way. Try using the ThemePicker at the top and selecting \"Shrine\". You'll see that most things are colored appropriately, but the defaults provided for things like Buttons and tabs still have to have their colors overridden."),r.a.createElement("div",{className:"example render-with-code"},r.a.createElement("div",{className:"run"},r.a.createElement("div",null,r.a.createElement(m.a,{raised:!0},"Cookies"),r.a.createElement(u.a,{label:"Pizza",defaultChecked:!0}),r.a.createElement(p.a,{label:"Icecream",defaultChecked:!0})),r.a.createElement(o.b,{options:{primary:"red",secondary:"blue"}},r.a.createElement(m.a,{raised:!0},"Cookies"),r.a.createElement(u.a,{label:"Pizza",defaultChecked:!0}),r.a.createElement(p.a,{label:"Icecream",defaultChecked:!0})),r.a.createElement(o.b,{options:{primary:"lightpink",secondary:"black",onPrimary:"#000",textPrimaryOnBackground:"black"}},r.a.createElement(m.a,{raised:!0},"Cookies"),r.a.createElement(u.a,{label:"Pizza",defaultChecked:!0}),r.a.createElement(p.a,{label:"Icecream",defaultChecked:!0}))),r.a.createElement("div",{className:"source"},r.a.createElement("pre",{className:"language-jsx"},r.a.createElement("code",{className:"language-jsx"},r.a.createElement("span",{className:"token keyword"},"import")," ",r.a.createElement("span",{className:"token punctuation"},"{")," ThemeProvider ",r.a.createElement("span",{className:"token punctuation"},"}")," ",r.a.createElement("span",{className:"token keyword"},"from")," ",r.a.createElement("span",{className:"token string"},"'@rmwc/theme'"),r.a.createElement("span",{className:"token punctuation"},";"),"\n","\n",r.a.createElement("span",{className:"token keyword"},"import")," ",r.a.createElement("span",{className:"token punctuation"},"{")," Button ",r.a.createElement("span",{className:"token punctuation"},"}")," ",r.a.createElement("span",{className:"token keyword"},"from")," ",r.a.createElement("span",{className:"token string"},"'@rmwc/button'"),r.a.createElement("span",{className:"token punctuation"},";"),"\n",r.a.createElement("span",{className:"token keyword"},"import")," ",r.a.createElement("span",{className:"token punctuation"},"{")," Checkbox ",r.a.createElement("span",{className:"token punctuation"},"}")," ",r.a.createElement("span",{className:"token keyword"},"from")," ",r.a.createElement("span",{className:"token string"},"'@rmwc/checkbox'"),r.a.createElement("span",{className:"token punctuation"},";"),"\n",r.a.createElement("span",{className:"token keyword"},"import")," ",r.a.createElement("span",{className:"token punctuation"},"{")," Radio ",r.a.createElement("span",{className:"token punctuation"},"}")," ",r.a.createElement("span",{className:"token keyword"},"from")," ",r.a.createElement("span",{className:"token string"},"'@rmwc/radio'"),r.a.createElement("span",{className:"token punctuation"},";"),"\n","\n",r.a.createElement("span",{className:"token punctuation"},"{"),r.a.createElement("span",{className:"token comment"},"/* Without ThemeProvider, the defaults. */"),r.a.createElement("span",{className:"token punctuation"},"}"),"\n",r.a.createElement("span",{className:"token tag"},r.a.createElement("span",{className:"token tag"},r.a.createElement("span",{className:"token punctuation"},"<"),"div"),r.a.createElement("span",{className:"token punctuation"},">")),"\n","  ",r.a.createElement("span",{className:"token tag"},r.a.createElement("span",{className:"token tag"},r.a.createElement("span",{className:"token punctuation"},"<"),"Button")," ",r.a.createElement("span",{className:"token attr-name"},"raised"),r.a.createElement("span",{className:"token punctuation"},">")),"Cookies",r.a.createElement("span",{className:"token tag"},r.a.createElement("span",{className:"token tag"},r.a.createElement("span",{className:"token punctuation"},"</"),"Button"),r.a.createElement("span",{className:"token punctuation"},">")),"\n","  ",r.a.createElement("span",{className:"token tag"},r.a.createElement("span",{className:"token tag"},r.a.createElement("span",{className:"token punctuation"},"<"),"Checkbox")," ",r.a.createElement("span",{className:"token attr-name"},"label"),r.a.createElement("span",{className:"token attr-value"},r.a.createElement("span",{className:"token punctuation"},"="),r.a.createElement("span",{className:"token punctuation"},'"'),"Pizza",r.a.createElement("span",{className:"token punctuation"},'"'))," ",r.a.createElement("span",{className:"token attr-name"},"defaultChecked")," ",r.a.createElement("span",{className:"token punctuation"},"/>")),"\n","  ",r.a.createElement("span",{className:"token tag"},r.a.createElement("span",{className:"token tag"},r.a.createElement("span",{className:"token punctuation"},"<"),"Radio")," ",r.a.createElement("span",{className:"token attr-name"},"label"),r.a.createElement("span",{className:"token attr-value"},r.a.createElement("span",{className:"token punctuation"},"="),r.a.createElement("span",{className:"token punctuation"},'"'),"Icecream",r.a.createElement("span",{className:"token punctuation"},'"'))," ",r.a.createElement("span",{className:"token attr-name"},"defaultChecked")," ",r.a.createElement("span",{className:"token punctuation"},"/>")),"\n",r.a.createElement("span",{className:"token tag"},r.a.createElement("span",{className:"token tag"},r.a.createElement("span",{className:"token punctuation"},"</"),"div"),r.a.createElement("span",{className:"token punctuation"},">")),"\n","\n",r.a.createElement("span",{className:"token punctuation"},"{"),r.a.createElement("span",{className:"token comment"},"/* With ThemeProvider. */"),r.a.createElement("span",{className:"token punctuation"},"}"),"\n",r.a.createElement("span",{className:"token tag"},r.a.createElement("span",{className:"token tag"},r.a.createElement("span",{className:"token punctuation"},"<"),"ThemeProvider")," ",r.a.createElement("span",{className:"token attr-name"},"options"),r.a.createElement("span",{className:"token script language-javascript"},r.a.createElement("span",{className:"token punctuation"},"="),r.a.createElement("span",{className:"token punctuation"},"{"),r.a.createElement("span",{className:"token punctuation"},"{"),"\n","  primary",r.a.createElement("span",{className:"token punctuation"},":")," ",r.a.createElement("span",{className:"token string"},"'red'"),r.a.createElement("span",{className:"token punctuation"},","),"\n","  secondary",r.a.createElement("span",{className:"token punctuation"},":")," ",r.a.createElement("span",{className:"token string"},"'blue'"),"\n",r.a.createElement("span",{className:"token punctuation"},"}"),r.a.createElement("span",{className:"token punctuation"},"}")),r.a.createElement("span",{className:"token punctuation"},">")),"\n","  ",r.a.createElement("span",{className:"token tag"},r.a.createElement("span",{className:"token tag"},r.a.createElement("span",{className:"token punctuation"},"<"),"Button")," ",r.a.createElement("span",{className:"token attr-name"},"raised"),r.a.createElement("span",{className:"token punctuation"},">")),"Cookies",r.a.createElement("span",{className:"token tag"},r.a.createElement("span",{className:"token tag"},r.a.createElement("span",{className:"token punctuation"},"</"),"Button"),r.a.createElement("span",{className:"token punctuation"},">")),"\n","  ",r.a.createElement("span",{className:"token tag"},r.a.createElement("span",{className:"token tag"},r.a.createElement("span",{className:"token punctuation"},"<"),"Checkbox")," ",r.a.createElement("span",{className:"token attr-name"},"label"),r.a.createElement("span",{className:"token attr-value"},r.a.createElement("span",{className:"token punctuation"},"="),r.a.createElement("span",{className:"token punctuation"},'"'),"Pizza",r.a.createElement("span",{className:"token punctuation"},'"'))," ",r.a.createElement("span",{className:"token attr-name"},"defaultChecked")," ",r.a.createElement("span",{className:"token punctuation"},"/>")),"\n","  ",r.a.createElement("span",{className:"token tag"},r.a.createElement("span",{className:"token tag"},r.a.createElement("span",{className:"token punctuation"},"<"),"Radio")," ",r.a.createElement("span",{className:"token attr-name"},"label"),r.a.createElement("span",{className:"token attr-value"},r.a.createElement("span",{className:"token punctuation"},"="),r.a.createElement("span",{className:"token punctuation"},'"'),"Icecream",r.a.createElement("span",{className:"token punctuation"},'"'))," ",r.a.createElement("span",{className:"token attr-name"},"defaultChecked")," ",r.a.createElement("span",{className:"token punctuation"},"/>")),"\n",r.a.createElement("span",{className:"token tag"},r.a.createElement("span",{className:"token tag"},r.a.createElement("span",{className:"token punctuation"},"</"),"ThemeProvider"),r.a.createElement("span",{className:"token punctuation"},">")),"\n","\n",r.a.createElement("span",{className:"token punctuation"},"{"),r.a.createElement("span",{className:"token comment"},"/* Specify as many options as you want. */"),r.a.createElement("span",{className:"token punctuation"},"}"),"\n",r.a.createElement("span",{className:"token tag"},r.a.createElement("span",{className:"token tag"},r.a.createElement("span",{className:"token punctuation"},"<"),"ThemeProvider")," ",r.a.createElement("span",{className:"token attr-name"},"options"),r.a.createElement("span",{className:"token script language-javascript"},r.a.createElement("span",{className:"token punctuation"},"="),r.a.createElement("span",{className:"token punctuation"},"{"),r.a.createElement("span",{className:"token punctuation"},"{"),"\n","  primary",r.a.createElement("span",{className:"token punctuation"},":")," ",r.a.createElement("span",{className:"token string"},"'lightpink'"),r.a.createElement("span",{className:"token punctuation"},","),"\n","  secondary",r.a.createElement("span",{className:"token punctuation"},":")," ",r.a.createElement("span",{className:"token string"},"'black'"),r.a.createElement("span",{className:"token punctuation"},","),"\n","  onPrimary",r.a.createElement("span",{className:"token punctuation"},":")," ",r.a.createElement("span",{className:"token string"},"'#000'"),r.a.createElement("span",{className:"token punctuation"},","),"\n","  textPrimaryOnBackground",r.a.createElement("span",{className:"token punctuation"},":")," ",r.a.createElement("span",{className:"token string"},"'black'"),"\n",r.a.createElement("span",{className:"token punctuation"},"}"),r.a.createElement("span",{className:"token punctuation"},"}")),r.a.createElement("span",{className:"token punctuation"},">")),"\n","  ",r.a.createElement("span",{className:"token tag"},r.a.createElement("span",{className:"token tag"},r.a.createElement("span",{className:"token punctuation"},"<"),"Button")," ",r.a.createElement("span",{className:"token attr-name"},"raised"),r.a.createElement("span",{className:"token punctuation"},">")),"Cookies",r.a.createElement("span",{className:"token tag"},r.a.createElement("span",{className:"token tag"},r.a.createElement("span",{className:"token punctuation"},"</"),"Button"),r.a.createElement("span",{className:"token punctuation"},">")),"\n","  ",r.a.createElement("span",{className:"token tag"},r.a.createElement("span",{className:"token tag"},r.a.createElement("span",{className:"token punctuation"},"<"),"Checkbox")," ",r.a.createElement("span",{className:"token attr-name"},"label"),r.a.createElement("span",{className:"token attr-value"},r.a.createElement("span",{className:"token punctuation"},"="),r.a.createElement("span",{className:"token punctuation"},'"'),"Pizza",r.a.createElement("span",{className:"token punctuation"},'"'))," ",r.a.createElement("span",{className:"token attr-name"},"defaultChecked")," ",r.a.createElement("span",{className:"token punctuation"},"/>")),"\n","  ",r.a.createElement("span",{className:"token tag"},r.a.createElement("span",{className:"token tag"},r.a.createElement("span",{className:"token punctuation"},"<"),"Radio")," ",r.a.createElement("span",{className:"token attr-name"},"label"),r.a.createElement("span",{className:"token attr-value"},r.a.createElement("span",{className:"token punctuation"},"="),r.a.createElement("span",{className:"token punctuation"},'"'),"Icecream",r.a.createElement("span",{className:"token punctuation"},'"'))," ",r.a.createElement("span",{className:"token attr-name"},"defaultChecked")," ",r.a.createElement("span",{className:"token punctuation"},"/>")),"\n",r.a.createElement("span",{className:"token tag"},r.a.createElement("span",{className:"token tag"},r.a.createElement("span",{className:"token punctuation"},"</"),"ThemeProvider"),r.a.createElement("span",{className:"token punctuation"},">")),"\n")))),r.a.createElement("h2",null,"Theme Component"),r.a.createElement("p",null,"The Theme component allows you to apply theme colors to RMWC components, or components of your own. Almost every component in RMWC has a ",r.a.createElement("code",null,"theme")," prop that you can use that takes the same options as the ",r.a.createElement("code",null,"Theme")," component's ",r.a.createElement("code",null,"use")," prop."),r.a.createElement("div",{className:"example render-with-code"},r.a.createElement("div",{className:"run"},r.a.createElement(o.a,{use:"primaryBg onPrimary",wrap:!0},r.a.createElement("div",{style:{width:"4rem",height:"4rem",padding:"1rem"}},"Cookies")),r.a.createElement(o.a,{use:"secondaryBg onSecondary",wrap:!0},r.a.createElement(m.a,null,"Pizza")),r.a.createElement(m.a,{theme:"secondaryBg onSecondary"},"Pizza"),r.a.createElement("h3",null,"I ",r.a.createElement(o.a,{use:"primary"},"Want")," ",r.a.createElement(o.a,{use:"secondary"},"Icecream"))),r.a.createElement("div",{className:"source"},r.a.createElement("pre",{className:"language-jsx"},r.a.createElement("code",{className:"language-jsx"},r.a.createElement("span",{className:"token keyword"},"import")," ",r.a.createElement("span",{className:"token punctuation"},"{")," Theme ",r.a.createElement("span",{className:"token punctuation"},"}")," ",r.a.createElement("span",{className:"token keyword"},"from")," ",r.a.createElement("span",{className:"token string"},"'@rmwc/theme'"),r.a.createElement("span",{className:"token punctuation"},";"),"\n","\n",r.a.createElement("span",{className:"token keyword"},"import")," ",r.a.createElement("span",{className:"token punctuation"},"{")," Button ",r.a.createElement("span",{className:"token punctuation"},"}")," ",r.a.createElement("span",{className:"token keyword"},"from")," ",r.a.createElement("span",{className:"token string"},"'@rmwc/button'"),r.a.createElement("span",{className:"token punctuation"},";"),"\n","\n",r.a.createElement("span",{className:"token punctuation"},"{"),r.a.createElement("span",{className:"token comment"},"/* Add Theme colors to your own components. */"),r.a.createElement("span",{className:"token punctuation"},"}"),"\n",r.a.createElement("span",{className:"token tag"},r.a.createElement("span",{className:"token tag"},r.a.createElement("span",{className:"token punctuation"},"<"),"Theme")," ",r.a.createElement("span",{className:"token attr-name"},"use"),r.a.createElement("span",{className:"token attr-value"},r.a.createElement("span",{className:"token punctuation"},"="),r.a.createElement("span",{className:"token punctuation"},'"'),"primaryBg")," ",r.a.createElement("span",{className:"token attr-name"},'onPrimary"')," ",r.a.createElement("span",{className:"token attr-name"},"wrap"),r.a.createElement("span",{className:"token punctuation"},">")),"\n","  ",r.a.createElement("span",{className:"token tag"},r.a.createElement("span",{className:"token tag"},r.a.createElement("span",{className:"token punctuation"},"<"),"div")," ",r.a.createElement("span",{className:"token attr-name"},"style"),r.a.createElement("span",{className:"token script language-javascript"},r.a.createElement("span",{className:"token punctuation"},"="),r.a.createElement("span",{className:"token punctuation"},"{"),r.a.createElement("span",{className:"token punctuation"},"{"),"width",r.a.createElement("span",{className:"token punctuation"},":")," ",r.a.createElement("span",{className:"token string"},"'4rem'"),r.a.createElement("span",{className:"token punctuation"},",")," height",r.a.createElement("span",{className:"token punctuation"},":")," ",r.a.createElement("span",{className:"token string"},"'4rem'"),r.a.createElement("span",{className:"token punctuation"},",")," padding",r.a.createElement("span",{className:"token punctuation"},":")," ",r.a.createElement("span",{className:"token string"},"'1rem'"),r.a.createElement("span",{className:"token punctuation"},"}"),r.a.createElement("span",{className:"token punctuation"},"}")),r.a.createElement("span",{className:"token punctuation"},">")),"Cookies",r.a.createElement("span",{className:"token tag"},r.a.createElement("span",{className:"token tag"},r.a.createElement("span",{className:"token punctuation"},"</"),"div"),r.a.createElement("span",{className:"token punctuation"},">")),"\n",r.a.createElement("span",{className:"token tag"},r.a.createElement("span",{className:"token tag"},r.a.createElement("span",{className:"token punctuation"},"</"),"Theme"),r.a.createElement("span",{className:"token punctuation"},">")),"\n","\n",r.a.createElement("span",{className:"token punctuation"},"{"),r.a.createElement("span",{className:"token comment"},"/* These two examples are roughly equivalent. */"),r.a.createElement("span",{className:"token punctuation"},"}"),"\n",r.a.createElement("span",{className:"token tag"},r.a.createElement("span",{className:"token tag"},r.a.createElement("span",{className:"token punctuation"},"<"),"Theme")," ",r.a.createElement("span",{className:"token attr-name"},"use"),r.a.createElement("span",{className:"token attr-value"},r.a.createElement("span",{className:"token punctuation"},"="),r.a.createElement("span",{className:"token punctuation"},'"'),"secondaryBg")," ",r.a.createElement("span",{className:"token attr-name"},'onSecondary"')," ",r.a.createElement("span",{className:"token attr-name"},"wrap"),r.a.createElement("span",{className:"token punctuation"},">")),"\n","  ",r.a.createElement("span",{className:"token tag"},r.a.createElement("span",{className:"token tag"},r.a.createElement("span",{className:"token punctuation"},"<"),"Button"),r.a.createElement("span",{className:"token punctuation"},">")),"Pizza",r.a.createElement("span",{className:"token tag"},r.a.createElement("span",{className:"token tag"},r.a.createElement("span",{className:"token punctuation"},"</"),"Button"),r.a.createElement("span",{className:"token punctuation"},">")),"\n",r.a.createElement("span",{className:"token tag"},r.a.createElement("span",{className:"token tag"},r.a.createElement("span",{className:"token punctuation"},"</"),"Theme"),r.a.createElement("span",{className:"token punctuation"},">")),"\n","\n",r.a.createElement("span",{className:"token tag"},r.a.createElement("span",{className:"token tag"},r.a.createElement("span",{className:"token punctuation"},"<"),"Button")," ",r.a.createElement("span",{className:"token attr-name"},"theme"),r.a.createElement("span",{className:"token attr-value"},r.a.createElement("span",{className:"token punctuation"},"="),r.a.createElement("span",{className:"token punctuation"},'"'),"secondaryBg")," ",r.a.createElement("span",{className:"token attr-name"},'onSecondary"'),r.a.createElement("span",{className:"token punctuation"},">")),"Pizza",r.a.createElement("span",{className:"token tag"},r.a.createElement("span",{className:"token tag"},r.a.createElement("span",{className:"token punctuation"},"</"),"Button"),r.a.createElement("span",{className:"token punctuation"},">")),"\n","\n",r.a.createElement("span",{className:"token punctuation"},"{"),r.a.createElement("span",{className:"token comment"},"/* Text is one of the cases where `wrap` is not required. By default `Theme` will insert `span` tags. */"),r.a.createElement("span",{className:"token punctuation"},"}"),"\n",r.a.createElement("span",{className:"token tag"},r.a.createElement("span",{className:"token tag"},r.a.createElement("span",{className:"token punctuation"},"<"),"h3"),r.a.createElement("span",{className:"token punctuation"},">")),"I ",r.a.createElement("span",{className:"token tag"},r.a.createElement("span",{className:"token tag"},r.a.createElement("span",{className:"token punctuation"},"<"),"Theme")," ",r.a.createElement("span",{className:"token attr-name"},"use"),r.a.createElement("span",{className:"token attr-value"},r.a.createElement("span",{className:"token punctuation"},"="),r.a.createElement("span",{className:"token punctuation"},'"'),"primary",r.a.createElement("span",{className:"token punctuation"},'"')),r.a.createElement("span",{className:"token punctuation"},">")),"Want",r.a.createElement("span",{className:"token tag"},r.a.createElement("span",{className:"token tag"},r.a.createElement("span",{className:"token punctuation"},"</"),"Theme"),r.a.createElement("span",{className:"token punctuation"},">"))," ",r.a.createElement("span",{className:"token tag"},r.a.createElement("span",{className:"token tag"},r.a.createElement("span",{className:"token punctuation"},"<"),"Theme")," ",r.a.createElement("span",{className:"token attr-name"},"use"),r.a.createElement("span",{className:"token attr-value"},r.a.createElement("span",{className:"token punctuation"},"="),r.a.createElement("span",{className:"token punctuation"},'"'),"secondary",r.a.createElement("span",{className:"token punctuation"},'"')),r.a.createElement("span",{className:"token punctuation"},">")),"Icecream",r.a.createElement("span",{className:"token tag"},r.a.createElement("span",{className:"token tag"},r.a.createElement("span",{className:"token punctuation"},"</"),"Theme"),r.a.createElement("span",{className:"token punctuation"},">")),r.a.createElement("span",{className:"token tag"},r.a.createElement("span",{className:"token tag"},r.a.createElement("span",{className:"token punctuation"},"</"),"h3"),r.a.createElement("span",{className:"token punctuation"},">")),"\n")))),r.a.createElement("div",{className:"example render-only"},r.a.createElement("div",{className:"run"},r.a.createElement(i.a,{docs:k,displayName:"ThemeProvider"}),r.a.createElement(i.a,{docs:k,displayName:"Theme"}))))}}]),a}(r.a.Component);a.default=d},218:function(e,a,t){"use strict";function n(e){if(Array.isArray(e)){for(var a=0,t=Array(e.length);a<e.length;a++)t[a]=e[a];return t}return Array.from(e)}function s(e,a){if(!(e instanceof a))throw new TypeError("Cannot call a class as a function")}function l(e,a){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!a||"object"!==typeof a&&"function"!==typeof a?e:a}function c(e,a){if("function"!==typeof a&&null!==a)throw new TypeError("Super expression must either be null or a function, not "+typeof a);e.prototype=Object.create(a&&a.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),a&&(Object.setPrototypeOf?Object.setPrototypeOf(e,a):e.__proto__=a)}t.d(a,"a",function(){return u});var r=t(0),o=(t.n(r),function(){function e(e,a){var t=[],n=!0,s=!1,l=void 0;try{for(var c,r=e[Symbol.iterator]();!(n=(c=r.next()).done)&&(t.push(c.value),!a||t.length!==a);n=!0);}catch(e){s=!0,l=e}finally{try{!n&&r.return&&r.return()}finally{if(s)throw l}}return t}return function(a,t){if(Array.isArray(a))return a;if(Symbol.iterator in Object(a))return e(a,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}()),m=function(){function e(e,a){for(var t=0;t<a.length;t++){var n=a[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(a,t,n){return t&&e(a.prototype,t),n&&e(a,n),a}}(),u=function(e){function a(e){s(this,a);var t=l(this,(a.__proto__||Object.getPrototypeOf(a)).call(this,e));return t.flatDocs=Object.values(e.docs).reduce(function(e,a){return e.concat(a)},[]),t}return c(a,e),m(a,[{key:"findDocDef",value:function(e){return this.flatDocs.find(function(a){return a.displayName===e})}},{key:"renderRaw",value:function(e){return e.split("\n").map(function(e,a){return r.createElement(r.Fragment,{key:a},0!==a&&r.createElement("br",null),e.split("  ").map(function(e,a){return r.createElement(r.Fragment,{key:a},0!==a&&r.createElement(r.Fragment,null,"\xa0\xa0"),e)}))})}},{key:"getComposedDefs",value:function(e){var a=this;return e.map(function(e){return a.findDocDef(e)}).filter(Boolean).reduce(function(e,a){return Object.assign({},a,e,{props:a.props||e.props?Object.assign({},a.props||{},e.props||{}):null})},{})}},{key:"render",value:function(){var e=this,a=this.props,t=a.displayName,s=a.composes,l=void 0===s?[]:s,c=this.getComposedDefs([t].concat(n(l)));return r.createElement("div",{className:"document-component"},r.createElement("h2",null,t),c&&!!c.description&&r.createElement("p",null,c.description),c&&c.props&&r.createElement("div",null,r.createElement("h3",null,"Props"),r.createElement("table",null,r.createElement("thead",null,r.createElement("tr",null,r.createElement("th",null,"Name"),r.createElement("th",null,"Type"),r.createElement("th",null,"Default"),r.createElement("th",null,"Description"))),r.createElement("tbody",null,Object.entries(c.props).map(function(a,t){var n=o(a,2),s=n[0],l=n[1];return r.createElement("tr",{key:t},r.createElement("td",{className:l.required?"required":""},r.createElement("code",null,s)),r.createElement("td",null,r.createElement("code",null,l.flowType&&e.renderRaw(l.flowType.raw||l.flowType.name||""))),r.createElement("td",null,l.defaultValue?r.createElement("code",null,l.defaultValue.value):r.createElement("code",null,"undefined")),r.createElement("td",null,l.description||""))})))))}}]),a}(r.Component)},248:function(e,a){e.exports=[{description:"A Theme Component.",displayName:"Theme",methods:[],props:{use:{flowType:{name:"union",raw:"ThemeOptionT | ThemeOptionT[]",elements:[{name:"union",raw:"string | 'primary' | 'secondary' | 'background' | 'surface' | 'onPrimary' | 'onSecondary' | 'onSurface' | 'textPrimaryOnBackground' | 'textSecondaryOnBackground' | 'textHintOnBackground' | 'textDisabledOnBackground' | 'textIconOnBackground' | 'textPrimaryOnLight' | 'textSecondaryOnLight' | 'textHintOnLight' | 'textDisabledOnLight' | 'textIconOnLight' | 'textPrimaryOnDark' | 'textSecondaryOnDark' | 'textHintOnDark' | 'textDisabledOnDark' | 'textIconOnDark'",elements:[{name:"string"},{name:"literal",value:"'primary'"},{name:"literal",value:"'secondary'"},{name:"literal",value:"'background'"},{name:"literal",value:"'surface'"},{name:"literal",value:"'onPrimary'"},{name:"literal",value:"'onSecondary'"},{name:"literal",value:"'onSurface'"},{name:"literal",value:"'textPrimaryOnBackground'"},{name:"literal",value:"'textSecondaryOnBackground'"},{name:"literal",value:"'textHintOnBackground'"},{name:"literal",value:"'textDisabledOnBackground'"},{name:"literal",value:"'textIconOnBackground'"},{name:"literal",value:"'textPrimaryOnLight'"},{name:"literal",value:"'textSecondaryOnLight'"},{name:"literal",value:"'textHintOnLight'"},{name:"literal",value:"'textDisabledOnLight'"},{name:"literal",value:"'textIconOnLight'"},{name:"literal",value:"'textPrimaryOnDark'"},{name:"literal",value:"'textSecondaryOnDark'"},{name:"literal",value:"'textHintOnDark'"},{name:"literal",value:"'textDisabledOnDark'"},{name:"literal",value:"'textIconOnDark'"}]},{name:"Array",elements:[{name:"union",raw:"string | 'primary' | 'secondary' | 'background' | 'surface' | 'onPrimary' | 'onSecondary' | 'onSurface' | 'textPrimaryOnBackground' | 'textSecondaryOnBackground' | 'textHintOnBackground' | 'textDisabledOnBackground' | 'textIconOnBackground' | 'textPrimaryOnLight' | 'textSecondaryOnLight' | 'textHintOnLight' | 'textDisabledOnLight' | 'textIconOnLight' | 'textPrimaryOnDark' | 'textSecondaryOnDark' | 'textHintOnDark' | 'textDisabledOnDark' | 'textIconOnDark'",elements:[{name:"string"},{name:"literal",value:"'primary'"},{name:"literal",value:"'secondary'"},{name:"literal",value:"'background'"},{name:"literal",value:"'surface'"},{name:"literal",value:"'onPrimary'"},{name:"literal",value:"'onSecondary'"},{name:"literal",value:"'onSurface'"},{name:"literal",value:"'textPrimaryOnBackground'"},{name:"literal",value:"'textSecondaryOnBackground'"},{name:"literal",value:"'textHintOnBackground'"},{name:"literal",value:"'textDisabledOnBackground'"},{name:"literal",value:"'textIconOnBackground'"},{name:"literal",value:"'textPrimaryOnLight'"},{name:"literal",value:"'textSecondaryOnLight'"},{name:"literal",value:"'textHintOnLight'"},{name:"literal",value:"'textDisabledOnLight'"},{name:"literal",value:"'textIconOnLight'"},{name:"literal",value:"'textPrimaryOnDark'"},{name:"literal",value:"'textSecondaryOnDark'"},{name:"literal",value:"'textHintOnDark'"},{name:"literal",value:"'textDisabledOnDark'"},{name:"literal",value:"'textIconOnDark'"}]}],raw:"ThemeOptionT[]"}]},required:!0,description:"A theme option as a string, a space separated string for multiple values, or an array of valid theme options."},wrap:{flowType:{name:"boolean"},required:!1,description:"Collapse the styles directly onto the child component. This eliminates the need for a wrapping `span` element and may be required for applying things like background-colors."}}},{description:"A ThemeProvider. This sets theme colors for its child tree.",displayName:"ThemeProvider",methods:[{name:"colors",docblock:null,modifiers:[],params:[],returns:null}],props:{options:{flowType:{name:"signature",type:"object",raw:"{ [key: string]: string }",signature:{properties:[{key:{name:"string"},value:{name:"string",required:!0}}]}},required:!0,description:"Any theme option pointing to a valid CSS value."},style:{flowType:{name:"Object"},required:!1,description:"Additional standard inline styles that will be merged into the style tag."}}}]}});
//# sourceMappingURL=5.97cd79c8.chunk.js.map