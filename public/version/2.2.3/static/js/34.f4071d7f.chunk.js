webpackJsonp([34],{183:function(e,a,t){"use strict";function n(e,a){if(!(e instanceof a))throw new TypeError("Cannot call a class as a function")}function s(e,a){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!a||"object"!==typeof a&&"function"!==typeof a?e:a}function c(e,a){if("function"!==typeof a&&null!==a)throw new TypeError("Super expression must either be null or a function, not "+typeof a);e.prototype=Object.create(a&&a.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),a&&(Object.setPrototypeOf?Object.setPrototypeOf(e,a):e.__proto__=a)}Object.defineProperty(a,"__esModule",{value:!0}),t.d(a,"attributes",function(){return r});var l=t(0),m=t.n(l),o=function(){function e(e,a){for(var t=0;t<a.length;t++){var n=a[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(a,t,n){return t&&e(a.prototype,t),n&&e(a,n),a}}(),r={},p=function(e){function a(e){n(this,a);var t=s(this,(a.__proto__||Object.getPrototypeOf(a)).call(this,e));return t.state={},t}return c(a,e),o(a,[{key:"render",value:function(){return m.a.createElement("div",null,m.a.createElement("h1",null,"Styling and Theming"),m.a.createElement("blockquote",null,m.a.createElement("p",null,"RMWC doesn't include any styles of its own, but there are multiple ways you can style and customize your components.")),m.a.createElement("ul",null,m.a.createElement("li",null,m.a.createElement("a",{href:"#css"},"Standard CSS")),m.a.createElement("li",null,m.a.createElement("a",{href:"#css-modules"},"CSS Modules")),m.a.createElement("li",null,m.a.createElement("a",{href:"#styled-components"},"Styled Components")),m.a.createElement("li",null,m.a.createElement("a",{href:"#runtime-color-theming"},"Runtime Color Theming")),m.a.createElement("li",null,m.a.createElement("a",{href:"#dark-mode"},"Dark Mode Support")),m.a.createElement("li",null,m.a.createElement("a",{href:"#sass-customization"},"SASS Customization")),m.a.createElement("li",null,m.a.createElement("a",{href:"#theme-themeprovider"},"Theme and ThemeProvider"))),m.a.createElement("div",{className:"example render-only"},m.a.createElement("div",{className:"run"},m.a.createElement("div",{id:"css"}))),m.a.createElement("h2",null,"Using Standard CSS"),m.a.createElement("p",null,"All of the components have the ",m.a.createElement("code",null,"material-components-web")," classNames on them and you can add your own."),m.a.createElement("div",{className:"example code-only"},m.a.createElement("div",{className:"source"},m.a.createElement("pre",{className:"language-jsx"},m.a.createElement("code",{className:"language-jsx"},m.a.createElement("span",{className:"token comment"},"/** in your JSX */"),"\n",m.a.createElement("span",{className:"token keyword"},"import")," ",m.a.createElement("span",{className:"token punctuation"},"{")," Button ",m.a.createElement("span",{className:"token punctuation"},"}")," ",m.a.createElement("span",{className:"token keyword"},"from")," ",m.a.createElement("span",{className:"token string"},"'@rmwc/button'"),m.a.createElement("span",{className:"token punctuation"},";"),"\n","\n",m.a.createElement("span",{className:"token keyword"},"const")," MyComponent ",m.a.createElement("span",{className:"token operator"},"=")," props ",m.a.createElement("span",{className:"token operator"},"="),m.a.createElement("span",{className:"token operator"},">")," ",m.a.createElement("span",{className:"token punctuation"},"("),"\n","  ",m.a.createElement("span",{className:"token tag"},m.a.createElement("span",{className:"token tag"},m.a.createElement("span",{className:"token punctuation"},"<"),"Button")," ",m.a.createElement("span",{className:"token attr-name"},"className"),m.a.createElement("span",{className:"token attr-value"},m.a.createElement("span",{className:"token punctuation"},"="),m.a.createElement("span",{className:"token punctuation"},'"'),"my-custom-classname",m.a.createElement("span",{className:"token punctuation"},'"')),m.a.createElement("span",{className:"token punctuation"},">")),"Hello World",m.a.createElement("span",{className:"token tag"},m.a.createElement("span",{className:"token tag"},m.a.createElement("span",{className:"token punctuation"},"</"),"Button"),m.a.createElement("span",{className:"token punctuation"},">")),"\n",m.a.createElement("span",{className:"token punctuation"},")"),m.a.createElement("span",{className:"token punctuation"},";"),"\n")))),m.a.createElement("div",{className:"example code-only"},m.a.createElement("div",{className:"source"},m.a.createElement("pre",{className:"language-css"},m.a.createElement("code",{className:"language-css"},m.a.createElement("span",{className:"token comment"},"/** in your CSS */"),"\n",m.a.createElement("span",{className:"token selector"},m.a.createElement("span",{className:"token class"},".my-custom-className")," "),m.a.createElement("span",{className:"token punctuation"},"{"),"\n","    ",m.a.createElement("span",{className:"token property"},"color"),m.a.createElement("span",{className:"token punctuation"},":")," red",m.a.createElement("span",{className:"token punctuation"},";"),"\n",m.a.createElement("span",{className:"token punctuation"},"}"),"\n","\n",m.a.createElement("span",{className:"token selector"},m.a.createElement("span",{className:"token class"},".mdc-button")," "),m.a.createElement("span",{className:"token punctuation"},"{"),"\n","    ",m.a.createElement("span",{className:"token property"},"font-weight"),m.a.createElement("span",{className:"token punctuation"},":")," bold",m.a.createElement("span",{className:"token punctuation"},";"),"\n",m.a.createElement("span",{className:"token punctuation"},"}"),"\n")))),m.a.createElement("div",{className:"example render-only"},m.a.createElement("div",{className:"run"},m.a.createElement("div",{id:"css-modules"}))),m.a.createElement("h2",null,"Using CSS Modules"),m.a.createElement("p",null,"Just add your className. If you need to target a node that is not directly exposed by RMWC, you can use the global modifier in your CSS. In this example, you can target the inner wrapper of a DrawerHeader."),m.a.createElement("div",{className:"example code-only"},m.a.createElement("div",{className:"source"},m.a.createElement("pre",{className:"language-jsx"},m.a.createElement("code",{className:"language-jsx"},m.a.createElement("span",{className:"token comment"},"/** in your JSX */"),"\n",m.a.createElement("span",{className:"token keyword"},"import")," ",m.a.createElement("span",{className:"token punctuation"},"{")," DrawerHeader ",m.a.createElement("span",{className:"token punctuation"},"}")," ",m.a.createElement("span",{className:"token keyword"},"from")," ",m.a.createElement("span",{className:"token string"},"'@rmwc/drawer'"),m.a.createElement("span",{className:"token punctuation"},";"),"\n","Import styles ",m.a.createElement("span",{className:"token keyword"},"from")," ",m.a.createElement("span",{className:"token string"},"'./my-style-sheet.css'"),m.a.createElement("span",{className:"token punctuation"},";"),"\n","\n",m.a.createElement("span",{className:"token keyword"},"const")," MyComponent ",m.a.createElement("span",{className:"token operator"},"=")," props ",m.a.createElement("span",{className:"token operator"},"="),m.a.createElement("span",{className:"token operator"},">")," ",m.a.createElement("span",{className:"token punctuation"},"("),"\n","  ",m.a.createElement("span",{className:"token tag"},m.a.createElement("span",{className:"token tag"},m.a.createElement("span",{className:"token punctuation"},"<"),"DrawerHeader")," ",m.a.createElement("span",{className:"token attr-name"},"className"),m.a.createElement("span",{className:"token script language-javascript"},m.a.createElement("span",{className:"token punctuation"},"="),m.a.createElement("span",{className:"token punctuation"},"{"),"styles",m.a.createElement("span",{className:"token punctuation"},"."),"myDrawerHeader",m.a.createElement("span",{className:"token punctuation"},"}")),m.a.createElement("span",{className:"token punctuation"},">")),"Hello World",m.a.createElement("span",{className:"token tag"},m.a.createElement("span",{className:"token tag"},m.a.createElement("span",{className:"token punctuation"},"</"),"DrawerHeader"),m.a.createElement("span",{className:"token punctuation"},">")),"\n",m.a.createElement("span",{className:"token punctuation"},")"),m.a.createElement("span",{className:"token punctuation"},";"),"\n")))),m.a.createElement("div",{className:"example code-only"},m.a.createElement("div",{className:"source"},m.a.createElement("pre",{className:"language-css"},m.a.createElement("code",{className:"language-css"},m.a.createElement("span",{className:"token comment"},"/** in your CSS */"),"\n",m.a.createElement("span",{className:"token selector"},m.a.createElement("span",{className:"token class"},".myDrawerHeader")," ",m.a.createElement("span",{className:"token pseudo-class"},":global(.mdc-drawer__header-content)")," "),m.a.createElement("span",{className:"token punctuation"},"{"),"\n","    ",m.a.createElement("span",{className:"token property"},"color"),m.a.createElement("span",{className:"token punctuation"},":")," red",m.a.createElement("span",{className:"token punctuation"},";"),"\n",m.a.createElement("span",{className:"token punctuation"},"}"),"\n")))),m.a.createElement("div",{className:"example render-only"},m.a.createElement("div",{className:"run"},m.a.createElement("div",{id:"styled-components"}))),m.a.createElement("h2",null,"Using the Styled Components library"),m.a.createElement("h3",null,"Basic Styling"),m.a.createElement("p",null,"Using RMWC with ",m.a.createElement("code",null,"styled-components")," is a breeze. For most use cases the following code works well."),m.a.createElement("div",{className:"example code-only"},m.a.createElement("div",{className:"source"},m.a.createElement("pre",{className:"language-jsx"},m.a.createElement("code",{className:"language-jsx"},m.a.createElement("span",{className:"token keyword"},"import")," styled ",m.a.createElement("span",{className:"token keyword"},"from")," ",m.a.createElement("span",{className:"token string"},"'styled-components'"),m.a.createElement("span",{className:"token punctuation"},";"),"\n",m.a.createElement("span",{className:"token keyword"},"import")," ",m.a.createElement("span",{className:"token punctuation"},"{")," Button ",m.a.createElement("span",{className:"token punctuation"},"}")," ",m.a.createElement("span",{className:"token keyword"},"from")," ",m.a.createElement("span",{className:"token string"},"'@rmwc/button'"),m.a.createElement("span",{className:"token punctuation"},";"),"\n","\n",m.a.createElement("span",{className:"token keyword"},"const")," StyledButton ",m.a.createElement("span",{className:"token operator"},"=")," ",m.a.createElement("span",{className:"token function"},"styled"),m.a.createElement("span",{className:"token punctuation"},"("),"Button",m.a.createElement("span",{className:"token punctuation"},")"),m.a.createElement("span",{className:"token template-string"},m.a.createElement("span",{className:"token string"},"`","\n","  // Your Styles Here.","\n","`")),m.a.createElement("span",{className:"token punctuation"},";"),"\n")))),m.a.createElement("h3",null,"Props Based Styling"),m.a.createElement("p",null,"You will eventually want some condition styles based on props passed into the component."),m.a.createElement("div",{className:"example code-only"},m.a.createElement("div",{className:"source"},m.a.createElement("pre",{className:"language-jsx"},m.a.createElement("code",{className:"language-jsx"},m.a.createElement("span",{className:"token keyword"},"import")," styled",m.a.createElement("span",{className:"token punctuation"},",")," ",m.a.createElement("span",{className:"token punctuation"},"{")," css ",m.a.createElement("span",{className:"token punctuation"},"}")," ",m.a.createElement("span",{className:"token keyword"},"from")," ",m.a.createElement("span",{className:"token string"},"'styled-components'"),m.a.createElement("span",{className:"token punctuation"},";"),"\n",m.a.createElement("span",{className:"token keyword"},"import")," ",m.a.createElement("span",{className:"token punctuation"},"{")," Button ",m.a.createElement("span",{className:"token punctuation"},"}")," ",m.a.createElement("span",{className:"token keyword"},"from")," ",m.a.createElement("span",{className:"token string"},"'@rmwc/button'"),m.a.createElement("span",{className:"token punctuation"},";"),"\n","\n",m.a.createElement("span",{className:"token keyword"},"const")," StyledButton ",m.a.createElement("span",{className:"token operator"},"=")," ",m.a.createElement("span",{className:"token function"},"styled"),m.a.createElement("span",{className:"token punctuation"},"("),m.a.createElement("span",{className:"token punctuation"},"("),m.a.createElement("span",{className:"token punctuation"},"{")," isFullWidth",m.a.createElement("span",{className:"token punctuation"},",")," ",m.a.createElement("span",{className:"token operator"},"..."),"otherProps ",m.a.createElement("span",{className:"token punctuation"},"}"),m.a.createElement("span",{className:"token punctuation"},")")," ",m.a.createElement("span",{className:"token operator"},"="),m.a.createElement("span",{className:"token operator"},">")," ",m.a.createElement("span",{className:"token punctuation"},"("),"\n","  ",m.a.createElement("span",{className:"token operator"},"<"),"Button ",m.a.createElement("span",{className:"token punctuation"},"{"),m.a.createElement("span",{className:"token operator"},"..."),"otherProps",m.a.createElement("span",{className:"token punctuation"},"}")," ",m.a.createElement("span",{className:"token operator"},"/"),m.a.createElement("span",{className:"token operator"},">"),"\n",m.a.createElement("span",{className:"token punctuation"},")"),m.a.createElement("span",{className:"token punctuation"},")"),m.a.createElement("span",{className:"token template-string"},m.a.createElement("span",{className:"token string"},"`","\n","  $","{","props =>","\n","  props.isFullWidth","\n","    ? css`")),"\n","          ",m.a.createElement("span",{className:"token comment"},"// Styles for full width here"),"\n","        ",m.a.createElement("span",{className:"token template-string"},m.a.createElement("span",{className:"token string"},"`","\n","    : css`")),"\n","          ",m.a.createElement("span",{className:"token comment"},"// Styles for non full width here."),"\n","        ",m.a.createElement("span",{className:"token template-string"},m.a.createElement("span",{className:"token string"},"`","}",";","\n","`")),m.a.createElement("span",{className:"token punctuation"},";"),"\n")))),m.a.createElement("h3",null,"Make sure to consume props"),m.a.createElement("div",{className:"example code-only"},m.a.createElement("div",{className:"source"},m.a.createElement("pre",{className:"language-jsx"},m.a.createElement("code",{className:"language-jsx"},m.a.createElement("span",{className:"token function"},"styled"),m.a.createElement("span",{className:"token punctuation"},"("),m.a.createElement("span",{className:"token punctuation"},"("),m.a.createElement("span",{className:"token punctuation"},"{")," isFullWidth",m.a.createElement("span",{className:"token punctuation"},",")," ",m.a.createElement("span",{className:"token operator"},"..."),"otherProps ",m.a.createElement("span",{className:"token punctuation"},"}"),m.a.createElement("span",{className:"token punctuation"},")")," ",m.a.createElement("span",{className:"token operator"},"="),m.a.createElement("span",{className:"token operator"},">")," ",m.a.createElement("span",{className:"token operator"},"<"),"Button ",m.a.createElement("span",{className:"token punctuation"},"{"),m.a.createElement("span",{className:"token operator"},"..."),"otherProps",m.a.createElement("span",{className:"token punctuation"},"}")," ",m.a.createElement("span",{className:"token operator"},"/"),m.a.createElement("span",{className:"token operator"},">"),m.a.createElement("span",{className:"token punctuation"},")"),m.a.createElement("span",{className:"token punctuation"},";"),"\n")))),m.a.createElement("p",null,"If you pass an invalid prop to a dom node, in this case ",m.a.createElement("code",null,"isFullWidth"),", React will complain. Here we are stripping this prop out using object deconstruction, and then passing the remaining valid props to ",m.a.createElement("code",null,"Button"),". However this doesn't strip the prop from being used in the styling."),m.a.createElement("h3",null,"Adjusting RMWC props and styling."),m.a.createElement("p",null,"You can take this to the next level with ",m.a.createElement("code",null,"Select")," with the following code."),m.a.createElement("div",{className:"example code-only"},m.a.createElement("div",{className:"source"},m.a.createElement("pre",{className:"language-jsx"},m.a.createElement("code",{className:"language-jsx"},m.a.createElement("span",{className:"token keyword"},"import")," styled ",m.a.createElement("span",{className:"token keyword"},"from")," ",m.a.createElement("span",{className:"token string"},"'styled-components'"),m.a.createElement("span",{className:"token punctuation"},";"),"\n",m.a.createElement("span",{className:"token keyword"},"import")," ",m.a.createElement("span",{className:"token punctuation"},"{")," Select ",m.a.createElement("span",{className:"token punctuation"},"}")," ",m.a.createElement("span",{className:"token keyword"},"from")," ",m.a.createElement("span",{className:"token string"},"'@rmwc/select'"),m.a.createElement("span",{className:"token punctuation"},";"),"\n","\n",m.a.createElement("span",{className:"token keyword"},"const")," StyledSelect ",m.a.createElement("span",{className:"token operator"},"=")," ",m.a.createElement("span",{className:"token function"},"styled"),m.a.createElement("span",{className:"token punctuation"},"("),m.a.createElement("span",{className:"token punctuation"},"("),m.a.createElement("span",{className:"token punctuation"},"{")," label",m.a.createElement("span",{className:"token punctuation"},",")," ",m.a.createElement("span",{className:"token operator"},"..."),"otherProps ",m.a.createElement("span",{className:"token punctuation"},"}"),m.a.createElement("span",{className:"token punctuation"},")")," ",m.a.createElement("span",{className:"token operator"},"="),m.a.createElement("span",{className:"token operator"},">")," ",m.a.createElement("span",{className:"token punctuation"},"("),"\n","  ",m.a.createElement("span",{className:"token tag"},m.a.createElement("span",{className:"token tag"},m.a.createElement("span",{className:"token punctuation"},"<"),"Select"),"\n","    ",m.a.createElement("span",{className:"token attr-name"},"cssOnly"),m.a.createElement("span",{className:"token script language-javascript"},m.a.createElement("span",{className:"token punctuation"},"="),m.a.createElement("span",{className:"token punctuation"},"{"),"window",m.a.createElement("span",{className:"token punctuation"},"."),m.a.createElement("span",{className:"token function"},"matchMedia"),m.a.createElement("span",{className:"token punctuation"},"("),m.a.createElement("span",{className:"token string"},"'(max-width: 767px)'"),m.a.createElement("span",{className:"token punctuation"},")"),m.a.createElement("span",{className:"token punctuation"},"."),"matches",m.a.createElement("span",{className:"token punctuation"},"}")),"\n","    ",m.a.createElement("span",{className:"token attr-name"},"label"),m.a.createElement("span",{className:"token script language-javascript"},m.a.createElement("span",{className:"token punctuation"},"="),m.a.createElement("span",{className:"token punctuation"},"{"),"window",m.a.createElement("span",{className:"token punctuation"},"."),m.a.createElement("span",{className:"token function"},"matchMedia"),m.a.createElement("span",{className:"token punctuation"},"("),m.a.createElement("span",{className:"token string"},"'(min-width: 768px)'"),m.a.createElement("span",{className:"token punctuation"},")"),m.a.createElement("span",{className:"token punctuation"},"."),"matches ",m.a.createElement("span",{className:"token operator"},"?")," label ",m.a.createElement("span",{className:"token punctuation"},":")," ",m.a.createElement("span",{className:"token string"},"''"),m.a.createElement("span",{className:"token punctuation"},"}")),"\n","    ",m.a.createElement("span",{className:"token attr-name"},"placeholder"),m.a.createElement("span",{className:"token script language-javascript"},m.a.createElement("span",{className:"token punctuation"},"="),m.a.createElement("span",{className:"token punctuation"},"{"),"window",m.a.createElement("span",{className:"token punctuation"},"."),m.a.createElement("span",{className:"token function"},"matchMedia"),m.a.createElement("span",{className:"token punctuation"},"("),m.a.createElement("span",{className:"token string"},"'(max-width: 767px)'"),m.a.createElement("span",{className:"token punctuation"},")"),m.a.createElement("span",{className:"token punctuation"},"."),"matches ",m.a.createElement("span",{className:"token operator"},"?")," label ",m.a.createElement("span",{className:"token punctuation"},":")," ",m.a.createElement("span",{className:"token string"},"''"),m.a.createElement("span",{className:"token punctuation"},"}")),"\n","    ",m.a.createElement("span",{className:"token attr-name"},"{","...otherProps","}"),"\n","  ",m.a.createElement("span",{className:"token punctuation"},"/>")),"\n",m.a.createElement("span",{className:"token punctuation"},")"),m.a.createElement("span",{className:"token punctuation"},")"),m.a.createElement("span",{className:"token template-string"},m.a.createElement("span",{className:"token string"},"`","\n","  // Your Styles Here.","\n","`")),m.a.createElement("span",{className:"token punctuation"},";"),"\n")))),m.a.createElement("p",null,"Here we are toggling the use of ",m.a.createElement("code",null,"cssOnly"),", ",m.a.createElement("code",null,"label"),", and ",m.a.createElement("code",null,"placeholder")," with a js media query."),m.a.createElement("h3",null,"Advanced Component Styling."),m.a.createElement("p",null,"Lets say you want an icon in ",m.a.createElement("code",null,"Select")," just like you can have it on ",m.a.createElement("code",null,"TextField"),"."),m.a.createElement("div",{className:"example code-only"},m.a.createElement("div",{className:"source"},m.a.createElement("pre",{className:"language-jsx"},m.a.createElement("code",{className:"language-jsx"},m.a.createElement("span",{className:"token keyword"},"import")," styled",m.a.createElement("span",{className:"token punctuation"},",")," ",m.a.createElement("span",{className:"token punctuation"},"{")," css ",m.a.createElement("span",{className:"token punctuation"},"}")," ",m.a.createElement("span",{className:"token keyword"},"from")," ",m.a.createElement("span",{className:"token string"},"'styled-components'"),m.a.createElement("span",{className:"token punctuation"},";"),"\n",m.a.createElement("span",{className:"token keyword"},"import")," ",m.a.createElement("span",{className:"token punctuation"},"{")," TextFieldIcon ",m.a.createElement("span",{className:"token punctuation"},"}")," ",m.a.createElement("span",{className:"token keyword"},"from")," ",m.a.createElement("span",{className:"token string"},"'@rmwc/textField'"),m.a.createElement("span",{className:"token punctuation"},";"),"\n",m.a.createElement("span",{className:"token keyword"},"import")," ",m.a.createElement("span",{className:"token punctuation"},"{")," Select ",m.a.createElement("span",{className:"token punctuation"},"}")," ",m.a.createElement("span",{className:"token keyword"},"from")," ",m.a.createElement("span",{className:"token string"},"'@rmwc/select'"),m.a.createElement("span",{className:"token punctuation"},";"),"\n","\n",m.a.createElement("span",{className:"token keyword"},"const")," BaseSelect ",m.a.createElement("span",{className:"token operator"},"=")," ",m.a.createElement("span",{className:"token function"},"styled"),m.a.createElement("span",{className:"token punctuation"},"("),m.a.createElement("span",{className:"token punctuation"},"("),m.a.createElement("span",{className:"token punctuation"},"{")," label",m.a.createElement("span",{className:"token punctuation"},",")," ",m.a.createElement("span",{className:"token operator"},"..."),"otherProps ",m.a.createElement("span",{className:"token punctuation"},"}"),m.a.createElement("span",{className:"token punctuation"},")")," ",m.a.createElement("span",{className:"token operator"},"="),m.a.createElement("span",{className:"token operator"},">")," ",m.a.createElement("span",{className:"token punctuation"},"("),"\n","  ",m.a.createElement("span",{className:"token tag"},m.a.createElement("span",{className:"token tag"},m.a.createElement("span",{className:"token punctuation"},"<"),"Select")," ",m.a.createElement("span",{className:"token attr-name"},"label"),m.a.createElement("span",{className:"token script language-javascript"},m.a.createElement("span",{className:"token punctuation"},"="),m.a.createElement("span",{className:"token punctuation"},"{"),"label",m.a.createElement("span",{className:"token punctuation"},"}"))," ",m.a.createElement("span",{className:"token punctuation"},"/>")),"\n",m.a.createElement("span",{className:"token punctuation"},")"),m.a.createElement("span",{className:"token punctuation"},")"),m.a.createElement("span",{className:"token template-string"},m.a.createElement("span",{className:"token string"},"`","\n","  // ...","\n","`")),m.a.createElement("span",{className:"token punctuation"},";"),"\n","\n",m.a.createElement("span",{className:"token keyword"},"const")," SelectIconRow ",m.a.createElement("span",{className:"token operator"},"=")," ",m.a.createElement("span",{className:"token function"},"styled"),m.a.createElement("span",{className:"token punctuation"},"("),m.a.createElement("span",{className:"token punctuation"},"("),m.a.createElement("span",{className:"token punctuation"},"{")," children",m.a.createElement("span",{className:"token punctuation"},",")," filter",m.a.createElement("span",{className:"token punctuation"},",")," ",m.a.createElement("span",{className:"token operator"},"..."),"otherProps ",m.a.createElement("span",{className:"token punctuation"},"}"),m.a.createElement("span",{className:"token punctuation"},")")," ",m.a.createElement("span",{className:"token operator"},"="),m.a.createElement("span",{className:"token operator"},">")," ",m.a.createElement("span",{className:"token punctuation"},"("),"\n","  ",m.a.createElement("span",{className:"token operator"},"<"),"div ",m.a.createElement("span",{className:"token punctuation"},"{"),m.a.createElement("span",{className:"token operator"},"..."),"otherProps",m.a.createElement("span",{className:"token punctuation"},"}"),m.a.createElement("span",{className:"token operator"},">"),m.a.createElement("span",{className:"token punctuation"},"{"),"children",m.a.createElement("span",{className:"token punctuation"},"}"),m.a.createElement("span",{className:"token tag"},m.a.createElement("span",{className:"token tag"},m.a.createElement("span",{className:"token punctuation"},"</"),"div"),m.a.createElement("span",{className:"token punctuation"},">")),"\n",m.a.createElement("span",{className:"token punctuation"},")"),m.a.createElement("span",{className:"token punctuation"},")"),m.a.createElement("span",{className:"token template-string"},m.a.createElement("span",{className:"token string"},"`","\n","  // ...","\n","`")),m.a.createElement("span",{className:"token punctuation"},";"),"\n","\n",m.a.createElement("span",{className:"token keyword"},"export")," ",m.a.createElement("span",{className:"token keyword"},"default")," ",m.a.createElement("span",{className:"token punctuation"},"{"),"\n","  Select",m.a.createElement("span",{className:"token punctuation"},":")," BaseSelect",m.a.createElement("span",{className:"token punctuation"},","),"\n","  SelectIconRow",m.a.createElement("span",{className:"token punctuation"},","),"\n","\n","  SelectIcon",m.a.createElement("span",{className:"token punctuation"},":")," props ",m.a.createElement("span",{className:"token operator"},"="),m.a.createElement("span",{className:"token operator"},">")," ",m.a.createElement("span",{className:"token punctuation"},"("),"\n","    ",m.a.createElement("span",{className:"token tag"},m.a.createElement("span",{className:"token tag"},m.a.createElement("span",{className:"token punctuation"},"<"),"SelectIconRow")," ",m.a.createElement("span",{className:"token attr-name"},"filter"),m.a.createElement("span",{className:"token script language-javascript"},m.a.createElement("span",{className:"token punctuation"},"="),m.a.createElement("span",{className:"token punctuation"},"{"),"props",m.a.createElement("span",{className:"token punctuation"},"."),"filter",m.a.createElement("span",{className:"token punctuation"},"}"))," ",m.a.createElement("span",{className:"token attr-name"},"value"),m.a.createElement("span",{className:"token script language-javascript"},m.a.createElement("span",{className:"token punctuation"},"="),m.a.createElement("span",{className:"token punctuation"},"{"),"props",m.a.createElement("span",{className:"token punctuation"},"."),"value",m.a.createElement("span",{className:"token punctuation"},"}")),m.a.createElement("span",{className:"token punctuation"},">")),"\n","            ",m.a.createElement("span",{className:"token punctuation"},"{"),"props",m.a.createElement("span",{className:"token punctuation"},"."),"children",m.a.createElement("span",{className:"token punctuation"},"}"),"\n","            ",m.a.createElement("span",{className:"token tag"},m.a.createElement("span",{className:"token tag"},m.a.createElement("span",{className:"token punctuation"},"<"),"TextFieldIcon")," ",m.a.createElement("span",{className:"token attr-name"},"icon"),m.a.createElement("span",{className:"token script language-javascript"},m.a.createElement("span",{className:"token punctuation"},"="),m.a.createElement("span",{className:"token punctuation"},"{"),"props",m.a.createElement("span",{className:"token punctuation"},"."),"icon",m.a.createElement("span",{className:"token punctuation"},"}"))," ",m.a.createElement("span",{className:"token punctuation"},"/>")),"\n","    ",m.a.createElement("span",{className:"token tag"},m.a.createElement("span",{className:"token tag"},m.a.createElement("span",{className:"token punctuation"},"</"),"SelectIconRow"),m.a.createElement("span",{className:"token punctuation"},">")),"\n","  ",m.a.createElement("span",{className:"token punctuation"},")"),"\n",m.a.createElement("span",{className:"token punctuation"},"}"),m.a.createElement("span",{className:"token punctuation"},";"),"\n")))),m.a.createElement("p",null,"You can then import this and use it like so:"),m.a.createElement("div",{className:"example code-only"},m.a.createElement("div",{className:"source"},m.a.createElement("pre",{className:"language-jsx"},m.a.createElement("code",{className:"language-jsx"},m.a.createElement("span",{className:"token tag"},m.a.createElement("span",{className:"token tag"},m.a.createElement("span",{className:"token punctuation"},"<"),"inputs.SelectIcon")," ",m.a.createElement("span",{className:"token attr-name"},"value"),m.a.createElement("span",{className:"token script language-javascript"},m.a.createElement("span",{className:"token punctuation"},"="),m.a.createElement("span",{className:"token punctuation"},"{"),"unit_type",m.a.createElement("span",{className:"token punctuation"},"}"))," ",m.a.createElement("span",{className:"token attr-name"},"icon"),m.a.createElement("span",{className:"token attr-value"},m.a.createElement("span",{className:"token punctuation"},"="),m.a.createElement("span",{className:"token punctuation"},'"'),"label",m.a.createElement("span",{className:"token punctuation"},'"')),m.a.createElement("span",{className:"token punctuation"},">")),"\n","    ",m.a.createElement("span",{className:"token tag"},m.a.createElement("span",{className:"token tag"},m.a.createElement("span",{className:"token punctuation"},"<"),"inputs.Select"),"\n","    ",m.a.createElement("span",{className:"token attr-name"},"label"),m.a.createElement("span",{className:"token attr-value"},m.a.createElement("span",{className:"token punctuation"},"="),m.a.createElement("span",{className:"token punctuation"},'"'),"Type",m.a.createElement("span",{className:"token punctuation"},'"')),"\n","    ",m.a.createElement("span",{className:"token attr-name"},"name"),m.a.createElement("span",{className:"token attr-value"},m.a.createElement("span",{className:"token punctuation"},"="),m.a.createElement("span",{className:"token punctuation"},'"'),"unit_type",m.a.createElement("span",{className:"token punctuation"},'"')),"\n","    ",m.a.createElement("span",{className:"token attr-name"},"onChange"),m.a.createElement("span",{className:"token script language-javascript"},m.a.createElement("span",{className:"token punctuation"},"="),m.a.createElement("span",{className:"token punctuation"},"{"),"event ",m.a.createElement("span",{className:"token operator"},"="),m.a.createElement("span",{className:"token operator"},">")," ",m.a.createElement("span",{className:"token keyword"},"this"),m.a.createElement("span",{className:"token punctuation"},"."),m.a.createElement("span",{className:"token function"},"onChange"),m.a.createElement("span",{className:"token punctuation"},"("),"event",m.a.createElement("span",{className:"token punctuation"},",")," ",m.a.createElement("span",{className:"token string"},"'unit_type'"),m.a.createElement("span",{className:"token punctuation"},")"),m.a.createElement("span",{className:"token punctuation"},"}")),"\n","    ",m.a.createElement("span",{className:"token attr-name"},"options"),m.a.createElement("span",{className:"token script language-javascript"},m.a.createElement("span",{className:"token punctuation"},"="),m.a.createElement("span",{className:"token punctuation"},"{"),m.a.createElement("span",{className:"token punctuation"},"["),"\n","      ",m.a.createElement("span",{className:"token punctuation"},"{"),"\n","        label",m.a.createElement("span",{className:"token punctuation"},":")," ",m.a.createElement("span",{className:"token string"},"'Solid'"),m.a.createElement("span",{className:"token punctuation"},","),"\n","        value",m.a.createElement("span",{className:"token punctuation"},":")," ",m.a.createElement("span",{className:"token string"},"'solid'"),"\n","      ",m.a.createElement("span",{className:"token punctuation"},"}"),m.a.createElement("span",{className:"token punctuation"},","),"\n","      ",m.a.createElement("span",{className:"token punctuation"},"{"),"\n","        label",m.a.createElement("span",{className:"token punctuation"},":")," ",m.a.createElement("span",{className:"token string"},"'Liquid'"),m.a.createElement("span",{className:"token punctuation"},","),"\n","        value",m.a.createElement("span",{className:"token punctuation"},":")," ",m.a.createElement("span",{className:"token string"},"'liquid'"),"\n","      ",m.a.createElement("span",{className:"token punctuation"},"}"),m.a.createElement("span",{className:"token punctuation"},","),"\n","      ",m.a.createElement("span",{className:"token punctuation"},"{"),"\n","        label",m.a.createElement("span",{className:"token punctuation"},":")," ",m.a.createElement("span",{className:"token string"},"'Unit'"),m.a.createElement("span",{className:"token punctuation"},","),"\n","        value",m.a.createElement("span",{className:"token punctuation"},":")," ",m.a.createElement("span",{className:"token string"},"'unit'"),"\n","      ",m.a.createElement("span",{className:"token punctuation"},"}"),"\n","    ",m.a.createElement("span",{className:"token punctuation"},"]"),m.a.createElement("span",{className:"token punctuation"},"}")),"\n","    ",m.a.createElement("span",{className:"token attr-name"},"value"),m.a.createElement("span",{className:"token script language-javascript"},m.a.createElement("span",{className:"token punctuation"},"="),m.a.createElement("span",{className:"token punctuation"},"{"),"unit_type",m.a.createElement("span",{className:"token punctuation"},"}")),"\n","  ",m.a.createElement("span",{className:"token punctuation"},"/>")),"\n",m.a.createElement("span",{className:"token tag"},m.a.createElement("span",{className:"token tag"},m.a.createElement("span",{className:"token punctuation"},"</"),"inputs.SelectIcon"),m.a.createElement("span",{className:"token punctuation"},">")),"\n")))),m.a.createElement("div",{className:"example render-only"},m.a.createElement("div",{className:"run"},m.a.createElement("div",{id:"runtime-color-theming"}))),m.a.createElement("h2",null,"Theming with runtime CSS variables."),m.a.createElement("p",null,"You can easily theme the library at runtime using CSS variables. Inspect the ",m.a.createElement("code",null,"<html>")," node in your web inspector and you should see a list of variables you can modify on the ",m.a.createElement("code",null,":root")," selector."),m.a.createElement("div",{className:"example code-only"},m.a.createElement("div",{className:"source"},m.a.createElement("pre",{className:"language-css"},m.a.createElement("code",{className:"language-css"},m.a.createElement("span",{className:"token comment"},"/** in your main global CSS or style tag */"),"\n",m.a.createElement("span",{className:"token comment"},"/** Use your browser's css inspector and inspect the HTML element to see other variables to override. */"),"\n",m.a.createElement("span",{className:"token selector"},m.a.createElement("span",{className:"token pseudo-class"},":root")," "),m.a.createElement("span",{className:"token punctuation"},"{"),"\n","    ",m.a.createElement("span",{className:"token property"},"--mdc-theme-primary"),m.a.createElement("span",{className:"token punctuation"},":")," pink",m.a.createElement("span",{className:"token punctuation"},";"),"\n","    ",m.a.createElement("span",{className:"token property"},"--mdc-theme-secondary"),m.a.createElement("span",{className:"token punctuation"},":")," blue",m.a.createElement("span",{className:"token punctuation"},";"),"\n",m.a.createElement("span",{className:"token punctuation"},"}"),"\n")))),m.a.createElement("div",{className:"example render-only"},m.a.createElement("div",{className:"run"},m.a.createElement("div",{id:"dark-mode"}))),m.a.createElement("h2",null,"Dark Mode"),m.a.createElement("p",null,"Earlier versions of ",m.a.createElement("code",null,"material-components-web")," shipped with a built in Dark Mode but it has since be removed. Please refer to the ",m.a.createElement("code",null,"material-components-web")," ",m.a.createElement("a",{href:"https://material.io/components/web/docs/theming/"},"documentation on theming.")),m.a.createElement("div",{className:"example render-only"},m.a.createElement("div",{className:"run"},m.a.createElement("div",{id:"sass-customization"}))),m.a.createElement("h2",null,"SASS customization"),m.a.createElement("p",null,"Additional customization can be done through your own SASS build. This is a feature of the ",m.a.createElement("code",null,"material-components-web"),", not RMWC. If you want your own custom SASS build, please view the ",m.a.createElement("code",null,"material-components-web")," ",m.a.createElement("a",{href:"https://material.io/components/web/docs/theming/"},"documentation on theming.")),m.a.createElement("div",{className:"example render-only"},m.a.createElement("div",{className:"run"},m.a.createElement("div",{id:"theme-themeprovider"}))),m.a.createElement("h2",null,"Theme and ThemeProvider"),m.a.createElement("p",null,"Build on MDC Theme, RMWC has two theming components for extra easy useage. See component page ",m.a.createElement("a",{href:"theme"},"Theme"),"."))}}]),a}(m.a.Component);a.default=p}});
//# sourceMappingURL=34.f4071d7f.chunk.js.map