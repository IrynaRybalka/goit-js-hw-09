var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},n={},t=e.parcelRequired7c6;null==t&&((t=function(e){if(e in o)return o[e].exports;if(e in n){var t=n[e];delete n[e];var r={id:e,exports:{}};return o[e]=r,t.call(r.exports,r,r.exports),r.exports}var l=new Error("Cannot find module '"+e+"'");throw l.code="MODULE_NOT_FOUND",l}).register=function(e,o){n[e]=o},e.parcelRequired7c6=t),t("7Y9D8");const r={form:document.querySelector(".form"),delay:document.querySelector('input[name="delay"]'),step:document.querySelector('input[name="step"]'),amount:document.querySelector('input[name="amount"]')};function l(e,o){const n=Math.random()>.3;new Promise(((t,r)=>{setTimeout((()=>{n?t({position:e,delay:o}):r({position:e,delay:o})}),o)})).then((({position:e,delay:o})=>{console.log(`✅ Fulfilled promise ${e} in ${o}ms`)})).catch((({position:e,delay:o})=>{console.log(`❌ Rejected promise ${e} in ${o}ms`)}))}r.form.addEventListener("submit",(function(e){e.preventDefault();const o=Number(r.delay.value),n=Number(r.step.value),t=Number(r.amount.value);let i=o;for(let e=1;e<=t;e+=1)e>0&&(i+=n),l(e+1,i)}));
//# sourceMappingURL=03-promises.9a888c8d.js.map