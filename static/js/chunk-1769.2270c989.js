(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-1769"],{"5ifh":function(t,e,n){"use strict";var o=n("xcgL");n.n(o).a},"9x5b":function(t,e,n){"use strict";n.d(e,"a",function(){return r});var o=n("Kw5r"),i=n("Ddwv"),a=n.n(i);function r(t,e){var n=new a.a(e.target,{text:function(){return t}});n.on("success",function(){o.default.prototype.$message({message:"Copy successfully",type:"success",duration:1500}),n.off("error"),n.off("success"),n.destroy()}),n.on("error",function(){o.default.prototype.$message({message:"Copy failed",type:"error"}),n.off("error"),n.off("success"),n.destroy()}),n.onClick(e)}},Ddwv:function(t,e,n){var o,i,a;i=[t,n("YDNs"),n("wOJ8"),n("TiCD")],void 0===(a="function"==typeof(o=function(t,e,n,o){"use strict";var i=s(e),a=s(n),r=s(o);function s(t){return t&&t.__esModule?t:{default:t}}var c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},l=function(){function t(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,n,o){return n&&t(e.prototype,n),o&&t(e,o),e}}(),u=function(t){function e(t,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e);var o=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,(e.__proto__||Object.getPrototypeOf(e)).call(this));return o.resolveOptions(n),o.listenClick(t),o}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,t),l(e,[{key:"resolveOptions",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.action="function"==typeof t.action?t.action:this.defaultAction,this.target="function"==typeof t.target?t.target:this.defaultTarget,this.text="function"==typeof t.text?t.text:this.defaultText,this.container="object"===c(t.container)?t.container:document.body}},{key:"listenClick",value:function(t){var e=this;this.listener=(0,r.default)(t,"click",function(t){return e.onClick(t)})}},{key:"onClick",value:function(t){var e=t.delegateTarget||t.currentTarget;this.clipboardAction&&(this.clipboardAction=null),this.clipboardAction=new i.default({action:this.action(e),target:this.target(e),text:this.text(e),container:this.container,trigger:e,emitter:this})}},{key:"defaultAction",value:function(t){return d("action",t)}},{key:"defaultTarget",value:function(t){var e=d("target",t);if(e)return document.querySelector(e)}},{key:"defaultText",value:function(t){return d("text",t)}},{key:"destroy",value:function(){this.listener.destroy(),this.clipboardAction&&(this.clipboardAction.destroy(),this.clipboardAction=null)}}],[{key:"isSupported",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:["copy","cut"],e="string"==typeof t?[t]:t,n=!!document.queryCommandSupported;return e.forEach(function(t){n=n&&!!document.queryCommandSupported(t)}),n}}]),e}(a.default);function d(t,e){var n="data-clipboard-"+t;if(e.hasAttribute(n))return e.getAttribute(n)}t.exports=u})?o.apply(e,i):o)||(t.exports=a)},"H/bc":function(t,e,n){},Rp5C:function(t,e,n){"use strict";var o=n("d+9J");n.n(o).a},TiCD:function(t,e,n){var o=n("b+/x"),i=n("jFDo");t.exports=function(t,e,n){if(!t&&!e&&!n)throw new Error("Missing required arguments");if(!o.string(e))throw new TypeError("Second argument must be a String");if(!o.fn(n))throw new TypeError("Third argument must be a Function");if(o.node(t))return function(t,e,n){return t.addEventListener(e,n),{destroy:function(){t.removeEventListener(e,n)}}}(t,e,n);if(o.nodeList(t))return function(t,e,n){return Array.prototype.forEach.call(t,function(t){t.addEventListener(e,n)}),{destroy:function(){Array.prototype.forEach.call(t,function(t){t.removeEventListener(e,n)})}}}(t,e,n);if(o.string(t))return function(t,e,n){return i(document.body,t,e,n)}(t,e,n);throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList")}},YDNs:function(t,e,n){var o,i,a;i=[t,n("gvr7")],void 0===(a="function"==typeof(o=function(t,e){"use strict";var n=function(t){return t&&t.__esModule?t:{default:t}}(e),o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},i=function(){function t(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,n,o){return n&&t(e.prototype,n),o&&t(e,o),e}}(),a=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.resolveOptions(e),this.initSelection()}return i(t,[{key:"resolveOptions",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.action=t.action,this.container=t.container,this.emitter=t.emitter,this.target=t.target,this.text=t.text,this.trigger=t.trigger,this.selectedText=""}},{key:"initSelection",value:function(){this.text?this.selectFake():this.target&&this.selectTarget()}},{key:"selectFake",value:function(){var t=this,e="rtl"==document.documentElement.getAttribute("dir");this.removeFake(),this.fakeHandlerCallback=function(){return t.removeFake()},this.fakeHandler=this.container.addEventListener("click",this.fakeHandlerCallback)||!0,this.fakeElem=document.createElement("textarea"),this.fakeElem.style.fontSize="12pt",this.fakeElem.style.border="0",this.fakeElem.style.padding="0",this.fakeElem.style.margin="0",this.fakeElem.style.position="absolute",this.fakeElem.style[e?"right":"left"]="-9999px";var o=window.pageYOffset||document.documentElement.scrollTop;this.fakeElem.style.top=o+"px",this.fakeElem.setAttribute("readonly",""),this.fakeElem.value=this.text,this.container.appendChild(this.fakeElem),this.selectedText=(0,n.default)(this.fakeElem),this.copyText()}},{key:"removeFake",value:function(){this.fakeHandler&&(this.container.removeEventListener("click",this.fakeHandlerCallback),this.fakeHandler=null,this.fakeHandlerCallback=null),this.fakeElem&&(this.container.removeChild(this.fakeElem),this.fakeElem=null)}},{key:"selectTarget",value:function(){this.selectedText=(0,n.default)(this.target),this.copyText()}},{key:"copyText",value:function(){var t=void 0;try{t=document.execCommand(this.action)}catch(e){t=!1}this.handleResult(t)}},{key:"handleResult",value:function(t){this.emitter.emit(t?"success":"error",{action:this.action,text:this.selectedText,trigger:this.trigger,clearSelection:this.clearSelection.bind(this)})}},{key:"clearSelection",value:function(){this.trigger&&this.trigger.focus(),window.getSelection().removeAllRanges()}},{key:"destroy",value:function(){this.removeFake()}},{key:"action",set:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"copy";if(this._action=t,"copy"!==this._action&&"cut"!==this._action)throw new Error('Invalid "action" value, use either "copy" or "cut"')},get:function(){return this._action}},{key:"target",set:function(t){if(void 0!==t){if(!t||"object"!==(void 0===t?"undefined":o(t))||1!==t.nodeType)throw new Error('Invalid "target" value, use a valid Element');if("copy"===this.action&&t.hasAttribute("disabled"))throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');if("cut"===this.action&&(t.hasAttribute("readonly")||t.hasAttribute("disabled")))throw new Error('Invalid "target" attribute. You can\'t cut text from elements with "readonly" or "disabled" attributes');this._target=t}},get:function(){return this._target}}]),t}();t.exports=a})?o.apply(e,i):o)||(t.exports=a)},"b+/x":function(t,e){e.node=function(t){return void 0!==t&&t instanceof HTMLElement&&1===t.nodeType},e.nodeList=function(t){var n=Object.prototype.toString.call(t);return void 0!==t&&("[object NodeList]"===n||"[object HTMLCollection]"===n)&&"length"in t&&(0===t.length||e.node(t[0]))},e.string=function(t){return"string"==typeof t||t instanceof String},e.fn=function(t){return"[object Function]"===Object.prototype.toString.call(t)}},"d+9J":function(t,e,n){},gvr7:function(t,e){t.exports=function(t){var e;if("SELECT"===t.nodeName)t.focus(),e=t.value;else if("INPUT"===t.nodeName||"TEXTAREA"===t.nodeName){var n=t.hasAttribute("readonly");n||t.setAttribute("readonly",""),t.select(),t.setSelectionRange(0,t.value.length),n||t.removeAttribute("readonly"),e=t.value}else{t.hasAttribute("contenteditable")&&t.focus();var o=window.getSelection(),i=document.createRange();i.selectNodeContents(t),o.removeAllRanges(),o.addRange(i),e=o.toString()}return e}},jFDo:function(t,e,n){var o=n("lNia");function i(t,e,n,i,a){var r=function(t,e,n,i){return function(n){n.delegateTarget=o(n.target,e),n.delegateTarget&&i.call(t,n)}}.apply(this,arguments);return t.addEventListener(n,r,a),{destroy:function(){t.removeEventListener(n,r,a)}}}t.exports=function(t,e,n,o,a){return"function"==typeof t.addEventListener?i.apply(null,arguments):"function"==typeof n?i.bind(null,document).apply(null,arguments):("string"==typeof t&&(t=document.querySelectorAll(t)),Array.prototype.map.call(t,function(t){return i(t,e,n,o,a)}))}},lNia:function(t,e){var n=9;if("undefined"!=typeof Element&&!Element.prototype.matches){var o=Element.prototype;o.matches=o.matchesSelector||o.mozMatchesSelector||o.msMatchesSelector||o.oMatchesSelector||o.webkitMatchesSelector}t.exports=function(t,e){for(;t&&t.nodeType!==n;){if("function"==typeof t.matches&&t.matches(e))return t;t=t.parentNode}}},lSEp:function(t,e,n){"use strict";n.d(e,"a",function(){return a}),n.d(e,"c",function(){return r}),n.d(e,"b",function(){return s});var o=n("GQeE"),i=n.n(o);function a(t){for(var e=0,n=String(t),o=0;o<n.length;o++){e+=n.charAt(o).match(/[^\x00-\xff]/gi)?2:1}return e}function r(t){return function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],n={};return t.split(/\s+/g).forEach(function(t){var o=t.trim().toLowerCase();void 0===e.find(function(t){return t===o})&&(n[o]=1)}),i()(n).join(" ")}(t,["or","and","a","of","the","for","with","this","is","am","are","were"])}function s(){return(arguments.length>0&&void 0!==arguments[0]?arguments[0]:"").replace(/\s+/g," ").trim()}},uY3q:function(t,e,n){"use strict";n.r(e);var o=n("9x5b"),i={name:"SymbolTable",props:{},data:function(){return{}},methods:{handleSymbolCopy:function(t){var e=t.target.parentElement.parentElement.dataset.copyTxt;Object(o.a)(e,t)}}},a=(n("5ifh"),n("KHd+")),r=Object(a.a)(i,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("el-row",{attrs:{gutter:10}},[n("el-col",{attrs:{lg:4,span:8}},[n("table",{staticClass:"table table-bordered symbol-table"},[n("tbody",[n("tr",{staticClass:"text-center"},[n("td",[n("span",[t._v("✔")])]),t._v(" "),n("td",[n("el-button",{attrs:{size:"mini","data-copy-txt":"✔"},on:{click:function(e){t.handleSymbolCopy(e)}}},[n("span",[t._v("Copy")])])],1)]),t._v(" "),n("tr",{staticClass:"text-center"},[n("td",[n("span",[t._v("™")])]),t._v(" "),n("td",[n("el-button",{attrs:{size:"mini","data-copy-txt":"™"},on:{click:function(e){t.handleSymbolCopy(e)}}},[n("span",[t._v("Copy")])])],1)]),t._v(" "),n("tr",{staticClass:"text-center"},[n("td",[n("span",[t._v("★")])]),t._v(" "),n("td",[n("el-button",{attrs:{size:"mini","data-copy-txt":"★"},on:{click:function(e){t.handleSymbolCopy(e)}}},[n("span",[t._v("Copy")])])],1)]),t._v(" "),n("tr",{staticClass:"text-center"},[n("td",[n("span",[t._v("⚠")])]),t._v(" "),n("td",[n("el-button",{attrs:{size:"mini","data-copy-txt":"⚠"},on:{click:function(e){t.handleSymbolCopy(e)}}},[n("span",[t._v("Copy")])])],1)])])])]),t._v(" "),n("el-col",{attrs:{lg:4,span:8}},[n("table",{staticClass:"table table-bordered symbol-table"},[n("tbody",[n("tr",{staticClass:"text-center"},[n("td",[n("span",[t._v("①")])]),t._v(" "),n("td",[n("el-button",{attrs:{size:"mini","data-copy-txt":"①"},on:{click:function(e){t.handleSymbolCopy(e)}}},[n("span",[t._v("Copy")])])],1)]),t._v(" "),n("tr",{staticClass:"text-center"},[n("td",[n("span",[t._v("②")])]),t._v(" "),n("td",[n("el-button",{attrs:{size:"mini","data-copy-txt":"②"},on:{click:function(e){t.handleSymbolCopy(e)}}},[n("span",[t._v("Copy")])])],1)]),t._v(" "),n("tr",{staticClass:"text-center"},[n("td",[n("span",[t._v("③")])]),t._v(" "),n("td",[n("el-button",{attrs:{size:"mini","data-copy-txt":"③"},on:{click:function(e){t.handleSymbolCopy(e)}}},[n("span",[t._v("Copy")])])],1)]),t._v(" "),n("tr",{staticClass:"text-center"},[n("td",[n("span",[t._v("④")])]),t._v(" "),n("td",[n("el-button",{attrs:{size:"mini","data-copy-txt":"④"},on:{click:function(e){t.handleSymbolCopy(e)}}},[n("span",[t._v("Copy")])])],1)])])])]),t._v(" "),n("el-col",{attrs:{lg:4,span:8}},[n("table",{staticClass:"table table-bordered symbol-table"},[n("tbody",[n("tr",{staticClass:"text-center"},[n("td",[n("span",[t._v("⑤")])]),t._v(" "),n("td",[n("el-button",{attrs:{size:"mini","data-copy-txt":"⑤"},on:{click:function(e){t.handleSymbolCopy(e)}}},[n("span",[t._v("Copy")])])],1)]),t._v(" "),n("tr",{staticClass:"text-center"},[n("td",[n("span",[t._v("⑥")])]),t._v(" "),n("td",[n("el-button",{attrs:{size:"mini","data-copy-txt":"⑥"},on:{click:function(e){t.handleSymbolCopy(e)}}},[n("span",[t._v("Copy")])])],1)]),t._v(" "),n("tr",{staticClass:"text-center"},[n("td",[n("span",[t._v("⑦")])]),t._v(" "),n("td",[n("el-button",{attrs:{size:"mini","data-copy-txt":"⑦"},on:{click:function(e){t.handleSymbolCopy(e)}}},[n("span",[t._v("Copy")])])],1)]),t._v(" "),n("tr",{staticClass:"text-center"},[n("td",[n("span",[t._v("⑧")])]),t._v(" "),n("td",[n("el-button",{attrs:{size:"mini","data-copy-txt":"⑧"},on:{click:function(e){t.handleSymbolCopy(e)}}},[n("span",[t._v("Copy")])])],1)])])])]),t._v(" "),n("el-col",{attrs:{lg:4,span:8}},[n("table",{staticClass:"table table-bordered symbol-table"},[n("tbody",[n("tr",{staticClass:"text-center"},[n("td",[n("span",[t._v("⑨")])]),t._v(" "),n("td",[n("el-button",{attrs:{size:"mini","data-copy-txt":"⑨"},on:{click:function(e){t.handleSymbolCopy(e)}}},[n("span",[t._v("Copy")])])],1)]),t._v(" "),n("tr",{staticClass:"text-center"},[n("td",[n("span",[t._v("⑩")])]),t._v(" "),n("td",[n("el-button",{attrs:{size:"mini","data-copy-txt":"⑩"},on:{click:function(e){t.handleSymbolCopy(e)}}},[n("span",[t._v("Copy")])])],1)]),t._v(" "),n("tr",{staticClass:"text-center"},[n("td",[n("span",[t._v("☛")])]),t._v(" "),n("td",[n("el-button",{attrs:{size:"mini","data-copy-txt":"☛"},on:{click:function(e){t.handleSymbolCopy(e)}}},[n("span",[t._v("Copy")])])],1)]),t._v(" "),n("tr",{staticClass:"text-center"},[n("td",[n("span",[t._v("➤")])]),t._v(" "),n("td",[n("el-button",{attrs:{size:"mini","data-copy-txt":"➤"},on:{click:function(e){t.handleSymbolCopy(e)}}},[n("span",[t._v("Copy")])])],1)])])])]),t._v(" "),n("el-col",{attrs:{lg:4,span:8}},[n("table",{staticClass:"table table-bordered symbol-table"},[n("tbody",[n("tr",{staticClass:"text-center"},[n("td",[n("span",[t._v("♬")])]),t._v(" "),n("td",[n("el-button",{attrs:{size:"mini","data-copy-txt":"♬"},on:{click:function(e){t.handleSymbolCopy(e)}}},[n("span",[t._v("Copy")])])],1)]),t._v(" "),n("tr",{staticClass:"text-center"},[n("td",[n("span",[t._v("☀")])]),t._v(" "),n("td",[n("el-button",{attrs:{size:"mini","data-copy-txt":"☀"},on:{click:function(e){t.handleSymbolCopy(e)}}},[n("span",[t._v("Copy")])])],1)]),t._v(" "),n("tr",{staticClass:"text-center"},[n("td",[n("span",[t._v("❆")])]),t._v(" "),n("td",[n("el-button",{attrs:{size:"mini","data-copy-txt":"❆"},on:{click:function(e){t.handleSymbolCopy(e)}}},[n("span",[t._v("Copy")])])],1)]),t._v(" "),n("tr",{staticClass:"text-center"},[n("td",[n("span",[t._v("♠")])]),t._v(" "),n("td",[n("el-button",{attrs:{size:"mini","data-copy-txt":"♠"},on:{click:function(e){t.handleSymbolCopy(e)}}},[n("span",[t._v("Copy")])])],1)])])])]),t._v(" "),n("el-col",{attrs:{lg:4,span:8}},[n("table",{staticClass:"table table-bordered symbol-table"},[n("tbody",[n("tr",{staticClass:"text-center"},[n("td",[n("span",[t._v("©")])]),t._v(" "),n("td",[n("el-button",{attrs:{size:"mini","data-copy-txt":"©"},on:{click:function(e){t.handleSymbolCopy(e)}}},[n("span",[t._v("Copy")])])],1)]),t._v(" "),n("tr",{staticClass:"text-center"},[n("td",[n("span",[t._v("®")])]),t._v(" "),n("td",[n("el-button",{attrs:{size:"mini","data-copy-txt":"®"},on:{click:function(e){t.handleSymbolCopy(e)}}},[n("span",[t._v("Copy")])])],1)]),t._v(" "),n("tr",{staticClass:"text-center"},[n("td",[n("span",[t._v("◆")])]),t._v(" "),n("td",[n("el-button",{attrs:{size:"mini","data-copy-txt":"◆"},on:{click:function(e){t.handleSymbolCopy(e)}}},[n("span",[t._v("Copy")])])],1)]),t._v(" "),n("tr",{staticClass:"text-center"},[n("td",{attrs:{colspan:"2"}},[n("a",{staticClass:"pull-right",staticStyle:{color:"#07519A"},attrs:{href:"https://www.piliapp.com/symbol/",target:"_blank"}},[t._v("More Symbols")])])])])])])],1)},[],!1,null,"9274eea6",null);r.options.__file="symbolTable.vue";var s=r.exports,c=n("lSEp"),l={name:"AmazonEditor",components:{symbolTable:s},props:{id:{type:String,default:function(){return"vue-tinymce-"+ +new Date+(1e3*Math.random()).toFixed(0)}},value:{type:String,default:""},height:{type:Number,required:!1,default:360}},data:function(){return{hasChange:!1,hasInit:!1,tinymceId:this.id,txtHtml:"",languageTypeList:{en:"en",zh:"zh_CN"}}},computed:{language:function(){return this.languageTypeList[this.$store.getters.language]},getContentHtmlLength:function(){var t=this.txtHtml||this.value;return Object(c.a)(t)},exceededLimit:function(){return this.getContentHtmlLength>2e3}},watch:{value:function(t){if(this.hasInit){var e=this.getTinymceInst();e&&(this.hasChange||this.$nextTick(function(){return e.setContent(t||"")}),this.txtHtml=e.getContent())}},language:function(){var t=this;this.destroyTinymce(),this.$nextTick(function(){return t.initTinymce()})}},mounted:function(){this.initTinymce()},activated:function(){this.initTinymce()},deactivated:function(){this.destroyTinymce()},destroyed:function(){this.destroyTinymce()},methods:{initTinymce:function(){var t=this,e=this;window.tinymce.init({language:this.language,selector:"#"+this.tinymceId,toolbar:["undo redo restoredraft | bold italic | bullist numlist | removeformat | code"],plugins:["autosave code  lists   paste  save   tabfocus  wordcount"],menubar:"",formats:{bold:{inline:"b"},italic:{inline:"i"}},valid_elements:"b,i,b/strong,b/h1,b/h2,b/h3,b/h4,b/h5,i/em,p,p/div,br,ul,li,ol",valid_styles:{},height:this.height,body_class:"panel-body ",advlist_bullet_styles:"",advlist_number_styles:"",autosave_prefix:"az_editor_autosave",autosave_ask_before_unload:!0,autosave_interval:"3s",autosave_restore_when_empty:!0,init_instance_callback:function(n){e.value&&n.setContent(e.value),e.hasInit=!0,n.on("NodeChange Change KeyUp SetContent",function(){t.hasChange=!0,t.$emit("input",n.getContent())})}})},destroyTinymce:function(){this.getTinymceInst()&&this.getTinymceInst().destroy()},getTinymceInst:function(){return window.tinymce.get(this.tinymceId)},setContent:function(t){this.getTinymceInst().setContent(t)},getContent:function(){this.getTinymceInst().getContent()},clearContent:function(){this.setContent(""),this.successMessage("Clear successfully")},restoreContent:function(){var t=this.getTinymceInst();t.undoManager.undo(),t.undoManager.redo(),this.successMessage("Restore successfully")},handleCopy:function(t,e){Object(o.a)(t,e)},successMessage:function(t){this.$message({message:t,type:"success",duration:1500})}}},u=(n("zU6D"),Object(a.a)(l,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"tinymce-container editor-container"},[n("symbolTable"),t._v(" "),n("el-row",{attrs:{gutter:10}},[n("el-col",[n("textarea",{directives:[{name:"model",rawName:"v-model",value:t.txtHtml,expression:"txtHtml"}],staticClass:"tinymce-textarea",attrs:{id:t.tinymceId},domProps:{value:t.txtHtml},on:{input:function(e){e.target.composing||(t.txtHtml=e.target.value)}}})])],1),t._v(" "),n("el-row",{attrs:{gutter:10}},[n("el-col",{staticClass:"editor-mark",attrs:{lg:12}},[t._v("Enter a total of "),n("span",{staticClass:"content-byte-count",class:{"exceeded-limit":t.exceededLimit}},[t._v(t._s(t.getContentHtmlLength))]),t._v(" characters")]),t._v(" "),n("el-col",{staticClass:"editor-btn-wrapper editor-mark",attrs:{lg:12}},[n("el-button",{staticClass:"az-editor-btn",attrs:{type:"danger"},on:{click:t.clearContent}},[t._v("!! 清空 !!")]),t._v(" "),n("el-button",{staticClass:"az-editor-btn",attrs:{type:"warning"},on:{click:t.restoreContent}},[t._v("恢复")]),t._v(" "),n("el-button",{staticClass:"az-editor-btn",attrs:{type:"primary"},on:{click:function(e){t.handleCopy(t.txtHtml,e)}}},[t._v("复制HTML源码")])],1)],1)],1)},[],!1,null,"1ad1a4e0",null));u.options.__file="index.vue";var d={name:"AmazonEditor",components:{AzEditor:u.exports},data:function(){return{content:""}}},f=(n("Rp5C"),Object(a.a)(d,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"editor-wrapper"},[n("el-row",[n("el-col",[n("AzEditor",{attrs:{height:450},model:{value:t.content,callback:function(e){t.content=e},expression:"content"}})],1)],1)],1)},[],!1,null,"746ba908",null));f.options.__file="amazonEditor.vue";e.default=f.exports},wOJ8:function(t,e){function n(){}n.prototype={on:function(t,e,n){var o=this.e||(this.e={});return(o[t]||(o[t]=[])).push({fn:e,ctx:n}),this},once:function(t,e,n){var o=this;function i(){o.off(t,i),e.apply(n,arguments)}return i._=e,this.on(t,i,n)},emit:function(t){for(var e=[].slice.call(arguments,1),n=((this.e||(this.e={}))[t]||[]).slice(),o=0,i=n.length;o<i;o++)n[o].fn.apply(n[o].ctx,e);return this},off:function(t,e){var n=this.e||(this.e={}),o=n[t],i=[];if(o&&e)for(var a=0,r=o.length;a<r;a++)o[a].fn!==e&&o[a].fn._!==e&&i.push(o[a]);return i.length?n[t]=i:delete n[t],this}},t.exports=n},xcgL:function(t,e,n){},zU6D:function(t,e,n){"use strict";var o=n("H/bc");n.n(o).a}}]);