function e(e){return e&&e.__esModule?e.default:e}var o="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},t={},l=o.parcelRequired7c6;null==l&&((l=function(e){if(e in n)return n[e].exports;if(e in t){var o=t[e];delete t[e];var l={id:e,exports:{}};return n[e]=l,o.call(l.exports,l,l.exports),l.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,o){t[e]=o},o.parcelRequired7c6=l);var i=l("eWCmQ");e(i).Notify.init({cssAnimationStyle:"zoom",fontAwesomeIconStyle:"shadow"});const r=document.querySelectorAll(".form");console.log(r[0]);const s=document.querySelector("input[name=delay]");console.log(s);const u=document.querySelector("input[name=step]");console.log(u);const c=document.querySelector("input[name=amount]");function a(e,o){const n=Math.random()>.3;return new Promise(((t,l)=>{setTimeout((()=>{n?t({position:e,delay:o}):l({position:e,delay:o})}),o)}))}function d({position:o,delay:n}){e(i).Notify.success(` Fulfilled promise ${o} in ${n}ms`)}function f({position:o,delay:n}){e(i).Notify.failure(` Rejected promise ${o} in ${n}ms`)}console.log(c),r[0].addEventListener("submit",(function(e){e.preventDefault();const o=Number(s.value);console.log(o);const n=Number(u.value);console.log(n);const t=Number(c.value);console.log(t);for(let e=1;e<=t;e+=1){a(e,o+n*(e-1)).then(d).catch(f)}}));
//# sourceMappingURL=03-promises.6c47a658.js.map
