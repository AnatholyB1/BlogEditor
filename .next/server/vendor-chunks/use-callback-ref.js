"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/use-callback-ref";
exports.ids = ["vendor-chunks/use-callback-ref"];
exports.modules = {

/***/ "(ssr)/./node_modules/use-callback-ref/dist/es5/assignRef.js":
/*!*************************************************************!*\
  !*** ./node_modules/use-callback-ref/dist/es5/assignRef.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.assignRef = void 0;\n/**\n * Assigns a value for a given ref, no matter of the ref format\n * @param {RefObject} ref - a callback function or ref object\n * @param value - a new value\n *\n * @see https://github.com/theKashey/use-callback-ref#assignref\n * @example\n * const refObject = useRef();\n * const refFn = (ref) => {....}\n *\n * assignRef(refObject, \"refValue\");\n * assignRef(refFn, \"refValue\");\n */\nfunction assignRef(ref, value) {\n    if (typeof ref === 'function') {\n        ref(value);\n    }\n    else if (ref) {\n        ref.current = value;\n    }\n    return ref;\n}\nexports.assignRef = assignRef;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvdXNlLWNhbGxiYWNrLXJlZi9kaXN0L2VzNS9hc3NpZ25SZWYuanMiLCJtYXBwaW5ncyI6IkFBQWE7QUFDYiw4Q0FBNkMsRUFBRSxhQUFhLEVBQUM7QUFDN0QsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQSxXQUFXLFdBQVc7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQjtBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQiIsInNvdXJjZXMiOlsid2VicGFjazovL2Jsb2djcmVhdG9yLy4vbm9kZV9tb2R1bGVzL3VzZS1jYWxsYmFjay1yZWYvZGlzdC9lczUvYXNzaWduUmVmLmpzPzdmNTUiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLmFzc2lnblJlZiA9IHZvaWQgMDtcbi8qKlxuICogQXNzaWducyBhIHZhbHVlIGZvciBhIGdpdmVuIHJlZiwgbm8gbWF0dGVyIG9mIHRoZSByZWYgZm9ybWF0XG4gKiBAcGFyYW0ge1JlZk9iamVjdH0gcmVmIC0gYSBjYWxsYmFjayBmdW5jdGlvbiBvciByZWYgb2JqZWN0XG4gKiBAcGFyYW0gdmFsdWUgLSBhIG5ldyB2YWx1ZVxuICpcbiAqIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3RoZUthc2hleS91c2UtY2FsbGJhY2stcmVmI2Fzc2lnbnJlZlxuICogQGV4YW1wbGVcbiAqIGNvbnN0IHJlZk9iamVjdCA9IHVzZVJlZigpO1xuICogY29uc3QgcmVmRm4gPSAocmVmKSA9PiB7Li4uLn1cbiAqXG4gKiBhc3NpZ25SZWYocmVmT2JqZWN0LCBcInJlZlZhbHVlXCIpO1xuICogYXNzaWduUmVmKHJlZkZuLCBcInJlZlZhbHVlXCIpO1xuICovXG5mdW5jdGlvbiBhc3NpZ25SZWYocmVmLCB2YWx1ZSkge1xuICAgIGlmICh0eXBlb2YgcmVmID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHJlZih2YWx1ZSk7XG4gICAgfVxuICAgIGVsc2UgaWYgKHJlZikge1xuICAgICAgICByZWYuY3VycmVudCA9IHZhbHVlO1xuICAgIH1cbiAgICByZXR1cm4gcmVmO1xufVxuZXhwb3J0cy5hc3NpZ25SZWYgPSBhc3NpZ25SZWY7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/use-callback-ref/dist/es5/assignRef.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/use-callback-ref/dist/es5/createRef.js":
/*!*************************************************************!*\
  !*** ./node_modules/use-callback-ref/dist/es5/createRef.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.createCallbackRef = void 0;\n/**\n * creates a Ref object with on change callback\n * @param callback\n * @returns {RefObject}\n *\n * @see {@link useCallbackRef}\n * @see https://reactjs.org/docs/refs-and-the-dom.html#creating-refs\n */\nfunction createCallbackRef(callback) {\n    var current = null;\n    return {\n        get current() {\n            return current;\n        },\n        set current(value) {\n            var last = current;\n            if (last !== value) {\n                current = value;\n                callback(value, last);\n            }\n        },\n    };\n}\nexports.createCallbackRef = createCallbackRef;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvdXNlLWNhbGxiYWNrLXJlZi9kaXN0L2VzNS9jcmVhdGVSZWYuanMiLCJtYXBwaW5ncyI6IkFBQWE7QUFDYiw4Q0FBNkMsRUFBRSxhQUFhLEVBQUM7QUFDN0QseUJBQXlCO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLHlCQUF5QiIsInNvdXJjZXMiOlsid2VicGFjazovL2Jsb2djcmVhdG9yLy4vbm9kZV9tb2R1bGVzL3VzZS1jYWxsYmFjay1yZWYvZGlzdC9lczUvY3JlYXRlUmVmLmpzPzRiYjMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLmNyZWF0ZUNhbGxiYWNrUmVmID0gdm9pZCAwO1xuLyoqXG4gKiBjcmVhdGVzIGEgUmVmIG9iamVjdCB3aXRoIG9uIGNoYW5nZSBjYWxsYmFja1xuICogQHBhcmFtIGNhbGxiYWNrXG4gKiBAcmV0dXJucyB7UmVmT2JqZWN0fVxuICpcbiAqIEBzZWUge0BsaW5rIHVzZUNhbGxiYWNrUmVmfVxuICogQHNlZSBodHRwczovL3JlYWN0anMub3JnL2RvY3MvcmVmcy1hbmQtdGhlLWRvbS5odG1sI2NyZWF0aW5nLXJlZnNcbiAqL1xuZnVuY3Rpb24gY3JlYXRlQ2FsbGJhY2tSZWYoY2FsbGJhY2spIHtcbiAgICB2YXIgY3VycmVudCA9IG51bGw7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgZ2V0IGN1cnJlbnQoKSB7XG4gICAgICAgICAgICByZXR1cm4gY3VycmVudDtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0IGN1cnJlbnQodmFsdWUpIHtcbiAgICAgICAgICAgIHZhciBsYXN0ID0gY3VycmVudDtcbiAgICAgICAgICAgIGlmIChsYXN0ICE9PSB2YWx1ZSkge1xuICAgICAgICAgICAgICAgIGN1cnJlbnQgPSB2YWx1ZTtcbiAgICAgICAgICAgICAgICBjYWxsYmFjayh2YWx1ZSwgbGFzdCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgfTtcbn1cbmV4cG9ydHMuY3JlYXRlQ2FsbGJhY2tSZWYgPSBjcmVhdGVDYWxsYmFja1JlZjtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/use-callback-ref/dist/es5/createRef.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/use-callback-ref/dist/es5/index.js":
/*!*********************************************************!*\
  !*** ./node_modules/use-callback-ref/dist/es5/index.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.useRefToCallback = exports.refToCallback = exports.transformRef = exports.useTransformRef = exports.useMergeRefs = exports.mergeRefs = exports.createCallbackRef = exports.useCallbackRef = exports.assignRef = void 0;\nvar assignRef_1 = __webpack_require__(/*! ./assignRef */ \"(ssr)/./node_modules/use-callback-ref/dist/es5/assignRef.js\");\nObject.defineProperty(exports, \"assignRef\", ({ enumerable: true, get: function () { return assignRef_1.assignRef; } }));\n// callback ref\nvar useRef_1 = __webpack_require__(/*! ./useRef */ \"(ssr)/./node_modules/use-callback-ref/dist/es5/useRef.js\");\nObject.defineProperty(exports, \"useCallbackRef\", ({ enumerable: true, get: function () { return useRef_1.useCallbackRef; } }));\nvar createRef_1 = __webpack_require__(/*! ./createRef */ \"(ssr)/./node_modules/use-callback-ref/dist/es5/createRef.js\");\nObject.defineProperty(exports, \"createCallbackRef\", ({ enumerable: true, get: function () { return createRef_1.createCallbackRef; } }));\n// merge ref\nvar mergeRef_1 = __webpack_require__(/*! ./mergeRef */ \"(ssr)/./node_modules/use-callback-ref/dist/es5/mergeRef.js\");\nObject.defineProperty(exports, \"mergeRefs\", ({ enumerable: true, get: function () { return mergeRef_1.mergeRefs; } }));\nvar useMergeRef_1 = __webpack_require__(/*! ./useMergeRef */ \"(ssr)/./node_modules/use-callback-ref/dist/es5/useMergeRef.js\");\nObject.defineProperty(exports, \"useMergeRefs\", ({ enumerable: true, get: function () { return useMergeRef_1.useMergeRefs; } }));\n// transform ref\nvar useTransformRef_1 = __webpack_require__(/*! ./useTransformRef */ \"(ssr)/./node_modules/use-callback-ref/dist/es5/useTransformRef.js\");\nObject.defineProperty(exports, \"useTransformRef\", ({ enumerable: true, get: function () { return useTransformRef_1.useTransformRef; } }));\nvar transformRef_1 = __webpack_require__(/*! ./transformRef */ \"(ssr)/./node_modules/use-callback-ref/dist/es5/transformRef.js\");\nObject.defineProperty(exports, \"transformRef\", ({ enumerable: true, get: function () { return transformRef_1.transformRef; } }));\n// refToCallback\nvar refToCallback_1 = __webpack_require__(/*! ./refToCallback */ \"(ssr)/./node_modules/use-callback-ref/dist/es5/refToCallback.js\");\nObject.defineProperty(exports, \"refToCallback\", ({ enumerable: true, get: function () { return refToCallback_1.refToCallback; } }));\nObject.defineProperty(exports, \"useRefToCallback\", ({ enumerable: true, get: function () { return refToCallback_1.useRefToCallback; } }));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvdXNlLWNhbGxiYWNrLXJlZi9kaXN0L2VzNS9pbmRleC5qcyIsIm1hcHBpbmdzIjoiQUFBYTtBQUNiLDhDQUE2QyxFQUFFLGFBQWEsRUFBQztBQUM3RCx3QkFBd0IsR0FBRyxxQkFBcUIsR0FBRyxvQkFBb0IsR0FBRyx1QkFBdUIsR0FBRyxvQkFBb0IsR0FBRyxpQkFBaUIsR0FBRyx5QkFBeUIsR0FBRyxzQkFBc0IsR0FBRyxpQkFBaUI7QUFDck4sa0JBQWtCLG1CQUFPLENBQUMsZ0ZBQWE7QUFDdkMsNkNBQTRDLEVBQUUscUNBQXFDLGlDQUFpQyxFQUFDO0FBQ3JIO0FBQ0EsZUFBZSxtQkFBTyxDQUFDLDBFQUFVO0FBQ2pDLGtEQUFpRCxFQUFFLHFDQUFxQyxtQ0FBbUMsRUFBQztBQUM1SCxrQkFBa0IsbUJBQU8sQ0FBQyxnRkFBYTtBQUN2QyxxREFBb0QsRUFBRSxxQ0FBcUMseUNBQXlDLEVBQUM7QUFDckk7QUFDQSxpQkFBaUIsbUJBQU8sQ0FBQyw4RUFBWTtBQUNyQyw2Q0FBNEMsRUFBRSxxQ0FBcUMsZ0NBQWdDLEVBQUM7QUFDcEgsb0JBQW9CLG1CQUFPLENBQUMsb0ZBQWU7QUFDM0MsZ0RBQStDLEVBQUUscUNBQXFDLHNDQUFzQyxFQUFDO0FBQzdIO0FBQ0Esd0JBQXdCLG1CQUFPLENBQUMsNEZBQW1CO0FBQ25ELG1EQUFrRCxFQUFFLHFDQUFxQyw2Q0FBNkMsRUFBQztBQUN2SSxxQkFBcUIsbUJBQU8sQ0FBQyxzRkFBZ0I7QUFDN0MsZ0RBQStDLEVBQUUscUNBQXFDLHVDQUF1QyxFQUFDO0FBQzlIO0FBQ0Esc0JBQXNCLG1CQUFPLENBQUMsd0ZBQWlCO0FBQy9DLGlEQUFnRCxFQUFFLHFDQUFxQyx5Q0FBeUMsRUFBQztBQUNqSSxvREFBbUQsRUFBRSxxQ0FBcUMsNENBQTRDLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ibG9nY3JlYXRvci8uL25vZGVfbW9kdWxlcy91c2UtY2FsbGJhY2stcmVmL2Rpc3QvZXM1L2luZGV4LmpzPzY1ZjUiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLnVzZVJlZlRvQ2FsbGJhY2sgPSBleHBvcnRzLnJlZlRvQ2FsbGJhY2sgPSBleHBvcnRzLnRyYW5zZm9ybVJlZiA9IGV4cG9ydHMudXNlVHJhbnNmb3JtUmVmID0gZXhwb3J0cy51c2VNZXJnZVJlZnMgPSBleHBvcnRzLm1lcmdlUmVmcyA9IGV4cG9ydHMuY3JlYXRlQ2FsbGJhY2tSZWYgPSBleHBvcnRzLnVzZUNhbGxiYWNrUmVmID0gZXhwb3J0cy5hc3NpZ25SZWYgPSB2b2lkIDA7XG52YXIgYXNzaWduUmVmXzEgPSByZXF1aXJlKFwiLi9hc3NpZ25SZWZcIik7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJhc3NpZ25SZWZcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGFzc2lnblJlZl8xLmFzc2lnblJlZjsgfSB9KTtcbi8vIGNhbGxiYWNrIHJlZlxudmFyIHVzZVJlZl8xID0gcmVxdWlyZShcIi4vdXNlUmVmXCIpO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwidXNlQ2FsbGJhY2tSZWZcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHVzZVJlZl8xLnVzZUNhbGxiYWNrUmVmOyB9IH0pO1xudmFyIGNyZWF0ZVJlZl8xID0gcmVxdWlyZShcIi4vY3JlYXRlUmVmXCIpO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiY3JlYXRlQ2FsbGJhY2tSZWZcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGNyZWF0ZVJlZl8xLmNyZWF0ZUNhbGxiYWNrUmVmOyB9IH0pO1xuLy8gbWVyZ2UgcmVmXG52YXIgbWVyZ2VSZWZfMSA9IHJlcXVpcmUoXCIuL21lcmdlUmVmXCIpO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwibWVyZ2VSZWZzXCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBtZXJnZVJlZl8xLm1lcmdlUmVmczsgfSB9KTtcbnZhciB1c2VNZXJnZVJlZl8xID0gcmVxdWlyZShcIi4vdXNlTWVyZ2VSZWZcIik7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJ1c2VNZXJnZVJlZnNcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHVzZU1lcmdlUmVmXzEudXNlTWVyZ2VSZWZzOyB9IH0pO1xuLy8gdHJhbnNmb3JtIHJlZlxudmFyIHVzZVRyYW5zZm9ybVJlZl8xID0gcmVxdWlyZShcIi4vdXNlVHJhbnNmb3JtUmVmXCIpO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwidXNlVHJhbnNmb3JtUmVmXCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiB1c2VUcmFuc2Zvcm1SZWZfMS51c2VUcmFuc2Zvcm1SZWY7IH0gfSk7XG52YXIgdHJhbnNmb3JtUmVmXzEgPSByZXF1aXJlKFwiLi90cmFuc2Zvcm1SZWZcIik7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJ0cmFuc2Zvcm1SZWZcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRyYW5zZm9ybVJlZl8xLnRyYW5zZm9ybVJlZjsgfSB9KTtcbi8vIHJlZlRvQ2FsbGJhY2tcbnZhciByZWZUb0NhbGxiYWNrXzEgPSByZXF1aXJlKFwiLi9yZWZUb0NhbGxiYWNrXCIpO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwicmVmVG9DYWxsYmFja1wiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVmVG9DYWxsYmFja18xLnJlZlRvQ2FsbGJhY2s7IH0gfSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJ1c2VSZWZUb0NhbGxiYWNrXCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWZUb0NhbGxiYWNrXzEudXNlUmVmVG9DYWxsYmFjazsgfSB9KTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/use-callback-ref/dist/es5/index.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/use-callback-ref/dist/es5/mergeRef.js":
/*!************************************************************!*\
  !*** ./node_modules/use-callback-ref/dist/es5/mergeRef.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.mergeRefs = void 0;\nvar assignRef_1 = __webpack_require__(/*! ./assignRef */ \"(ssr)/./node_modules/use-callback-ref/dist/es5/assignRef.js\");\nvar createRef_1 = __webpack_require__(/*! ./createRef */ \"(ssr)/./node_modules/use-callback-ref/dist/es5/createRef.js\");\n/**\n * Merges two or more refs together providing a single interface to set their value\n * @param {RefObject|Ref} refs\n * @returns {MutableRefObject} - a new ref, which translates all changes to {refs}\n *\n * @see {@link useMergeRefs} to be used in ReactComponents\n * @example\n * const Component = React.forwardRef((props, ref) => {\n *   const ownRef = useRef();\n *   const domRef = mergeRefs([ref, ownRef]); // 👈 merge together\n *   return <div ref={domRef}>...</div>\n * }\n */\nfunction mergeRefs(refs) {\n    return (0, createRef_1.createCallbackRef)(function (newValue) { return refs.forEach(function (ref) { return (0, assignRef_1.assignRef)(ref, newValue); }); });\n}\nexports.mergeRefs = mergeRefs;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvdXNlLWNhbGxiYWNrLXJlZi9kaXN0L2VzNS9tZXJnZVJlZi5qcyIsIm1hcHBpbmdzIjoiQUFBYTtBQUNiLDhDQUE2QyxFQUFFLGFBQWEsRUFBQztBQUM3RCxpQkFBaUI7QUFDakIsa0JBQWtCLG1CQUFPLENBQUMsZ0ZBQWE7QUFDdkMsa0JBQWtCLG1CQUFPLENBQUMsZ0ZBQWE7QUFDdkM7QUFDQTtBQUNBLFdBQVcsZUFBZTtBQUMxQixhQUFhLGtCQUFrQiw4Q0FBOEM7QUFDN0U7QUFDQSxTQUFTLG9CQUFvQjtBQUM3QjtBQUNBO0FBQ0E7QUFDQSw4Q0FBOEM7QUFDOUMsc0JBQXNCLE9BQU87QUFDN0I7QUFDQTtBQUNBO0FBQ0Esb0VBQW9FLHFDQUFxQyxtREFBbUQsSUFBSTtBQUNoSztBQUNBLGlCQUFpQiIsInNvdXJjZXMiOlsid2VicGFjazovL2Jsb2djcmVhdG9yLy4vbm9kZV9tb2R1bGVzL3VzZS1jYWxsYmFjay1yZWYvZGlzdC9lczUvbWVyZ2VSZWYuanM/ZDk0NyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMubWVyZ2VSZWZzID0gdm9pZCAwO1xudmFyIGFzc2lnblJlZl8xID0gcmVxdWlyZShcIi4vYXNzaWduUmVmXCIpO1xudmFyIGNyZWF0ZVJlZl8xID0gcmVxdWlyZShcIi4vY3JlYXRlUmVmXCIpO1xuLyoqXG4gKiBNZXJnZXMgdHdvIG9yIG1vcmUgcmVmcyB0b2dldGhlciBwcm92aWRpbmcgYSBzaW5nbGUgaW50ZXJmYWNlIHRvIHNldCB0aGVpciB2YWx1ZVxuICogQHBhcmFtIHtSZWZPYmplY3R8UmVmfSByZWZzXG4gKiBAcmV0dXJucyB7TXV0YWJsZVJlZk9iamVjdH0gLSBhIG5ldyByZWYsIHdoaWNoIHRyYW5zbGF0ZXMgYWxsIGNoYW5nZXMgdG8ge3JlZnN9XG4gKlxuICogQHNlZSB7QGxpbmsgdXNlTWVyZ2VSZWZzfSB0byBiZSB1c2VkIGluIFJlYWN0Q29tcG9uZW50c1xuICogQGV4YW1wbGVcbiAqIGNvbnN0IENvbXBvbmVudCA9IFJlYWN0LmZvcndhcmRSZWYoKHByb3BzLCByZWYpID0+IHtcbiAqICAgY29uc3Qgb3duUmVmID0gdXNlUmVmKCk7XG4gKiAgIGNvbnN0IGRvbVJlZiA9IG1lcmdlUmVmcyhbcmVmLCBvd25SZWZdKTsgLy8g8J+RiCBtZXJnZSB0b2dldGhlclxuICogICByZXR1cm4gPGRpdiByZWY9e2RvbVJlZn0+Li4uPC9kaXY+XG4gKiB9XG4gKi9cbmZ1bmN0aW9uIG1lcmdlUmVmcyhyZWZzKSB7XG4gICAgcmV0dXJuICgwLCBjcmVhdGVSZWZfMS5jcmVhdGVDYWxsYmFja1JlZikoZnVuY3Rpb24gKG5ld1ZhbHVlKSB7IHJldHVybiByZWZzLmZvckVhY2goZnVuY3Rpb24gKHJlZikgeyByZXR1cm4gKDAsIGFzc2lnblJlZl8xLmFzc2lnblJlZikocmVmLCBuZXdWYWx1ZSk7IH0pOyB9KTtcbn1cbmV4cG9ydHMubWVyZ2VSZWZzID0gbWVyZ2VSZWZzO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/use-callback-ref/dist/es5/mergeRef.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/use-callback-ref/dist/es5/refToCallback.js":
/*!*****************************************************************!*\
  !*** ./node_modules/use-callback-ref/dist/es5/refToCallback.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.useRefToCallback = exports.refToCallback = void 0;\n/**\n * Unmemoized version of {@link useRefToCallback}\n * @see {@link useRefToCallback}\n * @param ref\n */\nfunction refToCallback(ref) {\n    return function (newValue) {\n        if (typeof ref === 'function') {\n            ref(newValue);\n        }\n        else if (ref) {\n            ref.current = newValue;\n        }\n    };\n}\nexports.refToCallback = refToCallback;\nvar nullCallback = function () { return null; };\n// lets maintain a weak ref to, well, ref :)\n// not using `kashe` to keep this package small\nvar weakMem = new WeakMap();\nvar weakMemoize = function (ref) {\n    var usedRef = ref || nullCallback;\n    var storedRef = weakMem.get(usedRef);\n    if (storedRef) {\n        return storedRef;\n    }\n    var cb = refToCallback(usedRef);\n    weakMem.set(usedRef, cb);\n    return cb;\n};\n/**\n * Transforms a given `ref` into `callback`.\n *\n * To transform `callback` into ref use {@link useCallbackRef|useCallbackRef(undefined, callback)}\n *\n * @param {ReactRef} ref\n * @returns {Function}\n *\n * @see https://github.com/theKashey/use-callback-ref#reftocallback\n *\n * @example\n * const ref = useRef(0);\n * const setRef = useRefToCallback(ref);\n * 👉 setRef(10);\n * ✅ ref.current === 10\n */\nfunction useRefToCallback(ref) {\n    return weakMemoize(ref);\n}\nexports.useRefToCallback = useRefToCallback;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvdXNlLWNhbGxiYWNrLXJlZi9kaXN0L2VzNS9yZWZUb0NhbGxiYWNrLmpzIiwibWFwcGluZ3MiOiJBQUFhO0FBQ2IsOENBQTZDLEVBQUUsYUFBYSxFQUFDO0FBQzdELHdCQUF3QixHQUFHLHFCQUFxQjtBQUNoRDtBQUNBLDBCQUEwQjtBQUMxQixTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCLGlDQUFpQztBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlDQUF5QztBQUN6QztBQUNBLFdBQVcsVUFBVTtBQUNyQixhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmxvZ2NyZWF0b3IvLi9ub2RlX21vZHVsZXMvdXNlLWNhbGxiYWNrLXJlZi9kaXN0L2VzNS9yZWZUb0NhbGxiYWNrLmpzP2QxMGEiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLnVzZVJlZlRvQ2FsbGJhY2sgPSBleHBvcnRzLnJlZlRvQ2FsbGJhY2sgPSB2b2lkIDA7XG4vKipcbiAqIFVubWVtb2l6ZWQgdmVyc2lvbiBvZiB7QGxpbmsgdXNlUmVmVG9DYWxsYmFja31cbiAqIEBzZWUge0BsaW5rIHVzZVJlZlRvQ2FsbGJhY2t9XG4gKiBAcGFyYW0gcmVmXG4gKi9cbmZ1bmN0aW9uIHJlZlRvQ2FsbGJhY2socmVmKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChuZXdWYWx1ZSkge1xuICAgICAgICBpZiAodHlwZW9mIHJlZiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgcmVmKG5ld1ZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChyZWYpIHtcbiAgICAgICAgICAgIHJlZi5jdXJyZW50ID0gbmV3VmFsdWU7XG4gICAgICAgIH1cbiAgICB9O1xufVxuZXhwb3J0cy5yZWZUb0NhbGxiYWNrID0gcmVmVG9DYWxsYmFjaztcbnZhciBudWxsQ2FsbGJhY2sgPSBmdW5jdGlvbiAoKSB7IHJldHVybiBudWxsOyB9O1xuLy8gbGV0cyBtYWludGFpbiBhIHdlYWsgcmVmIHRvLCB3ZWxsLCByZWYgOilcbi8vIG5vdCB1c2luZyBga2FzaGVgIHRvIGtlZXAgdGhpcyBwYWNrYWdlIHNtYWxsXG52YXIgd2Vha01lbSA9IG5ldyBXZWFrTWFwKCk7XG52YXIgd2Vha01lbW9pemUgPSBmdW5jdGlvbiAocmVmKSB7XG4gICAgdmFyIHVzZWRSZWYgPSByZWYgfHwgbnVsbENhbGxiYWNrO1xuICAgIHZhciBzdG9yZWRSZWYgPSB3ZWFrTWVtLmdldCh1c2VkUmVmKTtcbiAgICBpZiAoc3RvcmVkUmVmKSB7XG4gICAgICAgIHJldHVybiBzdG9yZWRSZWY7XG4gICAgfVxuICAgIHZhciBjYiA9IHJlZlRvQ2FsbGJhY2sodXNlZFJlZik7XG4gICAgd2Vha01lbS5zZXQodXNlZFJlZiwgY2IpO1xuICAgIHJldHVybiBjYjtcbn07XG4vKipcbiAqIFRyYW5zZm9ybXMgYSBnaXZlbiBgcmVmYCBpbnRvIGBjYWxsYmFja2AuXG4gKlxuICogVG8gdHJhbnNmb3JtIGBjYWxsYmFja2AgaW50byByZWYgdXNlIHtAbGluayB1c2VDYWxsYmFja1JlZnx1c2VDYWxsYmFja1JlZih1bmRlZmluZWQsIGNhbGxiYWNrKX1cbiAqXG4gKiBAcGFyYW0ge1JlYWN0UmVmfSByZWZcbiAqIEByZXR1cm5zIHtGdW5jdGlvbn1cbiAqXG4gKiBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS90aGVLYXNoZXkvdXNlLWNhbGxiYWNrLXJlZiNyZWZ0b2NhbGxiYWNrXG4gKlxuICogQGV4YW1wbGVcbiAqIGNvbnN0IHJlZiA9IHVzZVJlZigwKTtcbiAqIGNvbnN0IHNldFJlZiA9IHVzZVJlZlRvQ2FsbGJhY2socmVmKTtcbiAqIPCfkYkgc2V0UmVmKDEwKTtcbiAqIOKchSByZWYuY3VycmVudCA9PT0gMTBcbiAqL1xuZnVuY3Rpb24gdXNlUmVmVG9DYWxsYmFjayhyZWYpIHtcbiAgICByZXR1cm4gd2Vha01lbW9pemUocmVmKTtcbn1cbmV4cG9ydHMudXNlUmVmVG9DYWxsYmFjayA9IHVzZVJlZlRvQ2FsbGJhY2s7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/use-callback-ref/dist/es5/refToCallback.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/use-callback-ref/dist/es5/transformRef.js":
/*!****************************************************************!*\
  !*** ./node_modules/use-callback-ref/dist/es5/transformRef.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.transformRef = void 0;\nvar assignRef_1 = __webpack_require__(/*! ./assignRef */ \"(ssr)/./node_modules/use-callback-ref/dist/es5/assignRef.js\");\nvar createRef_1 = __webpack_require__(/*! ./createRef */ \"(ssr)/./node_modules/use-callback-ref/dist/es5/createRef.js\");\n/**\n * Transforms one ref to another\n * @example\n * ```tsx\n * const ResizableWithRef = forwardRef((props, ref) =>\n *   <Resizable {...props} ref={transformRef(ref, i => i ? i.resizable : null)}/>\n * );\n * ```\n */\nfunction transformRef(ref, transformer) {\n    return (0, createRef_1.createCallbackRef)(function (value) { return (0, assignRef_1.assignRef)(ref, transformer(value)); });\n}\nexports.transformRef = transformRef;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvdXNlLWNhbGxiYWNrLXJlZi9kaXN0L2VzNS90cmFuc2Zvcm1SZWYuanMiLCJtYXBwaW5ncyI6IkFBQWE7QUFDYiw4Q0FBNkMsRUFBRSxhQUFhLEVBQUM7QUFDN0Qsb0JBQW9CO0FBQ3BCLGtCQUFrQixtQkFBTyxDQUFDLGdGQUFhO0FBQ3ZDLGtCQUFrQixtQkFBTyxDQUFDLGdGQUFhO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsVUFBVSxLQUFLLCtDQUErQztBQUMvRTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUFpRSw2REFBNkQ7QUFDOUg7QUFDQSxvQkFBb0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ibG9nY3JlYXRvci8uL25vZGVfbW9kdWxlcy91c2UtY2FsbGJhY2stcmVmL2Rpc3QvZXM1L3RyYW5zZm9ybVJlZi5qcz9lNGZjIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy50cmFuc2Zvcm1SZWYgPSB2b2lkIDA7XG52YXIgYXNzaWduUmVmXzEgPSByZXF1aXJlKFwiLi9hc3NpZ25SZWZcIik7XG52YXIgY3JlYXRlUmVmXzEgPSByZXF1aXJlKFwiLi9jcmVhdGVSZWZcIik7XG4vKipcbiAqIFRyYW5zZm9ybXMgb25lIHJlZiB0byBhbm90aGVyXG4gKiBAZXhhbXBsZVxuICogYGBgdHN4XG4gKiBjb25zdCBSZXNpemFibGVXaXRoUmVmID0gZm9yd2FyZFJlZigocHJvcHMsIHJlZikgPT5cbiAqICAgPFJlc2l6YWJsZSB7Li4ucHJvcHN9IHJlZj17dHJhbnNmb3JtUmVmKHJlZiwgaSA9PiBpID8gaS5yZXNpemFibGUgOiBudWxsKX0vPlxuICogKTtcbiAqIGBgYFxuICovXG5mdW5jdGlvbiB0cmFuc2Zvcm1SZWYocmVmLCB0cmFuc2Zvcm1lcikge1xuICAgIHJldHVybiAoMCwgY3JlYXRlUmVmXzEuY3JlYXRlQ2FsbGJhY2tSZWYpKGZ1bmN0aW9uICh2YWx1ZSkgeyByZXR1cm4gKDAsIGFzc2lnblJlZl8xLmFzc2lnblJlZikocmVmLCB0cmFuc2Zvcm1lcih2YWx1ZSkpOyB9KTtcbn1cbmV4cG9ydHMudHJhbnNmb3JtUmVmID0gdHJhbnNmb3JtUmVmO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/use-callback-ref/dist/es5/transformRef.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/use-callback-ref/dist/es5/useMergeRef.js":
/*!***************************************************************!*\
  !*** ./node_modules/use-callback-ref/dist/es5/useMergeRef.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.useMergeRefs = void 0;\nvar assignRef_1 = __webpack_require__(/*! ./assignRef */ \"(ssr)/./node_modules/use-callback-ref/dist/es5/assignRef.js\");\nvar useRef_1 = __webpack_require__(/*! ./useRef */ \"(ssr)/./node_modules/use-callback-ref/dist/es5/useRef.js\");\n/**\n * Merges two or more refs together providing a single interface to set their value\n * @param {RefObject|Ref} refs\n * @returns {MutableRefObject} - a new ref, which translates all changes to {refs}\n *\n * @see {@link mergeRefs} a version without buit-in memoization\n * @see https://github.com/theKashey/use-callback-ref#usemergerefs\n * @example\n * const Component = React.forwardRef((props, ref) => {\n *   const ownRef = useRef();\n *   const domRef = useMergeRefs([ref, ownRef]); // 👈 merge together\n *   return <div ref={domRef}>...</div>\n * }\n */\nfunction useMergeRefs(refs, defaultValue) {\n    return (0, useRef_1.useCallbackRef)(defaultValue || null, function (newValue) { return refs.forEach(function (ref) { return (0, assignRef_1.assignRef)(ref, newValue); }); });\n}\nexports.useMergeRefs = useMergeRefs;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvdXNlLWNhbGxiYWNrLXJlZi9kaXN0L2VzNS91c2VNZXJnZVJlZi5qcyIsIm1hcHBpbmdzIjoiQUFBYTtBQUNiLDhDQUE2QyxFQUFFLGFBQWEsRUFBQztBQUM3RCxvQkFBb0I7QUFDcEIsa0JBQWtCLG1CQUFPLENBQUMsZ0ZBQWE7QUFDdkMsZUFBZSxtQkFBTyxDQUFDLDBFQUFVO0FBQ2pDO0FBQ0E7QUFDQSxXQUFXLGVBQWU7QUFDMUIsYUFBYSxrQkFBa0IsOENBQThDO0FBQzdFO0FBQ0EsU0FBUyxpQkFBaUI7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBaUQ7QUFDakQsc0JBQXNCLE9BQU87QUFDN0I7QUFDQTtBQUNBO0FBQ0Esb0ZBQW9GLHFDQUFxQyxtREFBbUQsSUFBSTtBQUNoTDtBQUNBLG9CQUFvQiIsInNvdXJjZXMiOlsid2VicGFjazovL2Jsb2djcmVhdG9yLy4vbm9kZV9tb2R1bGVzL3VzZS1jYWxsYmFjay1yZWYvZGlzdC9lczUvdXNlTWVyZ2VSZWYuanM/OGUyNSJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMudXNlTWVyZ2VSZWZzID0gdm9pZCAwO1xudmFyIGFzc2lnblJlZl8xID0gcmVxdWlyZShcIi4vYXNzaWduUmVmXCIpO1xudmFyIHVzZVJlZl8xID0gcmVxdWlyZShcIi4vdXNlUmVmXCIpO1xuLyoqXG4gKiBNZXJnZXMgdHdvIG9yIG1vcmUgcmVmcyB0b2dldGhlciBwcm92aWRpbmcgYSBzaW5nbGUgaW50ZXJmYWNlIHRvIHNldCB0aGVpciB2YWx1ZVxuICogQHBhcmFtIHtSZWZPYmplY3R8UmVmfSByZWZzXG4gKiBAcmV0dXJucyB7TXV0YWJsZVJlZk9iamVjdH0gLSBhIG5ldyByZWYsIHdoaWNoIHRyYW5zbGF0ZXMgYWxsIGNoYW5nZXMgdG8ge3JlZnN9XG4gKlxuICogQHNlZSB7QGxpbmsgbWVyZ2VSZWZzfSBhIHZlcnNpb24gd2l0aG91dCBidWl0LWluIG1lbW9pemF0aW9uXG4gKiBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS90aGVLYXNoZXkvdXNlLWNhbGxiYWNrLXJlZiN1c2VtZXJnZXJlZnNcbiAqIEBleGFtcGxlXG4gKiBjb25zdCBDb21wb25lbnQgPSBSZWFjdC5mb3J3YXJkUmVmKChwcm9wcywgcmVmKSA9PiB7XG4gKiAgIGNvbnN0IG93blJlZiA9IHVzZVJlZigpO1xuICogICBjb25zdCBkb21SZWYgPSB1c2VNZXJnZVJlZnMoW3JlZiwgb3duUmVmXSk7IC8vIPCfkYggbWVyZ2UgdG9nZXRoZXJcbiAqICAgcmV0dXJuIDxkaXYgcmVmPXtkb21SZWZ9Pi4uLjwvZGl2PlxuICogfVxuICovXG5mdW5jdGlvbiB1c2VNZXJnZVJlZnMocmVmcywgZGVmYXVsdFZhbHVlKSB7XG4gICAgcmV0dXJuICgwLCB1c2VSZWZfMS51c2VDYWxsYmFja1JlZikoZGVmYXVsdFZhbHVlIHx8IG51bGwsIGZ1bmN0aW9uIChuZXdWYWx1ZSkgeyByZXR1cm4gcmVmcy5mb3JFYWNoKGZ1bmN0aW9uIChyZWYpIHsgcmV0dXJuICgwLCBhc3NpZ25SZWZfMS5hc3NpZ25SZWYpKHJlZiwgbmV3VmFsdWUpOyB9KTsgfSk7XG59XG5leHBvcnRzLnVzZU1lcmdlUmVmcyA9IHVzZU1lcmdlUmVmcztcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/use-callback-ref/dist/es5/useMergeRef.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/use-callback-ref/dist/es5/useRef.js":
/*!**********************************************************!*\
  !*** ./node_modules/use-callback-ref/dist/es5/useRef.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.useCallbackRef = void 0;\nvar react_1 = __webpack_require__(/*! react */ \"(ssr)/./node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js\");\n/**\n * creates a MutableRef with ref change callback\n * @param initialValue - initial ref value\n * @param {Function} callback - a callback to run when value changes\n *\n * @example\n * const ref = useCallbackRef(0, (newValue, oldValue) => console.log(oldValue, '->', newValue);\n * ref.current = 1;\n * // prints 0 -> 1\n *\n * @see https://reactjs.org/docs/hooks-reference.html#useref\n * @see https://github.com/theKashey/use-callback-ref#usecallbackref---to-replace-reactuseref\n * @returns {MutableRefObject}\n */\nfunction useCallbackRef(initialValue, callback) {\n    var ref = (0, react_1.useState)(function () { return ({\n        // value\n        value: initialValue,\n        // last callback\n        callback: callback,\n        // \"memoized\" public interface\n        facade: {\n            get current() {\n                return ref.value;\n            },\n            set current(value) {\n                var last = ref.value;\n                if (last !== value) {\n                    ref.value = value;\n                    ref.callback(value, last);\n                }\n            },\n        },\n    }); })[0];\n    // update callback\n    ref.callback = callback;\n    return ref.facade;\n}\nexports.useCallbackRef = useCallbackRef;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvdXNlLWNhbGxiYWNrLXJlZi9kaXN0L2VzNS91c2VSZWYuanMiLCJtYXBwaW5ncyI6IkFBQWE7QUFDYiw4Q0FBNkMsRUFBRSxhQUFhLEVBQUM7QUFDN0Qsc0JBQXNCO0FBQ3RCLGNBQWMsbUJBQU8sQ0FBQyx3R0FBTztBQUM3QjtBQUNBO0FBQ0E7QUFDQSxXQUFXLFVBQVU7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0Esa0RBQWtEO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLFNBQVM7QUFDVCxLQUFLLElBQUk7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQiIsInNvdXJjZXMiOlsid2VicGFjazovL2Jsb2djcmVhdG9yLy4vbm9kZV9tb2R1bGVzL3VzZS1jYWxsYmFjay1yZWYvZGlzdC9lczUvdXNlUmVmLmpzP2FiMzMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLnVzZUNhbGxiYWNrUmVmID0gdm9pZCAwO1xudmFyIHJlYWN0XzEgPSByZXF1aXJlKFwicmVhY3RcIik7XG4vKipcbiAqIGNyZWF0ZXMgYSBNdXRhYmxlUmVmIHdpdGggcmVmIGNoYW5nZSBjYWxsYmFja1xuICogQHBhcmFtIGluaXRpYWxWYWx1ZSAtIGluaXRpYWwgcmVmIHZhbHVlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFjayAtIGEgY2FsbGJhY2sgdG8gcnVuIHdoZW4gdmFsdWUgY2hhbmdlc1xuICpcbiAqIEBleGFtcGxlXG4gKiBjb25zdCByZWYgPSB1c2VDYWxsYmFja1JlZigwLCAobmV3VmFsdWUsIG9sZFZhbHVlKSA9PiBjb25zb2xlLmxvZyhvbGRWYWx1ZSwgJy0+JywgbmV3VmFsdWUpO1xuICogcmVmLmN1cnJlbnQgPSAxO1xuICogLy8gcHJpbnRzIDAgLT4gMVxuICpcbiAqIEBzZWUgaHR0cHM6Ly9yZWFjdGpzLm9yZy9kb2NzL2hvb2tzLXJlZmVyZW5jZS5odG1sI3VzZXJlZlxuICogQHNlZSBodHRwczovL2dpdGh1Yi5jb20vdGhlS2FzaGV5L3VzZS1jYWxsYmFjay1yZWYjdXNlY2FsbGJhY2tyZWYtLS10by1yZXBsYWNlLXJlYWN0dXNlcmVmXG4gKiBAcmV0dXJucyB7TXV0YWJsZVJlZk9iamVjdH1cbiAqL1xuZnVuY3Rpb24gdXNlQ2FsbGJhY2tSZWYoaW5pdGlhbFZhbHVlLCBjYWxsYmFjaykge1xuICAgIHZhciByZWYgPSAoMCwgcmVhY3RfMS51c2VTdGF0ZSkoZnVuY3Rpb24gKCkgeyByZXR1cm4gKHtcbiAgICAgICAgLy8gdmFsdWVcbiAgICAgICAgdmFsdWU6IGluaXRpYWxWYWx1ZSxcbiAgICAgICAgLy8gbGFzdCBjYWxsYmFja1xuICAgICAgICBjYWxsYmFjazogY2FsbGJhY2ssXG4gICAgICAgIC8vIFwibWVtb2l6ZWRcIiBwdWJsaWMgaW50ZXJmYWNlXG4gICAgICAgIGZhY2FkZToge1xuICAgICAgICAgICAgZ2V0IGN1cnJlbnQoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlZi52YWx1ZTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzZXQgY3VycmVudCh2YWx1ZSkge1xuICAgICAgICAgICAgICAgIHZhciBsYXN0ID0gcmVmLnZhbHVlO1xuICAgICAgICAgICAgICAgIGlmIChsYXN0ICE9PSB2YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICByZWYudmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgcmVmLmNhbGxiYWNrKHZhbHVlLCBsYXN0KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgIH0pOyB9KVswXTtcbiAgICAvLyB1cGRhdGUgY2FsbGJhY2tcbiAgICByZWYuY2FsbGJhY2sgPSBjYWxsYmFjaztcbiAgICByZXR1cm4gcmVmLmZhY2FkZTtcbn1cbmV4cG9ydHMudXNlQ2FsbGJhY2tSZWYgPSB1c2VDYWxsYmFja1JlZjtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/use-callback-ref/dist/es5/useRef.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/use-callback-ref/dist/es5/useTransformRef.js":
/*!*******************************************************************!*\
  !*** ./node_modules/use-callback-ref/dist/es5/useTransformRef.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.useTransformRef = void 0;\nvar assignRef_1 = __webpack_require__(/*! ./assignRef */ \"(ssr)/./node_modules/use-callback-ref/dist/es5/assignRef.js\");\nvar useRef_1 = __webpack_require__(/*! ./useRef */ \"(ssr)/./node_modules/use-callback-ref/dist/es5/useRef.js\");\n/**\n * Create a _lense_ on Ref, making it possible to transform ref value\n * @param {ReactRef} ref\n * @param {Function} transformer. 👉 Ref would be __NOT updated__ on `transformer` update.\n * @returns {RefObject}\n *\n * @see https://github.com/theKashey/use-callback-ref#usetransformref-to-replace-reactuseimperativehandle\n * @example\n *\n * const ResizableWithRef = forwardRef((props, ref) =>\n *  <Resizable {...props} ref={useTransformRef(ref, i => i ? i.resizable : null)}/>\n * );\n */\nfunction useTransformRef(ref, transformer) {\n    return (0, useRef_1.useCallbackRef)(null, function (value) { return (0, assignRef_1.assignRef)(ref, transformer(value)); });\n}\nexports.useTransformRef = useTransformRef;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvdXNlLWNhbGxiYWNrLXJlZi9kaXN0L2VzNS91c2VUcmFuc2Zvcm1SZWYuanMiLCJtYXBwaW5ncyI6IkFBQWE7QUFDYiw4Q0FBNkMsRUFBRSxhQUFhLEVBQUM7QUFDN0QsdUJBQXVCO0FBQ3ZCLGtCQUFrQixtQkFBTyxDQUFDLGdGQUFhO0FBQ3ZDLGVBQWUsbUJBQU8sQ0FBQywwRUFBVTtBQUNqQztBQUNBO0FBQ0EsV0FBVyxVQUFVO0FBQ3JCLFdBQVcsVUFBVTtBQUNyQixhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixVQUFVLEtBQUssa0RBQWtEO0FBQ2pGO0FBQ0E7QUFDQTtBQUNBLGlFQUFpRSw2REFBNkQ7QUFDOUg7QUFDQSx1QkFBdUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ibG9nY3JlYXRvci8uL25vZGVfbW9kdWxlcy91c2UtY2FsbGJhY2stcmVmL2Rpc3QvZXM1L3VzZVRyYW5zZm9ybVJlZi5qcz8xMDkxIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy51c2VUcmFuc2Zvcm1SZWYgPSB2b2lkIDA7XG52YXIgYXNzaWduUmVmXzEgPSByZXF1aXJlKFwiLi9hc3NpZ25SZWZcIik7XG52YXIgdXNlUmVmXzEgPSByZXF1aXJlKFwiLi91c2VSZWZcIik7XG4vKipcbiAqIENyZWF0ZSBhIF9sZW5zZV8gb24gUmVmLCBtYWtpbmcgaXQgcG9zc2libGUgdG8gdHJhbnNmb3JtIHJlZiB2YWx1ZVxuICogQHBhcmFtIHtSZWFjdFJlZn0gcmVmXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSB0cmFuc2Zvcm1lci4g8J+RiSBSZWYgd291bGQgYmUgX19OT1QgdXBkYXRlZF9fIG9uIGB0cmFuc2Zvcm1lcmAgdXBkYXRlLlxuICogQHJldHVybnMge1JlZk9iamVjdH1cbiAqXG4gKiBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS90aGVLYXNoZXkvdXNlLWNhbGxiYWNrLXJlZiN1c2V0cmFuc2Zvcm1yZWYtdG8tcmVwbGFjZS1yZWFjdHVzZWltcGVyYXRpdmVoYW5kbGVcbiAqIEBleGFtcGxlXG4gKlxuICogY29uc3QgUmVzaXphYmxlV2l0aFJlZiA9IGZvcndhcmRSZWYoKHByb3BzLCByZWYpID0+XG4gKiAgPFJlc2l6YWJsZSB7Li4ucHJvcHN9IHJlZj17dXNlVHJhbnNmb3JtUmVmKHJlZiwgaSA9PiBpID8gaS5yZXNpemFibGUgOiBudWxsKX0vPlxuICogKTtcbiAqL1xuZnVuY3Rpb24gdXNlVHJhbnNmb3JtUmVmKHJlZiwgdHJhbnNmb3JtZXIpIHtcbiAgICByZXR1cm4gKDAsIHVzZVJlZl8xLnVzZUNhbGxiYWNrUmVmKShudWxsLCBmdW5jdGlvbiAodmFsdWUpIHsgcmV0dXJuICgwLCBhc3NpZ25SZWZfMS5hc3NpZ25SZWYpKHJlZiwgdHJhbnNmb3JtZXIodmFsdWUpKTsgfSk7XG59XG5leHBvcnRzLnVzZVRyYW5zZm9ybVJlZiA9IHVzZVRyYW5zZm9ybVJlZjtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/use-callback-ref/dist/es5/useTransformRef.js\n");

/***/ })

};
;