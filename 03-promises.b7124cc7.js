!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},t={},o=e.parcelRequired7c6;null==o&&((o=function(e){if(e in n)return n[e].exports;if(e in t){var o=t[e];delete t[e];var r={id:e,exports:{}};return n[e]=r,o.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,n){t[e]=n},e.parcelRequired7c6=o);var r=o("h6c0i"),i={form:document.querySelector("form"),amount:document.querySelector('[name="amount"]'),delay:document.querySelector('[name="delay"]'),step:document.querySelector('[name="step"]')};function a(e,n){return new Promise((function(t,o){setTimeout((function(){Math.random()>.3?t({position:e,delay:n}):o({position:e,delay:n})}),n)}))}i.form.addEventListener("submit",(function(e){e.preventDefault();var n=parseInt(i.amount.value),t=parseInt(i.delay.value),o=parseInt(i.step.value);if(t<0||n<0||o<0)return void r.Notify.failure("Error! All values must be bigger than 0 ");for(var u=1;u<=n;u++)a(u,t).then((function(e){var n=e.position,t=e.delay;r.Notify.success("Fulfilled promise ".concat(n," in ").concat(t,"ms"))})).catch((function(e){var n=e.position,t=e.delay;r.Notify.failure("Rejected promise ".concat(n," in ").concat(t,"ms"))})),t+=o}))}();
//# sourceMappingURL=03-promises.b7124cc7.js.map