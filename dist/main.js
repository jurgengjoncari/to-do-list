/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _li_action_script_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./li-action/script.js */ \"./src/li-action/script.js\");\n/* harmony import */ var _li_action_check_item_script_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./li-action/check-item/script.js */ \"./src/li-action/check-item/script.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_li_action_script_js__WEBPACK_IMPORTED_MODULE_0__, _li_action_check_item_script_js__WEBPACK_IMPORTED_MODULE_1__]);\n([_li_action_script_js__WEBPACK_IMPORTED_MODULE_0__, _li_action_check_item_script_js__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\ncustomElements.define('li-action', _li_action_script_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])\ncustomElements.define('check-item', _li_action_check_item_script_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])\n\nconst input = document.querySelector('[data-input]')\nconst checklist = document.querySelector('[data-checklist]')\nconst submitButton = document.querySelector('[data-submit]')\n\ninput.focus()\n\n// Add event to submit button\n// @ts-ignore\nsubmitButton.addEventListener('click', () => insertCheckItem(input.value))\n\n// Add some data manually\nconst items = [\n    \"Buy veggies\",\n    \"Go to gym\",\n    \"Fix my bike\",\n    \"Buy painting supplies\"\n]\n\nitems.forEach((item) => insertCheckItem(item))\n\nfunction insertCheckItem(description) {\n    // @ts-ignore\n    let checkItem = new _li_action_check_item_script_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\n    checkItem.setDescription(description)\n\n    checklist.append(checkItem)    \n\n    // @ts-ignore\n    input.value = ''\n    input.focus()\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });\n\n//# sourceURL=webpack://to-do-list/./src/index.js?");

/***/ }),

/***/ "./src/li-action/check-item/script.js":
/*!********************************************!*\
  !*** ./src/li-action/check-item/script.js ***!
  \********************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ CheckItem)\n/* harmony export */ });\n/* harmony import */ var _script__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../script */ \"./src/li-action/script.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_script__WEBPACK_IMPORTED_MODULE_0__]);\n_script__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\nclass CheckItem extends _script__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n    constructor() {\n        super()\n\n        this.actionsStart = this.shadowRoot.querySelector('[data-actions-start]')\n\n        const stringCheckbox = `\n            <input type=\"checkbox\" class=\"form-check-input me-1\"></input>\n            `\n        const parsedCheckbox = new DOMParser()\n            .parseFromString(stringCheckbox, 'text/html')\n        this.checkbox = parsedCheckbox.querySelector('[type=checkbox]')\n    }\n\n    connectedCallback() {\n        this.actionsStart.append(this.checkbox)\n        this.setId()\n        this.checkbox.addEventListener(\"click\", () => this.handleCheck())\n    }\n\n    setId() {\n        const ID = `id_${Date.now()}`\n\n        this.checkbox.id = ID\n        this.label.setAttribute('for', ID)\n    }\n\n    handleCheck() {\n        this.label.classList.toggle(\"checked\")\n    }\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });\n\n//# sourceURL=webpack://to-do-list/./src/li-action/check-item/script.js?");

/***/ }),

/***/ "./src/li-action/script.js":
/*!*********************************!*\
  !*** ./src/li-action/script.js ***!
  \*********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ listItemAction)\n/* harmony export */ });\nconst response = await fetch('../src/li-action/template.html')\nconst text = await response.text()\n\nconst parsed = new DOMParser().parseFromString(text, 'text/html')\nconst itemTemplate = parsed.querySelector('[data-item-action]')\n\nclass listItemAction extends HTMLElement {\n    constructor() {\n        // @ts-ignore\n        super().attachShadow({ mode: 'open' })\n        // @ts-ignore\n        this.shadowRoot.append(itemTemplate.content.cloneNode(true));\n\n        // Register properties\n        this.label = this.shadowRoot.querySelector(\"label\")\n        this.buttonEdit = this.shadowRoot.querySelector(\"[data-edit]\")\n        this.buttonDelete = this.shadowRoot.querySelector(\"[data-delete]\")\n    }\n\n    connectedCallback() {\n        // this.buttonEdit.addEventListener(\"click\", () => this.handleInfo())\n        this.buttonDelete.addEventListener(\"click\", () => this.handleDelete())\n    }\n\n    handleEdit() {}\n\n    handleDelete() {\n        this.remove()\n    }\n\n    setDescription(description) {\n        const span = `<span slot='description'>${description}<span>`\n        this.insertAdjacentHTML('beforeend', span)\n    }\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } }, 1);\n\n//# sourceURL=webpack://to-do-list/./src/li-action/script.js?");

/***/ })

