window.COOKIES_ENABLER=window.COOKIES_ENABLER||function(){"use strict";var e,n,t,s={scriptClass:"ce-script",iframeClass:"ce-iframe",acceptClass:"ce-accept",disableClass:"ce-disable",dismissClass:"ce-dismiss",bannerClass:"ce-banner",bannerHTML:null!==document.getElementById("ce-banner-html")?document.getElementById("ce-banner-html").innerHTML:'<p>This website uses cookies. <a href="#" class="ce-accept">Enable Cookies</a></p>',eventScroll:!1,scrollOffset:200,clickOutside:!1,cookieName:"ce-cookie",cookieDuration:"365",wildcardDomain:!1,iframesPlaceholder:!0,iframesPlaceholderHTML:null!==document.getElementById("ce-iframePlaceholder-html")?document.getElementById("ce-iframePlaceholder-html").innerHTML:'<p>To view this content you need to<a href="#" class="ce-accept">Enable Cookies</a></p>',iframesPlaceholderClass:"ce-iframe-placeholder",onEnable:"",onDismiss:"",onDisable:""};function i(e,n){do{if(a(e,n))return e}while(e=e.parentNode);return null}function a(e,n){return(" "+e.className+" ").indexOf(" "+n+" ")>-1}var o,c,l,r,d=function(){Math.abs(window.pageYOffset-t)>e.scrollOffset&&u()},m=function(){var s,a=(n={accept:document.getElementsByClassName(e.acceptClass),disable:document.getElementsByClassName(e.disableClass),banner:document.getElementsByClassName(e.bannerClass),dismiss:document.getElementsByClassName(e.dismissClass)}).accept,o=a.length,c=n.disable,l=c.length,r=n.dismiss,m=r.length;for(e.eventScroll&&window.addEventListener("load",function(){t=window.pageYOffset,window.addEventListener("scroll",d)}),e.clickOutside&&document.addEventListener("click",function(n){var t=n.target;if(i(t,e.iframesPlaceholderClass)||i(t,e.disableClass)||i(t,e.bannerClass)||i(t,e.dismissClass)||i(t,e.disableClass))return!1;u()}),s=0;s<o;s++)a[s].addEventListener("click",function(e){e.preventDefault(),u(e)});for(s=0;s<l;s++)c[s].addEventListener("click",function(e){e.preventDefault(),f(e)});for(s=0;s<m;s++)r[s].addEventListener("click",function(e){e.preventDefault(),p.dismiss()})},u=(o=function(n){void 0!==n&&"click"===n.type&&n.preventDefault(),"Y"!=b.get()&&(b.set(),v.get(),h.get(),h.removePlaceholders(),p.dismiss(),window.removeEventListener("scroll",d),"function"==typeof e.onEnable&&e.onEnable())},c=250,l=!1,function(){var e=this,n=arguments,t=l&&!r;clearTimeout(r),r=setTimeout(function(){r=null,l||o.apply(e,n)},c),t&&o.apply(e,n)}),f=function(n){void 0!==n&&"click"===n.type&&n.preventDefault(),"N"!=b.get()&&(b.set("N"),p.dismiss(),window.removeEventListener("scroll",d),"function"==typeof e.onDisable&&e.onDisable())},p=function(){return{create:function(){var n='<div class="'+e.bannerClass+'">'+e.bannerHTML+"</div>";document.body.insertAdjacentHTML("beforeend",n)},dismiss:function(){n.banner[0].style.display="none","function"==typeof e.onDismiss&&e.onDismiss()}}}(),b=function(){return{set:function(n){var t,s,i,a,o,c=void 0!==n?n:"Y";e.cookieDuration?((t=new Date).setTime(t.getTime()+24*e.cookieDuration*60*60*1e3),s="; expires="+t.toGMTString()):s="",1!==(i=location.hostname).split(".")&&e.wildcardDomain?((a=i.split(".")).shift(),o="."+a.join("."),document.cookie=e.cookieName+"="+c+s+"; path=/; domain="+o,null==b.get()&&(o="."+i,document.cookie=e.cookieName+"="+c+s+"; path=/; domain="+o)):document.cookie=e.cookieName+"="+c+s+"; path=/"},get:function(){var n,t,s,i=document.cookie.split(";"),a=i.length;for(n=0;n<a;n++)if(t=i[n].substr(0,i[n].indexOf("=")),s=i[n].substr(i[n].indexOf("=")+1),(t=t.replace(/^\s+|\s+$/g,""))==e.cookieName)return unescape(s)}}}(),h=function(){function n(n){var t=document.createElement("div");t.className=e.iframesPlaceholderClass,t.innerHTML=e.iframesPlaceholderHTML,n.parentNode.insertBefore(t,n)}return{hide:function(){var t,s,i=document.getElementsByClassName(e.iframeClass),a=i.length;for(s=0;s<a;s++)(t=i[s]).style.display="none",e.iframesPlaceholder&&n(t)},get:function(){var n,t,s,i=document.getElementsByClassName(e.iframeClass),a=i.length;for(s=0;s<a;s++)n=(t=i[s]).attributes["data-ce-src"].value,t.src=n,t.style.display="block"},removePlaceholders:function(){var n,t=document.getElementsByClassName(e.iframesPlaceholderClass);for(n=t.length-1;n>=0;n--)t[n].parentNode.removeChild(t[n])}}}(),v=function(){return{get:function(){var n,t,s,i,a=document.getElementsByClassName(e.scriptClass),o=a.length,c=document.createDocumentFragment();for(n=0;n<o;n++)if(a[n].hasAttribute("data-ce-src"))"undefined"!=typeof postscribe&&postscribe(a[n].parentNode,'<script src="'+a[n].getAttribute("data-ce-src")+'"><\/script>');else{for((s=document.createElement("script")).type="text/javascript",t=0;t<a[n].attributes.length;t++)(i=a[n].attributes[t]).specified&&"type"!=i.name&&"class"!=i.name&&s.setAttribute(i.name,i.value);s.innerHTML=a[n].innerHTML,c.appendChild(s)}document.body.appendChild(c)}}}();return{init:function(n){e=function(){var e,n;for(e=1;e<arguments.length;e++)for(n in arguments[e])arguments[e].hasOwnProperty(n)&&(arguments[0][n]=arguments[e][n]);return arguments[0]}({},s,n),"Y"==b.get()?("function"==typeof e.onEnable&&e.onEnable(),v.get(),h.get()):"N"==b.get()?("function"==typeof e.onDisable&&e.onDisable(),h.hide(),m()):(p.create(),h.hide(),m())},enableCookies:u,dismissBanner:p.dismiss}}();