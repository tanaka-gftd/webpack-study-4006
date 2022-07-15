/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ ((module) => {



/**
 * 攻撃力が防御力や防御力貫通によってどのようなダメージになるのかを計算する関数
 * 
 * 負の入力値があった場合には0として扱い、2000以上の入力値は2000として扱う。
 * 実効防御力は、防御力 - 防御力貫通 で定義され、
 * この実行防御力は、0未満にはならない。
 * ダメージ減少率は、実効防御力 / (100 + 実効防御力) で定義され、
 * ダメージは、攻撃力 * (1 - ダメージ減少率) を小数点以下で四捨五入した値となる。
 * 
 * @param {Number} power 攻撃力
 * @param {Number} armor 防御力
 * @param {Number} armorPenetration 防御力貫通
 * @return {Number} ダメージ
 */
function effectiveDamage(power, armor, armorPenetration) {
  let effectiveArmor = normalize(armor) - normalize(armorPenetration);
  effectiveArmor = effectiveArmor <= 0 ? 0 : effectiveArmor;
  let damageDecrease = effectiveArmor / (100 + effectiveArmor);
  return Math.round(normalize(power) * (1 - damageDecrease));
}

/**
 * 異常な可能性のある入力値を正常値にする
 * @param {Number} n 異常な可能性のある入力値
 * @return {Number} 正常値
 */
function normalize(n) {
  if (n < 0) {
    return 0;
  } else if (n >= 2000) {
    return 2000;
  } else {
    return n;
  }
}

module.exports = {
  effectiveDamage: effectiveDamage
};

/***/ })
/******/ 	]);
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var damage_calc__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var damage_calc__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(damage_calc__WEBPACK_IMPORTED_MODULE_0__);
 //モジュール読み込み（Node.jsではimport文が使えないが、webpackで変換されるのでOK）


var root = document.getElementById('root');
root.innerHTML = '<p>攻撃力 100, 防御 50, 防御貫通 30 のダメージは、' + damage_calc__WEBPACK_IMPORTED_MODULE_0___default().effectiveDamage(100, 50, 30) + '</p>';
})();

/******/ })()
;