(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2234f6c8"],{"13d5":function(t,e,n){"use strict";var a=n("23e7"),r=n("d58f").left,i=n("a640"),o=n("ae40"),s=i("reduce"),l=o("reduce",{1:0});a({target:"Array",proto:!0,forced:!s||!l},{reduce:function(t){return r(this,t,arguments.length,arguments.length>1?arguments[1]:void 0)}})},5899:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(t,e,n){var a=n("1d80"),r=n("5899"),i="["+r+"]",o=RegExp("^"+i+i+"*"),s=RegExp(i+i+"*$"),l=function(t){return function(e){var n=String(a(e));return 1&t&&(n=n.replace(o,"")),2&t&&(n=n.replace(s,"")),n}};t.exports={start:l(1),end:l(2),trim:l(3)}},"656e":function(t,e,n){},8418:function(t,e,n){"use strict";var a=n("c04e"),r=n("9bf2"),i=n("5c6c");t.exports=function(t,e,n){var o=a(e);o in t?r.f(t,o,i(0,n)):t[o]=n}},"8f80":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("van-cell-group",[n("van-field",{attrs:{type:"digit",label:"贷款数额",placeholder:"请输入贷款数额（万元）"},model:{value:t.amount,callback:function(e){t.amount=e},expression:"amount"}}),n("van-field",{attrs:{type:"digit",label:"贷款期限",placeholder:"请输入贷款期限（年）"},model:{value:t.term,callback:function(e){t.term=e},expression:"term"}}),n("van-field",{attrs:{type:"number",label:"贷款利率",placeholder:"请输入贷款利率（%）"},model:{value:t.rate,callback:function(e){t.rate=e},expression:"rate"}}),n("van-radio-group",{attrs:{direction:"horizontal"},model:{value:t.way,callback:function(e){t.way=e},expression:"way"}},[n("van-radio",{attrs:{shape:"square",name:"1"}},[t._v("等额本息")]),n("van-radio",{attrs:{shape:"square",name:"2"}},[t._v("等额本金")])],1),n("van-field",{attrs:{type:"digit",label:"提前还款月数",placeholder:"请输入提前还款月数"},model:{value:t.advance,callback:function(e){t.advance=e},expression:"advance"}}),t.advance?n("p",[t._v("已还利息 "),n("span",{staticClass:"num"},[t._v(t._s(t.hasPay))]),t._v(",若在第"+t._s(t.advance)+"月提前还款，预计可省利息 "),n("span",{staticClass:"num"},[t._v(t._s(t.save))]),t._v("，当月剩余本金"),n("span",{staticClass:"num"},[t._v(t._s(t.baseSum))])]):t._e()],1),n("van-button",{attrs:{plain:"",hairline:"",type:"info",size:"small"},on:{click:t.onQuery}},[t._v("查询")]),n("json-excel",{staticClass:"export-excel-wrapper",attrs:{data:t.list.list,title:"本息合计："+t.list.totalPayment+" 总利息："+t.list.totalInterest,fields:t.json_fields,name:"房贷计算.xls"}},[n("van-button",{attrs:{loading:t.loading,"loading-text":"正在导出...",plain:"",hairline:"",type:"info",size:"small"}},[t._v("导出 ")])],1),n("div",{staticClass:"total"},[t._v("本息合计："),n("span",{staticClass:"num"},[t._v(t._s(t.list.totalPayment||0))]),t._v(" 总利息："),n("span",{staticClass:"num"},[t._v(t._s(t.list.totalInterest||0))])]),n("table",{attrs:{border:"1px",align:"center"}},[t._m(0),t._l(t.list.list,(function(e){return n("tr",{key:e.endingBalance},[n("td",[t._v(t._s(e.period))]),n("td",[t._v(t._s(e.monthlyPayment))]),n("td",[t._v(t._s(e.principal))]),n("td",[t._v(t._s(e.interest))]),n("td",[t._v(t._s(e.endingBalance))])])}))],2)],1)},r=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("tr",[n("td",[t._v("期数")]),n("td",[t._v("月供")]),n("td",[t._v("月供本金")]),n("td",[t._v("月供利息")]),n("td",[t._v("剩余本金（还款后）")])])}],i=(n("4de4"),n("13d5"),n("fb6a"),n("a9e3"),n("b680"),n("f2d9")),o=n("9e43"),s={name:"Loan",components:{JsonExcel:i["a"]},data:function(){return{loading:!1,amount:130,term:30,rate:4.1,way:"1",advance:null,list:[],hasPay:0,baseSum:0,json_fields:{"期数":"period","月供":"monthlyPayment","月供本金":"principal","月供利息":"interest","剩余本金（还款后）":"endingBalance"}}},computed:{save:function(){var t=this;if(this.advance){var e=this.list.list.slice(0,this.advance);this.baseSum=this.list.list.filter((function(e){return e.period==t.advance}))[0].endingBalance;var n=e.reduce((function(t,e){return t+Number(e.interest)}),0);return this.hasPay=n.toFixed(0),(this.list.totalInterest-n).toFixed(0)}return 0}},mounted:function(){this.onQuery()},methods:{onQuery:function(){"1"===this.way?this.list=o.calcAverageCapitalPlusInterest({amount:1e4*this.amount,term:12*this.term,rate:this.rate}):this.list=o.calcAverageCapital({amount:1e4*this.amount,term:12*this.term,rate:this.rate})}}},l=s,u=(n("e8ba"),n("2877")),c=Object(u["a"])(l,a,r,!1,null,"30bde3ce",null);e["default"]=c.exports},"9e43":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.calcAverageCapital=i,e.calcAverageCapitalPlusInterest=r,e["default"]=void 0;var a=n("da92");function r(t){for(var e=t.amount,n=t.term,r=t.rate,i=(0,a.times)((0,a.divide)(r,12),.01),o=(0,a.divide)((0,a.times)(e,i,Math.pow((0,a.plus)(1,i),n)),(0,a.minus)(Math.pow((0,a.plus)(1,i),n),1)),s=(0,a.times)(o,n),l=(0,a.minus)(s,e),u=[],c=e,d=0;d<n;d++){var f=(0,a.times)(c,i),p=(0,a.minus)(o,f),h=(0,a.minus)(c,p);u.push({period:d+1,monthlyPayment:o.toFixed(2),beginningBalance:c.toFixed(2),interest:f.toFixed(2),principal:p.toFixed(2),endingBalance:h.toFixed(2)}),c=h}return{totalPayment:s.toFixed(2),totalInterest:l.toFixed(2),list:u}}function i(t){for(var e=t.amount,n=t.term,r=t.rate,i=(0,a.times)((0,a.divide)(r,12),.01),o=(0,a.divide)(e,n),s=(0,a.times)((0,a.plus)(n,1),e,i,.5),l=(0,a.plus)(s,e),u=[],c=e,d=0;d<n;d++){var f=(0,a.times)(c,i),p=(0,a.plus)(f,o),h=(0,a.minus)(c,o);u.push({period:d+1,monthlyPayment:p.toFixed(2),beginningBalance:c.toFixed(2),interest:f.toFixed(2),principal:o.toFixed(2),endingBalance:h.toFixed(2)}),c=h}return{totalPayment:l.toFixed(2),totalInterest:s.toFixed(2),list:u}}(0,a.enableBoundaryChecking)(!1);var o={calcAverageCapitalPlusInterest:r,calcAverageCapital:i};e["default"]=o},a9e3:function(t,e,n){"use strict";var a=n("83ab"),r=n("da84"),i=n("94ca"),o=n("6eeb"),s=n("5135"),l=n("c6b6"),u=n("7156"),c=n("c04e"),d=n("d039"),f=n("7c73"),p=n("241c").f,h=n("06cf").f,m=n("9bf2").f,v=n("58a8").trim,b="Number",g=r[b],y=g.prototype,x=l(f(y))==b,_=function(t){var e,n,a,r,i,o,s,l,u=c(t,!1);if("string"==typeof u&&u.length>2)if(u=v(u),e=u.charCodeAt(0),43===e||45===e){if(n=u.charCodeAt(2),88===n||120===n)return NaN}else if(48===e){switch(u.charCodeAt(1)){case 66:case 98:a=2,r=49;break;case 79:case 111:a=8,r=55;break;default:return+u}for(i=u.slice(2),o=i.length,s=0;s<o;s++)if(l=i.charCodeAt(s),l<48||l>r)return NaN;return parseInt(i,a)}return+u};if(i(b,!g(" 0o1")||!g("0b1")||g("+0x1"))){for(var w,C=function(t){var e=arguments.length<1?0:t,n=this;return n instanceof C&&(x?d((function(){y.valueOf.call(n)})):l(n)!=b)?u(new g(_(e)),n,C):_(e)},F=a?p(g):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),E=0;F.length>E;E++)s(g,w=F[E])&&!s(C,w)&&m(C,w,h(g,w));C.prototype=y,y.constructor=C,o(r,b,C)}},d58f:function(t,e,n){var a=n("1c0b"),r=n("7b0b"),i=n("44ad"),o=n("50c4"),s=function(t){return function(e,n,s,l){a(n);var u=r(e),c=i(u),d=o(u.length),f=t?d-1:0,p=t?-1:1;if(s<2)while(1){if(f in c){l=c[f],f+=p;break}if(f+=p,t?f<0:d<=f)throw TypeError("Reduce of empty array with no initial value")}for(;t?f>=0:d>f;f+=p)f in c&&(l=n(l,c[f],f,u));return l}};t.exports={left:s(!1),right:s(!0)}},da92:function(t,e,n){"use strict";function a(t,e){return void 0===e&&(e=15),+parseFloat(Number(t).toPrecision(e))}function r(t){var e=t.toString().split(/[eE]/),n=(e[0].split(".")[1]||"").length-+(e[1]||0);return n>0?n:0}function i(t){if(-1===t.toString().indexOf("e"))return Number(t.toString().replace(".",""));var e=r(t);return e>0?a(Number(t)*Math.pow(10,e)):Number(t)}function o(t){p&&(t>Number.MAX_SAFE_INTEGER||Number.MIN_SAFE_INTEGER)}function s(t){return function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];var a=e[0],r=e.slice(1);return r.reduce((function(e,n){return t(e,n)}),a)}}n.r(e),n.d(e,"strip",(function(){return a})),n.d(e,"plus",(function(){return u})),n.d(e,"minus",(function(){return c})),n.d(e,"times",(function(){return l})),n.d(e,"divide",(function(){return d})),n.d(e,"round",(function(){return f})),n.d(e,"digitLength",(function(){return r})),n.d(e,"float2Fixed",(function(){return i})),n.d(e,"enableBoundaryChecking",(function(){return h}));var l=s((function(t,e){var n=i(t),a=i(e),s=r(t)+r(e),l=n*a;return o(l),l/Math.pow(10,s)})),u=s((function(t,e){var n=Math.pow(10,Math.max(r(t),r(e)));return(l(t,n)+l(e,n))/n})),c=s((function(t,e){var n=Math.pow(10,Math.max(r(t),r(e)));return(l(t,n)-l(e,n))/n})),d=s((function(t,e){var n=i(t),s=i(e);return o(n),o(s),l(n/s,a(Math.pow(10,r(e)-r(t))))}));function f(t,e){var n=Math.pow(10,e),a=d(Math.round(Math.abs(l(t,n))),n);return t<0&&0!==a&&(a=l(a,-1)),a}var p=!0;function h(t){void 0===t&&(t=!0),p=t}var m={strip:a,plus:u,minus:c,times:l,divide:d,round:f,digitLength:r,float2Fixed:i,enableBoundaryChecking:h};e["default"]=m},e8ba:function(t,e,n){"use strict";var a=n("656e"),r=n.n(a);r.a},f2d9:function(t,e,n){"use strict";(function(t){"undefined"!==typeof globalThis?globalThis:"undefined"!==typeof window?window:"undefined"!==typeof t||"undefined"!==typeof self&&self;function n(t,e){return e={exports:{}},t(e,e.exports),e.exports}var a=n((function(t,e){(function(e,n){t.exports=n()})(0,(function(){return function t(e,n,a){var r,i,o=window,s="application/octet-stream",l=a||s,u=e,c=!n&&!a&&u,d=document.createElement("a"),f=function(t){return String(t)},p=o.Blob||o.MozBlob||o.WebKitBlob||f,h=n||"download";if(p=p.call?p.bind(o):Blob,"true"===String(this)&&(u=[u,l],l=u[0],u=u[1]),c&&c.length<2048&&(h=c.split("/").pop().split("?")[0],d.href=c,-1!==d.href.indexOf(c))){var m=new XMLHttpRequest;return m.open("GET",c,!0),m.responseType="blob",m.onload=function(e){t(e.target.response,h,s)},setTimeout((function(){m.send()}),0),m}if(/^data:([\w+-]+\/[\w+.-]+)?[,;]/.test(u)){if(!(u.length>2096103.424&&p!==f))return navigator.msSaveBlob?navigator.msSaveBlob(y(u),h):x(u);u=y(u),l=u.type||s}else if(/([\x80-\xff])/.test(u)){var v=0,b=new Uint8Array(u.length),g=b.length;for(v;v<g;++v)b[v]=u.charCodeAt(v);u=new p([b],{type:l})}function y(t){var e=t.split(/[:;,]/),n=e[1],a="base64"==e[2]?atob:decodeURIComponent,r=a(e.pop()),i=r.length,o=0,s=new Uint8Array(i);for(o;o<i;++o)s[o]=r.charCodeAt(o);return new p([s],{type:n})}function x(t,e){if("download"in d)return d.href=t,d.setAttribute("download",h),d.className="download-js-link",d.innerHTML="downloading...",d.style.display="none",document.body.appendChild(d),setTimeout((function(){d.click(),document.body.removeChild(d),!0===e&&setTimeout((function(){o.URL.revokeObjectURL(d.href)}),250)}),66),!0;if(/(Version)\/(\d+)\.(\d+)(?:\.(\d+))?.*Safari\//.test(navigator.userAgent))return/^data:/.test(t)&&(t="data:"+t.replace(/^data:([\w\/\-\+]+)/,s)),window.open(t)||confirm("Displaying New Document\n\nUse Save As... to download, then click back to return to this page.")&&(location.href=t),!0;var n=document.createElement("iframe");document.body.appendChild(n),!e&&/^data:/.test(t)&&(t="data:"+t.replace(/^data:([\w\/\-\+]+)/,s)),n.src=t,setTimeout((function(){document.body.removeChild(n)}),333)}if(r=u instanceof p?u:new p([u],{type:l}),navigator.msSaveBlob)return navigator.msSaveBlob(r,h);if(o.URL)x(o.URL.createObjectURL(r),!0);else{if("string"===typeof r||r.constructor===f)try{return x("data:"+l+";base64,"+o.btoa(r))}catch(_){return x("data:"+l+","+encodeURIComponent(r))}i=new FileReader,i.onload=function(t){x(this.result)},i.readAsDataURL(r)}return!0}}))})),r={props:{type:{type:String,default:"xls"},data:{type:Array,required:!1,default:null},fields:{type:Object,default:()=>null},exportFields:{type:Object,default:()=>null},defaultValue:{type:String,required:!1,default:""},header:{default:null},footer:{default:null},name:{type:String,default:"data.xls"},fetch:{type:Function},meta:{type:Array,default:()=>[]},worksheet:{type:String,default:"Sheet1"},beforeGenerate:{type:Function},beforeFinish:{type:Function},escapeCsv:{type:Boolean,default:!0},stringifyLongNum:{type:Boolean,default:!1}},computed:{idName(){var t=(new Date).getTime();return"export_"+t},downloadFields(){return this.fields?this.fields:this.exportFields?this.exportFields:void 0}},methods:{async generate(){"function"===typeof this.beforeGenerate&&await this.beforeGenerate();let t=this.data;if("function"!==typeof this.fetch&&t||(t=await this.fetch()),!t||!t.length)return;let e=this.getProcessedJson(t,this.downloadFields);return"html"===this.type?this.export(this.jsonToXLS(e),this.name.replace(".xls",".html"),"text/html"):"csv"===this.type?this.export(this.jsonToCSV(e),this.name.replace(".xls",".csv"),"application/csv"):this.export(this.jsonToXLS(e),this.name,"application/vnd.ms-excel")},export:async function(t,e,n){let r=this.base64ToBlob(t,n);"function"===typeof this.beforeFinish&&await this.beforeFinish(),a(r,e,n)},jsonToXLS(t){let e='<html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:x="urn:schemas-microsoft-com:office:excel" xmlns="http://www.w3.org/TR/REC-html40"><head><meta name=ProgId content=Excel.Sheet> <meta name=Generator content="Microsoft Excel 11"><meta http-equiv="Content-Type" content="text/html; charset=UTF-8">\x3c!--[if gte mso 9]><xml><x:ExcelWorkbook><x:ExcelWorksheets><x:ExcelWorksheet><x:Name>${worksheet}</x:Name><x:WorksheetOptions><x:DisplayGridlines/></x:WorksheetOptions></x:ExcelWorksheet></x:ExcelWorksheets></x:ExcelWorkbook></xml><![endif]--\x3e<style>br {mso-data-placement: same-cell;}</style></head><body><table>${table}</table></body></html>',n="<thead>";const a=Object.keys(t[0]).length;let r=this;const i=this.header||this.$attrs.title;i&&(n+=this.parseExtraData(i,'<tr><th colspan="'+a+'">${data}</th></tr>')),n+="<tr>";for(let o in t[0])n+="<th>"+o+"</th>";return n+="</tr>",n+="</thead>",n+="<tbody>",t.map((function(t,e){n+="<tr>";for(let a in t)n+="<td>"+r.preprocessLongNum(r.valueReformattedForMultilines(t[a]))+"</td>";n+="</tr>"})),n+="</tbody>",null!=this.footer&&(n+="<tfoot>",n+=this.parseExtraData(this.footer,'<tr><td colspan="'+a+'">${data}</td></tr>'),n+="</tfoot>"),e.replace("${table}",n).replace("${worksheet}",this.worksheet)},jsonToCSV(t){let e=this;var n=[];const a=this.header||this.$attrs.title;a&&n.push(this.parseExtraData(a,"${data}\r\n"));for(let r in t[0])n.push(r),n.push(",");return n.pop(),n.push("\r\n"),t.map((function(t){for(let a in t){let r=t[a]+"";e.escapeCsv&&(r='="'+r+'"',r.match(/[,"\n]/)&&(r='"'+r.replace(/\"/g,'""')+'"')),n.push(r),n.push(",")}n.pop(),n.push("\r\n")})),null!=this.footer&&n.push(this.parseExtraData(this.footer,"${data}\r\n")),n.join("")},getProcessedJson(t,e){let n=this.getKeys(t,e),a=[],r=this;return t.map((function(t,e){let i={};for(let a in n){let e=n[a];i[a]=r.getValue(e,t)}a.push(i)})),a},getKeys(t,e){if(e)return e;let n={};for(let a in t[0])n[a]=a;return n},parseExtraData(t,e){let n="";if(Array.isArray(t))for(var a=0;a<t.length;a++)t[a]&&(n+=e.replace("${data}",t[a]));else n+=e.replace("${data}",t);return n},getValue(t,e){const n="object"!==typeof t?t:t.field;let a="string"!==typeof n?[]:n.split("."),r=this.defaultValue;return r=n?a.length>1?this.getValueFromNestedItem(e,a):this.parseValue(e[n]):e,t.hasOwnProperty("callback")&&(r=this.getValueFromCallback(r,t.callback)),r},valueReformattedForMultilines(t){return"string"==typeof t?t.replace(/\n/gi,"<br/>"):t},preprocessLongNum(t){if(this.stringifyLongNum){if(String(t).startsWith("0x"))return t;if(!isNaN(t)&&""!=t&&(t>99999999999||t<1e-13))return'="'+t+'"'}return t},getValueFromNestedItem(t,e){let n=t;for(let a of e)n&&(n=n[a]);return this.parseValue(n)},getValueFromCallback(t,e){if("function"!==typeof e)return this.defaultValue;const n=e(t);return this.parseValue(n)},parseValue(t){return t||0===t||"boolean"===typeof t?t:this.defaultValue},base64ToBlob(t,e){let n=window.btoa(window.unescape(encodeURIComponent(t))),a=atob(n),r=a.length,i=new Uint8ClampedArray(r);while(r--)i[r]=a.charCodeAt(r);return new Blob([i],{type:e})}}};function i(t,e,n,a,r,i,o,s,l,u){"boolean"!==typeof o&&(l=s,s=o,o=!1);var c,d="function"===typeof n?n.options:n;if(t&&t.render&&(d.render=t.render,d.staticRenderFns=t.staticRenderFns,d._compiled=!0,r&&(d.functional=!0)),a&&(d._scopeId=a),i?(c=function(t){t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,t||"undefined"===typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),e&&e.call(this,l(t)),t&&t._registeredComponents&&t._registeredComponents.add(i)},d._ssrRegister=c):e&&(c=o?function(){e.call(this,u(this.$root.$options.shadowRoot))}:function(t){e.call(this,s(t))}),c)if(d.functional){var f=d.render;d.render=function(t,e){return c.call(e),f(t,e)}}else{var p=d.beforeCreate;d.beforeCreate=p?[].concat(p,c):[c]}return n}var o=i;const s=r;var l=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:t.idName},on:{click:t.generate}},[t._t("default",[t._v(" Download "+t._s(t.name)+" ")])],2)},u=[];l._withStripped=!0;const c=void 0,d=void 0,f=void 0,p=!1;var h=o({render:l,staticRenderFns:u},c,s,d,p,f,void 0,void 0);e["a"]=h}).call(this,n("c8ba"))},fb6a:function(t,e,n){"use strict";var a=n("23e7"),r=n("861d"),i=n("e8b5"),o=n("23cb"),s=n("50c4"),l=n("fc6a"),u=n("8418"),c=n("b622"),d=n("1dde"),f=n("ae40"),p=d("slice"),h=f("slice",{ACCESSORS:!0,0:0,1:2}),m=c("species"),v=[].slice,b=Math.max;a({target:"Array",proto:!0,forced:!p||!h},{slice:function(t,e){var n,a,c,d=l(this),f=s(d.length),p=o(t,f),h=o(void 0===e?f:e,f);if(i(d)&&(n=d.constructor,"function"!=typeof n||n!==Array&&!i(n.prototype)?r(n)&&(n=n[m],null===n&&(n=void 0)):n=void 0,n===Array||void 0===n))return v.call(d,p,h);for(a=new(void 0===n?Array:n)(b(h-p,0)),c=0;p<h;p++,c++)p in d&&u(a,c,d[p]);return a.length=c,a}})}}]);