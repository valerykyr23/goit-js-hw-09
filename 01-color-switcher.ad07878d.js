!function(){var t=document.querySelector("button[data-start]");console.log(t);var e=document.querySelector("button[data-stop]");console.log(e);var o=document.querySelector("body");console.log(o);var n=null;t.addEventListener("click",(function(){n=setInterval((function(){o.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16))}),1e3),t.setAttribute("disabled",""),e.removeAttribute("disabled","")})),e.addEventListener("click",(function(){t.removeAttribute("disabled",""),e.setAttribute("disabled",""),clearInterval(n)})),console.dir(o)}();
//# sourceMappingURL=01-color-switcher.ad07878d.js.map
