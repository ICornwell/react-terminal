import{createContext as e,createElement as n,useEffect as t,useContext as o,useState as r,useRef as i,Fragment as l}from"react";import a from"prop-types";import{isMobile as c}from"react-device-detect";
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */var s=function(){return(s=Object.assign||function(e){for(var n,t=1,o=arguments.length;t<o;t++)for(var r in n=arguments[t])Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r]);return e}).apply(this,arguments)};function u(e,n){var t,o,r,i,l={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return i={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function a(i){return function(a){return function(i){if(t)throw new TypeError("Generator is already executing.");for(;l;)try{if(t=1,o&&(r=2&i[0]?o.return:i[0]?o.throw||((r=o.return)&&r.call(o),0):o.next)&&!(r=r.call(o,i[1])).done)return r;switch(o=0,r&&(i=[2&i[0],r.value]),i[0]){case 0:case 1:r=i;break;case 4:return l.label++,{value:i[1],done:!1};case 5:l.label++,o=i[1],i=[0];continue;case 7:i=l.ops.pop(),l.trys.pop();continue;default:if(!(r=(r=l.trys).length>0&&r[r.length-1])&&(6===i[0]||2===i[0])){l=0;continue}if(3===i[0]&&(!r||i[1]>r[0]&&i[1]<r[3])){l.label=i[1];break}if(6===i[0]&&l.label<r[1]){l.label=r[1],r=i;break}if(r&&l.label<r[2]){l.label=r[2],l.ops.push(i);break}r[2]&&l.ops.pop(),l.trys.pop();continue}i=n.call(e,l)}catch(e){i=[6,e],o=0}finally{t=r=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,a])}}}!function(e,n){void 0===n&&(n={});var t=n.insertAt;if(e&&"undefined"!=typeof document){var o=document.head||document.getElementsByTagName("head")[0],r=document.createElement("style");r.type="text/css","top"===t&&o.firstChild?o.insertBefore(r,o.firstChild):o.appendChild(r),r.styleSheet?r.styleSheet.cssText=e:r.appendChild(document.createTextNode(e))}}('@import url("https://fonts.googleapis.com/css?family=Source+Code+Pro&display=swap");\n#index_terminalContainer__3q4m3 {\n  --control-default-bg-color: #ccc;\n  --control-close-bg-color: #fc5b57;\n  --control-minimize-bg-color: #e5bf3c;\n  --control-maximize-bg-color: #57c038; }\n\n.index_controls__9z-dM {\n  text-align: left;\n  height: 26px;\n  position: relative;\n  top: 4px;\n  margin-left: 4px; }\n  .index_controls__9z-dM .index_consoleCtrl__PQnAL {\n    display: inline-block;\n    width: 13px;\n    height: 13px;\n    margin: 0 3px;\n    border-radius: 50%;\n    background: var(--control-default-bg-color); }\n  .index_controls__9z-dM .index_close__2o6CK {\n    background: var(--control-close-bg-color); }\n  .index_controls__9z-dM .index_minimize__E9mwB {\n    background: var(--control-minimize-bg-color); }\n  .index_controls__9z-dM .index_maximize__sbbYF {\n    background: var(--control-maximize-bg-color); }\n\n.index_editor__2tqRz {\n  text-align: left;\n  height: calc(100% - 46px);\n  padding: 10px 15px;\n  overflow-wrap: break-word;\n  overflow-y: scroll;\n  outline: none;\n  font-family: "Source Code Pro", monospace;\n  font-size: 18px;\n  line-height: 22px;\n  border-bottom-left-radius: 5px;\n  border-bottom-right-radius: 5px; }\n  .index_editor__2tqRz .index_mobileInput__jGtyc {\n    position: absolute;\n    top: -2000px;\n    left: -2000px; }\n  .index_editor__2tqRz .index_lineText__2Poex {\n    display: inline;\n    position: relative;\n    top: -1px;\n    margin-left: 8px; }\n  .index_editor__2tqRz .index_preWhiteSpace__3nCT2 {\n    white-space: pre; }\n  .index_editor__2tqRz .index_caret__MYxcn {\n    position: relative;\n    -webkit-animation: index_blink__RQDX- 0.75s ease-in-out infinite;\n    -moz-animation: index_blink__RQDX- 0.75s ease-in-out infinite;\n    -o-animation: index_blink__RQDX- 0.75s ease-in-out infinite;\n    -ms-animation: index_blink__RQDX- 0.75s ease-in-out infinite;\n    animation: index_blink__RQDX- 0.75s ease-in-out infinite; }\n    .index_editor__2tqRz .index_caret__MYxcn .index_caretAfter__2B8sk {\n      content: "";\n      position: absolute;\n      top: 2px;\n      width: 10px;\n      height: 22px;\n      z-index: 10; }\n\n@-moz-keyframes index_blink__RQDX- {\n  0% {\n    opacity: 0;\n    -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)";\n    filter: alpha(opacity=0); }\n  100% {\n    opacity: 1;\n    -ms-filter: none;\n    filter: none; } }\n\n@-webkit-keyframes index_blink__RQDX- {\n  0% {\n    opacity: 0;\n    -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)";\n    filter: alpha(opacity=0); }\n  100% {\n    opacity: 1;\n    -ms-filter: none;\n    filter: none; } }\n\n@-o-keyframes index_blink__RQDX- {\n  0% {\n    opacity: 0;\n    -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)";\n    filter: alpha(opacity=0); }\n  100% {\n    opacity: 1;\n    -ms-filter: none;\n    filter: none; } }\n\n@keyframes index_blink__RQDX- {\n  0% {\n    opacity: 0;\n    -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)";\n    filter: alpha(opacity=0); }\n  100% {\n    opacity: 1;\n    -ms-filter: none;\n    filter: none; } }\n  .index_editor__2tqRz a {\n    color: #1a87b5; }\n\n#index_terminalContainer__3q4m3 {\n  height: 100%; }\n\n.index_terminal__1dSq1 {\n  height: 100%;\n  width: 100%;\n  margin: auto;\n  border-radius: 5px; }\n');var d={terminalContainer:"index_terminalContainer__3q4m3",controls:"index_controls__9z-dM",consoleCtrl:"index_consoleCtrl__PQnAL",close:"index_close__2o6CK",minimize:"index_minimize__E9mwB",maximize:"index_maximize__sbbYF",editor:"index_editor__2tqRz",mobileInput:"index_mobileInput__jGtyc",lineText:"index_lineText__2Poex",preWhiteSpace:"index_preWhiteSpace__3nCT2",caret:"index_caret__MYxcn",blink:"index_blink__RQDX-",caretAfter:"index_caretAfter__2B8sk",terminal:"index_terminal__1dSq1"},m=e(null),p=function(e){var t=e.children;return n(m.Provider,{value:d},t)},f={dark:{themeBGColor:"#022833",themeToolbarColor:"#131519",themeColor:"#839496",themePromptColor:"#a917a8"},light:{themeBGColor:"#fdf6e4",themeToolbarColor:"#d8d8d8",themeColor:"#333333",themePromptColor:"#a917a8"},dracula:{themeBGColor:"#272B36",themeToolbarColor:"#DBDBDB",themeColor:"#FFFEFC",themePromptColor:"#a917a8"}},_=e(null),h=function(e){var t=e.children,o=s(s({},f),t.props.themes||{}),r=o[t.props.theme]||o.light;return n(_.Provider,{value:r},t)};function x(e){var t=o(m),r=e.controlButtonLabels,i=e.showControlButtons?r.map((function(e){return n("div",{key:e,className:t.consoleCtrl+" "+t[e]})})):null;return n("div",{className:t.controls},i)}var b=e(null);var g=function(e,r,i,a,c,s,d){var p=o(b),f=p.bufferedContent,h=p.setBufferedContent,x=o(m),g=o(_);t((function(){if(e){var t,o,m,p,_;t=a,o=void 0,m=void 0,_=function(){var e,o,m,p,_,b,v,y;return u(this,(function(u){switch(u.label){case 0:return e=t.trim().split(" "),o=e[0],m=e.slice(1),p="","clear"===o?(h(""),c(""),r(!1),[2]):(_=n(l,null,f,n("span",{style:{color:g.themePromptColor}},i),n("span",{className:x.lineText+" "+x.preWhiteSpace},a),n("br",null)),h(_),c(""),t?(b=m.join(" "),o&&s[o]?"function"!=typeof(v=s[o])?[3,2]:[4,v(b)]:[3,4]):[3,11]);case 1:return p=u.sent(),[3,3];case 2:p=v,u.label=3;case 3:return[3,11];case 4:return s.__eval?"function"!=typeof(v=s.__eval)?[3,6]:[4,v(t)]:[3,8];case 5:return p=u.sent(),[3,7];case 6:p=v,u.label=7;case 7:return[3,11];case 8:return"function"!=typeof d?[3,10]:[4,d(b)];case 9:return p=u.sent(),[3,11];case 10:p=d,u.label=11;case 11:return y=function(e,t,o,r,i,a){return n(l,null,t,n("span",{style:{color:o.themePromptColor}},i),n("span",{className:r.lineText+" "+r.preWhiteSpace},a),e?n("span",null,n("br",null),e.split("\n").map((function(e){return n(l,null,e,n("br",null))}))):null)}(p,f,g,x,i,a),h(y),r(!1),[2]}}))},new((p=void 0)||(p=Promise))((function(e,n){function t(e){try{i(_.next(e))}catch(e){n(e)}}function r(e){try{i(_.throw(e))}catch(e){n(e)}}function i(n){n.done?e(n.value):new p((function(e){e(n.value)})).then(t,r)}i((_=_.apply(o,m||[])).next())}))}}),[e])},v=function(e,a,s,u,d,p){var f=o(m),h=o(_),x=o(b).appendCommandToHistory,v=i(null),y=r(""),C=y[0],w=y[1],k=r(""),z=k[0],T=k[1],B=r(!1),M=B[0],R=B[1];t((function(){c&&a&&v.current.focus()}),[a]),t((function(){M&&x(C)}),[M]);var P=c&&p?n("div",{className:f.mobileInput},n("input",{type:"text",autoComplete:"off",autoCorrect:"off",autoCapitalize:"off",spellCheck:"false",value:C,onChange:function(e){return w(e.target.value)},ref:v}),"eh"):null,D=M?n(l,null,P,n("div",{className:f.lineText},a&&e?n("span",{className:f.caret},n("span",{className:f.caretAfter,style:{background:h.themeColor}})):null)):n(l,null,P,n("span",{style:{color:h.themePromptColor}},s),n("div",{className:f.lineText},n("span",{className:f.preWhiteSpace},C),a&&e?n("span",{className:f.caret},n("span",{className:f.caretAfter,style:{background:h.themeColor}})):null,n("span",{className:f.preWhiteSpace},z)));return function(e,n,r,i,l,a,c){var s=o(b),u=s.getPreviousCommand,d=(s.getNextCommand,function(t){if(e&&c){t.preventDefault();var o=t.key;if("Enter"===o)return r(n+i),l(""),void a(!0);var s=null,d=i;"Backspace"===o?s=n.slice(0,-1):"Delete"===o?(s=n,d=i.slice(1)):"ArrowUp"===o?s=u():"ArrowDown"===o?s=n.slice(0,-1):"ArrowLeft"===o?(s=n.slice(0,-1),d=n.slice(-1)+d):"ArrowRight"===o?(s=n+i.slice(0,1),d=i.slice(1)):"End"===o?(s=n+i,d=""):"Home"===o?(s="",d=n+i):s=o&&1===o.length?n+o:n,r(s),l(d),a(!1)}});t((function(){return document.addEventListener("keydown",d),function(){document.removeEventListener("keydown",d)}}))}(a,C,w,z,T,R,p),g(M,R,s,C,w,u,d),D};function y(e){var r=i(null),a=i(void 0),c=o(m),s=o(_),u=o(b),d=u.bufferedContent,p=u.setBufferedContent;!function(e,n){t((function(){n.current.scrollTop=n.current.scrollHeight}),[e])}(d,r);var f=e.enableInput,h=e.caret,x=e.consoleFocused,g=e.prompt,y=e.commands,C=e.welcomeMessage,w=e.lateResponse,k=e.errorMessage,z=v(h,x,g,y,k,f);return w&&w.id&&w.id!==a.current&&w.text&&(a.current=w.id,console.log("Adding late content: "+w.text),p(n(l,null,d,n("span",null,w.text.split("\n").map((function(e){return n(l,null,e,n("br",null))})))))),n("div",{ref:r,className:c.editor,style:{background:s.themeBGColor}},C,n("br",null),d,z)}function C(e){var l,a,s,u,d=i(null),p=r(!c),f=p[0],h=p[1],b=o(m),g=o(_);l=d,a=f,s=h,u=function(e){l.current&&!l.current.contains(e.target)?s(!1):s(!c||!a)},t((function(){return document.addEventListener("mousedown",u),function(){document.removeEventListener("mousedown",u)}}));var v=e.caret,C=e.theme,w=e.showControlButtons,k=e.controlButtonLabels,z=e.prompt,T=e.commands,B=e.welcomeMessage,M=e.lateResponse,R=e.errorMessage,P=e.enableInput;return n("div",{ref:d,id:b.terminalContainer,className:b["theme--"+C]},n("div",{className:""+b.terminal,style:{background:g.themeToolbarColor,color:g.themeColor}},n(x,{consoleFocused:f,showControlButtons:w,controlButtonLabels:k}),n(y,{caret:v,consoleFocused:f,prompt:z,commands:T,welcomeMessage:B,lateResponse:M,errorMessage:R,enableInput:P})))}function w(e){var t=e.children;return n(p,null,n(h,null,t))}function k(e){return n(w,null,n(C,s({},e)))}C.propTypes={enableInput:a.bool,caret:a.bool,theme:a.string,showControlButtons:a.bool,controlButtonLabels:a.arrayOf(a.string),prompt:a.string,commands:a.objectOf(a.oneOfType([a.string,a.func,a.node])),welcomeMessage:a.oneOfType([a.string,a.func,a.node]),errorMessage:a.string},C.defaultProps={enableInput:!0,caret:!0,theme:"light",showControlButtons:!0,controlButtonLabels:["close","minimize","maximize"],prompt:">>>",commands:{},welcomeMessage:"",errorMessage:"not found!"};var z=function(e){var o=e.children,i=r(""),l=i[0],a=i[1],c=r([]),s=c[0],u=c[1],d=r(null),m=d[0],p=d[1];t((function(){p(s.length)}),[s]);return n(b.Provider,{value:{bufferedContent:l,setBufferedContent:a,appendCommandToHistory:function(e){e&&u(s.concat(e))},getPreviousCommand:function(){if(0===m)return 0===s.length?"":s[0];var e=s[m-1];return m>0&&p(m-1),e},getNextCommand:function(){if(m+1<=s.length){if(m===s.length)return"";var e=s[m+1];return p(m+1),e}return""}}},o)},T={ReactTerminal:k,TerminalContextProvider:z};export default T;export{k as ReactTerminal,z as TerminalContextProvider};