/******/ 	});
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
/******/ 	/* webpack/runtime/async module */
/******/ 	(() => {
/******/ 		var webpackQueues = typeof Symbol === "function" ? Symbol("webpack queues") : "__webpack_queues__";
/******/ 		var webpackExports = typeof Symbol === "function" ? Symbol("webpack exports") : "__webpack_exports__";
/******/ 		var webpackError = typeof Symbol === "function" ? Symbol("webpack error") : "__webpack_error__";
/******/ 		var resolveQueue = (queue) => {
/******/ 			if(queue && !queue.d) {
/******/ 				queue.d = 1;
/******/ 				queue.forEach((fn) => (fn.r--));
/******/ 				queue.forEach((fn) => (fn.r-- ? fn.r++ : fn()));
/******/ 			}
/******/ 		}
/******/ 		var wrapDeps = (deps) => (deps.map((dep) => {
/******/ 			if(dep !== null && typeof dep === "object") {
/******/ 				if(dep[webpackQueues]) return dep;
/******/ 				if(dep.then) {
/******/ 					var queue = [];
/******/ 					queue.d = 0;
/******/ 					dep.then((r) => {
/******/ 						obj[webpackExports] = r;
/******/ 						resolveQueue(queue);
/******/ 					}, (e) => {
/******/ 						obj[webpackError] = e;
/******/ 						resolveQueue(queue);
/******/ 					});
/******/ 					var obj = {};
/******/ 					obj[webpackQueues] = (fn) => (fn(queue));
/******/ 					return obj;
/******/ 				}
/******/ 			}
/******/ 			var ret = {};
/******/ 			ret[webpackQueues] = x => {};
/******/ 			ret[webpackExports] = dep;
/******/ 			return ret;
/******/ 		}));
/******/ 		__webpack_require__.a = (module, body, hasAwait) => {
/******/ 			var queue;
/******/ 			hasAwait && ((queue = []).d = 1);
/******/ 			if(queue) queue.moduleId = module.id;
/******/ 			var depQueues = new Set();
/******/ 			var exports = module.exports;
/******/ 			var currentDeps;
/******/ 			var outerResolve;
/******/ 			var reject;
/******/ 			var promise = new Promise((resolve, rej) => {
/******/ 				reject = rej;
/******/ 				outerResolve = resolve;
/******/ 			});
/******/ 			promise[webpackExports] = exports;
/******/ 			promise[webpackQueues] = (fn) => (queue && fn(queue), depQueues.forEach(fn), promise["catch"](x => {}));
/******/ 			promise.moduleId = module.id;
/******/ 			module.exports = promise;
/******/ 			body((deps) => {
/******/ 				currentDeps = wrapDeps(deps);
/******/ 				var fn;
/******/ 				var getResult = () => (currentDeps.map((d) => {
/******/ 					if(d[webpackError]) throw d[webpackError];
/******/ 					return d[webpackExports];
/******/ 				}))
/******/ 				var promise = new Promise((resolve) => {
/******/ 					fn = () => (resolve(getResult));
/******/ 					fn.r = 0;
/******/ 					var fnQueue = (q) => (q !== queue && !depQueues.has(q) && (depQueues.add(q), q && !q.d && (fn.r++, q.push(fn))));
/******/ 					currentDeps.map((dep) => (dep[webpackQueues](fnQueue)));
/******/ 				});
/******/ 				return fn.r ? promise : getResult();
/******/ 			}, (err) => ((err ? reject(promise[webpackError] = err) : outerResolve(exports)), resolveQueue(queue)));
/******/ 			queue && (queue.d = 0);
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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;