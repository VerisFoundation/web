webpackJsonp([0x68d45905318f],{254:function(e,n,t){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}function i(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function a(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!=typeof n&&"function"!=typeof n?e:n}function u(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}function r(e,n){return e.raw=n,e}n.__esModule=!0;var c=r(["\n  display: flex;\n  justify-content: space-between;\n  margin-top: 4rem;\n\n  section {\n    max-width: 420px;\n  }\n\n  p {\n    font-weight: 300;\n    line-height: 2rem;\n  }\n\n  aside {\n  }\n\n  h3 {\n    font-size: 2rem;\n  }\n\n  h4 {\n    text-transform: uppercase;\n    color: #278cd6;\n    font-size: 0.8rem;\n    margin-bottom: 0;\n  }\n\n  time {\n    font-size: 2rem;\n    letter-spacing: 0.2rem;\n  }\n\n  form {\n    border: thin solid #278cd6;\n    border-radius: 3rem;\n    height: 3rem;\n    display: flex;\n\n    input {\n      flex: 1;\n      border: none;\n      margin-left: 1.5rem;\n      font-family: 'Open Sans';\n      font-weight: 300;\n\n      input::placeholder {\n        opacity: 0.34;\n        font-size: 0.8rem;\n      }\n\n      &:focus {\n        outline: none;\n      }\n    }\n\n    button {\n      color: #fff;\n      background-color: #278cd6;\n      border: none;\n      border-radius: 3rem;\n      padding: 0 2rem;\n      text-transform: uppercase;\n      font-size: 0.8rem;\n      font-weight: 700;\n    }\n  }\n\n  @media (max-width: 640px) {\n    flex-direction: column;\n    align-items: center;\n  }\n"],["\n  display: flex;\n  justify-content: space-between;\n  margin-top: 4rem;\n\n  section {\n    max-width: 420px;\n  }\n\n  p {\n    font-weight: 300;\n    line-height: 2rem;\n  }\n\n  aside {\n  }\n\n  h3 {\n    font-size: 2rem;\n  }\n\n  h4 {\n    text-transform: uppercase;\n    color: #278cd6;\n    font-size: 0.8rem;\n    margin-bottom: 0;\n  }\n\n  time {\n    font-size: 2rem;\n    letter-spacing: 0.2rem;\n  }\n\n  form {\n    border: thin solid #278cd6;\n    border-radius: 3rem;\n    height: 3rem;\n    display: flex;\n\n    input {\n      flex: 1;\n      border: none;\n      margin-left: 1.5rem;\n      font-family: 'Open Sans';\n      font-weight: 300;\n\n      input::placeholder {\n        opacity: 0.34;\n        font-size: 0.8rem;\n      }\n\n      &:focus {\n        outline: none;\n      }\n    }\n\n    button {\n      color: #fff;\n      background-color: #278cd6;\n      border: none;\n      border-radius: 3rem;\n      padding: 0 2rem;\n      text-transform: uppercase;\n      font-size: 0.8rem;\n      font-weight: 700;\n    }\n  }\n\n  @media (max-width: 640px) {\n    flex-direction: column;\n    align-items: center;\n  }\n"]),o=r(["\n  background-color: #f7f7f9;\n  padding-top: 100px;\n  position: relative;\n\n  &:before {\n    background: #fff;\n    height: 200px;\n    clip-path: ellipse(100% 50% at 50% -40%);\n    width: 100%;\n    content: '';\n    display: block;\n    position: absolute;\n    top: 0;\n    z-index: 1;\n  }\n\n  h2 {\n    text-align: center;\n    margin-bottom: 4rem;\n    font-size: 2rem;\n  }\n\n  section {\n    display: flex;\n    justify-content: space-between;\n  }\n\n  h3 {\n    font-family: 'Open Sans';\n    font-weight: 700;\n    font-size: 0.9rem;\n    text-align: center;\n  }\n\n  aside {\n    font-size: 0.8rem;\n    flex-basis: calc(50% - 1rem);\n  }\n\n  table {\n    font-size: 0.8rem;\n  }\n\n  img {\n    margin: 0 1rem;\n    width: calc(100% - 2rem);\n  }\n\n  @media (max-width: 640px) {\n    section {\n      flex-direction: column;\n    }\n\n    aside {\n      flex-basis: 100%;\n      margin-bottom: 2rem;\n    }\n  }\n"],["\n  background-color: #f7f7f9;\n  padding-top: 100px;\n  position: relative;\n\n  &:before {\n    background: #fff;\n    height: 200px;\n    clip-path: ellipse(100% 50% at 50% -40%);\n    width: 100%;\n    content: '';\n    display: block;\n    position: absolute;\n    top: 0;\n    z-index: 1;\n  }\n\n  h2 {\n    text-align: center;\n    margin-bottom: 4rem;\n    font-size: 2rem;\n  }\n\n  section {\n    display: flex;\n    justify-content: space-between;\n  }\n\n  h3 {\n    font-family: 'Open Sans';\n    font-weight: 700;\n    font-size: 0.9rem;\n    text-align: center;\n  }\n\n  aside {\n    font-size: 0.8rem;\n    flex-basis: calc(50% - 1rem);\n  }\n\n  table {\n    font-size: 0.8rem;\n  }\n\n  img {\n    margin: 0 1rem;\n    width: calc(100% - 2rem);\n  }\n\n  @media (max-width: 640px) {\n    section {\n      flex-direction: column;\n    }\n\n    aside {\n      flex-basis: 100%;\n      margin-bottom: 2rem;\n    }\n  }\n"]),d=r(["\n  text-align: center;\n  h2 {\n    margin: 4rem auto;\n    font-size: 2rem;\n  }\n\n  img {\n    margin: 4rem;\n    max-width: 540px;\n  }\n"],["\n  text-align: center;\n  h2 {\n    margin: 4rem auto;\n    font-size: 2rem;\n  }\n\n  img {\n    margin: 4rem;\n    max-width: 540px;\n  }\n"]),m=t(1),s=l(m),f=t(5),g=l(f),N=t(10),I=l(N),M=t(33),p=l(M),b=t(634),w=l(b),h=t(620),E=l(h),z=g.default.header(c),j=g.default.div(o),x=g.default.div(d),S=function(e){function n(){var t,l,u;i(this,n);for(var r=arguments.length,c=Array(r),o=0;o<r;o++)c[o]=arguments[o];return t=l=a(this,e.call.apply(e,[this].concat(c))),l.state={thanks:!1,email:""},l._submit=function(e){e.preventDefault();var n=encodeURIComponent(l.state.email),t="https://script.google.com/a/suncoast.io/macros/s/AKfycbx5j3f48_i0layRQ8mKhBwVo-wJSuu-XHNMXc77kKPC9pGhob5P/exec?email="+n;window.fetch(t,{method:"GET"}),l.setState({thanks:!0,email:""})},l._change=function(e){l.setState({email:e.target.value})},u=t,a(l,u)}return u(n,e),n.prototype.render=function(){return s.default.createElement("div",null,s.default.createElement(I.default,null,s.default.createElement(p.default,null,"Presale"),s.default.createElement(z,null,this.state.thanks?s.default.createElement("div",null,s.default.createElement("h3",null,s.default.createElement("strong",null,"Thanks"),", we'll be in touch.")):s.default.createElement("section",null,s.default.createElement("h3",null,"The VRS Presale opens on Monday, March 19."),s.default.createElement("p",null,"We will be releasing our coin at 12:00p EST. Sign up below to be reminded."),s.default.createElement("form",{action:"",onSubmit:this._submit},s.default.createElement("input",{required:!0,type:"email",placeholder:"Enter Your Email",onChange:this._change}),s.default.createElement("button",{type:"submit"},"Submit"))),s.default.createElement("aside",null,s.default.createElement("h4",null,"Time until Presale"),s.default.createElement("time",null,"23:13:45:45")))),s.default.createElement(j,null,s.default.createElement(I.default,null,s.default.createElement("h2",null,"Veris Foundation Crowdsale Info"),s.default.createElement("section",null,s.default.createElement("aside",null,s.default.createElement("h3",null,"Overview"),s.default.createElement("table",null,s.default.createElement("tbody",null,s.default.createElement("tr",null,s.default.createElement("th",null,"Presale Timeline"),s.default.createElement("td",null,"Mar 19th, 2018 - Mar 26, 2018")),s.default.createElement("tr",null,s.default.createElement("th",null,"ICO Timeline"),s.default.createElement("td",null,"Apr 2nd, 2018 - Apr 16, 2018")),s.default.createElement("tr",null,s.default.createElement("th",null,"VRS Total Supply"),s.default.createElement("td",null,"50,000,000")),s.default.createElement("tr",null,s.default.createElement("th",null,"Presale + ICO Allocation"),s.default.createElement("td",null,"30,000,000")),s.default.createElement("tr",null,s.default.createElement("th",null,"Presale Price"),s.default.createElement("td",null,"100 VRS = 1 NEO (20% bonus)")),s.default.createElement("tr",null,s.default.createElement("th",null,"ICO Price"),s.default.createElement("td",null,"100 VRS = 1 NEO (20% bonus) 80 VRS = 1 ETH")),s.default.createElement("tr",null,s.default.createElement("th",null,"Minimum Cap"),s.default.createElement("td",null,"9,000 ETH / 28,000 NEO")),s.default.createElement("tr",null,s.default.createElement("th",null,"Maximum Cap"),s.default.createElement("td",null,"90,000 ETH / 270,000 NEO")),s.default.createElement("tr",null,s.default.createElement("th",null,"ICO Minimum Cap"),s.default.createElement("td",null,"100 VRS = 1 NEO (20% bonus)"))))),s.default.createElement("aside",null,s.default.createElement("h3",null,"Allocation"),s.default.createElement("img",{src:E.default,width:"400"}))))),s.default.createElement(x,null,s.default.createElement(I.default,null,s.default.createElement("h2",null,"Veris Project Timeline"),s.default.createElement("img",{src:w.default}))))},n}(s.default.Component);n.default=S,e.exports=n.default},620:function(e,n){e.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIyLjAuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCA0MDAgNjAwIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA0MDAgNjAwOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+Cgkuc3Qwe2ZpbGw6I0NBMDAwMDt9Cgkuc3Qxe2ZpbGw6I0NEMDBDQTt9Cgkuc3Qye2ZpbGw6IzE4MDAwMTt9Cgkuc3Qze2ZpbGw6IzAwQkQ1Qzt9Cgkuc3Q0e2ZpbGw6IzI3OENENjt9Cgkuc3Q1e2ZpbGw6IzBGMzU1Mjt9Cgkuc3Q2e2ZvbnQtZmFtaWx5OidPcGVuU2Fucyc7fQoJLnN0N3tmb250LXNpemU6MTRweDt9Cjwvc3R5bGU+CjxnPgoJPHBhdGggY2xhc3M9InN0MCIgZD0iTTE5Mi40LDEwNUMxOTIuNSwxMDUsMTkyLjUsMTA1LDE5Mi40LDEwNWwwLjEtNTUuM2MtNS45LDAtMTIuNSwwLjUtMTguMywxLjNsNy43LDU0LjYKCQlDMTg1LjMsMTA1LjIsMTg4LjksMTA1LDE5Mi40LDEwNXoiLz4KCTxwYXRoIGNsYXNzPSJzdDEiIGQ9Ik0xNzcuNSw4OS4ybC01LjMtMzcuOWMtMTIsMS43LTIxLjIsNC4yLTMyLjQsOC43bDIwLjYsNTFjNi4yLTIuNCwxMi43LTQuMSwxOS41LTUuMUwxNzcuNSw4OS4yeiIvPgoJPHBvbHlnb24gY2xhc3M9InN0MiIgcG9pbnRzPSIxNzIuMiw1MS4zIDE3Mi4yLDUxLjMgMTc3LjUsODkuMiAJIi8+Cgk8cGF0aCBjbGFzcz0ic3QzIiBkPSJNMTU4LjUsMTExLjdsLTIwLjYtNTFjLTIzLjEsOS41LTQxLjMsMjMtNTcuMiw0Mi4zbDQyLjgsMzQuN0MxMzIuOCwxMjYuNCwxNDQuOCwxMTcuNCwxNTguNSwxMTEuN3oiLz4KCTxwYXRoIGNsYXNzPSJzdDQiIGQ9Ik0xMDMuNCwxOTRjMC0yMC42LDctMzkuNiwxOC45LTU0LjdsLTQyLjgtMzQuN2MtMS42LDItMi4zLDMtNCw1LjNDMjguNCwxNzQuNyw0Mi42LDI2NS43LDEwNywzMTMuMmwzMy45LTQ2LjcKCQlDMTE4LjIsMjUwLjMsMTAzLjQsMjIzLjgsMTAzLjQsMTk0eiIvPgoJPHBhdGggY2xhc3M9InN0NSIgZD0iTTI4MS40LDE5NGMwLDQ5LjEtMzkuOSw4OS04OSw4OWMtMTguNSwwLTM1LjctNS43LTUwLTE1LjRsLTMzLjksNDYuN2MyNS45LDE4LjYsNTMsMjcuMyw4NSwyNy4zCgkJYzgwLjUsMCwxNDUuOS02NS41LDE0NS45LTE0NS45YzAtODAuMS02NC45LTE0NS40LTE0NC45LTE0NS45VjEwNUMyNDIuNiwxMDYuMSwyODEuNCwxNDUuNiwyODEuNCwxOTR6Ii8+CjwvZz4KPHRleHQgdHJhbnNmb3JtPSJtYXRyaXgoMSAwIDAgMSAzOS42NiA0MTUuNjM5NikiIGNsYXNzPSJzdDYgc3Q3Ij5QdWJsaWMgQ29udHJpYnV0b3JzPC90ZXh0Pgo8Y2lyY2xlIGNsYXNzPSJzdDUiIGN4PSIxOS43IiBjeT0iNDE5IiByPSI5Ii8+Cjx0ZXh0IHRyYW5zZm9ybT0ibWF0cml4KDEgMCAwIDEgMzkuNjYgNDM1LjY2NykiIGNsYXNzPSJzdDYgc3Q3Ij4zMG0gVlJTIC8gNjAlIDwvdGV4dD4KPHRleHQgdHJhbnNmb3JtPSJtYXRyaXgoMSAwIDAgMSAzOS42NiA0NzYuNjM5NikiIGNsYXNzPSJzdDYgc3Q3Ij5WZXJpcyBGb3VuZGF0aW9uPC90ZXh0Pgo8Y2lyY2xlIGNsYXNzPSJzdDQiIGN4PSIxOS43IiBjeT0iNDgwIiByPSI5Ii8+Cjx0ZXh0IHRyYW5zZm9ybT0ibWF0cml4KDEgMCAwIDEgMzkuNjYgNDk2LjY2NykiIGNsYXNzPSJzdDYgc3Q3Ij4xM20gVlJTIC8gMjYlIDwvdGV4dD4KPHRleHQgdHJhbnNmb3JtPSJtYXRyaXgoMSAwIDAgMSAzOS42NiA1MzguNjM5NikiIGNsYXNzPSJzdDYgc3Q3Ij5WZXJpcyBDb3JlIFRlYW08L3RleHQ+CjxjaXJjbGUgY2xhc3M9InN0MyIgY3g9IjE5LjciIGN5PSI1NDIiIHI9IjkiLz4KPHRleHQgdHJhbnNmb3JtPSJtYXRyaXgoMSAwIDAgMSAzOS42NiA1NTguNjY3KSIgY2xhc3M9InN0NiBzdDciPjRtIFZSUyAvIDglIDwvdGV4dD4KPHRleHQgdHJhbnNmb3JtPSJtYXRyaXgoMSAwIDAgMSAyNDMuNjYgNDE1LjYzOTYpIiBjbGFzcz0ic3Q2IHN0NyI+UGFydG5lcnNoaXAgJmFtcDsgQWR2aXNvcnk8L3RleHQ+CjxjaXJjbGUgY2xhc3M9InN0MSIgY3g9IjIyMy43IiBjeT0iNDE5IiByPSI5Ii8+Cjx0ZXh0IHRyYW5zZm9ybT0ibWF0cml4KDEgMCAwIDEgMjQzLjY2IDQzNS42NjcpIiBjbGFzcz0ic3Q2IHN0NyI+Mm0gVlJTIC8gNCUgPC90ZXh0Pgo8dGV4dCB0cmFuc2Zvcm09Im1hdHJpeCgxIDAgMCAxIDI0My42NiA0NzYuNjM5NikiIGNsYXNzPSJzdDYgc3Q3Ij5Cb3VudGllczwvdGV4dD4KPGNpcmNsZSBjbGFzcz0ic3QwIiBjeD0iMjIzLjciIGN5PSI0ODAiIHI9IjkiLz4KPHRleHQgdHJhbnNmb3JtPSJtYXRyaXgoMSAwIDAgMSAyNDMuNjYgNDk2LjY2NykiIGNsYXNzPSJzdDYgc3Q3Ij4xbSBWUlMgLyAyJSA8L3RleHQ+Cjwvc3ZnPgo="},634:function(e,n,t){e.exports=t.p+"static/timeline.bd1c5c13.svg"},263:function(e,n,t){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}n.__esModule=!0;var i=t(1),a=l(i),u=t(68),r=l(u),c=t(254),o=l(c);n.default=function(){return a.default.createElement("div",null,a.default.createElement(o.default,null),a.default.createElement(r.default,null))},e.exports=n.default}});
//# sourceMappingURL=component---src-pages-presale-js-d8125fb48d4ceebda1af.js.map