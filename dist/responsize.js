var d=this;function f(a,b){var c=a.split("."),e=d;c[0]in e||!e.execScript||e.execScript("var "+c[0]);for(var k;c.length&&(k=c.shift());)c.length||void 0===b?e=e[k]?e[k]:e[k]={}:e[k]=b};function g(){this.C=window.ce.api.CloudExplorer.get("ce-js")}f("FileService",g);g.prototype.open=function(){var a=this;return new Promise(function(b,c){a.C.pick(function(a){console.log("my Blob: "+JSON.stringify(a));b(a)},function(a){console.log("error "+JSON.stringify(a));c(a)})})};g.prototype.open=g.prototype.open;function h(a){this.element=a;this.a=a.getElementsByTagName("iframe")[0];this.height=this.width=1;window.addEventListener("resize",this.d.bind(this))}f("Stage",h);h.prototype.w=function(a,b){this.width=a;this.height=b;this.d()};h.prototype.setSize=h.prototype.w;
h.prototype.d=function(){this.a.style.width=this.width+"px";this.a.style.height=this.height+"px";var a=this.element.offsetWidth,b=this.element.offsetHeight,c=Math.min(1,a/this.width,b/this.height);this.a.style.transform="scale("+c+")";this.a.style.transformOrigin="0 0";b=(b-this.height*c)/2;this.a.style.left=(a-this.width*c)/2+"px";this.a.style.top=b+"px"};h.prototype.redraw=h.prototype.d;
h.prototype.A=function(a){var b=this;return new Promise(function(c,e){b.a.onload=function(){return c(b.a.contentDocument)};b.a.onerror=function(a){return e(a)};b.a.src=a})};h.prototype.setUrl=h.prototype.A;h.prototype.L=function(a){var b=this;return new Promise(function(c,e){b.a.onload=function(){b.a.onload=c(b.a.contentDocument);b.a.src="";b.a.contentDocument.write(a)};b.a.onerror=function(a){return e(a)};b.a.src="about:blank"})};h.prototype.setHtml=h.prototype.L;f("Device",{P:0,Q:1,R:2,S:3,O:4});var l=[{name:"mobile",width:320,height:480},{name:"mobile-h",width:476,height:320},{name:"tablet",width:768,height:1024},{name:"tablet-h",width:1024,height:768},{name:"desktop",width:1280,height:800}];f("DeviceData",l);
function m(a){var b=this;this.element=a;this.element.querySelector(".open");this.K=this.element.querySelector(".save");this.selection=[];this.n=this.u=this.m=null;this.element.addEventListener("click",function(a){var e=a.target;e.classList.contains("open")&&b.m&&b.m();e.classList.contains("save")?(b.K.classList.toggle("off"),b.u&&b.u()):e.classList.contains("mobile")?b.e(0):e.classList.contains("mobile-h")?b.e(1):e.classList.contains("tablet")?b.e(2):e.classList.contains("desktop")&&b.e(4);a.preventDefault();
return!1})}f("Toolbar",m);m.prototype.e=function(a){for(var b=this.element.querySelectorAll(".selected"),c=0;c<b.length;c++)b.item(c).classList.remove("selected");this.element.querySelector("."+l[a].name).classList.add("selected");this.n&&this.n(l[a].width,l[a].height)};m.prototype.setDevice=m.prototype.e;m.prototype.o=function(a){this.selection=a;this.d()};m.prototype.setSelection=m.prototype.o;m.prototype.d=function(){};m.prototype.redraw=m.prototype.d;function n(){this.j=this.i=this.k=!1;this.f=this.c=this.b=null;this.r=this.H.bind(this);this.t=this.J.bind(this);this.s=this.I.bind(this)}f("Wysiwyg",n);n.prototype.N=function(a){return this.c=a};n.prototype.setOnSelect=n.prototype.N;n.prototype.G=function(){return this.c};n.prototype.getOnSelect=n.prototype.G;n.prototype.M=function(a){return this.f=a};n.prototype.setOnBeforeSelect=n.prototype.M;n.prototype.F=function(){return this.f};n.prototype.getOnBeforeSelect=n.prototype.F;
n.prototype.v=function(a){this.b&&(this.b.removeEventListener("mousedown",this.r),this.b.removeEventListener("mouseup",this.t),this.b.removeEventListener("mousemove",this.s));this.b=a;this.p(this.k);this.b.addEventListener("mouseup",this.t);this.b.addEventListener("mousedown",this.r);this.b.addEventListener("mousemove",this.s);this.i=!1;a=document.createElement("style");a.innerHTML="      .rsz-select-mode * {        min-width: 20px !important;        min-height: 20px !important;        opacity: 1 !important;        box-shadow: 0px 0px 2px rgba(51, 51, 51, 0.2);        cursor: pointer;      }      .rsz-dragging {        position: absolute !important;      }      .rsz-selected {        box-shadow: 0 0 4px #333333;      }      .rsz-select-candidate {      }    ";
this.b.appendChild(a)};n.prototype.setContainer=n.prototype.v;n.prototype.p=function(a){this.k=a;this.b&&(a?this.b.classList.add("rsz-select-mode"):this.b.classList.remove("rsz-select-mode"))};n.prototype.setSelectionMode=n.prototype.p;n.prototype.h=function(a){for(var b=a;b&&this.f&&!this.f(b);)b=b.parentNode;return b||a};n.prototype.getBestElement=n.prototype.h;n.prototype.J=function(a){p(this,this.h(a.target));a.preventDefault();return!1};
n.prototype.H=function(a){this.h(a.target);this.i=!0;a.preventDefault();return!1};n.prototype.I=function(a){var b=this.h(a.target);if(this.k)if(this.i)this.j||(this.j=!0);else{for(var c=this.b.querySelectorAll(".rsz-select-candidate"),e=0;e<c.length;e++)c[e].classList.remove("rsz-select-candidate");b.classList.add("rsz-select-candidate")}a.preventDefault();return!1};
function p(a,b){a.i=!1;a.k&&(a.j?a.j=!1:(a.l().forEach(function(c){c!=b&&(c.classList.remove("rsz-selected"),a.c&&a.c())}),q(a,b)))}n.prototype.l=function(){for(var a=[],b=this.b.querySelectorAll(".rsz-selected"),c=0;c<b.length;c++)a.push(b[c]);return a};n.prototype.getSelected=n.prototype.l;n.prototype.select=function(a){a.classList.add("rsz-selected");this.c&&this.c()};function q(a,b){b.classList.toggle("rsz-selected");a.c&&a.c()};function r(a){var b=this;this.toolbar=new m(a.querySelector("#toolbar"));this.B=new h(a.querySelector("#stage"));this.g=new n;this.D=new g;this.toolbar.n=function(a,e){return b.B.w(a,e)};this.toolbar.m=function(){return b.D.open().then(function(a){return s(b,a)})};this.g.f=function(a){return b.q(a)};this.g.c=function(){return b.toolbar.o(b.g.l())};this.g.p(!0);this.toolbar.e(4)}
r.prototype.q=function(a){var b=0,c;for(c in a.parentNode.childNodes)1===a.parentNode.childNodes[c].nodeType&&b++;return 1<b};f("App.prototype.hasSiblings",r.prototype.q);function s(a,b){a.B.A(b.url).then(function(b){a.g.v(b.body);a.toolbar.o([])})};window.initResponsizeApp=function(){for(var a=new r(document.getElementById("rsz-app")),b=document.location.search,b=b.split("+").join(" "),c={},e,k=/[?&]?([^=]+)=([^&]*)/g;e=k.exec(b);)c[decodeURIComponent(e[1])]=decodeURIComponent(e[2]);c.url&&s(a,{url:c.url})};
/*
//@ sourceMappingURL=responsize.js.map
*/